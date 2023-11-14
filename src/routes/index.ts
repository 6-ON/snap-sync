import { Router, json } from "express";
import postsRouter from "./posts";

const router = Router();
router.use(json());
router.use("/posts", postsRouter);

export default router;
