"use client";

import { motion } from "framer-motion";
import RevealText from "./RevealText";
import styles from "./Catalog.module.css";
import { HiPlus } from "react-icons/hi";

const catalogItems = [
  {
    title: "Non-Ac",
    details: "500 seating, 400 dining + table & chairs",
    price: "₹60,000.00",
    image: "/images/exterior.png"
  },
  {
    title: "Ac",
    details: "2 hour - 60000 + 15000 | 4 hour - 60000 ...",
    price: "₹75,000.00",
    image: "/images/auditorium.jpg"
  }
];

export default function Catalog() {
  return (
    <section id="catalog" className={styles.catalogMain}>
      <div className={styles.bgGlow} />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <RevealText>
            <span className="text-[var(--secondary)] uppercase tracking-[0.6em] text-[0.65rem] font-bold mb-6 block">Our Offerings</span>
          </RevealText>
          <RevealText>
            <h1 className={styles.mainTitle}>Premium Packages</h1>
          </RevealText>
        </div>

        <div className={styles.grid}>
          {catalogItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} className={styles.image} />
                <div className={styles.imageOverlay} />
              </div>
              
              <div className={styles.content}>
                <div className={styles.info}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <div className={styles.divider} />
                  <p className={styles.details}>{item.details}</p>
                  <span className={styles.price}>{item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
