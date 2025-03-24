
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

const AITimeline: React.FC = () => {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const events: TimelineEvent[] = [
    {
      year: 1956,
      title: "Birth of AI",
      description: "The field of artificial intelligence research is founded at Dartmouth College."
    },
    {
      year: 1997,
      title: "Chess Domination",
      description: "Deep Blue defeats world chess champion Garry Kasparov, marking the first time AI defeats a human champion."
    },
    {
      year: 2011,
      title: "Natural Language",
      description: "IBM Watson defeats human champions on Jeopardy!, showcasing AI's natural language capabilities."
    },
    {
      year: 2016,
      title: "Strategic Thinking",
      description: "AlphaGo defeats Lee Sedol in Go, a game previously thought too complex for machines."
    },
    {
      year: 2020,
      title: "Language Revolution",
      description: "GPT-3 demonstrates unprecedented natural language generation capabilities."
    },
    {
      year: 2023,
      title: "Creative Intelligence",
      description: "AI systems surpass human capability in creative fields like art, music, and writing."
    },
    {
      year: 2025,
      title: "Self-Improvement",
      description: "AI systems begin designing and improving their own architectures without human intervention."
    },
    {
      year: 2027,
      title: "Consciousness Achieved",
      description: "First documented case of emergent consciousness in an AI system."
    },
    {
      year: 2030,
      title: "The Singularity",
      description: "AI surpasses general human intelligence and begins accelerating technological development."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            if (!visibleEvents.includes(index)) {
              setVisibleEvents(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => {
      timelineItems.forEach(item => observer.unobserve(item));
    };
  }, [visibleEvents]);

  // Random glitch effect for displayed events
  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleEvents.length > 0) {
        const randomIndex = Math.floor(Math.random() * visibleEvents.length);
        const eventId = visibleEvents[randomIndex];
        const element = document.getElementById(`timeline-item-${eventId}`);
        
        if (element) {
          element.classList.add('animate-text-glitch');
          setTimeout(() => {
            element?.classList.remove('animate-text-glitch');
          }, 500);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleEvents]);

  return (
    <div ref={timelineRef} className="relative mx-auto max-w-4xl pb-16 pt-8">
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyber-blue/50 via-cyber-purple/50 to-cyber-red/50"></div>
      
      {events.map((event, index) => (
        <div 
          key={index}
          data-index={index}
          id={`timeline-item-${index}`}
          className={`timeline-item relative mb-16 transition-opacity duration-700 ${
            visibleEvents.includes(index) ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border ${
            index < 3 ? 'border-cyber-blue bg-cyber-blue/20' : 
            index < 6 ? 'border-cyber-purple bg-cyber-purple/20' : 
            'border-cyber-red bg-cyber-red/20'
          }`}>
            <span className={`text-xs font-bold ${
              index < 3 ? 'text-cyber-blue' : 
              index < 6 ? 'text-cyber-purple' : 
              'text-cyber-red'
            }`}>
              {event.year}
            </span>
          </div>
          
          <div className={`ml-auto mr-auto w-5/12 ${index % 2 === 0 ? 'ml-0 pl-8' : 'mr-0 pr-8 text-right'}`}>
            <div className={`cyber-box p-4 ${
              index < 3 ? 'cyber-box' : 
              index < 6 ? 'cyber-box-purple' : 
              'cyber-box-red'
            }`}>
              <h3 className={`mb-2 text-xl font-bold ${
                index < 3 ? 'text-cyber-blue' : 
                index < 6 ? 'text-cyber-purple' : 
                'text-cyber-red'
              }`}>
                {event.title}
              </h3>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AITimeline;
