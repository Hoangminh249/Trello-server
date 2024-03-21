import express from "express";
import { StatusCodes } from "http-status-codes";
import { boradController } from "../../controllers/boardController";
import { boardValidation } from "../../validations/boardValidation";

const Router = express();
Router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "API get" });
  })
  .post(boardValidation.createNew, boradController.createNew);

Router.route("/:id")
  .get(boradController.getDetails)

export const boardRoute = Router;
