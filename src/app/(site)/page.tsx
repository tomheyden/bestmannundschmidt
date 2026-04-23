import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { EditorialGrid } from "@/components/EditorialGrid";
import { CTASection } from "@/components/CTASection";
import type { Service } from "@/components/ServiceCard";
import { ArrowRight } from "lucide-react";

const services: Service[] = [
  {
    number: "01",
    title: "Coaching",
    subtitle: "Klarheit gewinnen",
    description:
      "Begleitung für persönliche und berufliche Themen — Entscheidungen treffen, Selbstführung stärken, nächste Schritte finden.",
    href: "/coaching",
  },
  {
    number: "02",
    title: "Training & Beratung",
    subtitle: "Kommunikation stärken",
    description:
      "Teams und Organisationen dabei unterstützen, Kommunikation zu verbessern und Zusammenarbeit wirksam zu gestalten.",
    href: "/beratung",
  },
  {
    number: "03",
    title: "Mediation",
    subtitle: "Konflikte klären",
    description:
      "Wieder ins Gespräch kommen, Missverständnisse auflösen und tragfähige Lösungen gemeinsam entwickeln.",
    href: "/mediation",
  },
];

const arbeitsweise = [
  {
    title: "Strukturiert statt impulsiv.",
    body: "Ich arbeite mit klarem Vorgehen — nicht mit schneller Reaktion. Struktur gibt Halt, auch wenn das Thema emotional wird.",
  },
  {
    title: "Klar statt interpretativ.",
    body: "Ich höre genau hin und benenne, was ich wahrnehme. Keine Deutung von oben, sondern Rückmeldung auf Augenhöhe.",
  },
  {
    title: "Empathisch, aber nicht wertend.",
    body: "Menschen begegnen mir unterschiedlich — und jede Seite hat ihre Gründe. Ich halte Raum, ohne Partei zu ergreifen.",
  },
  {
    title: "Lösungsorientiert statt problemzentriert.",
    body: "Verstehen ist wichtig — aber nicht das Ziel. Ziel ist, wieder handlungsfähig zu werden und einen nächsten Schritt zu finden.",
  },
];

const wirkung = [
  "Klarheit in komplexen Situationen",
  "Handlungsfähigkeit statt Ohnmacht",
  "Tragfähige Lösungen in Konflikten",
  "Wertschätzende Kommunikation",
  "Erfolgreiche Zusammenarbeit im Team",
];

const zielgruppen = ["Führungskräfte", "Teams", "Organisationen", "Unternehmen im Wandel"];

