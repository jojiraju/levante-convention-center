"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Venues from "@/components/Venues";
import Catalog from "@/components/Catalog";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Venues />
      <Catalog />
      <Services />
      <Gallery />
      <section className="py-32 text-center flex flex-col items-center justify-center" 
               style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)', minHeight: '60vh' }}>
        <h2 className="mb-6" style={{ fontSize: '0.8rem', letterSpacing: '0.4em' }}>Ready to begin?</h2>
        <h1 className="mb-12 max-w-4xl" style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', lineHeight: '1.1' }}>
          Let's Create Something Remarkable Together
        </h1>
        <Link href="/book" className="premium-button" style={{ borderColor: 'var(--primary)', color: 'var(--primary)', textDecoration: 'none' }}>
          Get in Touch
        </Link>
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
