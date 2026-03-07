'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Lock, ShieldCheck } from 'lucide-react';

export function GarageDoorScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sledujeme progress scrollování v rámci tohoto kontejneru
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Mapování scrollu (0 až 1) na posun vrat (0% až -100%)
  const doorY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  
  // Postupné zobrazení obsahu za vraty
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.8], [40, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-background">
      {/* Sticky kontejner, který zůstane na místě během scrollování */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 py-20">
        
        <div className="text-center absolute top-24 left-0 right-0 z-0">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
            Objevte naše <span className="text-primary italic">technologie</span>
          </h2>
          <p className="text-white/50">Scrollujte dolů pro otevření vrat</p>
        </div>

        {/* Rám garáže */}
        <div className="relative w-full max-w-5xl aspect-[4/3] md:aspect-[21/9] bg-[#1a1a1a] border-[12px] border-[#2a2a2a] rounded-t-xl shadow-2xl overflow-hidden mt-16">
          
          {/* Interiér (Obsah, který se odhalí po otevření) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
            <motion.div 
              style={{ opacity: contentOpacity, y: contentY }}
              className="text-center space-y-6"
            >
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(207,175,108,0.2)] border border-primary/20">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
                Vítejte v <span className="text-primary italic">bezpečí</span>
              </h3>
              <p className="text-white/60 text-lg max-w-lg mx-auto font-light">
                Naše garážová vrata kombinují špičkový design s maximální ochranou vašeho majetku.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-6">
                <div className="flex items-center gap-2 text-sm text-white/80 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Lock className="w-4 h-4 text-primary" />
                  <span>Bezpečnostní zámek</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Tepelná izolace</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Garážová vrata (Pohybují se nahoru) */}
          <motion.div 
            style={{ y: doorY }}
            className="absolute inset-0 w-full h-full bg-[#2a2a2a] flex flex-col z-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          >
            {/* Panely vrat */}
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="flex-1 border-b border-[#1a1a1a] border-t border-[#3a3a3a] relative flex items-center justify-center"
              >
                {/* Textura/detail panelu */}
                <div className="absolute inset-x-2 md:inset-x-4 inset-y-1 md:inset-y-2 border border-[#222] rounded-sm bg-[#2d2d2d] shadow-inner"></div>
                
                {/* Klika na druhém panelu odspodu */}
                {i === 3 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-3 md:h-4 bg-primary rounded-sm shadow-[0_2px_15px_rgba(207,175,108,0.4)] flex items-center justify-center z-20">
                    <div className="w-12 md:w-16 h-1 bg-background/50 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Spodní hrana s 3D stínem */}
            <div className="h-4 md:h-6 bg-[#1a1a1a] border-t border-[#3a3a3a] relative z-20">
              {/* Plastický stín pod vraty */}
              <div className="absolute top-full left-0 right-0 h-8 bg-gradient-to-b from-black/80 to-transparent blur-[2px]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
