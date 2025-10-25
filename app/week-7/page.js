"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
 
  const [items, setItems] = useState(itemsData);

 
  function handleAddItem(newItem) {
    const itemWithId = { ...newItem, id: Math.random().toString(36).substr(2, 9) };
    setItems((prevItems) => [...prevItems, itemWithId]);
  }

  return (
    <main className="p-4 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800">Shopping List</h1>

    
      <div className="flex justify-start">
        <NewItem onAddItem={handleAddItem} />
      </div>

      <ItemList items={items} />
    </main>
  );
}
