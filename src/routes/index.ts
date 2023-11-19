import { Router, json } from "express";
import cors from "cors";
import postsRouter from "./posts";

const router = Router();
router.use(json());
router.use(cors({ origin: "http://localhost:3000" }));
router.use("/posts", postsRouter);

export default router;
