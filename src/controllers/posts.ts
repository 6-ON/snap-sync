import { Request, Response } from "express";
import { PostService } from "@/services";

export class PostController {
	static async index(req: Request, res: Response) {
		return res.status(200).json(await PostService.findAll());
	}
	static async show(req: Request, res: Response) {
		return res.status(200).json(req.post);
	}
	static async update(req: Request, res: Response) {
		return res.status(200).json(await PostService.update(req.post, req.body));
	}

	static async create(req: Request, res: Response) {
		return res
			.status(201)
			.json(await PostService.create(req.body, req.user._id!));
	}
	static async delete(req: Request, res: Response) {
		return res.status(200).json(await PostService.delete(req.post));
	}
	static async like(req: Request, res: Response) {
		return res.status(200).json(await PostService.like(req.post));
	}
}
