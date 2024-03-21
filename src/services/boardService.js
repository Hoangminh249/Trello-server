import { StatusCodes } from "http-status-codes";
import { cloneDeep } from "lodash";
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

    const resBoard = cloneDeep(board);
    // MongoDb support .equals method using compare ObjectId
    resBoard.columns.forEach((column) => {
      column.cards = resBoard.cards.filter((card) =>
        card.columnId.equals(column._id)
      );
    });

    // compare using toString
    // resBoard.columns.forEach((column) => {
    //   column.cards = resBoard.cards.filter(
    //     (card) => card.columnId.toString() === column._id.toString()
    //   );
    // });

    delete resBoard.cards;

    return resBoard;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const boardService = {
  createNew,
  getDetails,
};
