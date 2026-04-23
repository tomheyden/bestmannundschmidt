import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { CTASection } from "@/components/CTASection";
import { ImageFallback } from "@/components/ImageFallback";

export const metadata: Metadata = {
  title: "Training & Beratung",
  description:
    "Training & Beratung bei Karen Bestmann — Kommunikation im Team stärken, Konfliktkompetenz entwickeln, Zusammenarbeit wirksam gestalten.",
};

const schwerpunkte = [
  {
    t: "Kommunikation im Team.",
    d: "Klar und wertschätzend miteinander sprechen — auch dann, wenn es anspruchsvoll wird. Grundlagen, Formate, Rituale.",
  },
  {
    t: "Konfliktkompetenz.",
    d: "Konflikte früh erkennen, ansprechen und führen — statt sie zu umgehen, bis sie eskalieren. Für Führungskräfte und Teams.",
  },
  {
    t: "Zusammenarbeit & Führung.",
    d: "Rollen klären, Erwartungen abgleichen, Entscheidungen gemeinsam tragen. Die Grundlage für verlässliche Zusammenarbeit.",
  },
  {
    t: "Resilienz.",
    d: "Belastbarkeit im beruflichen Alltag — individuell und als Team. Was trägt, was erschöpft, was nährt?",
  },
  {
    t: "Gesprächsführung.",
    d: "Schwierige Gespräche souverän führen: Feedback, Kritik, Entwicklung, Trennung. Struktur und Haltung für den Ernstfall.",
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
        meta={[
          { label: "Format", value: "Training · Workshop · Beratung" },
          { label: "Gruppe", value: "Team · Führung · Organisation" },
          { label: "Ort", value: "Hamburg / bei Ihnen" },
        ]}
      />

      <ContentSection
        eyebrow="Haltung"
        heading="Keine Schablonen. Ihr Thema, Ihr Kontext."
        align="image-right"
        imageLabel="Arbeitsraum"
        imageAspect="portrait"
        body={[
          "Trainings, die man schon tausendmal gesehen hat, lösen selten das, was wirklich ansteht. Ich entwickle Formate, die zu Ihrem Team, Ihrer Situation und Ihrem Ziel passen — und in denen wirklich gearbeitet wird.",
          "Mein Vorgehen ist strukturiert und zugleich beweglich: genug Rahmen, damit Richtung entsteht. Genug Offenheit, damit echte Klärung möglich wird.",
        ]}
        quote="Gute Kommunikation ist kein Talent — sie ist ein Handwerk, das sich üben lässt."
      />

      <section className="py-24 md:py-32 bg-navy text-ivory">
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
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {schwerpunkte.map((item, i) => (
              <li key={item.t} className="rule-top-ivory py-7 flex flex-col gap-3">
                <div className="flex items-baseline gap-4">
                  <span className="section-index text-ivory/55 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display-3 text-ivory">{item.t}</span>
                </div>
                <p className="text-[15px] text-ivory/75 leading-relaxed pl-10 max-w-lg">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="team" className="py-24 md:py-32 bg-paper">
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
              <ImageFallback label="Team · Offsite" aspect="landscape" />
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
