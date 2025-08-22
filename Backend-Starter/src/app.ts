import express from "express";
import birdRoutes from "./routes/bird";

const app = express();

app.use(express.json());

app.use("/bird", birdRoutes);

app.get("/", (req, res) => {
  res.send("Bird API Started...");
});

export default app;
