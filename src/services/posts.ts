import { PostDTO } from "src/dto";
import { Post } from "../models";
import { Error } from "mongoose";
import { BadRequest } from "http-errors";
export class PostService {
	static async findAll() {}
	static async create(post: PostDTO) {
		try {
			return await Post.create(post);
		} catch (err) {
			if (err instanceof Error.ValidationError)
				throw new BadRequest(JSON.stringify(err));
			throw err;
		}
	}
	static async delete(post: PostDTO) {
		try {
			return await Post.create(post);
		} catch (err) {
			return err;
		}
	}
}
