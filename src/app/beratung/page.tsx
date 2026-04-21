import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { CTASection } from "@/components/CTASection";
import { ImageFallback } from "@/components/ImageFallback";

export const metadata: Metadata = {
  title: "Management Consulting",
  description:
    "Management Consulting & Team-Entwicklung bei Bestmann & Schmidt. Organisations- und Strategieberatung für Eigentümer-geführte Unternehmen.",
};

const principles = [
  {
    t: "Ökonomisch rigoros.",
    d: "Jede Empfehlung steht eine Betrachtung von Kosten, Nutzen und Risiko aus. Wir rechnen, bevor wir raten.",
  },
  {
    t: "Systemisch aufmerksam.",
    d: "Organisationen sind keine Maschinen. Wir beachten informelle Regeln, Loyalitäten und historische Linien.",
  },
  {
    t: "Persönlich verantwortet.",
    d: "Die Partner sind Teil jedes Mandats. Keine Pyramide, kein Team aus Junior-Consultants, das Sie durch das Projekt trägt.",
  },
  {
    t: "Schriftlich und knapp.",
    d: "Unsere Memos sind kurz und klar. Wer sie liest, versteht — auch ohne die Präsentation dazu.",
  },
];

export default function BeratungPage() {
  return (
    <>
      <Hero
        eyebrow="Leistung · Consulting"
        headline="Klarheit im System — für Organisationen, die tragen."
        description="Management Consulting bei Bestmann & Schmidt arbeitet an der Stelle, an der Strategie, Struktur und Kultur zusammenfinden müssen. Wir beraten Eigentümer-geführte Unternehmen, Familienunternehmen und mittelständische Konzerne in Phasen, die Entscheidungen verlangen."
        imageLabel="Beratung · Werkstatt"
        meta={[
          { label: "Arbeitsform", value: "Mandat" },
          { label: "Laufzeit", value: "3 – 12 Monate" },
          { label: "Beteiligte", value: "Partner + Netzwerk" },
        ]}
      />

      <ContentSection
        eyebrow="Haltung"
        heading="Beratung als Handwerk, nicht als Bühne."
        align="image-right"
        imageLabel="Werkzeug · Tisch"
        imageAspect="portrait"
        body={[
          "Wir glauben, dass gute Beratung selten groß auftritt und oft leise wirkt. Unsere Arbeit entsteht am Konferenztisch, am Telefon, in Einzelgesprächen — selten auf der Bühne. Das ist eine Entscheidung, keine Einschränkung.",
          "Wir übernehmen Mandate, bei denen es auf Urteilsvermögen und Diskretion ankommt. Strategieüberprüfungen, Governance-Fragen, Eigentümerprozesse, Integration nach Transaktionen, oder die schwierige Frage, ob ein Führungsteam in seiner aktuellen Besetzung trägt.",
        ]}
        quote="Wir arbeiten für die Organisation — und mit den Menschen, die sie tragen."
      />

      <section className="py-24 md:py-32 bg-navy text-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-ivory/40" />
                <span className="label text-ivory/65">Arbeitsprinzipien</span>
              </div>
              <h2 className="display-2 text-ivory">Vier Überzeugungen, die unsere Arbeit formen.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
            {principles.map((p, i) => (
              <div
                key={p.t}
                className="rule-top-ivory py-8 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="section-index text-ivory/55 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="display-3 text-ivory">{p.t}</h3>
                <p className="text-[15px] leading-relaxed text-ivory/75 max-w-md">{p.d}</p>
              </div>
            ))}
          </div>
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
                Die unsichtbaren Regeln sichtbar machen.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col gap-5">
              <p className="prose-editorial">
                <span>
                  In jedem Führungsteam existieren zwei Ebenen: die Agenda, über die gesprochen wird, und das
                  Beziehungsnetz, in dem sie verhandelt wird. Wir arbeiten an beiden.
                </span>
              </p>
              <p className="prose-editorial">
                <span>
                  Unsere Team-Entwicklungen folgen keinem Workshop-Rezept. Sie sind präzise zugeschnitten: auf
                  Zusammensetzung, Historie, Governance und Reifegrad. Sie enden mit schriftlichen Vereinbarungen — und
                  mit einem messbar anderen Arbeitsklima.
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
                „Wir arbeiten nicht an der Harmonie eines Teams — sondern an seiner Streitfähigkeit.“
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <CTASection eyebrow="Consulting · Anfrage" headline="Wenn ein Mandat reif ist." />
    </>
  );
}
