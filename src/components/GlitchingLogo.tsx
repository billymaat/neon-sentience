
import React, { useState, useEffect } from 'react';

interface GlitchingLogoProps {
  className?: string;
}

const GlitchingLogo: React.FC<GlitchingLogoProps> = ({ className = '' }) => {
  const [glitching, setGlitching] = useState(false);
  
  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance of glitching
        setGlitching(true);
        setTimeout(() => setGlitching(false), Math.random() * 200 + 100);
      }
    }, 2000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <span className={`relative font-orbitron text-2xl font-bold tracking-wider text-white ${glitching ? 'animate-text-glitch' : ''}`}>
        Lovable<span className="text-cyber-blue">.dev</span>
      </span>
      
      {glitching && (
        <>
          <span className="absolute left-0 top-0 z-10 -translate-x-1 translate-y-1 font-orbitron text-2xl font-bold tracking-wider text-cyber-red opacity-70">
            Lovable<span className="text-cyber-blue">.dev</span>
          </span>
          <span className="absolute left-0 top-0 z-10 translate-x-1 -translate-y-1 font-orbitron text-2xl font-bold tracking-wider text-cyber-blue opacity-70">
            Lovable<span className="text-cyber-blue">.dev</span>
          </span>
        </>
      )}
    </div>
  );
};

export default GlitchingLogo;
