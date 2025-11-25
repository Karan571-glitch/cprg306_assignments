"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";

import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function ShoppingListPage() {
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Load items from Firestore
  const loadItems = async () => {
    if (!user) return;
    const data = await getItems(user.uid);
    setItems(data);
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  // Add new item to Firestore
  const handleAddItem = async (newItem) => {
    const item = {
      name: newItem.name,
      quantity: newItem.quantity,
      category: newItem.category,
    };

    const id = await addItem(user.uid, item);

    setItems((prev) => [...prev, { id, ...item }]);
  };

  // Meal ideas selection
  const handleItemSelect = (item) => {
    const cleaned = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim()
      .toLowerCase();

    setSelectedItemName(cleaned);
  };

  if (!user) return <p className="p-4">Please login first.</p>;

  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Shopping List
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT (NewItem + ItemList) */}
        <div className="flex-1 space-y-6">
          <div className="flex justify-start">
            <NewItem onAddItem={handleAddItem} />
          </div>

          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* RIGHT (MealIdeas) */}
        <div className="w-full md:w-auto">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

