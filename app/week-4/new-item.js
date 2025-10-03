"use client";

import { useState } from "react";

export default function NewItem() {
  
  const [Quantity, setQuantity] = useState(1);


  function Increment() {
    setQuantity((num) => Math.min(num + 1, 20));
  }

  
  function decrement() {
    setQuantity((num) => Math.max(num - 1, 1));
  }

  return (
  <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg">
    <p className="text-lg mb-2">
      Quantity: <span className="text-blue-500">{Quantity}</span>
    </p>

    <div className="flex space-x-4">
      <button
        onClick={decrement}
        disabled={Quantity === 1}
        className={`px-4 py-2 rounded ${
          Quantity === 1
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-gray-500 hover:bg-gray-600 text-white"
        }`}
      >
        -
      </button>

      <button
        onClick={Increment}
        disabled={Quantity === 20}
        className={`px-4 py-2 rounded font-bold ${
          Quantity === 20
            ? "bg-green-500 text-white cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-blue-700"
        }`}
      >
        +
      </button>
    </div>

    
    <p className="mt-2 text-xs text-gray-600">Allowed range: 1–20</p>
  </div>
);


}

