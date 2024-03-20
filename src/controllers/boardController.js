import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError";

const createNew = (req, res, next) => {
  try {
    res
      .status(StatusCodes.CREATED)
      .json({ message: "API post from controller" });
  } catch (error) {
    next(error);
  }
};

export const boradController = {
  createNew,
};
