import Bird from "../models/bird";
import supabase from "../supabase";
import { Request, Response } from "express";

export const fetchAllBirds = async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("birds").select("*");
  if (error) {
    console.error("Error fetching birds: ", error);
    return res
      .status(400)
      .json({ success: false, message: "Error fecthing birds: ", error });
  }
  return res.status(200).json({ success: true, data });
};

export const fetchWithId = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { data, error } = await supabase.from("birds").select().eq("id", id);
  if (error) {
    console.error("Error fetching data: ", error);
    return res
      .status(400)
      .json({ success: false, message: "Error fetching data", error });
  }
  return res.status(200).json({ success: true, data });
};

export const addNewBird = async (req: Request, res: Response) => {
  const birdData = req.body;
  const { data, error } = await supabase.from("birds").insert(birdData);
  if (error) {
    console.error("Error adding new bird: ", error);
    return res
      .status(400)
      .json({ success: false, message: "Error adding new bird", error });
  }
  return res.status(200).json({ success: true, data });
};

export const updateBird = async (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;
  const { data, error } = await supabase
    .from("birds")
    .update(body)
    .eq("id", id);
  if (error) {
    console.error("Error updating bird data");
    return res
      .status(400)
      .json({ success: false, message: "Error updating bird data", error });
  }
  return res.status(200).json({ success: true, data });
};

export const deleteBird = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { error } = await supabase.from("birds").delete().eq("id", id);
  if (error) {
    console.error("Error deleting bird: ", error);
    res
      .status(400)
      .json({ success: false, message: "Error deleting bird", error });
  }
  return res
    .status(200)
    .json({ success: true, message: "Bird deleted sucessfully" });
};
