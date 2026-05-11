import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Calendar as CalendarIcon } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingModal.module.css";

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
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
    const { name, event, date, guests, message } = formData;
    const phoneNumber = "917907018558";
    const formattedDate = date.toLocaleDateString('en-IN');

    const text = `Hello Levante! I would like to inquire about a booking.
    
Name: ${name}
Event Type: ${event}
Date: ${formattedDate}
Expected Guests: ${guests}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className={styles.overlay}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={styles.backdrop}
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className={styles.modalContent}
          >
            <button onClick={onClose} className={styles.closeButton}>
              <X size={24} />
            </button>

            <h2 className={styles.title}>Book an Event</h2>
            <p className={styles.subtitle}>
              Let's create something extraordinary
            </p>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="John Doe"
                />
              </div>

              <div className={styles.flexRow}>
                <div className={styles.flexItem}>
                  <label className={styles.label}>Event Type</label>
                  <input
                    type="text"
                    name="event"
                    placeholder="e.g. Wedding"
                    required
                    value={formData.event}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.flexItem}>
                  <label className={styles.label}>Date</label>
                  <div className="custom-datepicker-wrapper">
                    <DatePicker
                      selected={formData.date}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      className="custom-datepicker"
                      popperPlacement="bottom-end"
                    />
                    <CalendarIcon size={16} className="calendar-icon" />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Number of Guests</label>
                <input
                  type="number"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="150"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Additional Details</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Share any specific requirements..."
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}
      <style jsx global>{`
        .custom-datepicker-wrapper {
          position: relative;
          width: 100%;
        }
        .custom-datepicker {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          padding: 14px 40px 14px 18px;
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
          right: 14px;
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
    </AnimatePresence>
  );
}
