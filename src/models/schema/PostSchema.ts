import { Schema, Types } from "mongoose";
import { IPostModel } from "../types";

export const postSchema = new Schema<IPostModel>(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		image: { type: String, required: true },
		likes: { type: [Types.ObjectId], required: true, default: [] },
		tags: { type: [String], required: true },
		creator: { type: Types.ObjectId, required: true, ref: "User" },
	},
	{
		timestamps: true,
		id: false,
		toJSON: { virtuals: true, versionKey: false },
	},
);
postSchema.virtual("likesCount").get(function (this: IPostModel) {
	return this.likes.length;
});

postSchema.pre("find", function (next) {
	this.populate("creator", ["name", "email", "image"]);
	next();
});
postSchema.pre("findOne", function (next) {
	this.populate("creator", ["name", "email", "image"]);
	next();
});
