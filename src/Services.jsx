import { Stethoscope, Sparkles, UserRound, Wrench, BadgeCheck, Smile, Clock3, ChevronRight } from 'lucide-react';
import { waLink } from './data';

const services = [
  { icon: Stethoscope, title: 'Имплантация', text: 'Восстановление отсутствующих зубов с надёжным результатом.' },
  { icon: Sparkles, title: 'Брекеты', text: 'Ортодонтическое решение для ровного прикуса.' },
  { icon: Stethoscope, title: 'Лечение зубов', text: 'Кариес, чувствительность и другие частые проблемы.' },
  { icon: UserRound, title: 'Ортодонтия', text: 'Коррекция прикуса с понятным планом наблюдения.' },
  { icon: Wrench, title: 'Хирургия', text: 'Аккуратные хирургические процедуры.' },
  { icon: BadgeCheck, title: 'Ортопедия', text: 'Восстановление зубов и жевательной функции.' },
  { icon: Smile, title: 'Проф. чистка', text: 'Поддержание здоровья полости рта и свежести улыбки.' },
  { icon: Clock3, title: 'Консультация', text: 'Помогаем разобраться и выбрать следующий шаг.' },
];

export default function Services() {
  return (
    <section id="services" className="section-light scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-olzha-blue">Услуги</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-olzha-navy sm:text-3xl">
              Направления лечения
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">Выберите нужное направление — запишитесь через WhatsApp</p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const msg = `Здравствуйте! Хочу записаться на услугу "${s.title}" в Olzha Dent.`;
            return (
              <a
                key={s.title}
                href={waLink(msg)}
                className="card-premium group flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-olzha-blue/10 to-olzha-sky/10 text-olzha-blue transition group-hover:from-olzha-blue group-hover:to-olzha-navy group-hover:text-white">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-3.5 text-[15px] font-bold text-olzha-navy">{s.title}</h3>
                <p className="mt-1.5 flex-1 text-[13px] leading-5 text-slate-500">{s.text}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-olzha-blue opacity-0 transition group-hover:opacity-100">
                  Записаться <ChevronRight size={12} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
