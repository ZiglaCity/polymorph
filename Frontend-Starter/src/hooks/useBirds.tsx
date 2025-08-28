import { useState, useEffect } from "react";
import Bird from "../types";

const BASE_URL="http://localhost:4000";
// const BASE_URL = "https://polymorph-8y5m.onrender.com";

export function useBirds() {
  const [birds, setBirds] = useState<Bird[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBirds = async () => {
    setLoading(true);
    const res = await fetch(`${BASE_URL}/bird`);
    const data = await res.json();
    console.log(data);
    setBirds(data.data || []);
    setLoading(false);
  };

  const deleteBird = async (id: string) => {
    await fetch(`${BASE_URL}/bird/${id}`, { method: "DELETE" });
    setBirds(birds.filter(b => b.id !== id));
  };

  const updateBird = async (id: string, updated: Bird) => {
    await fetch(`${BASE_URL}/bird/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    fetchBirds();
  };

  useEffect(() => {
    fetchBirds();
  }, []);

  return { birds, loading, deleteBird, updateBird, fetchBirds };
}
