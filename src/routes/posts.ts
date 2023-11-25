import { Router } from "express";
import { PostController } from "@/controllers";
import { requirePostOwner, verifyJwt } from "@/middlewares";
import { postParam } from "./params/post";

const postsRouter = Router();

postsRouter.param("post", postParam);
postsRouter.get("/", PostController.index);
postsRouter.get("/:post", PostController.show);

postsRouter.use(verifyJwt);
postsRouter.post("/", PostController.create);

postsRouter
	.route("/:post")
	.all(requirePostOwner)
	.get(PostController.show)
	.put(PostController.update)
	.delete(PostController.delete);

postsRouter.patch("/:post/like", PostController.like);
postsRouter.patch("/:post/unlike", PostController.unlike);

export default postsRouter;
