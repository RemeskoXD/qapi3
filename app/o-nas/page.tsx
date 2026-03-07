'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { About } from '@/components/about';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function ONasPage() {
  return (
    <main className="flex-1 bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden [perspective:1000px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://qapi.cz/wp-content/uploads/2025/10/IMG_6817.jpg"
            alt="O nás"
            fill
            className="object-cover opacity-40"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </div>
        
        <div className="container relative z-10 px-6 md:px-12 text-center mt-20 [transform-style:preserve-3d]">
          <motion.h1 
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            O <span className="text-primary italic">nás</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-white/60 font-light max-w-2xl mx-auto"
          >
            Poznejte tým profesionálů, kteří stojí za značkou QAPI.
          </motion.p>
        </div>
      </section>

      <About />
      
      <Footer />
    </main>
  );
}
