import { Calendar, Heart, Settings, Edit } from 'lucide-react';
import { motion } from 'motion/react';
import { EventCard } from './EventCard';
import { mockEvents } from './data';
import { useState } from 'react';

interface ProfilePageProps {
  onNavigate: (page: string, eventId?: number) => void;
  onSaveEvent: (id: number) => void;
  savedEvents: number[];
}

export function ProfilePage({ onNavigate, onSaveEvent, savedEvents }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<'saved' | 'past'>('saved');
  
  const userSavedEvents = mockEvents.filter(e => savedEvents.includes(e.id));
  const userPastEvents = mockEvents.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* Profile Header */}
      <div className="relative h-64" style={{ backgroundColor: '#20B2AA' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white" />
        </div>
        
        <div className="relative h-full max-w-[1440px] mx-auto px-8 flex items-end pb-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-end gap-6 w-full"
          >
            <div className="w-32 h-32 rounded-2xl bg-white flex items-center justify-center text-4xl">
              👤
            </div>
            <div className="flex-1 pb-4">
              <h1 className="font-['Poppins'] text-4xl text-white mb-2">
                Sarah Anderson
              </h1>
              <p className="font-['Inter'] text-lg text-white/90">
                Event enthusiast • San Francisco, CA
              </p>
            </div>
            <button className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white font-['Inter'] hover:bg-white/30 transition-colors flex items-center gap-2 mb-4">
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-[1440px] mx-auto px-8 -mt-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <p className="font-['Poppins'] text-3xl mb-2" style={{ color: '#20B2AA' }}>
              {savedEvents.length}
            </p>
            <p className="font-['Inter']" style={{ color: '#0D3B66', opacity: 0.7 }}>
              Saved Events
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <p className="font-['Poppins'] text-3xl mb-2" style={{ color: '#20B2AA' }}>
              24
            </p>
            <p className="font-['Inter']" style={{ color: '#0D3B66', opacity: 0.7 }}>
              Events Attended
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <p className="font-['Poppins'] text-3xl mb-2" style={{ color: '#20B2AA' }}>
              8
            </p>
            <p className="font-['Inter']" style={{ color: '#0D3B66', opacity: 0.7 }}>
              Upcoming RSVPs
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <p className="font-['Poppins'] text-3xl mb-2" style={{ color: '#20B2AA' }}>
              156
            </p>
            <p className="font-['Inter']" style={{ color: '#0D3B66', opacity: 0.7 }}>
              Following
            </p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-8 py-12">
        {/* Tabs */}
        <div className="flex gap-6 mb-12 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('saved')}
            className="relative px-6 py-4 font-['Poppins'] transition-colors"
            style={{ color: activeTab === 'saved' ? '#20B2AA' : '#0D3B66' }}
          >
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Saved Events
            </div>
            {activeTab === 'saved' && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: '#20B2AA' }}
              />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('past')}
            className="relative px-6 py-4 font-['Poppins'] transition-colors"
            style={{ color: activeTab === 'past' ? '#20B2AA' : '#0D3B66' }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Past RSVPs
            </div>
            {activeTab === 'past' && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: '#20B2AA' }}
              />
            )}
          </button>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {activeTab === 'saved' && (
            <>
              {userSavedEvents.length > 0 ? (
                <div className="grid grid-cols-4 gap-6">
                  {userSavedEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <EventCard
                        {...event}
                        isSaved={true}
                        onSave={onSaveEvent}
                        onClick={(id) => onNavigate('detail', id)}
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <Heart className="w-16 h-16 mx-auto mb-4" style={{ color: '#0D3B66', opacity: 0.3 }} />
                  <h3 className="font-['Poppins'] text-2xl mb-3" style={{ color: '#0D3B66' }}>
                    No saved events yet
                  </h3>
                  <p className="font-['Inter'] mb-6" style={{ color: '#0D3B66', opacity: 0.7 }}>
                    Start exploring and save events you're interested in
                  </p>
                  <button
                    onClick={() => onNavigate('explore')}
                    className="px-8 py-3 rounded-xl text-white font-['Inter']"
                    style={{ backgroundColor: '#20B2AA' }}
                  >
                    Explore Events
                  </button>
                </div>
              )}
            </>
          )}

          {activeTab === 'past' && (
            <div className="grid grid-cols-4 gap-6">
              {userPastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative">
                    <EventCard
                      {...event}
                      isSaved={savedEvents.includes(event.id)}
                      onSave={onSaveEvent}
                      onClick={(id) => onNavigate('detail', id)}
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm">
                      <span className="font-['Inter'] text-xs text-white">Attended</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
