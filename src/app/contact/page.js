"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <main className={styles.contactMain}>
      <Navbar />
      
      <div className={styles.container}>
        <header className={styles.header}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.subtitle}
          >
            Connect With Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.title}
          >
            Let's Start a <br /> Conversation
          </motion.h1>
        </header>

        <div className={styles.grid}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.infoColumn}
          >
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Inquiries</span>
              <a href="mailto:hello@levante.com" className={styles.infoText}>hello@levante.com</a>
              <a href="tel:+917907018558" className={styles.infoText} style={{ marginTop: '10px' }}>+91 79070 18558</a>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Location</span>
              <p className={styles.infoText}>
                Moothedam, Kuttikkad, <br />
                Kerala, India 679331
              </p>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Socials</span>
              <div className={styles.socialGrid}>
                <a href="#" className={styles.socialItem}>Instagram</a>
                <a href="#" className={styles.socialItem}>Facebook</a>
                <a href="#" className={styles.socialItem}>Twitter</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={styles.formColumn}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Name</label>
                <input type="text" className={styles.input} required placeholder="Full Name" />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Email</label>
                <input type="email" className={styles.input} required placeholder="email@example.com" />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Subject</label>
                <input type="text" className={styles.input} placeholder="How can we help?" />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Message</label>
                <textarea className={styles.textarea} required placeholder="Tell us more about your event..."></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
