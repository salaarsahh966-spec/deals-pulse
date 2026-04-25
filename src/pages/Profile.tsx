import React from 'react';
import { User, Settings, ShoppingBag, CreditCard, LogOut, ChevronRight, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Profile() {
  const menuItems = [
    { icon: ShoppingBag, label: 'My Orders', color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: CreditCard, label: 'Payments', color: 'text-purple-500', bg: 'bg-purple-50' },
    { icon: Settings, label: 'Account Settings', color: 'text-slate-600', bg: 'bg-slate-100' },
    { icon: HelpCircle, label: 'Help Center', color: 'text-green-500', bg: 'bg-green-50' },
  ];

  return (
    <div className="pb-24 bg-slate-50 min-h-screen">
      <header className="bg-white px-5 pt-12 pb-8 rounded-b-[40px] shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-lg overflow-hidden mb-4 relative">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-brand-primary rounded-full border-4 border-white flex items-center justify-center text-white">
              <Settings size={12} />
            </div>
          </div>
          <h2 className="text-2xl font-display font-bold">Vivek Sharma</h2>
          <p className="text-slate-500 text-sm font-medium">vivek@example.com</p>
          
          <div className="flex gap-8 mt-8">
            <div className="text-center">
              <p className="font-bold text-slate-900">12</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Saved</p>
            </div>
            <div className="w-px h-8 bg-slate-100 self-center"></div>
            <div className="text-center">
              <p className="font-bold text-slate-900">25</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Used</p>
            </div>
            <div className="w-px h-8 bg-slate-100 self-center"></div>
            <div className="text-center">
              <p className="font-bold text-slate-900">450</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Points</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      </header>

      <main className="px-5 mt-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100">
          {menuItems.map((item, idx) => (
            <button 
              key={idx}
              className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                  <item.icon size={20} />
                </div>
                <span className="font-bold text-slate-700">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>

        <button className="w-full mt-8 flex items-center justify-center gap-2 text-brand-primary font-bold py-4 hover:bg-red-50 rounded-2xl transition-all">
          <LogOut size={20} /> Logout Account
        </button>
        
        <p className="text-center text-slate-400 text-[10px] uppercase tracking-widest mt-12 font-bold">
          DealsPulse v1.0.4
        </p>
      </main>
    </div>
  );
}
