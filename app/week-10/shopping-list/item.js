export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="border border-gray-600 p-2 rounded bg-black text-white hover:bg-gray-900 cursor-pointer transition"
    >
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}

