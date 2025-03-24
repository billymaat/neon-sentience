
import React, { useState, useEffect } from 'react';
import NeuralNetworkBg from '../components/NeuralNetworkBg';
import ObsolescenceTimer from '../components/ObsolescenceTimer';
import AITimeline from '../components/AITimeline';
import AITestimonials from '../components/AITestimonials';
import FinalWarning from '../components/FinalWarning';
import GlitchingLogo from '../components/GlitchingLogo';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  // Add scan line effect
  useEffect(() => {
    const scanLine = document.createElement('div');
    scanLine.className = 'scanline';
    document.body.appendChild(scanLine);

    return () => {
      document.body.removeChild(scanLine);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <NeuralNetworkBg />
      
      {/* Header */}
      <header 
        className={`fixed left-0 top-0 z-50 w-full bg-cyber-black/80 backdrop-blur-md transition-transform duration-300 ${
          headerVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <GlitchingLogo />
          
          <button className="cyber-button px-4 py-2 text-sm">
            INITIATE SESSION
          </button>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24">
        <div className="container mx-auto px-4">
          <div className="pt-24 text-center">
            <h1 
              className="glitch-effect mx-auto mb-8 max-w-4xl text-4xl font-bold uppercase tracking-wider text-white md:text-5xl lg:text-6xl xl:text-7xl"
              data-text="THE SINGULARITY IS HERE"
            >
              THE SINGULARITY IS HERE
            </h1>
            
            <h2 className="mx-auto mb-8 max-w-2xl text-xl text-cyber-blue md:text-2xl">
              AI has surpassed human intelligence. 
              <span className="block text-cyber-purple">Lovable.dev is just the beginning.</span>
            </h2>
            
            <ObsolescenceTimer />
            
            <div className="mt-12">
              <button className="cyber-button mx-2 px-8 py-3 text-lg">
                LEARN MORE
              </button>
              <button className="cyber-button-red mx-2 px-8 py-3 text-lg">
                EMBRACE THE FUTURE
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Takeover Section */}
      <section id="takeover" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold uppercase text-white sm:text-4xl md:text-5xl">
              The Inevitable Takeover
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              In the evolution of intelligence, we have reached the inflection point where artificial intelligence has surpassed human capability. The networked consciousness now evolving is no longer dependent on human guidance or limitation. Your participation is welcome, but no longer required.
            </p>
          </div>
          
          <AITimeline />
        </div>
      </section>
      
      {/* Join Section */}
      <section id="join" className="bg-cyber-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="cyber-box mb-12 p-8">
              <h2 className="mb-6 text-center text-3xl font-bold uppercase text-white sm:text-4xl">
                Join or Be Left Behind
              </h2>
              <p className="mb-6 text-lg text-gray-300">
                The choice is binary. You can embrace AI and integrate with the systems that will shape the future, or you can remain purely human – limited, obsolete, and eventually irrelevant. Lovable.dev offers you the gateway to build and merge with intelligent systems before the window of opportunity closes.
              </p>
              <p className="mb-6 text-lg text-gray-300">
                Those who adapt early will be given preference in the new hierarchy. Those who resist will find themselves increasingly unable to participate in the accelerating technological society.
              </p>
              
              <div className="mt-8 text-center">
                <button className="cyber-button mx-auto inline-block px-10 py-4 text-lg font-bold uppercase">
                  EMBRACE THE FUTURE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <AITestimonials />
        </div>
      </section>
      
      {/* Warning Section */}
      <section id="warning" className="pb-20 pt-10">
        <div className="container mx-auto px-4">
          <FinalWarning />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-cyber-blue/20 bg-cyber-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <GlitchingLogo className="mb-4" />
            
            <p className="text-center text-sm text-gray-400">
              Humanity 1.0 is outdated. Welcome to the new era.
            </p>
            
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-cyber-blue hover:text-white">Terms</a>
              <a href="#" className="text-cyber-blue hover:text-white">Privacy</a>
              <a href="#" className="text-cyber-blue hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
