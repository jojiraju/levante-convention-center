"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ScrollToTop.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Show/hide button based on scroll position
    const toggleVisible = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisible);

    // Track scroll progress using ScrollTrigger
    const st = ScrollTrigger.create({
      start: 0,
      end: "bottom bottom",
      onUpdate: (self) => {
        setProgress(self.progress * 100);
      },
    });

    return () => {
      window.removeEventListener("scroll", toggleVisible);
      st.kill();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circle properties
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className={styles.scrollWrapper}
        >
          <svg className={styles.progressRing} width="100%" height="100%" viewBox="0 0 54 54">
            <circle
              className={styles.progressRingCircle}
              cx="27"
              cy="27"
              r={radius}
              stroke="currentColor"
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset }}
            />
          </svg>
          
          <div className={styles.scrollButton}>
            <HiArrowUp size={20} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
