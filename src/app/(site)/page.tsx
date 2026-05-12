import { LandingHero } from "@/components/LandingHero";
import { ContentSection } from "@/components/ContentSection";
import { EditorialGrid } from "@/components/EditorialGrid";
import { CTASection } from "@/components/CTASection";
import type { Service } from "@/components/ServiceCard";

const services: Service[] = [
  {
    number: "01",
    title: "Coaching",
    subtitle: "Klarheit gewinnen",
    description:
      "Begleitung für persönliche und berufliche Themen — Entscheidungen treffen, Selbstführung stärken, nächste Schritte finden.",
    href: "/coaching",
    imageSrc: "/img/coaching-gespraech.jpg",
    imageAlt: "Coaching-Gespräch",
  },
  {
    number: "02",
    title: "Training & Beratung",
    subtitle: "Kommunikation stärken",
    description:
      "Teams und Organisationen dabei unterstützen, Kommunikation zu verbessern und Zusammenarbeit wirksam zu gestalten.",
    href: "/beratung",
    imageSrc: "/img/scott-graham-5fNmWej4tAA-unsplash.jpg",
    imageAlt: "Training und Beratung — gemeinsam arbeiten",
  },
  {
    number: "03",
    title: "Mediation",
    subtitle: "Konflikte klären",
    description:
      "Wieder ins Gespräch kommen, Missverständnisse auflösen und tragfähige Lösungen gemeinsam entwickeln.",
    href: "/mediation",
    imageSrc: "/img/dylan-gillis-KdeqA3aTnBY-unsplash.jpg",
    imageAlt: "Mediation — Gespräche an einem Tisch",
  },
];

export default function HomePage() {
  return (
    <>
      <LandingHero />

      <ContentSection
        eyebrow="Positionierung"
        heading="Über 25 Jahre Erfahrung in Mediation, Coaching und Kommunikation."
        align="image-right"
        imageSrc="/karenbestmannportait.jpeg"
        imageAlt="Karen Bestmann"
        imageShape="circle"
        body={[
          "Ich begleite Führungskräfte, Teams und Organisationen in komplexen Kommunikations- und Konfliktsituationen — mit dem Ziel, Kommunikation zu verbessern, Konflikte zu klären und Entwicklung zu ermöglichen.",
          "Mein Fokus liegt auf Klarheit, Struktur und nachhaltiger Lösung — nicht auf kurzfristiger Beruhigung.",
        ]}
        quote="Menschlichkeit ist mein Kompass."
        cta={{ label: "Mehr über mich", href: "/about" }}
        tone="ivory"
      />

      <EditorialGrid
        eyebrow="Meine Angebote"
        heading="Klarheit, Verbindung und Lösungen schaffen."
        intro="Drei Zugänge, eine Haltung. Ich arbeite mit Menschen — nicht nur mit Konzepten."
        services={services}
      />

      <CTASection />
    </>
  );
}
