import { Router } from "express";
import { PostController } from "../controllers";
const postsRouter = Router();
postsRouter.get("/", PostController.index);
export default postsRouter;
