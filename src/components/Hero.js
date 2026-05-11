"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: "15%",
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={containerRef} className={styles.heroMain}>
      <div className={styles.imageWrapper}>
        <motion.img
          ref={imageRef}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.45 }}
          transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
          src="/images/exterior.png"
          alt="Levante Exterior"
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>

      <div className="container relative z-10">
        <div className={styles.content}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.topBadge}
          >
            <div className={styles.badgeLine} />
            <span className={styles.badgeText}>Est. 2024 — Kerala</span>
            <div className={styles.badgeLine} />
          </motion.div>

          <h1 className={styles.heading} style={{ fontSize: 'clamp(2.5rem, 11vw, 8.5rem)' }}>
            <motion.span
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="block mb-2"
            >
              Beyond the
            </motion.span>
            <motion.span
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.1, ease: [0.25, 1, 0.5, 1] }}
              className={`block ${styles.ordinary}`}
            >
              Ordinary
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.6 }}
            className={styles.description}
          >
            Discover a sanctuary of architectural brilliance and bespoke service, 
            crafted for those who seek the pinnacle of luxury in every moment.
          </motion.p>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 2 }}
            className={styles.buttonGroup}
          >
            <Link 
              href="/#venues" 
              className={styles.primaryBtn}
            >
              Explore Venues
              <div className={styles.shimmer} />
            </Link>
            
            <Link 
              href="/book" 
              className={styles.secondaryBtn}
            >
              <span>Book Your Event</span>
              <div className={styles.iconCircle}>
                <HiArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
