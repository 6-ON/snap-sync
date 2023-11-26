import { IsBase64, IsNotEmpty, IsString } from "class-validator";

export class PostDTO {
	@IsNotEmpty()
	@IsString()
	title: string;

	@IsNotEmpty()
	@IsString()
	content: string;

	@IsBase64()
	@IsNotEmpty()
	image: string;

	@IsNotEmpty()
	@IsString({ each: true })
	tags: string[];
}
