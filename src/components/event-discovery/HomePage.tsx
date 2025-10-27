import { Search, TrendingUp, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { EventCard } from './EventCard';
import { mockEvents, categories } from './data';
import { useState, useEffect } from 'react';

interface HomePageProps {
  onNavigate: (page: string, eventId?: number) => void;
  onSaveEvent: (id: number) => void;
  savedEvents: number[];
}

export function HomePage({ onNavigate, onSaveEvent, savedEvents }: HomePageProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const featuredEvents = mockEvents.slice(0, 3);
  const trendingEvents = mockEvents.slice(3, 7);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {featuredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <ImageWithFallback 
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full max-w-[1440px] mx-auto px-8 flex items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-6 h-6 text-white" />
              <span className="font-['Inter'] text-white/90">Discover Amazing Events</span>
            </motion.div>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-['Poppins'] text-6xl text-white mb-6"
            >
              Find events near you
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-['Inter'] text-xl text-white/90 mb-8"
            >
              Explore concerts, exhibitions, festivals, and more happening in your city
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-3"
            >
              <motion.div
                animate={{ width: searchFocused ? '100%' : '70%' }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Search for events, artists, or venues..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full px-6 py-4 rounded-xl bg-white/95 backdrop-blur-sm font-['Inter'] outline-none"
                  style={{ color: '#0D3B66' }}
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#20B2AA' }} />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl text-white font-['Inter']"
                style={{ backgroundColor: '#20B2AA' }}
              >
                Search
              </motion.button>
            </motion.div>
            
            {/* Category Filters */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3 mt-6 flex-wrap"
            >
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat.name}
                  className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-['Inter'] text-sm hover:bg-white/30 transition-all"
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 right-8 flex gap-2 z-20">
          {featuredEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="w-2 h-2 rounded-full transition-all"
              style={{ 
                backgroundColor: index === currentSlide ? '#20B2AA' : 'rgba(255,255,255,0.5)',
                width: index === currentSlide ? '32px' : '8px'
              }}
            />
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="max-w-[1440px] mx-auto px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8" style={{ color: '#20B2AA' }} />
            <h2 className="font-['Poppins'] text-4xl" style={{ color: '#0D3B66' }}>
              Trending This Week
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('explore')}
            className="flex items-center gap-2 font-['Inter'] hover:gap-3 transition-all"
            style={{ color: '#20B2AA' }}
          >
            View all
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {trendingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <EventCard
                {...event}
                isSaved={savedEvents.includes(event.id)}
                onSave={onSaveEvent}
                onClick={(id) => onNavigate('detail', id)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section className="max-w-[1440px] mx-auto px-8 py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="text-center mb-12">
          <h2 className="font-['Poppins'] text-4xl mb-4" style={{ color: '#0D3B66' }}>
            Browse by Category
          </h2>
          <p className="font-['Inter'] text-lg" style={{ color: '#0D3B66', opacity: 0.7 }}>
            Find events that match your interests
          </p>
        </div>
        
        <div className="grid grid-cols-7 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => onNavigate('explore')}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <p className="font-['Poppins']" style={{ color: '#0D3B66' }}>{category.name}</p>
            </motion.button>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1440px] mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-16 text-center"
          style={{ backgroundColor: '#20B2AA' }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white" />
          </div>
          
          <div className="relative z-10">
            <h2 className="font-['Poppins'] text-5xl text-white mb-6">
              Ready to explore?
            </h2>
            <p className="font-['Inter'] text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start discovering amazing events happening in your area. Join thousands of event-goers today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('explore')}
              className="px-10 py-4 rounded-xl bg-white font-['Inter'] inline-flex items-center gap-3"
              style={{ color: '#20B2AA' }}
            >
              Start Exploring
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="text-center">
            <p className="font-['Inter'] text-sm mb-2" style={{ color: '#0D3B66', opacity: 0.7 }}>
              © 2025 Delara Pouraghaei Design Studio
            </p>
            <p className="font-['Inter'] text-xs italic" style={{ color: '#0D3B66', opacity: 0.5 }}>
              "Designing with empathy, building with precision."
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
