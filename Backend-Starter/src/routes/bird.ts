import { Router } from "express";
import {
  fetchAllBirds,
  updateBird,
  addNewBird,
  fetchWithId,
  deleteBird,
} from "../controllers/bird";

const router = Router();

router.get("/test", (req, res) => {
  res.send("Testing bird route...");
});

router.get("/", fetchAllBirds);

router.get("/:id", fetchWithId);

router.post("/", addNewBird);

router.put("/:id", updateBird);

router.delete("/:id", deleteBird);

export default router;
