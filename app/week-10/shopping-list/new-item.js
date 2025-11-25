"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity((n) => Math.min(n + 1, 20));
  const decrement = () => setQuantity((n) => Math.max(n - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, quantity, category };
    onAddItem(newItem);
    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg w-80"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Item Name:</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <p className="text-lg mb-2">
        Quantity: <span className="text-blue-500">{quantity}</span>
      </p>

      <div className="flex space-x-4 mb-4">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded ${
            quantity === 1
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-600 text-white"
          }`}
        >
          -
        </button>

        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded font-bold ${
            quantity === 20
              ? "bg-green-500 text-white cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-blue-700"
          }`}
        >
          +
        </button>
      </div>

      <p className="mt-1 mb-4 text-xs text-gray-600">Allowed range: 1–20</p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded text-sm font-medium"
      >
        Add Item
      </button>
    </form>
  );
}
