import { Router } from "express";
import { PostController } from "../controllers";
const postsRouter = Router();
postsRouter.get("/", PostController.index);
postsRouter.post("/", PostController.create);
postsRouter.get("/:post", PostController.show);
postsRouter.put("/:post", PostController.update);
export default postsRouter;
