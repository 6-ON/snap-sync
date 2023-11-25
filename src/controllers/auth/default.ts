import { Request, Response } from "express";
import { DefaultAuthService } from "@/services/auth";

export class DefaultAuthController {
	static async login(req: Request, res: Response) {
		return res.status(200).json(await DefaultAuthService.login(req.body));
	}

	static async register(req: Request, res: Response) {
		return res.status(200).json(await DefaultAuthService.register(req.body));
	}
	static async refresh(req: Request, res: Response) {
		return res.status(200).json(await DefaultAuthService.refresh(req.decoded!));
	}
}
