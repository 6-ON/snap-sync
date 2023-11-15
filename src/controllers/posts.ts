import { Request, Response } from "express";
import { PostDTO } from "../dto";
import { PostService } from "../services";

type PostRequest = Request<unknown, unknown, PostDTO>;

export class PostController {
	static async index(req: Request, res: Response) {
		return res.status(200).json(await PostService.findAll());
	}
	static async create(req: PostRequest, res: Response) {
		return res.status(201).json(await PostService.create(req.body));
	}
}
