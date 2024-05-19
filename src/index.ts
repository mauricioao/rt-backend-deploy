import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routers/auth-router";
import errorHandler from "./middlewares/error";


const app = express();
const port = process.env["PORT"] || 5500;

app.use(cookieParser());
app.use(express.json());
 
app.use(authRouter);

app.use(errorHandler);
 
app.listen(port, () => {
  console.log(`Listening in the port ${port}`);
});