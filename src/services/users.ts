import { User } from "../models";

export class UserService {
	static async findOne(id: string) {
		// eslint-disable-next-line no-useless-catch
		try {
			const user = await User.findById(id);
			if (!user) throw new Error("User not found");
			return user;
		} catch (error) {
			throw error;
		}
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
