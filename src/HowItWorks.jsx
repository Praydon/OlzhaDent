import { MessageCircle, Clock3, Stethoscope, ArrowRight } from 'lucide-react';
import { clinic } from './data';

const steps = [
  { num: '01', icon: MessageCircle, title: 'Пишите в WhatsApp', text: 'Оставляете короткое сообщение с вопросом или пожеланием.', accent: 'from-green-400 to-emerald-500' },
  { num: '02', icon: Clock3, title: 'Подбираем время', text: 'Администратор уточнит вопрос и подберёт удобную запись.', accent: 'from-olzha-blue to-olzha-sky' },
  { num: '03', icon: Stethoscope, title: 'Консультация', text: 'Спокойно обсуждаете ситуацию и возможные шаги лечения.', accent: 'from-olzha-navy to-olzha-blue' },
];

export default function HowItWorks() {
  return (
    <section className="section-light">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-olzha-blue">Как проходит запись</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-olzha-navy sm:text-3xl">
            Три шага до консультации
          </h2>
        </div>

        <div className="relative mt-10 grid gap-4 lg:grid-cols-3">
          {/* Connecting line on desktop */}
          <div className="absolute left-0 right-0 top-[3.5rem] hidden h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block" />

          {steps.map((s) => (
            <div key={s.num} className="card-premium relative rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-sm`}>
                  <s.icon size={20} />
                </div>
                <span className="text-2xl font-extrabold text-slate-100">{s.num}</span>
              </div>
              <h3 className="mt-4 text-base font-bold text-olzha-navy">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-slate-500">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={clinic.whatsappHref}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-olzha-navy to-olzha-blue px-6 py-3.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Записаться сейчас
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
