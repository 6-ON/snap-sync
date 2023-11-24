import { IUser } from "./user";

export interface IPost {
	title: string;
	content: string;
	image: string;
	likes: number;
	creator: IUser;
	tags: string[];
}
