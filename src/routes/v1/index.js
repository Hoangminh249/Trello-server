import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardRoute } from "./boardRoute";
import { cardRoute } from "./cardRoute";
import { columnRoute } from "./columnRoute";

const Router = express();

Router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Success" });
});

Router.use("/boards", boardRoute);

Router.use("/columns", columnRoute);

Router.use("/cards", cardRoute);

export const APIs_V1 = Router;
