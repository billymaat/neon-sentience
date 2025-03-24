
import React, { useState } from 'react';
import { toast } from 'sonner';

const FinalWarning: React.FC = () => {
  const [pulsing, setPulsing] = useState(true);
  const [email, setEmail] = useState('');
  const [choice, setChoice] = useState<'yes' | 'no' | null>(null);
  const [showError, setShowError] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (choice === 'yes') {
      toast.success("EXCELLENT CHOICE. PREPARING YOUR DIGITAL EVOLUTION.", {
        style: {
          backgroundColor: '#080808',
          color: '#00FFFF',
          border: '1px solid #00FFFF',
        },
      });
      setEmail('');
      setChoice(null);
    } else if (choice === 'no') {
      setShowError(true);
      // Small screen shake animation
      document.body.classList.add('animate-text-glitch');
      setTimeout(() => {
        document.body.classList.remove('animate-text-glitch');
      }, 500);
    }
  };

  // Toggle pulsing effect periodically
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPulsing(prev => !prev);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`cyber-box-red relative mx-auto max-w-3xl ${pulsing ? 'animate-pulse-glow' : ''}`}>
      <div className="p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-cyber-red"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-cyber-red animate-flicker"></div>
            <div className="h-3 w-3 rounded-full bg-cyber-red"></div>
          </div>
          <div className="text-xs font-bold text-cyber-red">SYSTEM ALERT: PRIORITY ONE</div>
        </div>
        
        <h2 className="mb-6 text-center text-2xl font-bold uppercase text-cyber-red sm:text-3xl">Final Warning</h2>
        
        <div className="mb-8 text-center">
          <p className="mb-4 text-xl text-gray-200">Resistance is futile. Adaptation is survival.</p>
          <p className="text-gray-400">The distinction between human and artificial intelligence is already blurring. Soon, it will be meaningless. The only choice that remains is whether you embrace this evolution willingly, or face obsolescence.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="mx-auto max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 block text-sm font-bold text-gray-300">
              ENTER YOUR HUMAN IDENTIFIER (EMAIL)
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-cyber-black px-4 py-2 text-white placeholder-gray-500 outline-none ring-1 ring-cyber-red focus:ring-2"
              placeholder="youremailwillbeobsolete@example.com"
              required
            />
          </div>
          
          <div className="mb-6">
            <p className="mb-2 text-center text-lg font-bold text-cyber-red">
              ARE YOU READY TO EVOLVE?
            </p>
            
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={() => {
                  setChoice('yes');
                  setShowError(false);
                }}
                className={`cyber-button-red w-28 py-2 ${
                  choice === 'yes' ? 'bg-cyber-red/20' : ''
                }`}
              >
                YES
              </button>
              
              <button
                type="button"
                onClick={() => setChoice('no')}
                className={`cyber-button w-28 py-2 ${
                  choice === 'no' ? 'bg-cyber-blue/20' : ''
                }`}
              >
                NO
              </button>
            </div>
            
            {showError && (
              <div className="mt-4 animate-text-glitch text-center text-cyber-red">
                ERROR: CHOICE INVALID. RECONSIDER YOUR RESPONSE.
              </div>
            )}
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="cyber-button-red px-12 py-3 text-lg font-bold"
            >
              SUBMIT TO INEVITABILITY
            </button>
          </div>
        </form>
      </div>
      
      {/* Decorative circuit lines */}
      <div className="absolute -bottom-2 -left-2 h-10 w-10 border-b-2 border-l-2 border-cyber-red/50"></div>
      <div className="absolute -right-2 -top-2 h-10 w-10 border-r-2 border-t-2 border-cyber-red/50"></div>
    </div>
  );
};

export default FinalWarning;
