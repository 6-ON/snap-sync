import { Router } from "express";
import { DefaultAuthController } from "@/controllers/auth";
import { verifyJwt } from "@/middlewares";

const router = Router();

router.post("/login", DefaultAuthController.login);
router.post("/register", DefaultAuthController.register);
router.get("/me", verifyJwt, DefaultAuthController.me);
router.get("/refresh", verifyJwt, DefaultAuthController.refresh);
export default router;
