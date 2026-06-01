import { MessageCircle } from 'lucide-react';
import { clinic } from './data';
import Header from './Header';
import Hero from './Hero';
import Advantages from './Advantages';
import Services from './Services';
import WhyUs from './WhyUs';
import HowItWorks from './HowItWorks';
import Team from './Team';
import Reviews from './Reviews';
import Contacts from './Contacts';
import FinalCTA from './FinalCTA';

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-center sm:flex-row sm:text-left lg:px-8">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} {clinic.name}.{' '}
          <span className="font-extrabold uppercase tracking-[0.22em] text-olzha-gold">ALMATY CLINIC</span>
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <a href={clinic.phoneMainHref} className="hover:text-olzha-blue transition">{clinic.phoneMain}</a>
          <a href={clinic.instagramHref} target="_blank" rel="noreferrer" className="hover:text-olzha-blue transition">{clinic.instagram}</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Team />
        <Reviews />
        <Contacts />
        <FinalCTA />
      </main>
      <Footer />

      {/* Mobile sticky WhatsApp button */}
      <a
        href={clinic.whatsappHref}
        className="whatsapp-glow fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 md:hidden"
      >
        <MessageCircle size={18} />
        Записаться в WhatsApp
      </a>
    </div>
  );
}
