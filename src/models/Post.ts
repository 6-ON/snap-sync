import { model } from "mongoose";
import { IPostModel } from "./types";
import { postSchema } from "./schema";

export const Post = model<IPostModel>("Post", postSchema);
