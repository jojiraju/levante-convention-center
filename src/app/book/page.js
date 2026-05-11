"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Calendar as CalendarIcon, ArrowLeft } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./BookPage.module.css";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    date: new Date(),
    guests: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, event, date, guests, message, email } = formData;
    const phoneNumber = "917907018558";
    const formattedDate = date.toLocaleDateString('en-IN');

    const text = `Hello Levante! I would like to inquire about a booking.
    
Name: ${name}
Email: ${email}
Event Type: ${event}
Date: ${formattedDate}
Expected Guests: ${guests}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className={styles.bookMain}>
      <Navbar />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.contentSide}
        >
          <span className={styles.tagline}>Reservation</span>
          <h1 className={styles.title}>Secure Your <br /> Place in History</h1>
          <p className={styles.description}>
            From intimate gatherings to grand celebrations, our dedicated events team
            is here to ensure every detail of your vision is executed with
            unparalleled precision and style.
          </p>

          <div className={styles.benefitList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitDot} />
              <span>Dedicated Event Coordinator</span>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitDot} />
              <span>Customized Floor Plans & Layouts</span>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitDot} />
              <span>Premium Tech & AV Support</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.formSide}
        >
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formSection}>
              <span className={styles.sectionTitle}>Personal Details</span>
              <div className={styles.grid}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className={styles.input} placeholder="John Doe" />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className={styles.input} placeholder="john@example.com" />
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <span className={styles.sectionTitle}>Event Specifics</span>
              <div className={styles.grid}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Event Type</label>
                  <input type="text" name="event" placeholder="e.g. Wedding" required value={formData.event} onChange={handleChange} className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Date</label>
                  <div className="custom-datepicker-wrapper">
                    <DatePicker
                      selected={formData.date}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      className="custom-datepicker"
                    />
                    <CalendarIcon size={16} className="calendar-icon" />
                  </div>
                </div>
                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Estimated Guests</label>
                  <input type="number" name="guests" required value={formData.guests} onChange={handleChange} className={styles.input} placeholder="150" />
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <span className={styles.sectionTitle}>Inspiration</span>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Additional Details</label>
                <textarea name="message" rows="3" value={formData.message} onChange={handleChange} className={styles.textarea} placeholder="Tell us more about your vision..."></textarea>
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </motion.div>
      </div>

      <Footer />

      <style jsx global>{`
        .custom-datepicker-wrapper {
          position: relative;
          width: 100%;
        }
        .react-datepicker-wrapper {
          width: 100%;
        }
        .custom-datepicker {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          padding: 14px 45px 14px 18px;
          color: #fff;
          outline: none;
          font-size: 0.95rem;
          font-family: var(--font-sans);
          border-radius: 4px;
          box-sizing: border-box;
          transition: all 0.3s ease;
        }
        .custom-datepicker:focus {
          border-color: var(--secondary);
          background-color: rgba(255, 255, 255, 0.07);
        }
        .calendar-icon {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--secondary);
          pointer-events: none;
          z-index: 10;
        }
        .react-datepicker {
          background-color: #0A1128 !important;
          border: 1px solid var(--border) !important;
          font-family: var(--font-sans) !important;
          color: #fff !important;
        }
        .react-datepicker__header {
          background-color: #141b35 !important;
          border-bottom: 1px solid var(--border) !important;
        }
        .react-datepicker__current-month, .react-datepicker__day-name, .react-datepicker__day {
          color: #fff !important;
        }
        .react-datepicker__day:hover {
          background-color: var(--secondary) !important;
          color: var(--primary) !important;
        }
        .react-datepicker__day--selected {
          background-color: var(--secondary) !important;
          color: var(--primary) !important;
        }
        .react-datepicker__triangle {
          display: none !important;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>
    </main>
  );
}
