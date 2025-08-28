import Bird from "../types";

interface Props {
  bird: Bird | null;
  onClose: () => void;
}

export default function BirdModal({ bird, onClose }: Props) {
  if (!bird) return null;

  console.log(bird);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold">{bird.common_name}</h2>
        <p className="italic">{bird.scientific_name}</p>
        <p className="mt-2">{bird.description}</p>
        <p className="mt-2"><b>Habitat:</b> {bird.habitat.join(", ")}</p>
        <p className="mt-2"><b>Size:</b> {bird.appearance.size}</p>
        <p><b>Colors:</b> {bird.appearance.color.join(", ")}</p>
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {bird.photos.map((url, idx) => (
            <img key={idx} src={url} alt={bird.common_name} className="w-24 h-24 object-cover rounded"/>
          ))}
        </div>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded">Close</button>
      </div>
    </div>
  );
}
