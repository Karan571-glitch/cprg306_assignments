"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();
    return data.meals || [];
  } catch (err) {
    console.error("Error fetching meal ideas:", err);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) {
      setMeals([]);
      return;
    }
    fetchMealIdeas(ingredient).then(setMeals);
  }, [ingredient]);

  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg border border-gray-600 w-80">
      <h2 className="text-xl font-semibold mb-4">
        {ingredient ? `Meal ideas for “${ingredient}”` : "Meal ideas"}
      </h2>

      {!ingredient && (
        <p className="text-gray-400">Select an item to see ideas.</p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-gray-400">No meals found for this ingredient.</p>
      )}

      <ul className="space-y-2">
        {meals.map((m) => (
          <li
            key={m.idMeal}
            className="border border-gray-500 p-2 rounded bg-black text-white hover:bg-gray-900"
          >
            {m.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
