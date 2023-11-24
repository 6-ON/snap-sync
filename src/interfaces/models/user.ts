import { IPost } from "./post";

export interface IUser {
	email: string;
	name: string;
	image: string;
	password: string;
	posts?: IPost[];
}
