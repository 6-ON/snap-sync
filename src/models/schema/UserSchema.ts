import { Schema, Types } from "mongoose";
import { IUserModel } from "../types";
import { hash } from "argon2";

export const userSchema = new Schema<IUserModel>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		image: { type: String, default: "" },
		password: { type: String, required: true },
		posts: [{ type: Types.ObjectId, ref: "Post" }],
	},
	{ timestamps: true },
);

userSchema.pre("save", async function (next) {
	// hash password
	if (this.isModified("password")) this.password = await hash(this.password);
	next();
});
