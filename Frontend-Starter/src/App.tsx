import { useState } from "react";
import { useBirds } from "./hooks/useBirds";
import BirdTable from "./components/BirdTable";
import BirdModal from "./components/BirdModal";
import Toast from "./components/Toast";
import Bird from "./types";

export default function App() {
  const { birds, loading, deleteBird } = useBirds();
  const [selected, setSelected] = useState<Bird | null>(null);
  const [toast, setToast] = useState("");

  console.log(birds);

  const handleDelete = async (id: string) => {
    await deleteBird(id);
    setToast("Bird deleted successfully");
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Birds Directory</h1>
      {loading ? <p>Loading...</p> : (
        <BirdTable birds={birds} onSelect={setSelected} onDelete={handleDelete} />
      )}
      <BirdModal bird={selected} onClose={() => setSelected(null)} />
      {toast && <Toast message={toast} />}
    </div>
  );
}
