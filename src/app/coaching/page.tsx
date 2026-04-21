import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { Accordion } from "@/components/Accordion";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "Business Coaching für Vorstände, Geschäftsführerinnen und Leitungskräfte — diskret, strukturiert, wirksam.",
};

const frames = [
  {
    index: "I",
    title: "Rollenklarheit.",
    body: "Welche Rolle fordere ich, welche nehme ich ein, welche wird mir zugeschrieben — und wo stoßen diese drei aneinander? Rollenklarheit ist der schnellste Hebel für Entscheidungsqualität.",
  },
  {
    index: "II",
    title: "Entscheidungshygiene.",
    body: "Wiederkehrende Entscheidungsmuster sichtbar machen. Wo entscheiden Sie präzise, wo reflexhaft? Wir arbeiten an den Stellen, an denen gute Entscheidungen unter Druck fallen müssen.",
  },
  {
    index: "III",
    title: "Konflikt und Verantwortung.",
    body: "Die reifsten Führungskräfte haben ein bestimmtes Verhältnis zu unangenehmen Gesprächen. Wir üben die Szenen, die Sie nicht delegieren können.",
  },
  {
    index: "IV",
    title: "Energie und Rhythmus.",
    body: "Führen ist Langstrecke. Wir schauen auf Pensum, Erholung und die Orte, an denen Sie Ihre Urteilskraft nachschärfen — persönlich und im Team.",
  },
];

export default function CoachingPage() {
  return (
    <>
      <Hero
        eyebrow="Leistung · Coaching"
        headline="Die Arbeit an sich selbst ist die Arbeit am Unternehmen."
        description="Business Coaching bei Bestmann & Schmidt ist vertraulich, strukturiert und ergebnisorientiert. Wir begleiten Personen, deren Entscheidungen Wirkung entfalten — in 1:1-Arbeit, in Rollen-Tandems oder als Sparring in kritischen Phasen."
        imageLabel="Coaching · Gespräch"
        meta={[
          { label: "Format", value: "1:1 · Sparring" },
          { label: "Dauer", value: "3 Tage – 12 Mo." },
          { label: "Ort", value: "Hamburg / hybrid" },
        ]}
      />

      <ContentSection
        eyebrow="Zugang"
        heading="Nicht Ratgeber, sondern Resonanzraum."
        align="image-right"
        imageLabel="Notizbuch · Hand"
        imageAspect="portrait"
        body={[
          "Gute Coaches erklären nicht — sie hören anders zu. Wir arbeiten mit einer Mischung aus systemischer, psychodynamischer und ökonomischer Perspektive. Das Ergebnis sind keine Tipps, sondern eigene Einsichten, die tragen.",
          "Unsere Klient:innen sind Vorstandsmitglieder, Geschäftsführerinnen, Partnerinnen und Partner in Professional Services sowie Leitungspersonen in öffentlichen Organisationen. Gemeinsam ist ihnen: sie tragen Verantwortung, die sich nicht in Kennzahlen erschöpft.",
        ]}
        quote="Coaching ist ein Raum, in dem Sie kurz nicht die Antwort sein müssen."
        cta={{ label: "Methodik", href: "/beratung" }}
      />

      <section className="py-24 md:py-32 bg-paper">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-20">
            <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-navy/40" />
                <span className="label text-navy/70">Vier Felder</span>
              </div>
              <h2 className="display-2 text-navy">Worüber wir arbeiten.</h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <p className="prose-editorial">
                <span>
                  Jedes Coaching beginnt mit einer Landkarte — nicht mit einem Programm. Aus der Landkarte entstehen
                  Schwerpunkte. Vier davon begegnen uns regelmäßig.
                </span>
              </p>
            </div>
          </div>
          <Accordion items={frames} />
        </div>
      </section>

      <ContentSection
        eyebrow="Format"
        heading="Kurz, lang, dicht — nie standardisiert."
        align="image-left"
        imageLabel="Ort · Weite"
        imageAspect="landscape"
        tone="ivory"
        body={[
          "Ein Coaching bei Bestmann & Schmidt kann aus drei konzentrierten Tagen bestehen oder aus einem Jahr mit monatlichem Sparring. Wir arbeiten vor Ort in Hamburg, Wien oder Zürich — und wenn sinnvoll, an einem neutralen dritten Ort.",
          "Jede Beziehung beginnt mit einem Kennenlernen: 45 Minuten, kostenfrei, unverbindlich. Erst danach entscheiden wir gemeinsam, ob und in welcher Form eine Zusammenarbeit trägt.",
        ]}
        cta={{ label: "Kennenlernen anfragen", href: "/kontakt" }}
      />

      <CTASection
        eyebrow="Coaching · Anfrage"
        headline="Sprechen wir, wenn es wirklich zählt."
      />
    </>
  );
}
