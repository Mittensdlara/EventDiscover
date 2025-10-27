import { Filter, MapPin, Search, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { EventCard } from './EventCard';
import { mockEvents, categories } from './data';
import { useState } from 'react';

interface ExplorePageProps {
  onNavigate: (page: string, eventId?: number) => void;
  onSaveEvent: (id: number) => void;
  savedEvents: number[];
}

export function ExplorePage({ onNavigate, onSaveEvent, savedEvents }: ExplorePageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = selectedCategory === 'All' 
    ? mockEvents 
    : mockEvents.filter(e => e.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-['Poppins'] text-5xl mb-4"
            style={{ color: '#0D3B66' }}
          >
            Explore Events
          </motion.h1>
          <p className="font-['Inter'] text-lg" style={{ color: '#0D3B66', opacity: 0.7 }}>
            Discover {mockEvents.length} amazing events happening near you
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <motion.aside
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-80 flex-shrink-0"
          >
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <div>
                <label className="font-['Poppins'] mb-3 block" style={{ color: '#0D3B66' }}>
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 font-['Inter'] outline-none focus:border-[#20B2AA] transition-colors"
                    style={{ color: '#0D3B66' }}
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#20B2AA' }} />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="font-['Poppins'] mb-3 block" style={{ color: '#0D3B66' }}>
                  Category
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="w-full px-4 py-3 rounded-xl font-['Inter'] text-left transition-all"
                    style={{
                      backgroundColor: selectedCategory === 'All' ? '#20B2AA' : '#f8f9fa',
                      color: selectedCategory === 'All' ? '#ffffff' : '#0D3B66'
                    }}
                  >
                    All Events
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className="w-full px-4 py-3 rounded-xl font-['Inter'] text-left flex items-center gap-3 transition-all"
                      style={{
                        backgroundColor: selectedCategory === cat.name ? '#20B2AA' : '#f8f9fa',
                        color: selectedCategory === cat.name ? '#ffffff' : '#0D3B66'
                      }}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <label className="font-['Poppins'] mb-3 block" style={{ color: '#0D3B66' }}>
                  Location
                </label>
                <div className="space-y-2">
                  {['All', 'Downtown', 'Uptown', 'Waterfront'].map((location) => (
                    <button
                      key={location}
                      onClick={() => setSelectedLocation(location)}
                      className="w-full px-4 py-3 rounded-xl font-['Inter'] text-left transition-all"
                      style={{
                        backgroundColor: selectedLocation === location ? '#20B2AA' : '#f8f9fa',
                        color: selectedLocation === location ? '#ffffff' : '#0D3B66'
                      }}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Filter */}
              <div>
                <label className="font-['Poppins'] mb-3 block" style={{ color: '#0D3B66' }}>
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 font-['Inter'] outline-none focus:border-[#20B2AA] transition-colors"
                  style={{ color: '#0D3B66' }}
                />
              </div>

              {/* Price Range */}
              <div>
                <label className="font-['Poppins'] mb-3 block" style={{ color: '#0D3B66' }}>
                  Price Range
                </label>
                <div className="space-y-2">
                  {['All', 'Free', 'Under $50', '$50 - $100', 'Over $100'].map((price) => (
                    <button
                      key={price}
                      className="w-full px-4 py-3 rounded-xl font-['Inter'] text-left bg-gray-100 hover:bg-gray-200 transition-all"
                      style={{ color: '#0D3B66' }}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Filter Chips */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-center gap-3 mb-8 flex-wrap"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100">
                <SlidersHorizontal className="w-4 h-4" style={{ color: '#20B2AA' }} />
                <span className="font-['Inter'] text-sm" style={{ color: '#0D3B66' }}>
                  {filteredEvents.length} events found
                </span>
              </div>
              {selectedCategory !== 'All' && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: '#20B2AA' }}>
                  <span className="font-['Inter'] text-sm text-white">{selectedCategory}</span>
                  <button onClick={() => setSelectedCategory('All')}>
                    <span className="text-white">×</span>
                  </button>
                </div>
              )}
            </motion.div>

            {/* Events Grid */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
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

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <button className="w-10 h-10 rounded-lg flex items-center justify-center border-2 border-gray-200 hover:border-[#20B2AA] transition-colors">
                <span style={{ color: '#0D3B66' }}>←</span>
              </button>
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-['Inter'] transition-all"
                  style={{
                    backgroundColor: page === 1 ? '#20B2AA' : 'transparent',
                    color: page === 1 ? '#ffffff' : '#0D3B66',
                    border: page === 1 ? 'none' : '2px solid #e5e7eb'
                  }}
                >
                  {page}
                </button>
              ))}
              <button className="w-10 h-10 rounded-lg flex items-center justify-center border-2 border-gray-200 hover:border-[#20B2AA] transition-colors">
                <span style={{ color: '#0D3B66' }}>→</span>
              </button>
            </div>
          </div>

          {/* Map */}
          <motion.aside
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-96 flex-shrink-0"
          >
            <div className="sticky top-24 rounded-2xl overflow-hidden shadow-lg" style={{ height: '600px' }}>
              <div className="w-full h-full bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-3" style={{ color: '#20B2AA' }} />
                    <p className="font-['Poppins']" style={{ color: '#0D3B66' }}>Map View</p>
                    <p className="font-['Inter'] text-sm mt-2" style={{ color: '#0D3B66', opacity: 0.7 }}>
                      Interactive map showing event locations
                    </p>
                  </div>
                </div>
                {/* Simulated pins */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="absolute w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                    style={{
                      backgroundColor: '#20B2AA',
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                      boxShadow: '0 4px 10px rgba(32,178,170,0.3)'
                    }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </motion.div>
  );
}
