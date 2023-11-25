import { IPost } from "@/interfaces/models";
import { Document, ObjectId } from "mongoose";
import { IUserModel } from "./user";

export interface IPostModel extends Document<ObjectId>, IPost {
	creator: IUserModel;
}
