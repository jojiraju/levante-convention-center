import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import styles from "./Header.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Venues", href: "#venues" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#catalog" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logoWrapper}>
            <span className={styles.logoMain}>LEVANTE</span>
            <span className={styles.logoSub}>Convention Center</span>
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={styles.navLink}>
                <span className={styles.linkText}>{link.name}</span>
                <span className={`${styles.linkText} ${styles.linkHover}`}>{link.name}</span>
              </Link>
            ))}
          </nav>

          <div className={styles.cta}>
            <Link href="/book" className={styles.bookBtn}>Book Now</Link>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.menuTrigger} 
              onClick={() => setIsMenuOpen(true)}
            >
              <div style={{ width: '30px', height: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <motion.span 
                  style={{ width: '100%', height: '2px', backgroundColor: '#fff', display: 'block', borderRadius: '10px' }}
                />
                <motion.span 
                  style={{ width: '100%', height: '2px', backgroundColor: '#fff', display: 'block', borderRadius: '10px' }}
                />
                <motion.span 
                  style={{ width: '100%', height: '2px', backgroundColor: '#fff', display: 'block', borderRadius: '10px' }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className={styles.mobileOverlay}
          >
            <div className={styles.closeWrapper}>
              <motion.button 
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                whileHover={{ rotate: 90 }}
                onClick={() => setIsMenuOpen(false)} 
                className={styles.closeBtn}
              >
                <div style={{ width: '35px', height: '35px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ position: 'absolute', width: '100%', height: '2px', backgroundColor: '#fff', transform: 'rotate(45deg)', borderRadius: '10px' }} />
                  <span style={{ position: 'absolute', width: '100%', height: '2px', backgroundColor: '#fff', transform: 'rotate(-45deg)', borderRadius: '10px' }} />
                </div>
              </motion.button>
            </div>

            <nav className={styles.mobileNav}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className={styles.mobileNavLink}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className={styles.mobileCtaWrapper}>
              <Link 
                href="/book" 
                onClick={() => setIsMenuOpen(false)}
                className={styles.mobileCta}
              >
                Start Your Journey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
