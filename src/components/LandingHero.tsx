"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function LandingHero() {
  return (
    <section className="relative bg-navy text-ivory overflow-hidden h-dvh min-h-[640px] flex flex-col">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-48 -right-40 h-[36rem] w-[36rem] rounded-full bg-ivory/[0.035] blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -left-40 h-[32rem] w-[32rem] rounded-full bg-ivory/[0.025] blur-3xl"
      />

      <div className="relative flex-1 container-editorial pt-28 md:pt-32 pb-10 md:pb-14 flex flex-col justify-center gap-10 md:gap-14">
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
          className="serif-display text-ivory text-[clamp(2.25rem,5.6vw,5.25rem)] leading-[1.05] tracking-[-0.02em] max-w-[22ch]"
        >
          Wenn Kommunikation schwierig wird, beginnt meine Arbeit.
        </motion.h1>

        <motion.div
          custom={2}
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
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative container-editorial pb-6 md:pb-8"
      >
        <div className="h-px bg-ivory/15" />
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-ivory/60">
          <span className="label text-ivory/50">25+ Jahre Erfahrung</span>
          <span aria-hidden className="h-3 w-px bg-ivory/15" />
          <span className="label text-ivory/50">Hamburg & remote</span>
          <span aria-hidden className="h-3 w-px bg-ivory/15" />
          <span className="label text-ivory/50">Deutsch · Englisch</span>
        </div>
      </motion.div>
    </section>
  );
}
