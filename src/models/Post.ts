import { Schema, model } from "mongoose";
import { PostDTO } from "src/dto";
export const postSchema = new Schema<PostDTO>({
	title: { type: String, required: true },
	content: { type: String, required: true },
	image: { type: String, required: true },
	likes: { type: Number, required: true },
	tags: { type: [String], required: true },
});

export const Post = model<PostDTO>("Post", postSchema);
