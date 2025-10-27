import { Search, User, Bell, Menu } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-[1440px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#20B2AA' }}>
              <span className="text-white font-['Poppins']">ED</span>
            </div>
            <span className="font-['Poppins'] text-xl" style={{ color: '#0D3B66' }}>EventDiscover</span>
          </button>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {['home', 'explore', 'profile', 'dashboard'].map((page) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className="relative font-['Inter'] capitalize transition-colors"
                style={{ color: currentPage === page ? '#20B2AA' : '#0D3B66' }}
              >
                {page}
                {currentPage === page && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-5 left-0 right-0 h-0.5"
                    style={{ backgroundColor: '#20B2AA' }}
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5" style={{ color: '#0D3B66' }} />
            </button>
            <button 
              onClick={() => onNavigate('profile')}
              className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <User className="w-5 h-5" style={{ color: '#0D3B66' }} />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
