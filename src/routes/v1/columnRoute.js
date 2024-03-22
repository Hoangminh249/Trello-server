import express from "express";
import { StatusCodes } from "http-status-codes";
import { columnController } from "../../controllers/columnController";
import { columnValidation } from "../../validations/columnValidation";

const Router = express();
Router.route("/").post(columnValidation.createNew, columnController.createNew);

export const columnRoute = Router;
