'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Booking } from '@/components/booking';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, ThermometerSun, Clock, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServisOkenPage() {
  return (
    <main className="flex-1 bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden [perspective:1000px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://qapi.cz/wp-content/uploads/2025/10/IMG_8266-1536x864.jpg"
            alt="Servis oken"
            fill
            className="object-cover opacity-30"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        </div>
        
        <div className="container relative z-10 px-6 md:px-12 text-center mt-20 [transform-style:preserve-3d]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(207,175,108,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_5px_rgba(207,175,108,0.8)]" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
              Profesionální péče
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter drop-shadow-lg"
          >
            Servis <span className="text-primary italic font-light">oken a dveří</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Profesionální servis plastových, hliníkových i dřevěných oken a dveří. Zajišťujeme odborné seřízení kování, výměnu těsnění, mazání mechanik a opravy.
          </motion.p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 relative z-20 -mt-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ThermometerSun, title: 'Dokonalé těsnění bez průvanu', desc: 'Seřízením a výměnou těsnění odstraníme úniky tepla a proudění studeného vzduchu do interiéru.' },
              { icon: Wrench, title: 'Tiché a plynulé otevírání', desc: 'Pročištění a seřízení kování zajistí hladký chod klik a pantů bez vrzání a zadrhávání.' },
              { icon: ShieldCheck, title: 'Úspora energií až desítky procent', desc: 'Správně seřízené okno dokáže výrazně snížit tepelné ztráty a tím i náklady na vytápění.' },
              { icon: Clock, title: 'Delší životnost oken', desc: 'Pravidelný servis zabraňuje opotřebení, deformacím křídel i poškození kování.' },
              { icon: Lock, title: 'Vyšší bezpečnost', desc: 'Zkontrolujeme správnou funkci uzávěrů a dorovnáme přítlaky pro bezpečné dovření.' },
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="bg-muted/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group shadow-xl"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 relative [perspective:1000px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,175,108,0.05),transparent_70%)]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[600px] rounded-2xl overflow-hidden group shadow-[0_20px_50px_-20px_rgba(207,175,108,0.3)] border border-white/10 [transform-style:preserve-3d]"
            >
              <motion.div className="absolute inset-0 w-full h-full" style={{ transform: "translateZ(-30px)" }}>
                <Image
                  src="https://qapi.cz/wp-content/uploads/2025/10/IMG_8265.jpg"
                  alt="Opravy a seřízení"
                  fill
                  className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 [transform-style:preserve-3d]"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 30, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl font-bold text-white tracking-tight drop-shadow-lg"
              >
                Komplexní servis a <span className="text-primary italic font-light">seřízení</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/60 font-light leading-relaxed text-lg"
              >
                Náš servis pomáhá odstranit průvan, špatné dovírání, zvýšený hluk z ulice, rosení oken a tuhé ovládání kliky. Technik přijede k vám domů, provede diagnostiku a kompletní servis na místě.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/60 font-light leading-relaxed text-lg"
              >
                Každé okno a dveře servisujeme s maximální pečlivostí — od seřízení přítlaku a pantů, přes vyčištění a mazání kování, až po výměnu těsnění. Používáme kvalitní komponenty a servisní materiály, aby byla zajištěna dlouhá životnost a správná funkce.
              </motion.p>
              <ul className="space-y-5">
                {['Seřízení přítlaku a chodu kování', 'Promazání pohyblivých částí', 'Výměna těsnění', 'Opravy poškozených dílů'].map((item, index) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 text-white/80 font-light group"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(207,175,108,0.1)]">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Link href="#rezervace" className="inline-flex items-center gap-3 text-primary uppercase tracking-[0.2em] font-bold text-xs hover:text-white transition-colors pt-8 group">
                  Objednat servis 
                  <span className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300 group-hover:translate-x-2 shadow-[0_0_10px_rgba(207,175,108,0.2)]">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Booking />
      <Footer />
    </main>
  );
}
