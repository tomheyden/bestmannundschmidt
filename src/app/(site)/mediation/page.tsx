import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { Accordion } from "@/components/Accordion";
import { CTASection } from "@/components/CTASection";
import { ImageFallback } from "@/components/ImageFallback";

export const metadata: Metadata = {
  title: "Mediation",
  description:
    "Mediation bei Karen Bestmann — Konflikte nachhaltig auflösen. Wieder ins Gespräch kommen, Missverständnisse klären, tragfähige Lösungen finden.",
};

const phasen = [
  {
    index: "I",
    title: "Vorphase — vertraulich verstehen.",
    body: "Getrennte Vorgespräche mit allen Beteiligten. Wir klären Anliegen, Interessen, Erwartungen und Grenzen. Ergebnis ist kein Urteil, sondern eine Landkarte: Wo stehen wir — und wohin wollen wir?",
  },
  {
    index: "II",
    title: "Themen — Struktur schaffen.",
    body: "Gemeinsam benennen wir, worum es wirklich geht. Sachthemen werden von Beziehungsthemen getrennt — nicht, um letztere zu minimieren, sondern um beiden einen angemessenen Raum zu geben.",
  },
  {
    index: "III",
    title: "Interessen — hinter den Positionen.",
    body: "Positionen sind die Oberfläche, Interessen der tragende Grund. Wir arbeiten mit beiden: mit den geäußerten Forderungen und mit den oft unausgesprochenen Motiven, Bedürfnissen und Befürchtungen.",
  },
  {
    index: "IV",
    title: "Optionen — Möglichkeiten öffnen.",
    body: "Kreative Phase. Wir entwickeln Lösungsvarianten, bevor wir bewerten — damit das Denken weit bleibt. Erst dann prüfen wir: Was ist tragfähig, was ist fair, was ist realistisch?",
  },
  {
    index: "V",
    title: "Vereinbarung — was trägt.",
    body: "Eine Mediationsvereinbarung ist keine Kompromissformel, sondern ein gemeinsamer Entwurf. Sie ist konkret, prüfbar — und sie dokumentiert nicht nur das Was, sondern auch das Wie.",
  },
];

const anwendungen = [
  {
    t: "Konflikte im beruflichen Umfeld",
    d: "Zwischen Kolleg:innen, Führung und Mitarbeitenden, Abteilungen — überall, wo Zusammenarbeit nicht mehr wie gewünscht funktioniert.",
  },
  {
    t: "Team- und Organisationskonflikte",
    d: "Wenn Spannungen ein ganzes Team belasten oder strukturelle Konflikte Entscheidungen blockieren.",
  },
  {
    t: "Spannungen in Zusammenarbeit und Kommunikation",
    d: "Missverständnisse, Verletzungen, festgefahrene Dynamiken — Mediation schafft einen Rahmen, in dem wieder Bewegung möglich wird.",
  },
];

export default function MediationPage() {
  return (
    <>
      <Hero
        eyebrow="Angebot · Mediation"
        headline="Konflikte gehören zum Leben — entscheidend ist, wie wir mit ihnen umgehen."
        description="In der Mediation unterstütze ich Sie dabei, wieder ins Gespräch zu kommen, Missverständnisse zu klären und Verletzungen aufzulösen — um gemeinsam tragfähige Lösungen zu entwickeln und unbelastete Beziehungen zu ermöglichen."
        imageLabel="Mediation · Arbeitsraum"
        meta={[
          { label: "Verfahren", value: "5 Phasen" },
          { label: "Umfang", value: "1 Tag – 6 Monate" },
          { label: "Format", value: "vor Ort / hybrid" },
        ]}
      />

      <ContentSection
        eyebrow="Methodik"
        heading="Empathie trifft Klarheit."
        align="image-right"
        imageLabel="Notizen · Gespräch"
        imageAspect="portrait"
        body={[
          "Gute Mediation ist beides: warm und klar. Sie hält den Raum für das, was schwer auszusprechen ist — und sie bringt Entscheidungen zustande, die tragen.",
          "Ich arbeite nach einem erprobten Phasenmodell, erweitert um systemische und kommunikative Perspektiven. Ziel ist nicht der schnelle Kompromiss, sondern die Lösung, die alle Seiten mittragen können.",
        ]}
        quote="Mediation ist eine geführte Form des Denkens — und des Zuhörens."
        cta={{ label: "Mehr über meine Haltung", href: "/about#haltung" }}
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-navy/40" />
                <span className="label text-navy/65">Fünf Phasen</span>
              </div>
              <h2 className="display-2 text-navy">Das Verfahren, Schritt für Schritt.</h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <p className="prose-editorial">
                <span>
                  Jedes Verfahren wird auf Ihren Fall zugeschnitten. Die fünf Phasen markieren den Rahmen — innerhalb
                  dieses Rahmens ist vieles möglich: vom einzelnen Klärungstag bis zu einem mehrstufigen Prozess über
                  Monate.
                </span>
              </p>
            </div>
          </div>
          <Accordion items={phasen} />
        </div>
      </section>

      <ContentSection
        eyebrow="Nutzen"
        heading="Klarheit, Akzeptanz, neue Perspektiven."
        align="image-left"
        imageLabel="Haus · Detail"
        imageAspect="landscape"
        tone="paper"
        body={[
          "Mediation ist oft schneller, diskreter und wirkungsvoller als eine streitige Auseinandersetzung. Der eigentliche Wert liegt jedoch tiefer: Lösungen, die in Mediation gefunden werden, werden mitgetragen — und überleben den nächsten Sturm.",
          "Menschen und Teams, die einen Konflikt mediativ klären, berichten übereinstimmend von drei Effekten: wieder freigesetzter Energie, präziseren Vereinbarungen für die Zukunft und einer anderen Qualität von Vertrauen.",
        ]}
        cta={{ label: "Erstgespräch anfragen", href: "/kontakt" }}
      />

      <section className="py-24 md:py-32 bg-navy text-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-ivory/40" />
                <span className="label text-ivory/65">Typische Themen</span>
              </div>
              <h2 className="display-2 text-ivory">Wo Mediation Kraft entwickelt.</h2>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
            {anwendungen.map((item, i) => (
              <li key={item.t} className="rule-top-ivory py-7 flex flex-col gap-3">
                <span className="section-index text-ivory/55 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-3 text-ivory">{item.t}</h3>
                <p className="text-[15px] text-ivory/75 leading-relaxed max-w-md">{item.d}</p>
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <ImageFallback label="Gespräch" aspect="landscape" tone="paper" />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Mediation · Anfrage"
        headline="Wenn Sie über einen Konflikt sprechen möchten."
        description="Ein vertrauliches Vorgespräch ist kostenfrei und unverbindlich. Ich bin auch dann die richtige Gesprächspartnerin, wenn am Ende keine Mediation folgt — sondern ein anderer Weg."
      />
    </>
  );
}
