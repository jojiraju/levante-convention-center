"use client";

import { motion } from "framer-motion";
import RevealText from "./RevealText";
import styles from "./Venues.module.css";

const venues = [
  {
    title: "Grand Atrium",
    capacity: "2,500 Guests",
    image: "/images/exterior.png",
    description: "Kerala's largest pillar-less atrium, offering a breathtaking first impression for mega-events.",
    size: styles.large,
    tag: "Flagship"
  },
  {
    title: "Majestic Stage",
    capacity: "1,500 Guests",
    image: "/images/ballroom.jpg",
    description: "A masterfully decorated stage designed for prestigious weddings and award ceremonies.",
    size: styles.tall,
    tag: "Signature"
  },
  {
    title: "Grand Auditorium",
    capacity: "800 Guests",
    image: "/images/auditorium.jpg",
    description: "Elite theater seating featuring signature 'Le' branding and world-class acoustics.",
    size: styles.small,
    tag: "Conference"
  },
  {
    title: "Executive Suites",
    capacity: "50 Guests",
    image: "/images/suites.jpg",
    description: "Private, modern architectural suites for VIP hosting and intimate corporate strategy sessions.",
    size: styles.wide,
    tag: "VIP"
  }
];

export default function Venues() {
  return (
    <section id="venues" className={styles.venuesMain}>
      <div className={styles.bgGlow} />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-24 relative">

          
          <div className="max-w-4xl relative z-10">
            <RevealText>
              <span className="text-[var(--secondary)] uppercase tracking-[0.6em] text-[0.65rem] font-bold mb-6 block">Discover</span>
            </RevealText>
            
            <RevealText>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1' }}>Iconic Spaces</h1>
            </RevealText>
          </div>
        </div>

        <div className={styles.bentoContainer}>
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={`${styles.bentoCard} ${venue.size} group`}
            >
              <img 
                src={venue.image} 
                alt={venue.title} 
                className={styles.image}
              />
              
              <div className={styles.overlay} />
              
              <div className={styles.content}>
                <div className={styles.topRow}>
                  <span className={styles.tag}>
                    {venue.tag}
                  </span>
                  <div className={styles.icon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </div>
                </div>

                <div className={styles.bottomInfo}>
                  <span className={styles.capacity}>{venue.capacity}</span>
                  <h3 className={styles.title}>{venue.title}</h3>
                  <p className={styles.description}>
                    {venue.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
