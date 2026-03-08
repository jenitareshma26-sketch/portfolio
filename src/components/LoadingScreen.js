import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2800;
    const interval = 20;
    const step = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Particle positions (static, decorative)
  const particles = [
    { x: '15%', y: '20%', size: 2, delay: 0.2 },
    { x: '80%', y: '15%', size: 3, delay: 0.5 },
    { x: '10%', y: '75%', size: 2, delay: 0.8 },
    { x: '85%', y: '70%', size: 2, delay: 0.3 },
    { x: '50%', y: '10%', size: 1.5, delay: 0.6 },
    { x: '25%', y: '85%', size: 2.5, delay: 0.4 },
    { x: '70%', y: '85%', size: 1.5, delay: 0.7 },
    { x: '90%', y: '45%', size: 2, delay: 0.9 },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, #0a0012 0%, #000000 70%)' }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(153,102,204,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-amethyst/30"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0], y: [0, -20, 0] }}
          transition={{ duration: 3, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Logo Container */}
      <motion.div
        className="relative w-28 h-28 md:w-32 md:h-32 mb-12"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Outer Glow Ring */}
        <motion.div
          className="absolute inset-[-8px] rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: 'radial-gradient(circle, rgba(153,102,204,0.15) 60%, transparent 70%)',
          }}
        />

        {/* SVG Circle Progress */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {/* Background track */}
          <circle
            cx="50" cy="50" r="45"
            fill="none"
            stroke="rgba(153, 102, 204, 0.1)"
            strokeWidth="1.5"
          />
          {/* Progress arc */}
          <motion.circle
            cx="50" cy="50" r="45"
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="283"
            initial={{ strokeDashoffset: 283 }}
            animate={{ strokeDashoffset: 283 - (283 * progress) / 100 }}
            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7744AA" />
              <stop offset="50%" stopColor="#9966CC" />
              <stop offset="100%" stopColor="#B399D6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Monogram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="font-poppins font-bold text-2xl md:text-3xl tracking-widest"
            style={{
              background: 'linear-gradient(135deg, #B399D6 0%, #9966CC 50%, #7744AA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 12px rgba(153,102,204,0.4))',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          >
            JR
          </motion.span>
        </div>
      </motion.div>

      {/* Name — letter-by-letter reveal */}
      <div className="mb-2 overflow-hidden">
        <motion.h1
          className="text-white font-poppins font-semibold text-2xl md:text-3xl tracking-[0.4em] uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Jenita Reshma
        </motion.h1>
      </div>

      {/* Decorative Line */}
      <motion.div
        className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-amethyst to-transparent mb-4"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
        style={{ boxShadow: '0 0 8px rgba(153,102,204,0.4)' }}
      />

      {/* Subtitle */}
      <motion.p
        className="text-silver/40 font-inter text-xs md:text-sm tracking-[0.3em] uppercase mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
      >
        Computer Engineering Student
      </motion.p>

      {/* Progress Section */}
      <motion.div
        className="w-48 md:w-64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <div className="w-full h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #7744AA, #9966CC, #B399D6)',
              boxShadow: '0 0 12px rgba(153, 102, 204, 0.5)',
            }}
          />
        </div>
        <motion.p
          className="text-silver/30 text-[10px] font-inter text-center mt-3 tabular-nums tracking-widest"
          animate={{ opacity: progress > 0 ? 1 : 0 }}
        >
          {Math.round(progress)}%
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
