"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

export default function Navbar({ onBookNow }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%", backgroundColor: 'var(--secondary)' }}
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5percent py-6 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md py-4" : "bg-transparent"
        }`}
        style={{ backgroundColor: scrolled ? "rgba(10, 17, 40, 0.9)" : "transparent" }}
      >
        <div className="logo">
          <Link href="/" className="flex flex-col items-center">
            <span style={{ 
              fontFamily: "var(--font-serif)", 
              fontSize: "1.8rem", 
              lineHeight: "1",
              letterSpacing: "0.2em",
              fontWeight: "400",
              borderBottom: "1px solid var(--secondary)",
              paddingBottom: "5px"
            }}>
              LEVANTE
            </span>
            <span className="text-[0.5rem] tracking-[0.5em] mt-2 opacity-60 uppercase font-sans" style={{ fontSize: '0.5rem', letterSpacing: '0.5em' }}>
              Convention Center
            </span>
          </Link>
        </div>

        <div className="links hidden md:flex gap-8 lg:gap-16 uppercase font-light" style={{ fontSize: '0.65rem', letterSpacing: '0.3em' }}>
          {["About", "Venues", "Services", "Pricing", "Gallery", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item === "Pricing" ? "catalog" : item.toLowerCase()}`} 
              className="relative group overflow-hidden"
            >
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">{item}</span>
              <span className="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full" style={{ color: 'var(--secondary)' }}>{item}</span>
            </Link>
          ))}
        </div>

        <div className="cta">
          <button onClick={onBookNow} className="premium-button py-2 px-6">Book Now</button>
        </div>
      </motion.nav>
    </>
  );
}
