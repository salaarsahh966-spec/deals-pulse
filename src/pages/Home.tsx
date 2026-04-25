import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import CategoryScroll from '../components/ui/CategoryScroll';
import OfferCard from '../components/ui/OfferCard';
import { INITIAL_DEALS } from '../data/dummy';
import { motion } from 'motion/react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState('');
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('savedDeals');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleSave = (id: string) => {
    setSavedIds(prev => {
      const next = prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
      localStorage.setItem('savedDeals', JSON.stringify(next));
      return next;
    });
  };

  const filteredDeals = INITIAL_DEALS.filter(deal => {
    const matchesCategory = !selectedCategory || deal.category === selectedCategory;
    const matchesSearch = deal.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          deal.shopName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-24">
      <Navbar />
      
      <main className="max-w-7xl mx-auto">
        {/* Search Bar Section */}
        <section className="px-4 mt-4">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-slate-400">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search deals, shops, items..."
              className="w-full bg-white border border-slate-100 rounded-2xl py-4 pl-12 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-4 text-brand-primary p-2 hover:bg-slate-50 rounded-xl transition-colors">
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </section>

        {/* Categories Section */}
        <CategoryScroll 
          selectedId={selectedCategory} 
          onSelect={setSelectedCategory} 
        />

        {/* Deals Feed */}
        <section className="px-4 pb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold font-display">Featured Deals</h2>
            <button className="text-brand-primary text-sm font-bold">View All</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDeals.length > 0 ? (
              filteredDeals.map((deal) => (
                <OfferCard 
                  key={deal.id} 
                  deal={deal} 
                  isSaved={savedIds.includes(deal.id)}
                  onToggleSave={toggleSave}
                />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 text-slate-400 mb-4 animate-pulse">
                  <Search size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">No deals found</h3>
                <p className="text-slate-500 text-sm mt-1">Try searching for something else or change category</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
