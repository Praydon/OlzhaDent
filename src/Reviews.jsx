import { Star } from 'lucide-react';
import { clinic } from './data';

const reviews = [
  { text: 'Очень внимательное отношение и понятное объяснение лечения. Рекомендую клинику!', name: 'Пациент 2GIS' },
  { text: 'Удобно записаться через WhatsApp, приняли вовремя. Всё прошло отлично.', name: 'Пациент 2GIS' },
  { text: 'Понравился индивидуальный подход и спокойная атмосфера. Вернусь снова.', name: 'Пациент 2GIS' },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-light scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          {/* Rating block */}
          <div className="rounded-2xl bg-gradient-to-br from-olzha-navy to-olzha-blue p-6 text-white shadow-card sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">Средняя оценка</p>
            <div className="mt-4 flex items-end gap-3">
              <span className="text-5xl font-extrabold leading-none">{clinic.rating}</span>
              <div className="pb-1">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-olzha-gold text-olzha-gold" />)}
                </div>
                <p className="mt-1 text-xs text-white/50">{clinic.reviews} оценок</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Пациенты отмечают внимательное отношение и комфортное лечение.
            </p>
          </div>

          {/* Reviews */}
          <div className="grid gap-3 sm:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="card-premium rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
                <div className="flex gap-0.5 text-olzha-gold">
                  {[1,2,3,4,5].map(j => <Star key={j} size={13} className="fill-current" />)}
                </div>
                <p className="mt-3 text-[13px] leading-5 text-slate-600">"{r.text}"</p>
                <p className="mt-3 text-xs font-semibold text-slate-400">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
