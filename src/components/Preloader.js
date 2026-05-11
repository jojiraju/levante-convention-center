"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [percentage, setPercentage] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        const increment = Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Circle properties
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader-overlay"
          variants={{
            initial: { opacity: 1 },
            exit: { opacity: 0, transition: { duration: 0.5 } }
          }}
          initial="initial"
          exit="exit"
          style={{ 
            backgroundColor: '#0A1128', 
            zIndex: 9999, 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div style={{ position: 'relative', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* SVG Circle Loader */}
            <svg width="150" height="150" viewBox="0 0 150 150" style={{ transform: 'rotate(-90deg)' }}>
              {/* Background Circle */}
              <circle
                cx="75"
                cy="75"
                r={radius}
                fill="transparent"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
              />
              {/* Progress Circle */}
              <motion.circle
                cx="75"
                cy="75"
                r={radius}
                fill="transparent"
                stroke="var(--secondary)"
                strokeWidth="2"
                strokeDasharray={circumference}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.1, ease: "linear" }}
                strokeLinecap="round"
              />
            </svg>
            
            {/* Percentage Text */}
            <span style={{ 
              position: 'absolute', 
              color: '#ffffff', 
              fontSize: '26px', 
              fontFamily: 'var(--font-sans)',
              fontWeight: '400'
            }}>
              {percentage}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
