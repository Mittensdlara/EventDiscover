import { Calendar, MapPin, Users, Share2, Heart, Clock, DollarSign, ArrowLeft, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { mockEvents } from './data';
import { EventCard } from './EventCard';
import { RSVPModal } from './RSVPModal';
import { useState } from 'react';

interface EventDetailPageProps {
  eventId: number;
  onNavigate: (page: string, eventId?: number) => void;
  onSaveEvent: (id: number) => void;
  savedEvents: number[];
}

export function EventDetailPage({ eventId, onNavigate, onSaveEvent, savedEvents }: EventDetailPageProps) {
  const event = mockEvents.find(e => e.id === eventId);
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(savedEvents.includes(eventId));
  
  if (!event) return null;

  const relatedEvents = mockEvents
    .filter(e => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSaveEvent(eventId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* Back Button */}
      <div className="max-w-[1440px] mx-auto px-8 py-6">
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => onNavigate('explore')}
          className="flex items-center gap-2 font-['Inter'] hover:gap-3 transition-all"
          style={{ color: '#20B2AA' }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to explore
        </motion.button>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[500px] overflow-hidden">
        <ImageWithFallback 
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Floating Action Buttons */}
        <div className="absolute top-8 right-8 flex gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSave}
            className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center"
          >
            <Heart 
              className="w-6 h-6" 
              style={{ color: '#20B2AA' }}
              fill={isSaved ? '#20B2AA' : 'none'}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center"
          >
            <Share2 className="w-6 h-6" style={{ color: '#20B2AA' }} />
          </motion.button>
        </div>

        {/* Event Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-end justify-between"
            >
              <div>
                <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#20B2AA' }}>
                  <span className="font-['Inter'] text-sm text-white">{event.category}</span>
                </div>
                <h1 className="font-['Poppins'] text-5xl text-white mb-4">
                  {event.title}
                </h1>
                <div className="flex items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="font-['Inter']">{event.attendees} attending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    <span className="font-['Inter']">{event.price}</span>
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(32,178,170,0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsRSVPOpen(true)}
                className="px-10 py-4 rounded-xl text-white font-['Poppins']"
                style={{ backgroundColor: '#20B2AA' }}
              >
                RSVP Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            {/* Event Details Cards */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <Calendar className="w-8 h-8 mb-3" style={{ color: '#20B2AA' }} />
                <p className="font-['Poppins'] mb-1" style={{ color: '#0D3B66' }}>Date & Time</p>
                <p className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>
                  {event.date}<br />{event.time}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <MapPin className="w-8 h-8 mb-3" style={{ color: '#20B2AA' }} />
                <p className="font-['Poppins'] mb-1" style={{ color: '#0D3B66' }}>Location</p>
                <p className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>
                  {event.location}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <Users className="w-8 h-8 mb-3" style={{ color: '#20B2AA' }} />
                <p className="font-['Poppins'] mb-1" style={{ color: '#0D3B66' }}>Organizer</p>
                <p className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>
                  {event.organizer}
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-['Poppins'] text-2xl mb-4" style={{ color: '#0D3B66' }}>
                About This Event
              </h2>
              <p className="font-['Inter'] text-lg leading-relaxed" style={{ color: '#0D3B66', opacity: 0.8 }}>
                {event.description}
              </p>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="font-['Poppins'] text-2xl mb-4" style={{ color: '#0D3B66' }}>
                Location
              </h2>
              <div className="rounded-2xl overflow-hidden bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-3" style={{ color: '#20B2AA' }} />
                  <p className="font-['Poppins']" style={{ color: '#0D3B66' }}>
                    {event.location}
                  </p>
                  <p className="font-['Inter'] text-sm mt-2" style={{ color: '#0D3B66', opacity: 0.7 }}>
                    Interactive map view
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Comments Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="font-['Poppins'] text-2xl mb-6" style={{ color: '#0D3B66' }}>
                Comments
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50">
                    <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#20B2AA' }} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-['Poppins']" style={{ color: '#0D3B66' }}>User {i}</span>
                        <span className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.5 }}>
                          2 days ago
                        </span>
                      </div>
                      <p className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.8 }}>
                        Really looking forward to this event! Can't wait to attend.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="sticky top-24"
            >
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="font-['Poppins'] text-xl mb-4" style={{ color: '#0D3B66' }}>
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" style={{ color: '#20B2AA' }} />
                    <span className="font-['Inter'] text-sm" style={{ color: '#0D3B66' }}>3 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5" style={{ color: '#20B2AA' }} />
                    <span className="font-['Inter'] text-sm" style={{ color: '#0D3B66' }}>{event.price}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5" style={{ color: '#20B2AA' }} />
                    <span className="font-['Inter'] text-sm" style={{ color: '#0D3B66' }}>{event.attendees} going</span>
                  </div>
                </div>
              </div>

              <h3 className="font-['Poppins'] text-xl mb-4" style={{ color: '#0D3B66' }}>
                Related Events
              </h3>
              <div className="space-y-4">
                {relatedEvents.map((relEvent) => (
                  <motion.div
                    key={relEvent.id}
                    whileHover={{ x: 5 }}
                    onClick={() => onNavigate('detail', relEvent.id)}
                    className="cursor-pointer"
                  >
                    <div className="flex gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback 
                          src={relEvent.image}
                          alt={relEvent.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-['Poppins'] text-sm mb-1" style={{ color: '#0D3B66' }}>
                          {relEvent.title}
                        </p>
                        <p className="font-['Inter'] text-xs" style={{ color: '#0D3B66', opacity: 0.6 }}>
                          {relEvent.date}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <RSVPModal 
        isOpen={isRSVPOpen}
        onClose={() => setIsRSVPOpen(false)}
        eventTitle={event.title}
      />
    </motion.div>
  );
}
