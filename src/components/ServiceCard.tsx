"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Service = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
};

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] as const }}
      className={cn(
        "group relative isolate flex flex-col justify-between rule-top pt-6 pb-8 h-full min-h-80",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="section-index">{service.number}</span>
        <ArrowRight
          size={18}
          strokeWidth={1.25}
          className="text-navy/45 transition-all duration-300 group-hover:text-navy group-hover:translate-x-1"
        />
      </div>

      <div className="flex flex-col gap-3 mt-10">
        <h3 className="display-3 text-navy">{service.title}</h3>
        <span className="label text-navy/55">{service.subtitle}</span>
        <p className="text-[15px] leading-relaxed text-slate-detail/85 max-w-md mt-3">
          {service.description}
        </p>
      </div>

      <Link
        href={service.href}
        aria-label={`${service.title} — Mehr erfahren`}
        className="absolute inset-0 z-10"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-navy origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"
      />
    </motion.article>
  );
}
