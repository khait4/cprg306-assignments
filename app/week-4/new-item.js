"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    
    const increment = () => {
        if (quantity < 20) {
            setQuantity (quantity + 1);
        }
        
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity (quantity - 1);
        }
    }

    return (
        <div className="flex items justify-between bg-white p-2 rounded-3xl">
            <div><p className="bg-white p-7 rounded-3xl w-32 font-bold text-black text-center">{quantity}</p></div>
            <button className="bg-blue-500 p-7 rounded-3xl w-32 hover:bg-blue-300 font-bold text-white disabled:cursor-not-allowed" onClick={decrement} disabled={quantity === 1}>-</button>
            <button className="bg-blue-500 p-7 rounded-3xl w-32 hover:bg-blue-300 font-bold text-white disabled:cursor-not-allowed" onClick={increment} disabled={quantity === 20}>+</button>
        </div>

    );

}