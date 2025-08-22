import config from "./config";
import app from "./app";
import mongoose from "mongoose";

const port = config.server.port();
const mongoDBURI = "config.mongoDb.uri()";

const server = {
  start: async () => {
    // await mongoose.connect(mongoDBURI);
    app.listen(port, () => {
      console.log(`Server Running  on Port ${port}`);
    });
  },
};

export default server;
