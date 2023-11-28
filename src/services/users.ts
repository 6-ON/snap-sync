import { User } from "../models";
import { NotFound } from "http-errors";
export class UserService {
	static async findById(id: string) {
		const user = await User.findById(id).select(["-password", "-posts"]);
		if (!user) throw new NotFound("User not found");
		return user;
	}

	static async findAll() {
		try {
			const users = await User.find();
			return users;
		} catch (error) {
			throw new Error("Failed to find users");
		}
	}
}
