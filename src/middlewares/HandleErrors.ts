import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { logger } from "../utils";

export function handleErrors(
	err: Error,
	req: Request,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction,
) {
	logger.error(err.name, err.stack);
	// --- Set Headers ---
	res.setHeader("Content-Type", "application/json");
	// --- Handle Errors ---
	if (err instanceof HttpError) {
		return res.status(err.statusCode).send(err.message);
	}

	return res.status(500).json(JSON.parse(err.message));
}
