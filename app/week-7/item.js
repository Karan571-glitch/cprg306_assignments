export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-1 rounded">
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
