import bcrypt from "bcrypt";
import { User, UserParams } from "../models/user";
import * as userDB from "../data/user-data";
import { ApiError } from "../middlewares/error";

export async function createUser(data: UserParams): Promise<User> {
  const { email, password, role } = data;

  const user = await userDB.getUserByEmail(email);

  if (user) {
    throw new ApiError("The mail is already registered", 400);
  }

  const costFactor = 10;
  const hashedPassword = await bcrypt.hash(password, costFactor); // $2b$10$MyQ.FEMQaufYmDrtS36Lkub9S8WGCMXjtpE/o7G754xUYwbgOjkmi
  const newUser = await userDB.createUser(email, hashedPassword, role);
  return newUser;
}

export async function validateCredentials(
  credentials: UserParams
): Promise<User> {
  const { email, password } = credentials;

  const user = await userDB.getUserByEmail(email);
  console.log(user);
  

  const isValid = await bcrypt.compare(password, user?.password || "");

  if (!user || !isValid) {
    throw new ApiError("Incorrect credentials", 400);
  }

  return user;
}