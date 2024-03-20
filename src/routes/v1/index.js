import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardRoute } from "./boardRoute";

const Router = express();

Router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Success" });
});

Router.use("/boards", boardRoute);

export const APIs_V1 = Router;
