"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Service = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
      className={cn(
        "group relative isolate overflow-hidden aspect-3/4 md:aspect-4/5 bg-navy",
        className,
      )}
    >
      {service.imageSrc ? (
        <Image
          src={service.imageSrc}
          alt={service.imageAlt ?? service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      ) : null}

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/30 to-navy/10 transition-opacity duration-500 group-hover:from-navy/95"
      />

      <div className="relative h-full flex flex-col justify-between p-6 md:p-7 text-ivory">
        <div className="flex items-start justify-between">
          <span className="label text-ivory/70 tabular-nums">{service.number}</span>
          <ArrowUpRight
            size={18}
            strokeWidth={1.4}
            className="text-ivory/70 transition-all duration-500 group-hover:text-ivory group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="label text-ivory/65">{service.subtitle}</span>
          <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1] tracking-[-0.015em] text-ivory">
            {service.title}
          </h3>
          <p className="text-[14px] leading-relaxed text-ivory/80 max-w-[36ch] mt-1">
            {service.description}
          </p>
        </div>
      </div>

      <Link
        href={service.href}
        aria-label={`${service.title} — Mehr erfahren`}
        className="absolute inset-0 z-10"
      />
    </motion.article>
  );
}
