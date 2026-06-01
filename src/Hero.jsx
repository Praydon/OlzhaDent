import { Star, ArrowRight, ShieldCheck, HeartPulse, CalendarCheck2, MapPin, CheckCircle2, Phone } from 'lucide-react';
import { clinic } from './data';

export default function Hero() {
  return (
    <section id="top" className="hero-gradient relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-olzha-sky/5 blur-[100px]" />
      <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-olzha-gold/5 blur-[80px]" />

      <div className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left: Content */}
          <div className="animate-fade-up">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-olzha-gold/10 px-3 py-1.5 text-xs font-bold text-olzha-gold">
                <Star size={12} className="fill-current" />
                {clinic.rating} рейтинг · {clinic.reviews} оценок
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-olzha-cream px-3 py-1.5 text-xs font-semibold text-olzha-navy">
                <MapPin size={12} />
                {clinic.city}
              </span>
            </div>

            <h1 className="mt-5 text-balance text-[2rem] font-extrabold leading-[1.15] tracking-tight text-olzha-navy sm:text-[2.5rem] lg:text-[2.85rem]">
              Стоматология с заботой о вашем здоровье и{' '}
              <span className="gradient-text">комфорте</span>
            </h1>

            <p className="mt-4 max-w-lg text-[15px] leading-7 text-slate-500">
              Лечение без боли, индивидуальный подход и гарантия на все работы.
              Запишитесь на бесплатную консультацию — это быстро и удобно.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={clinic.whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-olzha-navy to-olzha-blue px-6 py-3.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Записаться в WhatsApp
                <ArrowRight size={16} />
              </a>
              <a
                href={clinic.phoneMainHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-olzha-navy transition hover:-translate-y-0.5 hover:border-olzha-sky/40 hover:text-olzha-blue"
              >
                <Phone size={15} />
                Позвонить
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-[13px] font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-olzha-blue" />
                Лечение без боли
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-olzha-blue" />
                Гарантия на работы
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-olzha-blue" />
                Бесплатная консультация
              </span>
            </div>
          </div>

          {/* Right: Premium Info Card */}
          <div className="animate-fade-up-delay-2">
            <div className="relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card sm:p-7">
              {/* Gold accent line */}
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-olzha-gold via-olzha-gold-light to-olzha-gold" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-olzha-gold">Бесплатная консультация</p>
              <h3 className="mt-3 text-xl font-extrabold leading-snug text-olzha-navy sm:text-[1.4rem]">
                Оставьте заявку — подберём удобное время
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Бережный подход и запись без лишних звонков.
              </p>

              <div className="mt-5 space-y-2.5">
                {['Лечение без боли', 'Гарантия на работы', 'Индивидуальный подход'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-olzha-cream px-4 py-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-olzha-blue/10 text-olzha-blue">
                      <CheckCircle2 size={14} />
                    </div>
                    <p className="text-sm font-semibold text-olzha-navy">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href={clinic.whatsappHref}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-olzha-navy to-olzha-blue px-5 py-3.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Записаться
                <ArrowRight size={16} />
              </a>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <a href={clinic.whatsappHref} className="rounded-xl bg-slate-50 px-3.5 py-3 transition hover:bg-olzha-cream">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">WhatsApp</p>
                  <p className="mt-1 text-xs font-bold text-olzha-navy">{clinic.whatsapp}</p>
                </a>
                <a href={clinic.phoneMainHref} className="rounded-xl bg-slate-50 px-3.5 py-3 transition hover:bg-olzha-cream">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">Телефон</p>
                  <p className="mt-1 text-xs font-bold text-olzha-navy">{clinic.phoneMain}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
