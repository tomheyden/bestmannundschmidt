import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import { ContentSection } from "@/components/ContentSection";
import { CTASection } from "@/components/CTASection";
import { Anchor, Compass, MessageSquare, Scale, Users, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Training & Beratung",
  description:
    "Training & Beratung bei Karen Bestmann — Kommunikation im Team stärken, Konfliktkompetenz entwickeln, Zusammenarbeit wirksam gestalten.",
};

type Schwerpunkt = { t: string; d: string; icon: LucideIcon };

const schwerpunkte: Schwerpunkt[] = [
  {
    t: "Kommunikation im Team.",
    d: "Klar und wertschätzend miteinander sprechen — auch dann, wenn es anspruchsvoll wird. Grundlagen, Formate, Rituale.",
    icon: Users,
  },
  {
    t: "Konfliktkompetenz.",
    d: "Konflikte früh erkennen, ansprechen und führen — statt sie zu umgehen, bis sie eskalieren. Für Führungskräfte und Teams.",
    icon: Scale,
  },
  {
    t: "Zusammenarbeit & Führung.",
    d: "Rollen klären, Erwartungen abgleichen, Entscheidungen gemeinsam tragen. Die Grundlage für verlässliche Zusammenarbeit.",
    icon: Compass,
  },
  {
    t: "Resilienz.",
    d: "Belastbarkeit im beruflichen Alltag — individuell und als Team. Was trägt, was erschöpft, was nährt?",
    icon: Anchor,
  },
  {
    t: "Gesprächsführung.",
    d: "Schwierige Gespräche souverän führen: Feedback, Kritik, Entwicklung, Trennung. Struktur und Haltung für den Ernstfall.",
    icon: MessageSquare,
  },
];

export default function BeratungPage() {
  return (
    <>
      <Hero
        eyebrow="Angebot · Training & Beratung"
        headline="Kommunikation stärken. Zusammenarbeit wirksam gestalten."
        description="In Trainings und Beratungen unterstütze ich Teams und Organisationen dabei, ihre Kommunikation zu verbessern und wieder handlungsfähig zu werden — in konkreten Formaten, praxisnah, auf Ihr Thema zugeschnitten."
        imageLabel="Training · Workshop"
        imageSrc="/img/training-workshop.jpg"
        imageAlt="Training · Workshop — zusammen wirksam gestalten"
        meta={[
          { label: "Format", value: "Training · Workshop · Beratung" },
          { label: "Gruppe", value: "Team · Führung · Organisation" },
          { label: "Ort", value: "Hamburg | Kiel | bei Ihnen" },
        ]}
      />

      <ContentSection
        eyebrow="Haltung"
        heading="Keine Schablonen. Ihr Thema, Ihr Kontext."
        align="image-right"
        imageLabel="Offenheit · Echte Klärung"
        imageSrc="/img/beratung-offenheit-klaerung.jpg"
        imageAlt="Offenheit für echte Klärung eigener Themen"
        imageAspect="portrait"
        body={[
          "Trainings, die man schon tausendmal gesehen hat, lösen selten das, was wirklich ansteht. Ich entwickle Formate, die zu Ihrem Team, Ihrer Situation und Ihrem Ziel passen — und in denen wirklich gearbeitet wird.",
          "Mein Vorgehen ist strukturiert und zugleich beweglich: genug Rahmen, damit Richtung entsteht. Genug Offenheit, damit echte Klärung möglich wird.",
        ]}
        quote="Gute Kommunikation ist kein Talent — sie ist ein Handwerk, das sich üben lässt."
      />

      <section className="py-20 md:py-24 bg-navy text-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-ivory/40" />
                <span className="label text-ivory/65">Schwerpunkte</span>
              </div>
              <h2 className="display-2 text-ivory">Fünf Felder, in denen ich regelmäßig arbeite.</h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
              <p className="prose-editorial [&_p]:text-ivory/80">
                <span>
                  Die Schwerpunkte greifen oft ineinander. Im Vorgespräch schauen wir gemeinsam, worauf es bei Ihnen
                  ankommt — und wie ein Format aussehen kann, das wirkt.
                </span>
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {schwerpunkte.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.t}
                  className="group relative flex flex-col gap-6 p-8 md:p-9 bg-ivory/[0.025] border border-ivory/10 transition-colors duration-500 hover:bg-ivory/[0.045] hover:border-ivory/25"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-ivory/25 text-ivory/80 transition-colors duration-500 group-hover:border-ivory/55 group-hover:text-ivory">
                      <Icon size={20} strokeWidth={1.4} />
                    </span>
                    <span className="section-index text-ivory/45 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="display-3 text-ivory">{item.t}</h3>
                  <p className="text-[15px] text-ivory/70 leading-relaxed max-w-md">{item.d}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="team" className="py-20 md:py-24 bg-paper">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-4 mb-5">
                <span className="h-px w-8 bg-navy/40" />
                <span className="label text-navy/65">Team-Entwicklung</span>
              </div>
              <h2 className="display-2 text-navy max-w-md">
                Zusammenarbeit, die trägt — auch unter Druck.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col gap-5">
              <p className="prose-editorial">
                <span>
                  In jedem Team existieren zwei Ebenen: die Agenda, über die gesprochen wird, und das Beziehungsnetz, in
                  dem sie verhandelt wird. Ich arbeite an beiden.
                </span>
              </p>
              <p className="prose-editorial">
                <span>
                  Team-Entwicklungen mit mir folgen keinem Workshop-Rezept. Sie sind zugeschnitten — auf Zusammensetzung,
                  Historie und Reifegrad Ihres Teams. Und sie enden mit konkreten Vereinbarungen, nicht nur mit gutem
                  Gefühl.
                </span>
              </p>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <figure className="relative aspect-4/3 w-full overflow-hidden bg-navy/5">
                <Image
                  src="/img/training-offsite.jpg"
                  alt="Team-Offsite am Meer"
                  fill
                  sizes="(min-width: 1024px) 720px, (min-width: 768px) 64vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </div>
            <div className="col-span-12 md:col-span-4">
              <blockquote className="lede text-navy/90 border-l border-navy/25 pl-5 max-w-sm">
                „Ein Team entwickelt sich nicht an der Harmonie — sondern an seiner Streitfähigkeit.“
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Training · Anfrage"
        headline="Wenn Ihr Team einen klaren Schritt gehen möchte."
        description="Erzählen Sie mir kurz, worum es geht. Ich melde mich persönlich — und wir schauen, ob und wie ich passe."
      />
    </>
  );
}
