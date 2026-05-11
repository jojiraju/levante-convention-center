import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealText from "./RevealText";
import styles from "./Gallery.module.css";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: "/images/exterior.png", alt: "Main Entrance", size: "large", category: "Exterior" },
  { src: "/images/auditorium.jpg", alt: "Grand Auditorium", size: "medium", category: "Interior" },
  { src: "/images/ballroom.jpg", alt: "Dining Hall", size: "small", category: "Events" },
  { src: "/images/suites.jpg", alt: "Executive Suites", size: "small", category: "Interior" },
  { src: "/images/exterior-sign.jpg", alt: "Venue Signage", size: "small", category: "Exterior" },
  { src: "/images/auditorium-seats.jpg", alt: "Elite Seating", size: "medium", category: "Interior" },
  { src: "/images/auditorium-wide.jpg", alt: "Interior Panorama", size: "large", category: "Interior" }
];

const categories = ["All", "Exterior", "Interior", "Events"];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const galleryRef = useRef(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  useEffect(() => {
    const items = galleryRef.current.querySelectorAll(`.${styles.galleryItem}`);
    
    items.forEach((item) => {
      const img = item.querySelector("img");
      gsap.to(img, {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { 
      document.body.style.overflow = "auto";
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [selectedIdx]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className={styles.galleryMain}>
      <div className="container">
        <div className="flex flex-col items-center text-center mb-24">
          <RevealText>
            <span className="text-[var(--secondary)] uppercase tracking-[0.8em] text-[0.6rem] font-bold mb-8 block">Immersive Visuals</span>
          </RevealText>
          <RevealText>
            <h1 className={styles.title}>The Gallery</h1>
          </RevealText>
          <div className={styles.accentLine} />
        </div>

        <div className={styles.filterHeader}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span className={styles.filterText}>{cat}</span>
              {activeCategory === cat && (
                <motion.div layoutId="activeCat" className={styles.activeIndicator} />
              )}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          ref={galleryRef} 
          className={styles.masonryGrid}
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => {
              // Find original index for lightbox navigation
              const originalIndex = galleryImages.findIndex(img => img.src === image.src);
              
              return (
                <motion.div
                  layout
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  className={`${styles.galleryItem} ${styles[image.size]}`}
                  onClick={() => setSelectedIdx(originalIndex)}
                >
                  <div className={styles.imageWrapper}>
                    <img src={image.src} alt={image.alt} className={styles.image} />
                    <div className={styles.overlay}>
                      <span className={styles.imageAlt}>{image.alt}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightbox}
            onClick={() => setSelectedIdx(null)}
          >
            <button className={styles.closeBtn} onClick={() => setSelectedIdx(null)}>
              <HiX />
            </button>

            <button className={styles.navBtn} style={{ left: '2rem' }} onClick={handlePrev}>
              <HiChevronLeft />
            </button>

            <motion.div 
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -50 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className={styles.lightboxContent}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -100) handleNext(e);
                else if (swipe > 100) handlePrev(e);
              }}
            >
              <img 
                src={galleryImages[selectedIdx].src} 
                alt={galleryImages[selectedIdx].alt} 
                className={styles.lightboxImg}
                draggable="false"
                onClick={(e) => e.stopPropagation()}
              />
              <div className={styles.lightboxInfo}>
                <span className={styles.counter}>{selectedIdx + 1} / {galleryImages.length}</span>
                <p className={styles.caption}>{galleryImages[selectedIdx].alt}</p>
              </div>
            </motion.div>

            <button className={styles.navBtn} style={{ right: '2rem' }} onClick={handleNext}>
              <HiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
