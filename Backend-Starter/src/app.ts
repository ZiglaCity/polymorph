import express from "express";
import birdRoutes from "./routes/bird";
import cors from "cors";

const app = express();
// const corsOptions = {
//   origin: "*",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// };

// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

app.use("/bird", birdRoutes);

app.get("/", (req, res) => {
  res.send("Bird API Started...");
});

export default app;
