import { Router } from "express";
import { PostController } from "../controllers";
const postsRouter = Router();
postsRouter.get("/", PostController.index);
postsRouter.post("/", PostController.create);
export default postsRouter;
