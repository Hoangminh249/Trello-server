import { MongoClient, ServerApiVersion } from "mongodb";
import { env } from "./environment";

let trelloDatabaseInstance = null;

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect database
export const CONNECT_DB = async () => {
  //Connect mongo Atlas
  await mongoClientInstance.connect();

  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME);
};

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw Error("Must connect to database");
  return trelloDatabaseInstance;
};

export const CLOSE_DB = async () => {
  await mongoClientInstance.close();
};
