import { Response, NextFunction, Request } from "express";
import { Unauthorized } from "http-errors";
import { verify } from "../utils";
import { BadRequest } from "http-errors";
import { UserService } from "@/services";

export const verifyJwt = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (!req.headers.authorization) throw new Unauthorized();
	if (!req.headers.authorization.startsWith("Bearer ")) throw new BadRequest();
	const token = req.headers.authorization.split(" ")[1];
	if (!token) throw new BadRequest();
	const decoded = await verify(token, process.env.JWT_SECRET!);
	if (!decoded) throw new Unauthorized();
	req.decoded = decoded;
	req.user = await UserService.findOne(decoded.sub!);
	next();
};
