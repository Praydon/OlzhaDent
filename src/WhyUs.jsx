import { CheckCircle2, Star } from 'lucide-react';
import { clinic } from './data';

const reasons = [
  { title: 'Разные направления', text: 'Ортодонтия, хирургия, ортопедия, лечение и профилактика.' },
  { title: 'Индивидуальный подход', text: 'План лечения подбирается после консультации.' },
  { title: 'Удобная запись', text: 'Записаться через WhatsApp без лишних звонков.' },
  { title: 'Внимательное отношение', text: 'Спокойная атмосфера и понятные консультации.' },
];

export default function WhyUs() {
  return (
    <section id="why" className="section-cream scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          {/* Left column */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-olzha-blue">Почему выбирают</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-olzha-navy sm:text-3xl">
              Доверие с первого контакта
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Пациенты ценят клинику за понятный сервис и аккуратный подход.
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-gradient-to-br from-olzha-navy to-olzha-blue p-5 text-white">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-olzha-gold text-olzha-gold" />)}
                </div>
                <p className="mt-3 text-3xl font-extrabold">{clinic.rating}</p>
                <p className="mt-1 text-xs text-white/60">рейтинг в 2GIS</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Оценки</p>
                <p className="mt-3 text-3xl font-extrabold text-olzha-navy">{clinic.reviews}</p>
                <p className="mt-1 text-xs text-slate-400">от пациентов</p>
              </div>
            </div>
          </div>

          {/* Right column - reasons */}
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="card-premium rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-olzha-blue/10 text-olzha-blue">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-olzha-navy">{r.title}</h3>
                <p className="mt-1.5 text-[13px] leading-5 text-slate-500">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
