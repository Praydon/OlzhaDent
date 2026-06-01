import { Users, Wrench, BadgeCheck, Stethoscope } from 'lucide-react';

const team = [
  { icon: Users, role: 'Стоматолог-ортодонт', text: 'Выравнивание зубов и подбор ортодонтического решения.', gradient: 'from-blue-500 to-indigo-600' },
  { icon: Wrench, role: 'Стоматолог-хирург', text: 'Аккуратные хирургические вмешательства и подготовка.', gradient: 'from-olzha-blue to-olzha-navy' },
  { icon: BadgeCheck, role: 'Стоматолог-ортопед', text: 'Восстановление зубов и жевательной функции.', gradient: 'from-olzha-sky to-olzha-blue' },
  { icon: Stethoscope, role: 'Терапевт', text: 'Лечение зубов, профилактика и наблюдение.', gradient: 'from-emerald-500 to-teal-600' },
];

export default function Team() {
  return (
    <section id="team" className="section-cream scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-olzha-blue">Врачи</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-olzha-navy sm:text-3xl">
            Команда специалистов
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
            В клинике работают специалисты по разным направлениям стоматологии.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.role} className="card-premium group rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${m.gradient} text-white shadow-sm`}>
                <m.icon size={22} />
              </div>
              <h3 className="mt-4 text-base font-bold text-olzha-navy">{m.role}</h3>
              <p className="mt-2 text-[13px] leading-5 text-slate-500">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
