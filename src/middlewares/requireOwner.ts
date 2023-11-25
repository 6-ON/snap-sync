import { Response, NextFunction, Request } from "express";
import { Forbidden } from "http-errors";
export const requirePostOwner = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (req.user && req.user._id?.toString() === req.post.creator._id?.toString())
		return next();
	throw new Forbidden("You are not the owner of this post");
	// next()
};
