"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImageFallback } from "@/components/ImageFallback";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ContentSectionProps = {
  eyebrow?: string;
  heading: string;
  body: string | string[];
  quote?: string;
  cta?: { label: string; href: string };
  imageLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageAspect?: "portrait" | "landscape" | "square" | "tall";
  imageShape?: "rectangle" | "circle";
  align?: "image-left" | "image-right";
  parallaxIntensity?: number;
  tone?: "ivory" | "paper" | "navy";
};

export function ContentSection({
  eyebrow,
  heading,
  body,
  quote,
  cta,
  imageLabel,
  imageSrc,
  imageAlt,
  imageAspect = "landscape",
  imageShape = "rectangle",
  align = "image-right",
  parallaxIntensity = 0.04,
  tone = "ivory",
}: ContentSectionProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { kill(): void } | null = null;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      if (!imageRef.current) return;
      ctx = gsap.context(() => {
        gsap.fromTo(
          imageRef.current!.querySelector("[data-parallax]"),
          { yPercent: -parallaxIntensity * 100 },
          {
            yPercent: parallaxIntensity * 100,
            ease: "none",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }, imageRef);
    })();

    return () => {
      if (ctx) ctx.kill();
    };
  }, [parallaxIntensity]);

  const paragraphs = Array.isArray(body) ? body : [body];

  const toneClass =
    tone === "navy"
      ? "bg-navy text-ivory"
      : tone === "paper"
        ? "bg-paper text-navy"
        : "bg-ivory text-navy";

  const imageCol =
    align === "image-left"
      ? "col-span-12 md:col-span-6 md:col-start-1 md:row-start-1"
      : "col-span-12 md:col-span-6 md:col-start-7 md:row-start-1";
  const textCol =
    align === "image-left"
      ? "col-span-12 md:col-span-5 md:col-start-8 md:row-start-1"
      : "col-span-12 md:col-span-5 md:col-start-1 md:row-start-1";

  return (
    <section className={cn("py-20 md:py-24", toneClass)}>
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 items-start">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }}
            className={cn(
              "relative",
              imageCol,
              imageShape === "circle" && "flex justify-center",
            )}
          >
            <div
              data-parallax
              className={cn(
                "will-change-transform",
                imageShape === "circle" && "w-full max-w-130",
              )}
            >
              {imageShape === "circle" && imageSrc ? (
                <figure className="relative aspect-square overflow-hidden rounded-full bg-navy/5 ring-1 ring-navy/10">
                  <Image
                    src={imageSrc}
                    alt={imageAlt ?? imageLabel ?? "Portrait"}
                    fill
                    sizes="(min-width: 1024px) 480px, (min-width: 640px) 60vw, 90vw"
                    className="object-cover"
                  />
                </figure>
              ) : imageSrc ? (
                <figure
                  className={cn(
                    "relative overflow-hidden bg-navy/5",
                    imageAspect === "portrait" && "aspect-3/4",
                    imageAspect === "landscape" && "aspect-4/3",
                    imageAspect === "square" && "aspect-square",
                    imageAspect === "tall" && "aspect-2/3",
                  )}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt ?? imageLabel ?? ""}
                    fill
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 60vw, 100vw"
                    className="object-cover"
                  />
                </figure>
              ) : (
                <ImageFallback
                  label={imageLabel}
                  aspect={imageAspect}
                  tone={tone === "navy" ? "paper" : "navy"}
                />
              )}
            </div>
          </motion.div>

          <div className={cn("flex flex-col gap-7 md:sticky md:top-28", textCol)}>
            {eyebrow ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <span className={cn("h-px w-8", tone === "navy" ? "bg-ivory/40" : "bg-navy/40")} />
                <span className={cn("label", tone === "navy" ? "text-ivory/65" : "text-navy/65")}>
                  {eyebrow}
                </span>
              </motion.div>
            ) : null}

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }}
              className={cn("display-2", tone === "navy" ? "text-ivory" : "text-navy")}
            >
              {heading}
            </motion.h2>

            {quote ? (
              <motion.blockquote
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55 }}
                className={cn(
                  "lede border-l pl-5 max-w-md",
                  tone === "navy" ? "text-ivory/90 border-ivory/25" : "text-navy/90 border-navy/20",
                )}
              >
                {quote}
              </motion.blockquote>
            ) : null}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={cn(
                "prose-editorial",
                tone === "navy" && "[&_p]:text-ivory/75",
                tone === "paper" && "[&_p]:text-navy/85",
              )}
            >
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>

            {cta ? (
              <div>
                <Link
                  href={cta.href}
                  className={cn("btn-magnetic", tone === "navy" ? "on-navy" : "on-ivory")}
                >
                  <span className="label">{cta.label}</span>
                  <ArrowRight size={14} strokeWidth={1.75} />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
