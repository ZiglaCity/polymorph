import { useState } from "react";
import Bird from "../types";
import { updateBird } from "../api";
import toast from "react-hot-toast";

interface Props {
  bird: Bird;
  onClose: () => void;
  onUpdated: () => void;
}

export default function UpdateBirdModal({ bird, onClose, onUpdated }: Props) {
  const [form, setForm] = useState<Bird>(bird);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await updateBird(bird.id, form);
      toast.success("Bird updated!");
      onUpdated();
      onClose();
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg w-[500px]">
        <h2 className="text-2xl font-bold">Update Bird</h2>
        <input
          type="text"
          name="commonName"
          value={form.common_name}
          onChange={handleChange}
          className="border w-full p-2 my-2"
        />
        <input
          type="text"
          name="scientificName"
          value={form.scientific_name}
          onChange={handleChange}
          className="border w-full p-2 my-2"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border w-full p-2 my-2"
        />
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleSubmit}
            className="px-3 py-2 bg-green-600 text-white rounded"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-3 py-2 bg-gray-600 text-white rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
