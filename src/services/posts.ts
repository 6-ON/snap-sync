// import { PostDTO } from "src/dto";
// import { Schema, model} from 'mongoose';

import { PostDTO } from "src/dto";
import { Post } from "../models";

export class PostService {
	static async findAll() {}
	static async create(post: PostDTO) {
		try {
			return await Post.create(post);
		} catch (err) {
			return err;
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
