import express from "express";
import { StatusCodes } from "http-status-codes";

const Router = express();

Router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "API get" });
  })

  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({ message: "API post" });
  });

export const boardRoutes = Router;
