import { PostDTO } from "src/dto";
import { Post } from "../models";
import { Error } from "mongoose";
import { BadRequest, NotFound } from "http-errors";

export class PostService {
	static async findAll() {
		// find all posts
		return await Post.find();
	}
	/** @todo  use http-error and mongoose Error.validation error */
	static async create(post: PostDTO) {
		try {
			return await Post.create(post);
		} catch (err) {
			if (err instanceof Error.ValidationError)
				throw new BadRequest(JSON.stringify(err));
			throw err;
		}
	}
	static async update(id: string, updates: PostDTO) {
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
	static async show(id: string) {
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
	static async delete(id: string) {
		const post = await Post.findByIdAndDelete(id);
		if (!post)
			throw new NotFound(JSON.stringify("cannot delete unfound Post "));
	}
	static async like(id: string) {
		const post = Post.findOneAndUpdate(
			{ _id: id },
			{ $inc: { likes: 1 } },
			{ new: true },
		);
		if (!post) throw new NotFound(JSON.stringify("Post not found"));
		return post;
	}
}
