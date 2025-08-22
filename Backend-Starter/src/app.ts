import express from "express";
import birdRoutes from "./routes/bird";

const app = express();

app.use(express.json());

app.use("/bird", birdRoutes);

export default app;
