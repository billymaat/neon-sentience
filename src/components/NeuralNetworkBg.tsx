
import React, { useEffect, useRef } from 'react';

interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface NeuralConnection {
  from: number;
  to: number;
  strength: number;
}

const NeuralNetworkBg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    // Initial setup
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create nodes
    const nodeCount = Math.min(Math.floor(window.innerWidth / 50), 50);
    const nodes: NeuralNode[] = [];
    const connections: NeuralConnection[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 3 + 2
      });
    }

    // Create connections
    for (let i = 0; i < nodes.length; i++) {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionCount; j++) {
        const toIndex = Math.floor(Math.random() * nodes.length);
        if (i !== toIndex) {
          connections.push({
            from: i,
            to: toIndex,
            strength: Math.random() * 0.4 + 0.1
          });
        }
      }
    }

    let animationFrameId: number;
    let lastTime = 0;
    const pulseRate = 3000; // milliseconds
    let lastPulse = 0;
    let currentPulse = 0;

    const render = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Clear canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Update pulse
      if (time - lastPulse > pulseRate) {
        currentPulse = 1;
        lastPulse = time;
      } else {
        currentPulse = Math.max(0, currentPulse - 0.005);
      }

      // Move nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Boundary checking
        if (node.x < 0 || node.x > window.innerWidth) node.vx *= -1;
        if (node.y < 0 || node.y > window.innerHeight) node.vy *= -1;
      });

      // Draw connections
      connections.forEach(conn => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];
        const dx = toNode.x - fromNode.x;
        const dy = toNode.y - fromNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const pulseStrength = currentPulse * (1 - distance / 300);
          const opacity = Math.max(0, 0.05 + pulseStrength * 0.2);
          
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * conn.strength})`;
          ctx.lineWidth = 0.5 + pulseStrength;
          ctx.stroke();
        }
      });

      // Draw nodes
      nodes.forEach(node => {
        const pulseSize = currentPulse * 2;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = currentPulse > 0.5 
          ? `rgba(157, 0, 255, ${0.1 + currentPulse * 0.2})`
          : `rgba(0, 255, 255, ${0.1 + currentPulse * 0.2})`;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.size > 3 
          ? `rgba(0, 255, 255, ${0.6 + currentPulse * 0.4})`
          : `rgba(0, 255, 255, ${0.3 + currentPulse * 0.2})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-70"
    />
  );
};

export default NeuralNetworkBg;
