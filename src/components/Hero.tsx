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
  hidden: { y: 16, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.08 + i * 0.06, duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export function Hero({
  eyebrow = "Bestmann & Schmidt · Seit 2007",
  headline = "Nachhaltige Leistungssteigerung durch menschliche Klärung.",
  description = "Specialists for Mediation & Management Consulting. Wir begleiten Führungskräfte und Organisationen dort, wo Sachfragen auf Beziehungsfragen treffen.",
  imageLabel = "Studio · Hamburg",
  imageSrc,
  imageAlt,
  meta = [
    { label: "Standorte", value: "Hamburg · Wien · Zürich" },
    { label: "Mandate seit", value: "2007" },
    { label: "Sprachen", value: "DE · EN · FR" },
  ],
}: HeroProps) {
  return (
    <section className="relative pt-36 md:pt-48 pb-20 md:pb-28">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="col-span-12 flex items-center gap-4"
          >
            <span className="h-px w-8 bg-navy/40" />
            <span className="label text-navy/65">{eyebrow}</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="col-span-12 lg:col-span-10 display-1 text-navy"
          >
            {headline}
          </motion.h1>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-7"
          >
            <p className="lede">{description}</p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/kontakt" className="btn-magnetic on-ivory">
                <span className="label">Erstgespräch vereinbaren</span>
                <ArrowRight size={14} strokeWidth={1.75} />
              </Link>
              <Link href="/mediation" className="label link-underline text-navy">
                Unsere Disziplinen
              </Link>
            </div>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="col-span-12"
          >
            <div className="divider-line" />
            <dl className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
              {meta.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <dt className="label text-navy/50">{m.label}</dt>
                  <dd className="text-[15px] text-navy/85 font-medium">{m.value}</dd>
                </div>
              ))}
              <div className="flex flex-col gap-1 md:text-right">
                <dt className="label text-navy/50">Nummer</dt>
                <dd className="text-[15px] text-navy/85 font-medium tabular-nums">001 / 001</dd>
              </div>
            </dl>
          </motion.div>

          <motion.figure
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="col-span-12"
          >
            {imageSrc ? (
              <div className="relative aspect-16/10 w-full overflow-hidden bg-navy/5">
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? imageLabel}
                  fill
                  priority
                  sizes="(min-width: 1440px) 1280px, (min-width: 768px) 92vw, 100vw"
                  className="object-cover"
                />
                {imageLabel ? (
                  <figcaption className="absolute left-5 bottom-5 label text-ivory/90 drop-shadow-[0_1px_8px_rgba(13,27,43,0.55)]">
                    {imageLabel}
                  </figcaption>
                ) : null}
              </div>
            ) : (
              <ImageFallback label={imageLabel} aspect="landscape" />
            )}
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
