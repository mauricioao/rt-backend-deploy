import express from "express";
import { createUser, validateCredentials } from "../services/user-service";
import jwt from "jsonwebtoken";
import { validationHandler } from "../middlewares/validation";
import { userSchema } from "../models/user";

const jwtSecret = "cohort-13";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validationHandler(userSchema),
  async (req, res, next) => {
    try {
      const newUser = await createUser(req.body);
      res
        .status(201)
        .json({ ok: true, message: "User created", data: newUser });
    } catch (error) {
      next(error);
    }
  }
);

authRouter.post("/login", async (req, res, next) => {
  try {
    const user = await validateCredentials(req.body);
    const payload = { userId: user.id, userRole: user.role };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "3m" });
    res.json({ ok: true, message: "Successful login", data: { token } });
  } catch (error) {
    next(error);
  }
});


export default authRouter;