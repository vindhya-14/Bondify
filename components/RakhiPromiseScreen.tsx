
import React, { useState } from 'react';

interface RakhiPromiseScreenProps {
  onRestart: () => void;
}

const RakhiPromiseScreen: React.FC<RakhiPromiseScreenProps> = ({ onRestart }) => {
  const [promise, setPromise] = useState('');

  const handleShare = () => {
    const text = `My Rakhi Promise: "${promise}" Happy Raksha Bandhan! ❤️`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-yellow-200 w-full max-w-md mx-auto space-y-6 text-center">
      <h2 className="font-display text-3xl text-red-500">A Rakhi Promise</h2>
      <p className="text-amber-700">Write a short message or promise to your sibling. It will instantly appear on the card below.</p>
      
      <textarea
        value={promise}
        onChange={(e) => setPromise(e.target.value)}
        placeholder="e.g., I promise to never spoil the latest episode for you..."
        className="w-full p-3 border border-yellow-300 rounded-md focus:ring-2 focus:ring-amber-400 transition"
        rows={4}
      />

      {/* Rakhi Card */}
      <div id="rakhi-card" className="bg-gradient-to-br from-yellow-100 to-red-200 p-6 rounded-lg shadow-inner relative overflow-hidden">
        <div className="absolute top-2 right-2 text-3xl">🪔</div>
        <h3 className="font-display text-2xl text-red-600">Happy Raksha Bandhan!</h3>
        <div className="my-4 h-px bg-red-300"></div>
        <p className="text-amber-800 min-h-[60px] italic">
            {promise || "Your wonderful promise will appear here..."}
        </p>
        <div className="my-4 h-px bg-red-300"></div>
        <p className="font-bold text-red-500">With Love ❤️</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button onClick={handleShare} disabled={!promise} className="flex-1 bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 disabled:bg-gray-400 transition">
          Share on WhatsApp
        </button>
        <button onClick={onRestart} className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-300 transition">
          Start Over
        </button>
      </div>
    </div>
  );
};

export default RakhiPromiseScreen;
