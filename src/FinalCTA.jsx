import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { clinic } from './data';

export default function FinalCTA() {
  return (
    <section className="section-light">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-olzha-navy via-olzha-blue to-olzha-sky p-8 text-white shadow-card sm:p-10">
          {/* Decorative */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-olzha-gold/10 blur-2xl" />

          <div className="relative grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">Бесплатная консультация</p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Запишитесь на консультацию
              </h2>
              <p className="mt-2.5 max-w-md text-sm leading-6 text-white/60">
                Напишите в WhatsApp — администратор уточнит вопрос и подберёт удобное время.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href={clinic.whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-olzha-navy transition hover:-translate-y-0.5 hover:shadow-lg">
                Записаться в WhatsApp
                <ArrowRight size={16} />
              </a>
              <a href={clinic.phoneMainHref} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15">
                <Phone size={15} />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
