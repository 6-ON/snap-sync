import express, { Application } from "express";
import "./config";
import router from "./routes";
import { handleErrors } from "./middlewares";
const app: Application = express();
app.use(router);
app.use(handleErrors);
export default app;
