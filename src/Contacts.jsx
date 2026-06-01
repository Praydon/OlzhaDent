import { MapPin, Phone, Instagram, MessageCircle, ArrowRight, Clock3 } from 'lucide-react';
import { clinic } from './data';

export default function Contacts() {
  return (
    <section id="contacts" className="section-cream scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-olzha-blue">Контакты</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-olzha-navy sm:text-3xl">
            Как нас найти
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {/* Contact cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-olzha-blue/10 text-olzha-blue">
                <MapPin size={18} />
              </div>
              <p className="mt-3 text-sm font-bold text-olzha-navy">{clinic.shortAddress}</p>
              <p className="mt-1 text-xs text-slate-400">{clinic.district}</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-olzha-blue/10 text-olzha-blue">
                <Phone size={18} />
              </div>
              <a href={clinic.phoneMainHref} className="mt-3 block text-sm font-bold text-olzha-navy">{clinic.phoneMain}</a>
              <a href={clinic.phoneAltHref} className="mt-1 block text-xs font-semibold text-olzha-blue">{clinic.phoneAlt}</a>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-50 text-pink-500">
                <Instagram size={18} />
              </div>
              <a href={clinic.instagramHref} target="_blank" rel="noreferrer" className="mt-3 block text-sm font-bold text-olzha-navy hover:text-olzha-blue transition">{clinic.instagram}</a>
              <p className="mt-1 text-xs text-slate-400">Instagram</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-500">
                <MessageCircle size={18} />
              </div>
              <a href={clinic.whatsappHref} className="mt-3 block text-sm font-bold text-olzha-navy">{clinic.whatsapp}</a>
              <p className="mt-1 text-xs text-slate-400">WhatsApp</p>
            </div>
          </div>

          {/* Map / route card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-olzha-gold">Маршрут</p>
                <h3 className="mt-2 text-xl font-extrabold text-olzha-navy">Olzha Dent, Алматы</h3>
              </div>
              <div className="rounded-xl bg-olzha-cream p-2.5 text-olzha-blue">
                <MapPin size={18} />
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-olzha-cream p-4">
              <p className="text-sm font-semibold text-olzha-navy">{clinic.shortAddress}</p>
              <p className="mt-1 text-xs text-slate-500">{clinic.district}</p>
            </div>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
              <a href={clinic.phoneMainHref} className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-[13px] font-bold text-olzha-navy transition hover:border-olzha-sky/40 hover:text-olzha-blue">
                <Phone size={14} />
                Позвонить
              </a>
              <a href={clinic.whatsappHref} className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-olzha-navy to-olzha-blue px-4 py-3 text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:shadow-glow">
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a href={clinic.mapsHref} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-olzha-cream px-4 py-3 text-[13px] font-bold text-olzha-navy transition hover:bg-olzha-gold/10">
                <MapPin size={14} />
                Маршрут
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
