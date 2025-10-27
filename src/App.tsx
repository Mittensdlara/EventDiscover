import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/event-discovery/Navbar';
import { HomePage } from './components/event-discovery/HomePage';
import { ExplorePage } from './components/event-discovery/ExplorePage';
import { EventDetailPage } from './components/event-discovery/EventDetailPage';
import { ProfilePage } from './components/event-discovery/ProfilePage';
import { DashboardPage } from './components/event-discovery/DashboardPage';
import { ScrollToTop } from './components/event-discovery/ScrollToTop';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [savedEvents, setSavedEvents] = useState<number[]>([]);

  const handleNavigate = (page: string, eventId?: number) => {
    setCurrentPage(page);
    if (eventId !== undefined) {
      setSelectedEventId(eventId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveEvent = (id: number) => {
    setSavedEvents(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <HomePage 
            key="home"
            onNavigate={handleNavigate}
            onSaveEvent={handleSaveEvent}
            savedEvents={savedEvents}
          />
        )}
        
        {currentPage === 'explore' && (
          <ExplorePage 
            key="explore"
            onNavigate={handleNavigate}
            onSaveEvent={handleSaveEvent}
            savedEvents={savedEvents}
          />
        )}
        
        {currentPage === 'detail' && selectedEventId !== null && (
          <EventDetailPage 
            key="detail"
            eventId={selectedEventId}
            onNavigate={handleNavigate}
            onSaveEvent={handleSaveEvent}
            savedEvents={savedEvents}
          />
        )}
        
        {currentPage === 'profile' && (
          <ProfilePage 
            key="profile"
            onNavigate={handleNavigate}
            onSaveEvent={handleSaveEvent}
            savedEvents={savedEvents}
          />
        )}
        
        {currentPage === 'dashboard' && (
          <DashboardPage 
            key="dashboard"
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>
      
      <ScrollToTop />
    </div>
  );
}
