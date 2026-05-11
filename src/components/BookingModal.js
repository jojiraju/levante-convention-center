"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Calendar as CalendarIcon } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  const inputStyle = {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid var(--border)',
    padding: '12px 16px',
    color: '#fff',
    outline: 'none',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-sans)',
    marginBottom: '20px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.6rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: 'var(--text-dim)',
    marginBottom: '8px'
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div key="booking-modal-overlay" style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)' }}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '550px',
              backgroundColor: '#0A1128',
              border: '1px solid var(--border)',
              padding: '40px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>

            <h2 style={{ fontSize: '2rem', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>Book an Event</h2>
            <p style={{ color: 'var(--secondary)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '30px' }}>
              Let's create something extraordinary
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label style={labelStyle}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Event Type</label>
                  <input
                    type="text"
                    name="event"
                    placeholder="e.g. Wedding"
                    required
                    value={formData.event}
                    onChange={handleChange}
                    style={{ ...inputStyle, marginBottom: 0 }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Date</label>
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

              <div className="form-group">
                <label style={labelStyle}>Number of Guests</label>
                <input
                  type="number"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div className="form-group">
                <label style={labelStyle}>Additional Details</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: 'none' }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="premium-button"
                style={{
                  width: '100%',
                  backgroundColor: 'var(--secondary)',
                  color: 'var(--primary)',
                  fontWeight: 'bold',
                  marginTop: '10px'
                }}
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
      <style jsx global>{`
        .custom-datepicker-wrapper {
          position: relative;
          width: 100%;
          display: block;
        }
        .custom-datepicker {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          padding: 12px 40px 12px 16px;
          color: #fff;
          outline: none;
          font-size: 0.9rem;
          font-family: var(--font-sans);
          border-radius: 4px;
          box-sizing: border-box;
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
        /* Hide number input spin buttons */
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
