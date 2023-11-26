import { Request, Response } from "express";
import { DefaultAuthService } from "@/services/auth";
import { DefaultLoginDTO, DefaultRegisterDTO } from "@/dto/auth";
import { validateOrReject } from "class-validator";

export class DefaultAuthController {
	static async login(req: Request, res: Response) {
		const payload = new DefaultLoginDTO();
		Object.assign(payload, req.body);
		await validateOrReject(payload);
		return res.status(200).json(await DefaultAuthService.login(req.body));
	}

	static async register(req: Request, res: Response) {
		const payload = new DefaultRegisterDTO();
		Object.assign(payload, req.body);
		await validateOrReject(payload, {
			validationError: { target: false, value: false },
		});
		return res.status(200).json(await DefaultAuthService.register(req.body));
	}
	static async refresh(req: Request, res: Response) {
		return res.status(200).json(await DefaultAuthService.refresh(req.decoded!));
	}
}
