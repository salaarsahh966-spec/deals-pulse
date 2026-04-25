import React from 'react';
import { Compass, MapPin, Navigation } from 'lucide-react';

export default function MapView() {
  return (
    <div className="h-screen bg-slate-100 relative overflow-hidden flex flex-col pt-12 items-center justify-center">
      {/* Mock Map Background */}
      <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/82.1409,22.0797,13,0/800x800?access_token=pk.eyJ1IjoiZGV2LW1hcGJveCIsImEiOiJjbTF2Z3p1cjkwMDNnMmpxeHpxeHpxeHpxIn0')] bg-cover bg-center"></div>
      
      {/* Overlay Filter Group */}
      <div className="absolute top-4 inset-x-4 flex items-center gap-2 z-10 overflow-x-auto no-scrollbar">
        {['All', 'Food', 'Fashion', 'Tech'].map((filt) => (
          <button key={filt} className="whitespace-nowrap px-4 py-2 bg-white rounded-full shadow-lg text-sm font-bold border border-slate-100">
            {filt}
          </button>
        ))}
      </div>

      {/* Mock Pins */}
      <div className="absolute top-[40%] left-[30%] animate-bounce">
        <div className="bg-brand-primary text-white p-2 rounded-full shadow-xl border-2 border-white">
          <MapPin size={24} />
        </div>
      </div>
      <div className="absolute top-[60%] left-[70%] animate-bounce [animation-delay:0.5s]">
        <div className="bg-brand-primary text-white p-2 rounded-full shadow-xl border-2 border-white">
          <MapPin size={24} />
        </div>
      </div>

      {/* Info Card */}
      <div className="absolute bottom-28 inset-x-4 z-20">
        <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 flex gap-4">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80" 
            className="w-20 h-20 rounded-2xl object-cover"
            alt="Deal"
          />
          <div className="flex-1">
            <p className="text-[10px] font-bold text-brand-primary uppercase">Food • 1.2 km</p>
            <h3 className="font-bold text-slate-800 line-clamp-1">50% off on Pizzas</h3>
            <p className="text-xs text-slate-500 font-medium">Pizza Hub, Link Road</p>
            <div className="flex gap-2 mt-2">
              <button className="text-[10px] font-bold bg-slate-900 text-white px-3 py-1 rounded-lg flex items-center gap-1">
                <Navigation size={12} /> Direction
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center max-w-xs pointer-events-none">
        <Compass size={48} className="mx-auto mb-4 text-brand-primary animate-spin-[20s]" />
        <h2 className="text-xl font-bold">Map Integration</h2>
        <p className="text-sm opacity-70 mt-2">Connecting to local stores near Bilaspur...</p>
      </div>
    </div>
  );
}
