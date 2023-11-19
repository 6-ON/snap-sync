import { Router, json } from "express";
import cors from "cors";
import postsRouter from "./posts";

const router = Router();
router.use(json({ limit: 1024 * 1024 * 10, type: "application/json" }));
router.use(cors({ origin: "http://localhost:3000" }));
router.use("/posts", postsRouter);

export default router;
