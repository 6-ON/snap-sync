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
	// --- Log Errors ---
	logger.error(err.name);
	logger.error(err.stack);
	// --- Set Headers ---
	res.setHeader("Content-Type", "application/json");
	// --- Handle Errors ---
	if (err instanceof HttpError) {
		// check if it is a stringified json
		const isJson = err.message.startsWith("{");
		return res
			.status(err.statusCode)
			.send(isJson ? err.message : JSON.stringify(err));
	}

	return res.status(500).send(err.message);
}
