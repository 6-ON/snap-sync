import { PostDTO } from "../dto";
import { Post } from "../models";
import { Error, ObjectId } from "mongoose";
import { BadRequest, NotFound } from "http-errors";
import { IPostModel, IUserModel } from "@/models/types";

export class PostService {
	static async findAll() {
		// find all posts
		return await Post.find();
	}
	static async create(post: PostDTO, creator: ObjectId) {
		try {
			return await Post.create({ ...post, creator });
		} catch (err) {
			if (err instanceof Error.ValidationError)
				throw new BadRequest(JSON.stringify(err));
			throw err;
		}
	}

	static async updateById(id: string, updates: Partial<PostDTO>) {
		try {
			const post = await Post.findByIdAndUpdate(id, updates, { new: true });
			if (!post) throw new NotFound("Post not found");
			return post;
		} catch (err) {
			if (err instanceof Error.CastError) {
				throw new BadRequest("Invalid id");
			}
			throw err;
		}
	}
	static async update(post: IPostModel, updates: Partial<PostDTO>) {
		return await post.updateOne({ $set: updates });
	}
	static async one(id: string) {
		try {
			const post = await Post.findById(id);
			if (!post) throw new NotFound("Post not found");
			return post;
		} catch (err) {
			if (err instanceof Error.CastError) {
				throw new BadRequest("Invalid id");
			}
			throw err;
		}
	}
	static async deleteById(id: string) {
		const post = await Post.findByIdAndDelete(id);
		if (!post)
			throw new NotFound(JSON.stringify("cannot delete unfound Post "));
	}
	static async delete(post: IPostModel) {
		return await post.deleteOne();
	}
	static async like(post: IPostModel, user: IUserModel) {
		post.likes.addToSet(user._id);
		await post.save();
		return post.likes;
	}
	static async unlike(post: IPostModel, user: IUserModel) {
		post.likes.pull(user._id);
		await post.save();
		return post.likes;
	}
}
