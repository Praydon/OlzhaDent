import { HeartPulse, ShieldCheck, Users, CalendarCheck2, MessageCircle } from 'lucide-react';

const items = [
  { icon: HeartPulse, title: 'Лечение без боли', text: 'Бережный подход и спокойный приём с вниманием к комфорту.', color: 'bg-rose-50 text-rose-500' },
  { icon: ShieldCheck, title: 'Гарантия на работы', text: 'Понятные рекомендации и аккуратное выполнение.', color: 'bg-emerald-50 text-emerald-500' },
  { icon: Users, title: 'Индивидуальный подход', text: 'План лечения подбирается под вашу ситуацию.', color: 'bg-blue-50 text-blue-500' },
  { icon: CalendarCheck2, title: 'Бесплатная консультация', text: 'Удобный старт для знакомства с клиникой.', color: 'bg-amber-50 text-amber-500' },
  { icon: MessageCircle, title: 'Запись в WhatsApp', text: 'В пару сообщений без звонков и ожидания.', color: 'bg-green-50 text-green-500' },
];

export default function Advantages() {
  return (
    <section id="advantages" className="section-cream scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-olzha-blue">Преимущества</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-olzha-navy sm:text-3xl">
            Спокойный подход к лечению
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
            Пациент быстро понимает, почему клинике можно доверять.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <div key={item.title} className="card-premium rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.color}`}>
                <item.icon size={20} />
              </div>
              <h3 className="mt-3.5 text-[15px] font-bold text-olzha-navy">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
