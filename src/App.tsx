import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import OfferDetail from './pages/OfferDetail';
import Saved from './pages/Saved';
import Profile from './pages/Profile';
import MapView from './pages/MapView';
import BottomNav from './components/layout/BottomNav';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/offer/:id" element={<OfferDetail />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/map" element={<MapView />} />
        </Routes>
        
        {/* Only show BottomNav on main tabs, hide on detail view if wanted, 
            but for MVP we can show it everywhere or use logic */}
        <BottomNavVisibility />
      </div>
    </Router>
  );
}

function BottomNavVisibility() {
  const location = useLocation();
  // Hide bottom nav on detail pages for more immersive experience
  const hideOn = ['/offer/'];
  const shouldHide = hideOn.some(path => location.pathname.startsWith(path));
  
  if (shouldHide) return null;
  return <BottomNav />;
}
