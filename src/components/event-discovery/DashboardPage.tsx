import { TrendingUp, Users, Eye, Heart, Calendar, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { mockEvents } from './data';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const organizerEvents = mockEvents.slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="font-['Poppins'] text-4xl mb-2" style={{ color: '#0D3B66' }}>
              Organizer Dashboard
            </h1>
            <p className="font-['Inter'] text-lg" style={{ color: '#0D3B66', opacity: 0.7 }}>
              Manage your events and track performance
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl text-white font-['Inter'] flex items-center gap-2"
            style={{ backgroundColor: '#20B2AA' }}
          >
            <Plus className="w-5 h-5" />
            Create Event
          </motion.button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#20B2AA' }}>
                <Eye className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-6 h-6" style={{ color: '#20B2AA' }} />
            </div>
            <p className="font-['Poppins'] text-3xl mb-1" style={{ color: '#0D3B66' }}>
              12.4K
            </p>
            <p className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>
              Total Views
            </p>
            <div className="mt-3 flex items-center gap-1">
              <span className="font-['Inter'] text-xs" style={{ color: '#20B2AA' }}>+18%</span>
              <span className="font-['Inter'] text-xs" style={{ color: '#0D3B66', opacity: 0.6 }}>from last month</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#20B2AA' }}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-6 h-6" style={{ color: '#20B2AA' }} />
            </div>
            <p className="font-['Poppins'] text-3xl mb-1" style={{ color: '#0D3B66' }}>
              3,248
            </p>
            <p className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>
              Total RSVPs
            </p>
            <div className="mt-3 flex items-center gap-1">
              <span className="font-['Inter'] text-xs" style={{ color: '#20B2AA' }}>+24%</span>
              <span className="font-['Inter'] text-xs" style={{ color: '#0D3B66', opacity: 0.6 }}>from last month</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#20B2AA' }}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-6 h-6" style={{ color: '#20B2AA' }} />
            </div>
            <p className="font-['Poppins'] text-3xl mb-1" style={{ color: '#0D3B66' }}>
              1,892
            </p>
            <p className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>
              Total Saves
            </p>
            <div className="mt-3 flex items-center gap-1">
              <span className="font-['Inter'] text-xs" style={{ color: '#20B2AA' }}>+32%</span>
              <span className="font-['Inter'] text-xs" style={{ color: '#0D3B66', opacity: 0.6 }}>from last month</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#20B2AA' }}>
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="font-['Poppins'] text-3xl mb-1" style={{ color: '#0D3B66' }}>
              12
            </p>
            <p className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>
              Active Events
            </p>
            <div className="mt-3 flex items-center gap-1">
              <span className="font-['Inter'] text-xs" style={{ color: '#20B2AA' }}>5 upcoming</span>
            </div>
          </motion.div>
        </div>

        {/* Chart */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-md mb-12"
        >
          <h2 className="font-['Poppins'] text-2xl mb-6" style={{ color: '#0D3B66' }}>
            Performance Overview
          </h2>
          <div className="h-64 flex items-end justify-between gap-4">
            {[65, 80, 55, 90, 75, 85, 70].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                className="flex-1 rounded-t-lg"
                style={{ 
                  backgroundColor: '#20B2AA',
                  opacity: 0.8 + (height / 500)
                }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <span key={day} className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.6 }}>
                {day}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Your Events */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="font-['Poppins'] text-2xl mb-6" style={{ color: '#0D3B66' }}>
            Your Events
          </h2>
          <div className="space-y-4">
            {organizerEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600" />
                  <div className="flex-1">
                    <h3 className="font-['Poppins'] text-xl mb-2" style={{ color: '#0D3B66' }}>
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" style={{ color: '#20B2AA' }} />
                        <span className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>
                          {event.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" style={{ color: '#20B2AA' }} />
                        <span className="font-['Inter'] text-sm" style={{ color: '#0D3B66', opacity: 0.7 }}>
                          {event.attendees} RSVPs
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-2 rounded-lg border-2 font-['Inter'] hover:bg-gray-50 transition-colors" style={{ color: '#0D3B66', borderColor: '#20B2AA' }}>
                      Edit
                    </button>
                    <button className="px-6 py-2 rounded-lg text-white font-['Inter']" style={{ backgroundColor: '#20B2AA' }}>
                      View Stats
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
