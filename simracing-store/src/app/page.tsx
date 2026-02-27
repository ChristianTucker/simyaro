"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  Monitor,
  Headset,
  MonitorPlay,
} from "lucide-react";
import SpeedCanvas from "@/components/SpeedCanvas";

const solutions = [
  {
    icon: Monitor,
    title: "Один монитор",
    desc: "Идеальный старт — качественный экран и вы уже на трассе.",
    price: "от 30 000 ₽",
    visual: 1,
    image: "/images/YARO_SINGLE.jpg",
  },
  {
    icon: MonitorPlay,
    title: "Три монитора",
    desc: "180° обзор как в болиде F1. Золотой стандарт симрейсинга.",
    price: "от 90 000 ₽",
    visual: 3,
    featured: true,
    image: "/images/YARO_TRIPPLE.jpg",
  },
  {
    icon: Headset,
    title: "VR шлем",
    desc: "Мы используем Pimax Crystal Light по умолчанию. Так же вы можете попробовать другие шлемы: Big Screen / Quest 3.",
    price: "от 45 000 ₽",
    visual: 0,
    image: "/images/YARO_VR.jpg",
  },
];

const simulators = [
  { name: "iRacing", url: "https://www.iracing.com/" },
  { name: "Assetto Corsa", url: "https://store.steampowered.com/app/244210/Assetto_Corsa/" },
  { name: "Assetto Corsa Competizione", url: "https://store.steampowered.com/app/805550/Assetto_Corsa_Competizione/" },
  { name: "Assetto Corsa EVO", url: "https://store.steampowered.com/app/3058630/Assetto_Corsa_EVO/" },
  { name: "Automobilista 2", url: "https://store.steampowered.com/app/1066890/Automobilista_2/" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO (compact banner) ── */}
      <section className="relative -mt-[72px] overflow-hidden bg-neutral-950 pb-10 pt-[calc(72px+2rem)] sm:pb-12 sm:pt-[calc(72px+3rem)]">
        <SpeedCanvas />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_30%,rgba(220,38,38,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-neutral-950/80" />

        <div className="hero-stripe fast left-0 top-[30%] w-[50%] racing-gradient" />
        <div className="hero-stripe med left-0 top-[60%] w-[30%] bg-white" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 mx-auto max-w-4xl section-padding text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[0.9] tracking-tighter"
          >
            <span className="text-white">ВСЁ ДЛЯ </span>
            <span className="hero-text-glow text-grad-red">СИМРЕЙСИНГА</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-5 text-sm text-neutral-400 sm:text-base"
          >
            Кокпиты, мониторы, VR, компьютеры — попробуйте прямо в магазине
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center"
          >
            <a
              href="tel:+79777220066"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl racing-gradient px-6 py-3 text-sm font-bold text-white shadow-xl shadow-red-600/25 transition-transform hover:scale-[1.03] active:scale-95 animate-glow"
            >
              <Phone size={15} strokeWidth={2.5} />
              +7 977 722-00-66
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-white/[0.1] transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <span className="flex items-center gap-1.5 text-xs text-neutral-500">
              <MapPin size={12} className="text-red-600" />
              ТЦ «Lille», 1-е Успенское ш., пос. Новое Лапино
            </span>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      </section>

      {/* ── THREE SOLUTIONS ── */}
      <section id="solutions" className="relative bg-neutral-950 py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 carbon-texture" />
        <div className="relative z-10 mx-auto max-w-6xl section-padding">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-center text-xl font-black text-white sm:mb-8 sm:text-3xl"
          >
            Выберите своё решение
          </motion.h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-xl hover:shadow-red-600/[0.07] ${
                  s.featured
                    ? "ring-2 ring-red-600/40 bg-neutral-900"
                    : "border border-white/[0.06] bg-neutral-900"
                }`}
              >
                {s.featured && (
                  <div className="absolute inset-x-0 top-0 h-[2px] racing-gradient" />
                )}

                {/* Product image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-800">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3">
                    <h3 className="text-base font-black text-white">{s.title}</h3>
                    <p className="text-lg font-bold text-grad-red">{s.price}</p>
                  </div>

                  <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                    {s.desc}
                  </p>

                  <p className="mt-auto text-[11px] font-semibold uppercase tracking-wider text-red-500/70">
                    Тест-драйв в магазине
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORE ── */}
      <section id="store" className="border-t border-white/[0.04] bg-neutral-925 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl section-padding">
          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-3 text-xl font-black text-white sm:text-2xl"
              >
                Приезжайте, <span className="text-grad-red">попробуйте</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="mb-5 text-sm leading-relaxed text-neutral-400"
              >
                Все конфигурации собраны в магазине. Садитесь за руль,
                почувствуйте разницу — и выберите своё. Решения под ключ для ПК и PlayStation.
              </motion.p>

              <div className="mb-5 space-y-2.5">
                {[
                  { icon: MapPin, text: "ТЦ «Lille», 1-е Успенское ш., пос. Новое Лапино, Московская обл.", sub: "Удобная парковка" },
                  { icon: Clock, text: "Пн–Вс: 10:00 – 21:00", sub: "Без выходных" },
                  { icon: Phone, text: "+7 977 722-00-66", sub: "Запись на тест-драйв", href: "tel:+79777220066" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg racing-gradient">
                      <item.icon size={13} className="text-white" />
                    </div>
                    <div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-bold text-white transition-colors hover:text-red-500">{item.text}</a>
                      ) : (
                        <p className="text-sm font-bold text-white">{item.text}</p>
                      )}
                      <p className="text-[11px] text-neutral-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="tel:+79777220066"
                className="inline-flex items-center gap-2 rounded-xl racing-gradient px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-transform hover:scale-[1.03] active:scale-95 animate-glow"
              >
                <Phone size={14} />
                Записаться на тест-драйв
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/[0.06] shadow-2xl shadow-black/40"
            >
              <Image
                src="/images/flyer.png"
                alt="SIMRACE.RU — Всё для симрейсинга"
                width={800}
                height={500}
                className="h-auto w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SIMULATORS WE USE ── */}
      <section className="border-t border-white/[0.04] bg-neutral-950 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl section-padding text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-xl font-black text-white sm:text-2xl"
          >
            Симуляторы которые мы используем
          </motion.h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {simulators.map((sim, i) => (
              <motion.a
                key={sim.name}
                href={sim.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl border border-white/[0.06] bg-neutral-900 px-5 py-3 text-sm font-bold text-neutral-300 transition-colors hover:border-red-600/40 hover:text-white"
              >
                {sim.name}
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
