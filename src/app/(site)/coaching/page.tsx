import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { Accordion } from "@/components/Accordion";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "Coaching bei Karen Bestmann — Klarheit für persönliche und berufliche Themen. Entscheidungsfindung, Selbstführung, Standortbestimmung.",
};

const themen = [
  {
    index: "I",
    title: "Entscheidungsfindung.",
    body: "Wenn mehrere Wege möglich sind, aber der eine tragfähige noch nicht sichtbar ist. Wir sortieren das Feld — Fakten, Werte, Folgen — und machen die Entscheidung greifbar.",
  },
  {
    index: "II",
    title: "Selbststärkung und Selbstführung.",
    body: "Den eigenen Kompass schärfen: Was ist mir wichtig? Wo gebe ich zu viel, wo zu wenig? Wie führe ich mich selbst durch anspruchsvolle Phasen?",
  },
  {
    index: "III",
    title: "Berufliche Weiterentwicklung.",
    body: "Veränderungen in Rolle, Branche oder Verantwortung sortieren. Wir schauen auf Potenziale, Grenzen und den nächsten stimmigen Schritt.",
  },
  {
    index: "IV",
    title: "Persönliche Standortbestimmung.",
    body: "Wo stehe ich — und will ich weiterhin dort stehen? Ein Coaching als ehrlicher Kassensturz, bevor neue Entscheidungen anstehen.",
  },
  {
    index: "V",
    title: "Umgang mit Herausforderungen und Veränderung.",
    body: "Wenn Veränderung von außen kommt — oder zu lange aufgeschoben wurde. Wir arbeiten an Haltung, Strategie und den konkreten Schritten.",
  },
];

export default function CoachingPage() {
  return (
    <>
      <Hero
        eyebrow="Angebot · Coaching"
        headline="Klarheit für persönliche und berufliche Themen."
        description="Im Coaching begleite ich Sie dabei, eigene Themen zu sortieren, neue Perspektiven zu entwickeln und konkrete nächste Schritte zu finden. Vertraulich, strukturiert und auf Augenhöhe."
        imageLabel="Coaching · Gespräch"
        meta={[
          { label: "Format", value: "1:1" },
          { label: "Ort", value: "Hamburg / remote" },
          { label: "Umfang", value: "flexibel" },
        ]}
      />

      <ContentSection
        eyebrow="Zugang"
        heading="Nicht Ratgeberin, sondern Resonanzraum."
        align="image-right"
        imageLabel="Notizbuch"
        imageAspect="portrait"
        body={[
          "Gutes Coaching erklärt nicht — es hört anders zu. Ich arbeite mit einer Mischung aus systemischer und kommunikativer Perspektive. Das Ergebnis sind keine Tipps, sondern eigene Einsichten, die tragen.",
          "Meine Klient:innen sind Führungskräfte, Mitarbeitende in verantwortungsvollen Rollen und Menschen in beruflichen oder persönlichen Übergangsphasen. Gemeinsam ist ihnen: Sie wollen mit Klarheit entscheiden — und mit Stimmigkeit handeln.",
        ]}
        quote="Coaching ist ein Raum, in dem Sie kurz nicht die Antwort sein müssen."
        cta={{ label: "Meine Haltung", href: "/about#haltung" }}
      />

      <section className="py-24 md:py-32 bg-paper">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-20">
            <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-navy/40" />
                <span className="label text-navy/70">Mögliche Inhalte</span>
              </div>
              <h2 className="display-2 text-navy">Worüber wir arbeiten.</h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <p className="prose-editorial">
                <span>
                  Jedes Coaching beginnt mit einer Landkarte — nicht mit einem Programm. Aus der Landkarte entstehen
                  Schwerpunkte. Diese Themen begegnen mir immer wieder.
                </span>
              </p>
            </div>
          </div>
          <Accordion items={themen} />
        </div>
      </section>

      <ContentSection
        eyebrow="Format"
        heading="So, wie es zu Ihnen passt."
        align="image-left"
        imageLabel="Ort · Weite"
        imageAspect="landscape"
        tone="ivory"
        body={[
          "Ein Coaching bei mir kann aus einem einzelnen Klärungsgespräch bestehen oder aus einem längeren Prozess mit mehreren Terminen. Wir arbeiten vor Ort in Hamburg oder digital — je nachdem, was zum Thema und zu Ihrem Alltag passt.",
          "Jede Zusammenarbeit beginnt mit einem kostenfreien Erstgespräch. Erst danach entscheiden wir gemeinsam, ob und in welcher Form ein Coaching trägt.",
        ]}
        cta={{ label: "Erstgespräch anfragen", href: "/kontakt" }}
      />

      <CTASection
        eyebrow="Coaching · Anfrage"
        headline="Sprechen wir, wenn es wirklich zählt."
      />
    </>
  );
}