export default function HomePage() {
  return (
    <>
      <Hero
        imageSrc="/Bild_Hamburg.jpg"
        imageAlt="Karen Bestmann — Blick über Hamburg"
        imageLabel="Hamburg"
      />

      <ContentSection
        eyebrow="Positionierung"
        heading="Über 25 Jahre Erfahrung in Mediation, Coaching und Kommunikation."
        align="image-right"
        imageSrc="/karenbestmann.jpg"
        imageAlt="Karen Bestmann"
        imageShape="circle"
        body={[
          "Ich begleite Führungskräfte, Mitarbeitende, Teams und Organisationen in komplexen Kommunikations- und Konfliktsituationen — mit dem Ziel, Kommunikation zu verbessern, Konflikte zu klären und Entwicklung zu ermöglichen.",
          "Mein Fokus liegt auf Klarheit, Struktur und nachhaltiger Lösung — nicht auf kurzfristiger Beruhigung. Ich verbinde langjährige Erfahrung mit einem klaren, strukturierten und zugleich empathischen Vorgehen.",
        ]}
        quote="Menschlichkeit ist mein Kompass."
        cta={{ label: "Mehr über mich", href: "/about" }}
        tone="ivory"
      />

      <EditorialGrid
        eyebrow="Meine Angebote"
        heading="Klarheit, Verbindung und Lösungen schaffen."
        intro="Drei Zugänge, eine Haltung. Ich arbeite mit Menschen — nicht mit Konzepten. Denn hinter jeder Herausforderung, jedem Konflikt und jeder Veränderung stehen individuelle Geschichten, Bedürfnisse und Gefühle."
        services={services}
      />

      <section className="py-24 md:py-32 bg-paper">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-navy/40" />
                <span className="label text-navy/65">Arbeitsweise</span>
              </div>
              <h2 className="display-2 text-navy max-w-md">Wie ich arbeite.</h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <p className="prose-editorial">
                <span>
                  Was mich auszeichnet, ist die Verbindung aus Erfahrung, Klarheit und echter Zugewandtheit. Ich höre
                  genau hin, erkenne Zusammenhänge und unterstütze dabei, neue Perspektiven zu entwickeln und tragfähige
                  Lösungen zu finden.
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
            {arbeitsweise.map((item, i) => (
              <div key={item.title} className="rule-top py-8 flex flex-col gap-3">
                <span className="section-index tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-3 text-navy">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate-detail/90 max-w-md">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-navy/40" />
                <span className="label text-navy/65">Für wen ich arbeite</span>
              </div>
              <h2 className="display-2 text-navy max-w-md">
                Dort, wo Menschen zusammen Verantwortung tragen.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <p className="prose-editorial">
                <span>
                  Ich arbeite mit Menschen, die gestalten, führen und Verantwortung übernehmen — und die merken: Ohne
                  gute Kommunikation trägt keine Entscheidung.
                </span>
              </p>
            </div>
          </div>
          <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-0 gap-x-6">
            {zielgruppen.map((group, i) => (
              <li
                key={group}
                className="rule-top py-5 flex items-center gap-4 text-[17px] text-navy/90 font-medium tabular-nums"
              >
                <span className="section-index w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{group}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContentSection
        eyebrow="Überzeugung"
        heading="Konflikte sind Chancen für Wachstum."
        align="image-left"
        imageLabel="Dialogräume"
        imageAspect="landscape"
        tone="ivory"
        body={[
          "Konflikte gehören zum Leben — entscheidend ist, wie wir mit ihnen umgehen. Hinter jedem Konflikt stehen Bedürfnisse, Geschichten und Gefühle. Wer sie sehen darf, kann sich bewegen.",
          "Meine Aufgabe ist es, Räume zu schaffen, in denen Verständigung möglich wird — klar, respektvoll, wertschätzend und lösungsorientiert. Ich arbeite mit Ihnen auf Augenhöhe — mit Erfahrung, Struktur und Menschlichkeit.",
        ]}
        cta={{ label: "Zur Mediation", href: "/mediation" }}
      />

      <section className="py-24 md:py-32 bg-navy text-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-ivory/40" />
                <span className="label text-ivory/65">Was Sie gewinnen</span>
              </div>
              <h2 className="display-2 text-ivory max-w-xl">Wirkung, die bleibt.</h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
              <p className="prose-editorial [&_p]:text-ivory/80">
                <span>
                  Die Arbeit mit mir zielt nicht auf schnelle Erleichterung, sondern auf Veränderung, die trägt — im
                  Gespräch, im Team, in der Organisation.
                </span>
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
            {wirkung.map((item, i) => (
              <li
                key={item}
                className="rule-top-ivory py-7 flex items-baseline gap-5"
              >
                <span className="section-index text-ivory/55 tabular-nums shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display-3 text-ivory leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-16 flex items-center gap-5 flex-wrap">
            <Link href="/kontakt" className="btn-magnetic on-navy">
              <span className="label">Erstgespräch anfragen</span>
              <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
            <Link href="/about" className="label link-underline text-ivory">
              Mehr über mich
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Erstgespräch"
        headline="Wenn Kommunikation schwierig wird, beginnt meine Arbeit."
        description="Ein erstes Gespräch, vertraulich und unverbindlich. Wir klären gemeinsam, ob und wie eine Zusammenarbeit trägt."
      />
    </>
  );
}
