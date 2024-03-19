import express from "express";
import exitHook from "async-exit-hook";
import { env } from "./config/environment";
import { CLOSE_DB, CONNECT_DB } from "./config/mongodb";

const START_SERVER = () => {
  const app = express();

  app.get("/", async (req, res) => {
    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `3. Hello ${env.AUTHOR} server running at http://${env.APP_HOST}:${env.APP_PORT}/`
    );
  });

  exitHook(() => {
    console.log('Server shutting down');
    CLOSE_DB();
    console.log('Shutting down Successfully');
  });
};

(async () => {
  try {
    console.log("1. Connecting to MongoDB Cloud Atlas...");
    await CONNECT_DB();
    console.log("2. Connected to Mongo Successfully!");
    START_SERVER();
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
})();

// console.log("1. Connecting to MongoDB Cloud Atlas...");
// CONNECT_DB()
//   .then(() => console.log("2. Connected to Mongo Successfully!"))
//   .then(() => START_SERVER())
//   .catch((error) => {
//     console.error(error);
//     process.exit(0);
//   });
