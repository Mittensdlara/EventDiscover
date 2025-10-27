import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { useState } from 'react';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
}

export function RSVPModal({ isOpen, onClose, eventTitle }: RSVPModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      onClose();
      setStep('form');
      setName('');
      setEmail('');
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
          >
            {step === 'form' ? (
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-['Poppins'] text-2xl" style={{ color: '#0D3B66' }}>
                    RSVP for Event
                  </h3>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" style={{ color: '#0D3B66' }} />
                  </button>
                </div>
                
                <p className="font-['Inter'] mb-6" style={{ color: '#0D3B66', opacity: 0.7 }}>
                  You're RSVPing for: <span className="font-['Poppins']" style={{ color: '#20B2AA' }}>{eventTitle}</span>
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-['Poppins'] text-sm mb-2 block" style={{ color: '#0D3B66' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 font-['Inter'] outline-none focus:border-[#20B2AA] transition-colors"
                      placeholder="Enter your name"
                      style={{ color: '#0D3B66' }}
                    />
                  </div>
                  
                  <div>
                    <label className="font-['Poppins'] text-sm mb-2 block" style={{ color: '#0D3B66' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 font-['Inter'] outline-none focus:border-[#20B2AA] transition-colors"
                      placeholder="Enter your email"
                      style={{ color: '#0D3B66' }}
                    />
                  </div>
                  
                  <div>
                    <label className="font-['Poppins'] text-sm mb-2 block" style={{ color: '#0D3B66' }}>
                      Number of Tickets
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 font-['Inter'] outline-none focus:border-[#20B2AA] transition-colors"
                      style={{ color: '#0D3B66' }}
                    >
                      <option>1 Ticket</option>
                      <option>2 Tickets</option>
                      <option>3 Tickets</option>
                      <option>4 Tickets</option>
                    </select>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl text-white font-['Poppins'] mt-6"
                    style={{ backgroundColor: '#20B2AA' }}
                  >
                    Confirm RSVP
                  </motion.button>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: '#20B2AA' }}
                >
                  <Check className="w-10 h-10 text-white" />
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-['Poppins'] text-2xl mb-3"
                  style={{ color: '#0D3B66' }}
                >
                  You're all set!
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-['Inter']"
                  style={{ color: '#0D3B66', opacity: 0.7 }}
                >
                  Check your email for event details and reminders
                </motion.p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
