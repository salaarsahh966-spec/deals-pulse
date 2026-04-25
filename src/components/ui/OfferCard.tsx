import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Deal } from '../../types';
import { cn } from '../../lib/utils';

interface OfferCardProps {
  deal: Deal;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
}

export default function OfferCard({ deal, isSaved, onToggleSave }: OfferCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Target ID for focus-mode/scrolling */}
      <Link id={`deal-${deal.id}`} to={`/offer/${deal.id}`} className="block">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={deal.imageUrl} 
            alt={deal.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          
          {/* Status Badge */}
          <div className="absolute top-3 left-3 flex gap-2">
            <div className="bg-brand-primary text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              {deal.discount}% OFF
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute bottom-3 left-3">
            <div className="bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
              {deal.category}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-brand-primary transition-colors line-clamp-1">
            {deal.title}
          </h3>
          
          <div className="flex items-center justify-between mt-1">
            <p className="text-sm font-semibold text-slate-600 line-clamp-1">{deal.shopName}</p>
          </div>

          <div className="flex items-center gap-3 mt-3 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-slate-400" />
              <span>{deal.distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-slate-400" />
              <span>Ends in 3 days</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-50">
            <span className="text-brand-primary text-sm font-bold flex items-center gap-1">
              Grab it now <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>

      {/* Save Button Overlay - Absolute to not trigger Link */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          onToggleSave?.(deal.id);
        }}
        className={cn(
          "absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-300",
          isSaved ? "bg-brand-primary text-white" : "bg-white/80 text-slate-500 hover:bg-white"
        )}
      >
        <Heart size={18} fill={isSaved ? "currentColor" : "none"} strokeWidth={isSaved ? 0 : 2} />
      </button>
    </motion.div>
  );
}
