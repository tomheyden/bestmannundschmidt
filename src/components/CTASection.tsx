import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  headline?: string;
  description?: string;
  cta?: { label: string; href: string };
};

export function CTASection({
  eyebrow = "Erstgespräch",
  headline = "Beginnen wir mit Zuhören.",
  description = "Ein vertrauliches Vorgespräch, 30 Minuten, ohne Verpflichtung. Wir klären, ob und in welcher Form eine Zusammenarbeit trägt.",
  cta = { label: "Termin anfragen", href: "/kontakt" },
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy text-ivory">
      <div className="container-editorial py-24 md:py-32">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-ivory/40" />
              <span className="label text-ivory/70">{eyebrow}</span>
            </div>
            <h2 className="display-1 text-ivory">{headline}</h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
            <p className="lede text-ivory/80">{description}</p>
            <Link href={cta.href} className="btn-magnetic on-navy self-start">
              <span className="label">{cta.label}</span>
              <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
