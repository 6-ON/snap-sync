import { model } from "mongoose";
import { IUserModel } from "./types";
import { userSchema } from "./schema";

export const User = model<IUserModel>("User", userSchema);
