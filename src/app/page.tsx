import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { EditorialGrid } from "@/components/EditorialGrid";
import { StatStrip } from "@/components/StatStrip";
import { CTASection } from "@/components/CTASection";
import type { Service } from "@/components/ServiceCard";
import { ArrowRight } from "lucide-react";

const services: Service[] = [
  {
    number: "01",
    title: "Mediation",
    subtitle: "Konflikt als Chance",
    description:
      "Strukturierte Klärung wirtschaftlicher und persönlicher Auseinandersetzungen — in Partnerschaften, Gesellschafterkreisen und Teams.",
    href: "/mediation",
  },
  {
    number: "02",
    title: "Coaching",
    subtitle: "Führung mit Format",
    description:
      "Vertrauliche Einzelarbeit für Vorständinnen, Geschäftsführer und Leitungskräfte. Rollenklarheit, Entscheidungssicherheit, Haltung.",
    href: "/coaching",
  },
  {
    number: "03",
    title: "Consulting",
    subtitle: "Klarheit im System",
    description:
      "Organisations- und Strategieberatung für Eigentümer-geführte Unternehmen. Struktur, Kultur und Ökonomie im Zusammenspiel.",
    href: "/beratung",
  },
  {
    number: "04",
    title: "Team-Entwicklung",
    subtitle: "Die unsichtbaren Regeln",
    description:
      "Moderationen, Retreats und Entwicklungsprozesse für Führungsteams. Sichtbar machen, was wirkt — und entwickeln, was trägt.",
    href: "/beratung#team",
  },
];

const sectors = [
  "Familienunternehmen",
  "Eigentümer-geführte Mittelständler",
  "Professional Services",
  "Stiftungen & NGOs",
  "Öffentliche Organisationen",
  "Beteiligungsgesellschaften",
];

const insights = [
  {
    kind: "Publikation · M&A Review",
    year: "2024",
    title: "Was Mediation in Gesellschafterkreisen leisten kann.",
    href: "/about#publikationen",
  },
  {
    kind: "Working Paper",
    year: "2024",
    title: "Entscheidung und Beziehung — Führung unter Spannung.",
    href: "/about#publikationen",
  },
  {
    kind: "Feldnotiz",
    year: "2023",
    title: "Warum die nächste Nachfolge kein Projekt ist.",
    href: "/about#publikationen",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        imageSrc="/Bild_Hamburg.jpg"
        imageAlt="Bestmann & Schmidt — Blick über Hamburg"
        imageLabel="Hamburg · Hauptsitz"
      />

      <ContentSection
        eyebrow="Positionierung"
        heading="Individuell und persönlich."
        align="image-right"
        imageSrc="/karenbestmann.jpg"
        imageAlt="Karen Bestmann — Partnerin"
        imageShape="circle"
        body={[
          "Jede Organisation, jedes Führungsteam, jeder Konflikt ist ein Unikat. Wir arbeiten deshalb nicht nach Katalog, sondern konfigurieren Methodik und Format für Ihren Fall — mit einer Präsenz, die Verantwortung übernimmt.",
          "Bestmann & Schmidt ist eine Partnerschaft. Sie sprechen immer mit einem der beiden Partner — nicht mit einem Projektteam, das wechselt. Das verändert die Qualität der Gespräche und die Verbindlichkeit der Ergebnisse.",
        ]}
        quote="Wir verstehen Konflikt als gestaltete Form der Aufmerksamkeit — und Beratung als ein Handwerk des Zuhörens."
        cta={{ label: "Wer wir sind", href: "/about" }}
        tone="ivory"
      />

      <StatStrip />

      <EditorialGrid
        eyebrow="Disziplinen"
        heading="Vier Zugänge, ein Anspruch: Klärung."
        intro="Wir begleiten dort, wo Sachfragen auf Beziehungsfragen stoßen — in Gesellschafterkreisen, Vorständen, Eigentümer-Familien und Leitungsteams. Jede unserer Disziplinen ist zugleich ein Werkzeug und eine Haltung."
        services={services}
      />

      <section className="py-24 md:py-32 bg-paper">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-navy/40" />
                <span className="label text-navy/65">Sektoren</span>
              </div>
              <h2 className="display-2 text-navy max-w-md">Wo wir regelmäßig arbeiten.</h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <p className="prose-editorial">
                <span>
                  Unsere Mandanten kommen aus Unternehmen, in denen Eigentum, Führung und Verantwortung nicht sauber
                  getrennt sind — und gerade deshalb hohe Anforderungen an Klärung stellen.
                </span>
              </p>
            </div>
          </div>
          <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0">
            {sectors.map((sector, i) => (
              <li
                key={sector}
                className="rule-top py-5 flex items-center gap-4 text-[17px] text-navy/90 font-medium tabular-nums"
              >
                <span className="section-index w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{sector}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContentSection
        eyebrow="Überzeugung"
        heading="Conflict as opportunity."
        align="image-left"
        imageLabel="Studio · Detail"
        imageAspect="landscape"
        tone="ivory"
        body={[
          "Die meisten Organisationen versuchen, Konflikte zu vermeiden. Das ist teuer — ökonomisch wie menschlich. Wir glauben, dass jeder gut geführte Konflikt ein verdichtetes Lernmoment ist: Er macht sichtbar, was wirkt, was fehlt und was möglich ist.",
          "Unsere Aufgabe ist es nicht, Konflikte wegzuräumen, sondern sie nutzbar zu machen. Für Entscheidungen, die tragen. Für Beziehungen, die belastbar bleiben. Für Unternehmen, die nach der Klärung stärker sind als vorher.",
        ]}
        cta={{ label: "Methodik kennenlernen", href: "/mediation" }}
      />

      <section className="py-24 md:py-32 bg-navy text-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-ivory/40" />
                <span className="label text-ivory/65">Einsichten</span>
              </div>
              <h2 className="display-2 text-ivory">Lesen, was uns beschäftigt.</h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
              <p className="prose-editorial [&_p]:text-ivory/80">
                <span>
                  Drei ausgewählte Texte aus unserer Arbeit — knapp, präzise, unprätentiös. Für die Vollständigkeit
                  siehe Publikationen.
                </span>
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((item, i) => (
              <li key={item.title} className="rule-top-ivory pt-6 flex flex-col gap-5 min-h-52">
                <div className="flex items-center justify-between">
                  <span className="section-index text-ivory/55">
                    {String(i + 1).padStart(2, "0")} · {item.year}
                  </span>
                  <ArrowRight size={16} strokeWidth={1.25} className="text-ivory/55" />
                </div>
                <Link
                  href={item.href}
                  className="display-3 text-ivory leading-snug link-underline"
                >
                  {item.title}
                </Link>
                <span className="label text-ivory/55 mt-auto">{item.kind}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
