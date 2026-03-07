import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Partners } from '@/components/partners';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { Booking } from '@/components/booking';
import { Footer } from '@/components/footer';
import { GarageDoorScroll } from '@/components/garage-door-scroll';

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Partners />
      <GarageDoorScroll />
      <Services />
      <About />
      <Booking />
      <Footer />
    </main>
  );
}
