"use client";

import { useState } from "react";
import { BiX, BiSolidOffer } from "react-icons/bi";

export default function TopBar() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-primary to-indigo-500 text-white py-2.5 px-4 text-center text-sm font-medium relative z-[60] shadow-sm">
            <div className="container mx-auto flex justify-center items-center gap-2">
                <BiSolidOffer className="text-lg animate-pulse text-yellow-300" />
                <p className="tracking-wide">
                    Special Offer: Get <span className="font-bold text-yellow-300">10% OFF</span> on First order only!
                    Use code: <span className="font-bold bg-white/20 px-2 py-0.5 rounded ml-1 border border-white/30 backdrop-blur-sm">SAVE10</span>
                </p>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-colors"
                    aria-label="Close offer"
                >
                    <BiX className="text-lg" />
                </button>
            </div>
        </div>
    );
}
