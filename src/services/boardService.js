import { StatusCodes } from "http-status-codes";
import ApiError from "../../build/src/utils/ApiError";
import { boardModel } from "../models/boardModel";
import { slugify } from "../utils/formatters";

const createNew = async (reqBody) => {
  const { title } = reqBody;
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(title),
    };

    const createdBoard = await boardModel.createNew(newBoard);

    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId);

    return getNewBoard;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId);
    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Board not found");
    }

    return board;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const boardService = {
  createNew,
  getDetails,
};
