import { PostDTO } from "src/dto";

export class PostService {
	static async findAll() {
		return [
			{
				content: "Hello World",
				id: 1,
				title: "Hello",
				image: "https://picsum.photos/200/300",
				likes: 0,
				tags: ["hello", "world"],
			},
		];
	}
	async delete(id: string) {
		throw new Error("Function not implemented.");
	}
	findAll?: (() => Promise<PostDTO[]>) | undefined;
}
