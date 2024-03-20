import Joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError";

const createNew = async (req, res, next) => {
  const conrrectCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(256).trim().strict(),
  });

  try {
    // abortEarly : show multi Error
    await conrrectCondition.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (error) {
    next(
      new ApiError(StatusCodes.UNPROCESSABLE_ENTITY),
      new Error(error).message
    );
  }
};

export const boardValidation = {
  createNew,
};