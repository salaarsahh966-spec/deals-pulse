import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { CATEGORIES } from '../../data/dummy';
import { cn } from '../../lib/utils';

interface CategoryScrollProps {
  selectedId?: string;
  onSelect: (id: string | undefined) => void;
}

export default function CategoryScroll({ selectedId, onSelect }: CategoryScrollProps) {
  return (
    <div className="px-4 py-6 overflow-x-auto no-scrollbar flex items-center gap-4">
      <button
        onClick={() => onSelect(undefined)}
        className={cn(
          "flex-shrink-0 flex flex-col items-center gap-2",
          !selectedId ? "text-brand-primary" : "text-slate-400 opacity-70"
        )}
      >
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300",
          !selectedId ? "bg-brand-primary/10 shadow-inner" : "bg-white border border-slate-100 shadow-sm"
        )}>
          <Icons.LayoutGrid size={24} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest">All</span>
      </button>

      {CATEGORIES.map((cat) => {
        const IconComponent = (Icons as any)[cat.icon] || Icons.HelpCircle;
        const isActive = selectedId === cat.name;

        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.name)}
            className={cn(
              "flex-shrink-0 flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105",
              isActive ? "text-brand-primary" : "text-slate-400 opacity-70"
            )}
          >
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300",
              isActive ? "bg-brand-primary/10 shadow-inner" : "bg-white border border-slate-100 shadow-sm"
            )}>
              <IconComponent size={24} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}
