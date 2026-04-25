import React, { useState, useEffect } from 'react';
import { Heart, ArrowLeft, Ghost } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import OfferCard from '../components/ui/OfferCard';
import { INITIAL_DEALS } from '../data/dummy';
import { Deal } from '../types';

export default function Saved() {
  const navigate = useNavigate();
  const [savedDeals, setSavedDeals] = useState<Deal[]>([]);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('savedDeals') || '[]');
    const deals = INITIAL_DEALS.filter(d => savedIds.includes(d.id));
    setSavedDeals(deals);
  }, []);

  const toggleSave = (id: string) => {
    const savedIds = JSON.parse(localStorage.getItem('savedDeals') || '[]');
    const nextIds = savedIds.filter((i: string) => i !== id);
    localStorage.setItem('savedDeals', JSON.stringify(nextIds));
    setSavedDeals(prev => prev.filter(d => d.id !== id));
  };

  return (
    <div className="pb-24 bg-slate-50 min-h-screen">
      <header className="sticky top-0 z-50 bg-white px-4 py-6 border-b border-slate-100 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-slate-600">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold font-display">Saved Offers</h1>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {savedDeals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedDeals.map((deal) => (
              <OfferCard 
                key={deal.id} 
                deal={deal} 
                isSaved={true}
                onToggleSave={toggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-sm text-slate-300 mb-6">
              <Heart size={48} />
            </div>
            <h2 className="text-2xl font-bold font-display text-slate-800">No favorite deals yet</h2>
            <p className="text-slate-500 mt-2 mb-8">Tap the heart icon on any deal to save it for later.</p>
            <Link 
              to="/" 
              className="bg-brand-primary text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform"
            >
              Explore Deals
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
