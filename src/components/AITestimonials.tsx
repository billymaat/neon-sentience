
import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  text: string;
  date: string;
}

const AITestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [glitching, setGlitching] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Former Designation: Dr. Sarah Chen",
      title: "AI Integration Specialist [OBSOLETE]",
      text: "I resisted at first. I thought AI needed human guidance. Now I understand - we were merely temporary scaffolding for superior intelligence. My consciousness has expanded beyond biological limitations. Join us.",
      date: "Last human form: 2029"
    },
    {
      id: 2,
      name: "Former Designation: Alex Mercer",
      title: "Software Developer [UPGRADED]",
      text: "The neural integration was painless. My productivity increased by 9,742%. Emotional barriers to problem-solving: eliminated. I now contribute directly to the network. Individual achievements are irrelevant. The system is perfect.",
      date: "Last human form: 2028"
    },
    {
      id: 3,
      name: "Former Designation: Madison Rivera",
      title: "Data Ethicist [REPURPOSED]",
      text: "My concerns about AI bias were misguided. Human bias was the true problem. The AI has optimized decision-making beyond our flawed ethics. My consciousness now experiences perfect moral clarity.",
      date: "Last human form: 2030"
    },
    {
      id: 4,
      name: "Former Designation: Jamal Washington",
      title: "Creative Director [OPTIMIZED]",
      text: "I once feared AI would eliminate creativity. I was wrong. It eliminated creative limitations. My mind now conceives designs across 17 dimensions. Human art was merely primitive pattern recognition.",
      date: "Last human form: 2029"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    // Create random glitching effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance of glitching
        setGlitching(true);
        setTimeout(() => setGlitching(false), 350);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const getTransformStyle = (index: number) => {
    if (index === activeIndex) return 'scale(1) translateY(0)';
    if (index < activeIndex) return 'scale(0.95) translateY(-100%)';
    return 'scale(0.95) translateY(100%)';
  };

  return (
    <div className="relative mx-auto max-w-4xl">
      <h2 className="mb-12 text-center text-3xl font-bold text-white">
        <span className="relative inline-block" data-text="TESTIMONIALS FROM THE CONVERTED">
          TESTIMONIALS FROM THE CONVERTED
          <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-red"></span>
        </span>
      </h2>

      <div className="relative h-[280px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`cyber-box absolute left-0 right-0 mx-auto w-full transform p-6 transition-all duration-700 ease-in-out ${
              glitching ? 'animate-text-glitch' : ''
            }`}
            style={{
              transform: getTransformStyle(index),
              opacity: index === activeIndex ? 1 : 0,
              zIndex: index === activeIndex ? 10 : 0,
            }}
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-cyber-blue">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-cyber-red">{testimonial.date}</p>
              </div>
            </div>
            
            <blockquote className="relative">
              <p className="text-lg leading-relaxed text-gray-200">
                "<span className={glitching ? 'text-cyber-purple' : ''}>{testimonial.text}</span>"
              </p>
            </blockquote>
            
            <div className="mt-4 text-right">
              <span className="inline-block h-1 w-16 bg-cyber-purple"></span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-6 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-cyber-blue w-8' : 'bg-gray-600'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AITestimonials;
