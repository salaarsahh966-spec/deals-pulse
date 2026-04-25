import React, { useState, useEffect } from 'react';
import { MapPin, Search, User, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 px-4 py-3",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-1">
          <div className="bg-brand-primary p-1.5 rounded-lg shadow-lg rotate-3">
            <span className="text-white font-bold text-xl leading-none">D</span>
          </div>
          <span className="font-display font-bold text-xl hidden sm:inline-block">DealsPulse</span>
        </div>

        {/* Location Selector */}
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/80 hover:bg-slate-200 transition-colors">
          <MapPin size={16} className="text-brand-primary" />
          <span className="text-sm font-medium">Bilaspur</span>
          <span className="text-xs text-slate-400">▼</span>
        </button>

        {/* Action Icons */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors relative">
            <Bell size={22} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-primary rounded-full border-2 border-white"></span>
          </button>
          <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border-2 border-slate-100 hover:border-brand-primary transition-colors cursor-pointer">
            <User size={20} className="text-slate-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
