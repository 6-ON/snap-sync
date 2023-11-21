import { Request, Response } from "express";
import { PostDTO } from "../dto";
import { PostService } from "../services";

type PostRequest = Request<unknown, unknown, PostDTO>;

export class PostController {
	static async index(req: Request, res: Response) {
		return res.status(200).json(await PostService.findAll());
	}
	static async show(req: Request, res: Response) {
		return res.status(200).json(await PostService.show(req.params.post));
	}
	static async update(req: Request, res: Response) {
		return res
			.status(200)
			.json(await PostService.update(req.params.post, req.body));
	}

	static async create(req: PostRequest, res: Response) {
		return res.status(201).json(await PostService.create(req.body));
	}
	static async delete(req: Request, res: Response) {
		return res.status(200).json(await PostService.delete(req.params.post));
	}
	static async like(req: Request, res: Response) {
		return res.status(200).json(await PostService.like(req.params.post));
	}
}
