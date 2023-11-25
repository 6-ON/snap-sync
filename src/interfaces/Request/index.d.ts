import { IPostModel, IUserModel } from "@/models/types";
import { JwtPayload } from "jsonwebtoken";
export {};
declare global {
	namespace Express {
		export interface Request {
			decoded: JwtPayload;
			user: IUserModel;
			post: IPostModel;
		}
		export interface TypedRequest<T extends Express> extends Request {
			body: T;
		}
	}
}
