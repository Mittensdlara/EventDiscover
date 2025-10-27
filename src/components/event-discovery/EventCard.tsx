import { MapPin, Calendar, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  attendees: number;
  isSaved?: boolean;
  onSave?: (id: number) => void;
  onClick?: (id: number) => void;
}

export function EventCard({ id, title, date, time, location, category, image, attendees, isSaved = false, onSave, onClick }: EventCardProps) {
  const [saved, setSaved] = useState(isSaved);
  const [isHovered, setIsHovered] = useState(false);

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSaved(!saved);
    onSave?.(id);
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClick?.(id)}
      className="bg-white rounded-2xl overflow-hidden cursor-pointer"
      style={{ 
        boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.15)' : '0 4px 15px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.3s ease'
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm">
          <span className="font-['Inter'] text-xs" style={{ color: '#20B2AA' }}>{category}</span>
        </div>
        
        {/* Save Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleSave}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: saved ? [1, 1.3, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Heart 
              className="w-5 h-5" 
              style={{ color: '#20B2AA' }}
              fill={saved ? '#20B2AA' : 'none'}
            />
          </motion.div>
        </motion.button>
        
        {/* Attendees */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm">
          <Users className="w-4 h-4" style={{ color: '#0D3B66' }} />
          <span className="font-['Inter'] text-xs" style={{ color: '#0D3B66' }}>{attendees} going</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="font-['Poppins'] mb-2" style={{ color: '#0D3B66' }}>{title}</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" style={{ color: '#20B2AA' }} />
            <span className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>
              {date} • {time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" style={{ color: '#20B2AA' }} />
            <span className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>
              {location}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
