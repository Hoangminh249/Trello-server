import { cardModel } from "../models/CardModel";

const createNew = async (reqBody) => {
  try {
    const newCard = {
      ...reqBody,
    };

    const createdCard = await cardModel.createNew(newCard);

    const getNewCard = await cardModel.findOneById(
      createdCard.insertedId
    );

    return getNewCard;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const cardService = {
  createNew,
};
