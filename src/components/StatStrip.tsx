"use client";

import { motion } from "framer-motion";

type Stat = { value: string; label: string; context?: string };

const defaults: Stat[] = [
  { value: "17+", label: "Jahre Praxis", context: "Gegründet 2007" },
  { value: "240", label: "Mediationen", context: "Kumuliert bis 2024" },
  { value: "92%", label: "Einigungsquote", context: "Letzte 5 Jahre" },
  { value: "3", label: "Standorte", context: "Hamburg · Wien · Zürich" },
];

export function StatStrip({ stats = defaults }: { stats?: Stat[] }) {
  return (
    <section className="py-20 md:py-24 bg-paper text-navy">
      <div className="container-editorial">
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-8 bg-navy/40" />
          <span className="label text-navy/65">Kennzahlen</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] as const }}
              className="flex flex-col gap-2 rule-top pt-5"
            >
              <span className="text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[0.95] tracking-[-0.03em] font-medium tabular-nums">
                {stat.value}
              </span>
              <span className="text-[15px] text-navy/80 font-medium mt-2">{stat.label}</span>
              {stat.context ? (
                <span className="label text-navy/45">{stat.context}</span>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
