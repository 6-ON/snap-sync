import { PostService } from "@/services";
import { NextFunction, Request, Response } from "express";

export const postParam = async (
	req: Request,
	res: Response,
	next: NextFunction,
	id: string,
) => {
	req.post = await PostService.one(id);
	next();
};
