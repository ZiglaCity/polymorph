import { useState } from "react";
import { useBirds } from "./hooks/useBirds";
import BirdTable from "./components/BirdTable";
import BirdModal from "./components/BirdModal";
import UpdateBirdModal from "./components/UpdateBirdModal";
import Toast from "./components/Toast";
import Bird from "./types";

export default function App() {
  const { birds, setBirds, loading, deleteBird} = useBirds();
  const [selected, setSelected] = useState<Bird | null>(null);
  const [toast, setToast] = useState("");
  const [editing, setEditing] = useState<Bird | null>(null);

  console.log(birds);

  const handleDelete = async (id: string) => {
    await deleteBird(id);
    setToast("Bird deleted successfully");
    setTimeout(() => setToast(""), 2000);
  };

  const handleUpdate = async (updated: Bird, success: boolean) => {
    if (success == true) {
      console.log("Updating bird with data...: ", updated);
      setBirds(prev => prev.map(b => (b.id === updated.id ? updated : b)));
      setToast("Bird updated successfully");
      setTimeout(() => setToast(""), 3000);
      return
    }
    setToast("Failed to update bird");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Birds</h1>
      {loading ? <p>Loading...</p> : (
        <>
          <BirdTable birds={birds} onSelect={setSelected} onDelete={handleDelete} onEdit={setEditing} />
          {editing && (
        <UpdateBirdModal
          bird={editing}
          onClose={() => setEditing(null)}
          onSaved={handleUpdate}
        />
      )}
        </>
      )}
      <BirdModal bird={selected} onClose={() => setSelected(null)} />
      {toast && <Toast message={toast} />}
    </div>
  );
}
