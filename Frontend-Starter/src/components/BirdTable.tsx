import Bird from "../types";

interface Props {
  birds: Bird[];
  onSelect: (bird: Bird) => void;
  onDelete: (id: string) => void;
  onEdit: (bird: Bird) => void;
}

export default function BirdTable({ birds, onSelect, onDelete, onEdit }: Props) {
  if (!birds || birds.length === 0) {
    return <p>No birds available.</p>;
  }

  return (
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Common Name</th>
          <th className="p-2 border">Scientific Name</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {birds.map(bird => (
          <tr key={bird.id} className="hover:bg-gray-50">
            <td className="p-2 border">{bird.common_name}</td>
            <td className="p-2 border italic">{bird.scientific_name}</td>
            <td className="p-2 border space-x-2">
              <button
                onClick={() => onSelect(bird)}
                className="px-2 py-1 bg-blue-500 text-white rounded"
              >
                View
              </button>
              <button
                onClick={() => onEdit(bird)}
                className="px-2 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(bird.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
