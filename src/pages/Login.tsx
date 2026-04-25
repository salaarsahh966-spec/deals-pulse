import React from 'react';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 pt-20 pb-10">
      <div className="mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary rounded-3xl shadow-xl shadow-brand-primary/20 rotate-6 mb-6">
          <span className="text-white text-3xl font-bold">D</span>
        </div>
        <h1 className="text-4xl font-display font-extrabold text-slate-900 mb-2">Welcome Back</h1>
        <p className="text-slate-500 font-medium font-sans">Find the best deals in Bilaspur instantly.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all transition-all"
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all transition-all"
              required
            />
          </div>
        </div>

        <div className="flex justify-end pt-1">
          <button type="button" className="text-xs font-bold text-brand-primary uppercase tracking-widest">Forgot Password?</button>
        </div>

        <button 
          type="submit"
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-xl shadow-slate-900/10 mt-4 active:scale-95 transition-transform"
        >
          Sign In <ArrowRight size={20} />
        </button>
      </form>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex-1 h-px bg-slate-100"></div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">OR CONTINUE WITH</span>
        <div className="flex-1 h-px bg-slate-100"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <button className="flex items-center justify-center gap-3 bg-white border border-slate-100 py-3.5 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-colors">
          <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
          Google
        </button>
        <button className="flex items-center justify-center gap-3 bg-white border border-slate-100 py-3.5 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-colors">
          <Github className="w-5 h-5" />
          GitHub
        </button>
      </div>

      <div className="mt-auto text-center">
        <p className="text-sm font-medium text-slate-500">
          Don't have an account? <Link to="/login" className="text-brand-primary font-bold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
