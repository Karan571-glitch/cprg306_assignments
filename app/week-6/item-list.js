"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

 
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <section className="space-y-4">
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Sort by:</span>

        <button
          className={`px-3 py-1 rounded ${
            sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-white border text-gray-800 hover:bg-gray-100"
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>

        <button
          className={`px-3 py-1 rounded ${
            sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-white border text-gray-800 hover:bg-gray-100"
          }`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>

      
      <ul className="space-y-2 p-3 mr-20">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </section>
  );
}
