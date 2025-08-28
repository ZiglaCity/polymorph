import { useState } from "react";
import Bird from "../types";
import { updateBird } from "../api";

interface Props {
  bird: Bird;
  onClose: () => void;
  onSaved: (updated: Bird) => void;
}

export default function UpdateModal({ bird, onClose, onSaved }: Props) {
  const [commonName, setCommonName] = useState(bird.common_name);
  const [scientificName, setScientificName] = useState(bird.scientific_name);
  const [description, setDescription] = useState(bird.description);
  const [size, setSize] = useState(bird.appearance.size);
  const [habitatCSV, setHabitatCSV] = useState(bird.habitat.join(", "));
  const [colorsCSV, setColorsCSV] = useState(bird.appearance.color.join(", "));
  const [photosCSV, setPhotosCSV] = useState(bird.photos.join(", "));
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const toArray = (csv: string) =>
    csv.split(",").map(s => s.trim()).filter(Boolean);

  const handleSave = async () => {
    try {
      setSaving(true);
      setErr(null);

      const updated: Bird = {
        ...bird,
        common_name: commonName,
        scientific_name: scientificName,
        description,
        habitat: toArray(habitatCSV),
        appearance: {
          size,
          color: toArray(colorsCSV),
        },
        photos: toArray(photosCSV),
      };

      const res = await updateBird(bird.id, updated);

      onSaved(updated);
      onClose();
    } catch (e: any) {
      setErr(e?.message ?? "Failed to update bird");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Edit Bird</h2>

        <label className="block text-sm font-medium">Common name</label>
        <input
          value={commonName}
          onChange={e => setCommonName(e.target.value)}
          className="border w-full p-2 rounded mb-3"
        />

        <label className="block text-sm font-medium">Scientific name</label>
        <input
          value={scientificName}
          onChange={e => setScientificName(e.target.value)}
          className="border w-full p-2 rounded mb-3"
        />

        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="border w-full p-2 rounded mb-3"
          rows={3}
        />

        <label className="block text-sm font-medium">Size</label>
        <input
          value={size}
          onChange={e => setSize(parseInt(e.target.value))}
          className="border w-full p-2 rounded mb-3"
          placeholder="Small | Medium | Large"
        />

        <label className="block text-sm font-medium">Habitat (comma-separated)</label>
        <input
          value={habitatCSV}
          onChange={e => setHabitatCSV(e.target.value)}
          className="border w-full p-2 rounded mb-3"
          placeholder="Forests, Gardens, Parks"
        />

        <label className="block text-sm font-medium">Colors (comma-separated)</label>
        <input
          value={colorsCSV}
          onChange={e => setColorsCSV(e.target.value)}
          className="border w-full p-2 rounded mb-3"
          placeholder="Brown, Orange, White"
        />

        <label className="block text-sm font-medium">Photo URLs (comma-separated)</label>
        <input
          value={photosCSV}
          onChange={e => setPhotosCSV(e.target.value)}
          className="border w-full p-2 rounded mb-3"
          placeholder="https://..., https://..."
        />

        {err && <p className="text-red-600 text-sm mb-2">{err}</p>}

        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200"
            disabled={saving}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-blue-600 text-white"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
