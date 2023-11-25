import { Types } from "mongoose";
import { IUser } from "./user";

export interface IPost {
	title: string;
	content: string;
	image: string;
	likes: Types.Array<IUser>;
	creator: IUser;
	tags: string[];
}
