import axios from "axios";
import Bird from "./types";

const BASE_URL = "http://localhost:4000";
// const BASE_URL = "https://polymorph-8y5m.onrender.com/";

export const getBirds = async (): Promise<Bird[]> => {
  const res = await axios.get(`${BASE_URL}/bird`);
  return res.data;
};

export const getBird = async (id: string): Promise<Bird> => {
  const res = await axios.get(`${BASE_URL}/bird/${id}`);
  return res.data;
};

export const createBird = async (bird: Bird) => {
  const res = await axios.post(`${BASE_URL}/bird`, bird);
  return res.data;
};

export const updateBird = async (id: string, bird: Bird) => {
  const res = await axios.put(`${BASE_URL}/bird/${id}`, bird);
  return res.data;
};

export const deleteBird = async (id: string) => {
  const res = await axios.delete(`${BASE_URL}/bird/${id}`);
  return res.data;
};
