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
    console.log(getNewBoard);

    return getNewBoard;
  } catch (error) {
    throw error;
  }
};

export const boardService = {
  createNew,
};
