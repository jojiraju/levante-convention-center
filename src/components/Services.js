"use client";

import { motion } from "framer-motion";
import { HiSparkles, HiBeaker, HiLightBulb, HiShieldCheck } from "react-icons/hi";
import RevealText from "./RevealText";
import styles from "./Services.module.css";

const services = [
  {
    title: "Event Planning",
    icon: <HiSparkles />,
    description: "Expert coordinators to bring your vision to life with surgical precision and artistic style.",
    tag: "Personalized"
  },
  {
    title: "Gourmet Catering",
    icon: <HiBeaker />,
    description: "A culinary journey tailored to your guests' palates, from local delicacies to global flavors.",
    tag: "Fine Dining"
  },
  {
    title: "Premium Tech",
    icon: <HiLightBulb />,
    description: "Cutting-edge AV, high-speed connectivity, and immersive lighting systems for a seamless experience.",
    tag: "Modern"
  },
  {
    title: "Security & Privacy",
    icon: <HiShieldCheck />,
    description: "Discrete, professional security services ensuring a safe and private environment for elite gatherings.",
    tag: "Elite"
  }
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesMain}>
      <div className={styles.bgGlow} />

      <div className="container">
        <div className="text-center mb-24">
          <RevealText>
            <span className="text-[var(--secondary)] uppercase tracking-[0.6em] text-[0.65rem] font-bold mb-6 block">Seamless Experiences</span>
          </RevealText>
          <RevealText>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1' }}>Unparalleled Services</h1>
          </RevealText>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              
              <span className={styles.tag}>{service.tag}</span>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              
              <div className={styles.line} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
