"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    const itemWithId = { ...newItem, id: Math.random().toString(36).substr(2, 9) };
    setItems((prev) => [...prev, itemWithId]);
  }

  function handleItemSelect(item) {
    const cleaned = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim()
      .toLowerCase();
    setSelectedItemName(cleaned);
  }

  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Shopping List</h1>

      {/* Left: NewItem + ItemList | Right: MealIdeas */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column */}
        <div className="flex-1 space-y-6">
          <div className="flex justify-start">
            <NewItem onAddItem={handleAddItem} />
          </div>
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right column */}
        <div className="w-full md:w-auto">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
