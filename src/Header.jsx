import { useState, useEffect } from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { clinic } from './data';
import logoIcon from '../images/icon.png';

const navItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#why' },
  { label: 'Врачи', href: '#team' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-header border-b border-slate-200/60 shadow-soft' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#top" className="flex items-center gap-3.5">
          <img
            src={logoIcon}
            alt="Olzha Dent logo"
            className="h-16 w-16 shrink-0 object-contain sm:h-[4.5rem] sm:w-[4.5rem]"
          />
          <div className="leading-none">
            <p className="text-[1.05rem] font-extrabold tracking-tight text-olzha-navy sm:text-[1.45rem]">
              {clinic.name}
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-olzha-gold sm:text-[11px]">
              ALMATY CLINIC
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-[13px] font-semibold text-slate-600 transition hover:text-olzha-blue">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={clinic.phoneMainHref} className="hidden text-[13px] font-bold text-olzha-navy md:block">
            {clinic.phoneMain}
          </a>
          <a
            href={clinic.whatsappHref}
            className="inline-flex items-center gap-2 rounded-xl bg-olzha-navy px-4 py-2.5 text-[13px] font-bold text-white shadow-sm transition hover:bg-olzha-blue"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Записаться</span>
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden">
            <ChevronDown size={20} className={`transition ${menuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 pb-4 pt-2 lg:hidden">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block py-2.5 text-sm font-semibold text-slate-700 hover:text-olzha-blue">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
