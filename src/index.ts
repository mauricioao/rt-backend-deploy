import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routers/auth-router";
import errorHandler from "./middlewares/error";
import cors from "cors";

const app = express();
const port = process.env["PORT"] || 5500;

const corsOptions = {
  origin: process.env["CLIENT_ORIGIN"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
 
app.use(authRouter);

app.use(errorHandler);
 
app.listen(port, () => {
  console.log(`Listening in the port ${port}`);
});