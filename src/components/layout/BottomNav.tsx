import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Heart, Map as MapIcon, User } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function BottomNav() {
  const tabs = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: MapIcon, label: 'Map', path: '/map' },
    { icon: Heart, label: 'Saved', path: '/saved' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-t border-slate-100 flex items-center justify-around px-4 pb-6 pt-3 sm:pb-3">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) => cn(
            "flex flex-col items-center gap-1 transition-all duration-300",
            isActive ? "text-brand-primary" : "text-slate-400 hover:text-slate-600"
          )}
        >
          {({ isActive }) => (
            <>
              <div className={cn(
                "p-1.5 rounded-xl transition-all duration-300",
                isActive ? "bg-brand-primary/10" : "bg-transparent"
              )}>
                <tab.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest">{tab.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
