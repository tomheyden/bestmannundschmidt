"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { y: 18, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.08 + i * 0.08,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function LandingHero() {
  return (
    <section className="gradient-navy relative text-ivory overflow-hidden h-dvh min-h-[560px] flex flex-col isolate">
      <div className="relative flex-1 container-editorial pt-28 md:pt-32 pb-12 md:pb-16 flex flex-col justify-center gap-8 md:gap-10">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center gap-4"
        >
          <span className="h-px w-8 bg-ivory/40" />
          <span className="label text-ivory/70">
            Karen Bestmann · Coaching · Mediation · Training
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="serif-display text-ivory text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.06] tracking-[-0.018em] max-w-[22ch]"
        >
          Klarheit in Konflikten.<br />Stärke in Kommunikation.<br />Wirkung in Zusammenarbeit.
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-ivory/80 text-[clamp(0.95rem,1.1vw,1.0625rem)] leading-relaxed max-w-[58ch]"
        >
          Coaching, Mediation und Kommunikation für Führungskräfte, Mitarbeitende, Teams und Organisationen.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <Link href="/kontakt" className="btn-magnetic on-navy">
            <span className="label">Erstgespräch anfragen</span>
            <ArrowRight size={14} strokeWidth={1.75} />
          </Link>
          <Link
            href="/about"
            className="label text-ivory/90 hover:text-ivory link-underline"
          >
            Mehr erfahren
          </Link>
        </motion.div>
      </div>

      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative container-editorial pb-6 md:pb-8"
      >
        <div className="h-px bg-ivory/20" />
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-[12px] text-ivory/65">
          <span className="label text-ivory/55">25+ Jahre Erfahrung</span>
          <span aria-hidden className="h-3 w-px bg-ivory/20" />
          <span className="label text-ivory/55">Hamburg · Kiel · Bundesweit</span>
          <span aria-hidden className="h-3 w-px bg-ivory/20" />
          <span className="label text-ivory/55">Deutsch</span>
        </div>
      </motion.div>
    </section>
  );
}
