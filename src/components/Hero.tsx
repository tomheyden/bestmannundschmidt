"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ImageFallback } from "@/components/ImageFallback";

type HeroProps = {
  eyebrow?: string;
  headline?: string;
  description?: string;
  imageLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  meta?: { label: string; value: string }[];
};

const fadeUp = {
  hidden: { y: 14, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.05 + i * 0.06, duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export function Hero({
  eyebrow = "Karen Bestmann · Coaching · Mediation · Training",
  headline = "Klarheit in Konflikten. Stärke in Kommunikation. Wirkung in Zusammenarbeit.",
  description = "Mediation, Coaching und Kommunikation für Führungskräfte, Teams und Organisationen. Über 25 Jahre Erfahrung — mit einem Kompass: Menschlichkeit.",
  imageLabel,
  imageSrc,
  imageAlt,
  meta = [
    { label: "Erfahrung", value: "25+ Jahre" },
    { label: "Tätig in", value: "Hamburg & remote" },
    { label: "Sprachen", value: "Deutsch · Englisch" },
  ],
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt ?? imageLabel ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover -z-20"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-linear-to-r from-navy/90 via-navy/70 to-navy/30"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-linear-to-t from-navy/80 via-navy/10 to-transparent"
          />
        </>
      ) : (
        <div aria-hidden className="absolute inset-0 -z-10 bg-navy" />
      )}

      <div className="container-editorial pt-36 md:pt-44 pb-16 md:pb-24 min-h-[78vh] flex flex-col justify-end">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="col-span-12 flex items-center gap-4"
          >
            <span className="h-px w-8 bg-ivory/40" />
            <span className="label text-ivory/70">{eyebrow}</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="col-span-12 lg:col-span-9 display-1 text-ivory"
          >
            {headline}
          </motion.h1>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col gap-6"
          >
            <p className="lede text-ivory/85">{description}</p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/kontakt" className="btn-magnetic on-navy">
                <span className="label">Erstgespräch vereinbaren</span>
                <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="col-span-12 mt-2"
          >
            <div className="h-px bg-ivory/20" />
            <dl className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
              {meta.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <dt className="label text-ivory/55">{m.label}</dt>
                  <dd className="text-[14px] text-ivory/90 font-medium">{m.value}</dd>
                </div>
              ))}
              <div className="flex flex-col gap-1 md:text-right">
                <dt className="label text-ivory/55">Nummer</dt>
                <dd className="text-[14px] text-ivory/90 font-medium tabular-nums">001 / 001</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>

      {!imageSrc && imageLabel ? (
        <div className="container-editorial pb-12">
          <ImageFallback label={imageLabel} aspect="landscape" />
        </div>
      ) : null}
    </section>
  );
}
