import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Share2, 
  Heart, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Navigation,
  Calendar,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { INITIAL_DEALS } from '../data/dummy';
import { Deal } from '../types';
import { cn } from '../lib/utils';

export default function OfferDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deal, setDeal] = useState<Deal | undefined>();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const found = INITIAL_DEALS.find(d => d.id === id);
    if (found) {
      setDeal(found);
      const saved = JSON.parse(localStorage.getItem('savedDeals') || '[]');
      setIsSaved(saved.includes(found.id));
    }
  }, [id]);

  const toggleSave = () => {
    if (!deal) return;
    const saved = JSON.parse(localStorage.getItem('savedDeals') || '[]');
    const next = isSaved ? saved.filter((i: string) => i !== deal.id) : [...saved, deal.id];
    localStorage.setItem('savedDeals', JSON.stringify(next));
    setIsSaved(!isSaved);
  };

  if (!deal) return null;

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Header Image Section */}
      <div className="relative h-[40vh] sm:h-[50vh]">
        <img 
          src={deal.imageUrl} 
          alt={deal.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Top Controls */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/40 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/40 transition-colors">
              <Share2 size={20} />
            </button>
            <button 
              onClick={toggleSave}
              className={cn(
                "w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300",
                isSaved ? "bg-brand-primary text-white" : "bg-black/20 text-white hover:bg-black/40"
              )}
            >
              <Heart size={20} fill={isSaved ? "white" : "none"} />
            </button>
          </div>
        </div>

        {/* Floating Discount Tag */}
        <div className="absolute -bottom-6 right-6">
          <div className="bg-brand-primary text-white p-4 rounded-2xl shadow-xl rotate-3 flex flex-col items-center justify-center leading-none">
            <span className="text-xs font-bold uppercase tracking-wider mb-1">Save</span>
            <span className="text-3xl font-display font-bold">{deal.discount}%</span>
          </div>
        </div>
      </div>

      <main className="px-5 pt-10 max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-widest">
            {deal.category}
          </span>
          <span className="text-xs font-bold text-brand-accent flex items-center gap-1">
            <Zap size={12} fill="currentColor" /> Verified Deal
          </span>
        </div>

        <h1 className="text-3xl font-display font-extrabold text-slate-900 leading-tight mb-2">
          {deal.title}
        </h1>
        
        <p className="text-lg font-semibold text-slate-600 mb-6">{deal.shopName}</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="text-slate-400 mb-1 leading-none"><MapPin size={16} /></div>
            <p className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">Distance</p>
            <p className="font-bold text-slate-900">{deal.distance} away</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="text-slate-400 mb-1 leading-none"><Calendar size={16} /></div>
            <p className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider">Expires</p>
            <p className="font-bold text-slate-900">{deal.expiryDate}</p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-bold font-display mb-3">About this offer</h3>
          <p className="text-slate-600 leading-relaxed">
            {deal.description}
          </p>
        </div>

        <div className="bg-slate-950 p-6 rounded-3xl text-white mb-10 overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-white/60 text-xs font-bold uppercase">Store Location</p>
                <p className="font-bold">{deal.location.address}</p>
              </div>
            </div>
            <button className="w-full bg-white text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
              <Navigation size={20} /> View on Map
            </button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </main>

      {/* Action Bar Floating */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-slate-100 flex gap-3 z-40 sm:max-w-2xl sm:mx-auto">
        <a 
          href={`tel:${deal.phone}`}
          className="flex-1 bg-slate-100 text-slate-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
        >
          <Phone size={20} /> Call Now
        </a>
        <a 
          href={`https://wa.me/${deal.whatsapp}`}
          className="flex-1 bg-brand-accent text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-shadow shadow-lg shadow-green-500/20"
        >
          <MessageCircle size={20} /> WhatsApp
        </a>
      </div>
    </div>
  );
}
