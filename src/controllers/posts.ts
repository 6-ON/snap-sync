import { Request, Response } from "express";
import { PostService } from "@/services";
import { PostDTO } from "@/dto";
import { validateOrReject } from "class-validator";

export class PostController {
	static async index(req: Request, res: Response) {
		return res.status(200).json(await PostService.findAll());
	}
	static async show(req: Request, res: Response) {
		return res.status(200).json(req.post);
	}
	static async update(req: Request, res: Response) {
		const payload = new PostDTO();
		Object.assign(payload, req.body);
		// return res.status(200).json(payload)
		await validateOrReject(payload, {
			skipMissingProperties: true,
			whitelist: true,
			forbidNonWhitelisted: true,
			validationError: { target: false, value: false },
		});
		return res.status(200).json(await PostService.update(req.post, payload));
	}

	static async create(req: Request, res: Response) {
		const payload = new PostDTO();
		Object.assign(payload, req.body);
		await validateOrReject(payload, {
			whitelist: true,
			forbidNonWhitelisted: true,
			validationError: { target: false, value: false },
		});
		return res
			.status(201)
			.json(await PostService.create(payload, req.user._id!));
	}
	static async delete(req: Request, res: Response) {
		return res.status(200).json(await PostService.delete(req.post));
	}
	static async like(req: Request, res: Response) {
		return res.status(200).json(await PostService.like(req.post, req.user));
	}
	static async unlike(req: Request, res: Response) {
		return res.status(200).json(await PostService.unlike(req.post, req.user));
	}
}
