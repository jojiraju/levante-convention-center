import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealText from "./RevealText";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      y: "15%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-32">
      <div className="container grid md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="relative"
        >
          <div className="img-container rounded-sm border p-4" style={{ borderColor: 'var(--border)', height: '600px', position: 'relative', overflow: 'hidden' }}>
            <img 
              ref={imgRef}
              src="/images/ballroom.jpg" 
              alt="Grand Ballroom" 
              className="parallax-img rounded-sm" 
              style={{ width: '100%', height: '120%', objectFit: 'cover', position: 'absolute', top: '-10%' }}
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute hidden md:block" 
            style={{ bottom: '-40px', right: '-40px', backgroundColor: 'var(--secondary)', color: 'var(--primary)', padding: '2rem', maxWidth: '320px' }}
          >
            <h3 className="mb-4" style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>Elite Excellence</h3>
            <p className="font-sans" style={{ fontSize: '0.875rem' }}>Over 50,000 sq. ft. of versatile event space designed for the most prestigious gatherings.</p>
          </motion.div>
        </motion.div>

        <div className="flex flex-col">
          <RevealText>
            <h2 className="mb-6" style={{ fontSize: '0.8rem', letterSpacing: '0.4em', color: 'var(--secondary)' }}>Our Legacy</h2>
          </RevealText>
          
          <RevealText>
            <h1 className="mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}>A Canvas for Your Grandest Vision</h1>
          </RevealText>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-sans mb-8" 
            style={{ fontSize: '1.125rem', lineHeight: '1.6', color: 'var(--text-dim)' }}
          >
            Levante Convention Center stands as a testament to modern architectural brilliance and timeless elegance. 
            From intimate corporate strategy sessions to grand international galas, we provide the sophisticated 
            backdrop your event deserves.
          </motion.p>
          
          <ul className="mb-12 font-sans" style={{ fontSize: '0.875rem', letterSpacing: '0.05em' }}>
            {["State-of-the-Art Audiovisual Technology", "Customized Gastronomic Experiences", "Dedicated VIP Concierge Services"].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + (i * 0.1), duration: 0.8 }}
                className="flex items-center gap-4 mb-4"
              >
                <span style={{ width: '40px', height: '1px', backgroundColor: 'var(--secondary)' }}></span>
                {item}
              </motion.li>
            ))}
          </ul>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button className="premium-button">View Full Portfolio</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
