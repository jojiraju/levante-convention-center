"use client";

import { motion } from "framer-motion";

export default function RevealText({ children, className, style }) {
  return (
    <div className={`overflow-hidden ${className}`} style={style}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
