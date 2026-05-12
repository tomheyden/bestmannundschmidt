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
    title: "Grundlagen.",
    body: "Das Hausmodell von Dr. Bischop verdeutlicht die Ursachen von Konflikten: Während Dach und Wände die Sach- und Beziehungsebene darstellen, auf denen klassische Verhandlungen stattfinden, bildet das Fundament die Systemgesetze (Zugehörigkeit, Wertschätzung, Gerechtigkeit, Ausgleich, Ordnung). Wird das Fundament in einem dieser Bereiche verletzt, führt dies zu Eskalation, Misstrauen und Blockaden. Erst wenn das Fundament wieder stabil ist, entstehen Vereinbarungen, die im Alltag tragfähig sind und nachhaltig wirken.",
  },
  {
    index: "II",
    title: "Auftragsklärung.",
    body: "Mediation, Moderation oder Coaching? Zum Start analysieren wir und klären den besten Weg. Bei persönlichen Blockaden, die auf die Umgebung (Mitarbeitende, Team, das Unternehmen, die Familie) belastend wirken, erziele ich mit Coachings oft die schnellsten Ergebnisse. Eine Kombination aus Coaching und Mediation ermöglicht es, akute Konflikte zu lösen und den Einzelnen persönlich zu stärken. Durch die Analyse des Ursprungs (Zeit-Ursachen-Diagramm) ergründen wir die wahren Hintergründe. Sachthemen, Beziehungen und Systemgesetz-Verletzungen werden reflektiert und bearbeitet. Zudem klären wir, wer am Konflikt beteiligt und relevant für die Lösung ist — und Sie erhalten von mir eine klare Empfehlung zum Rahmen und zum Vorgehen.",
  },
  {
    index: "III",
    title: "Das Fundament für Beziehungen.",
    body: "Wir beheben Verletzungen der Systemgesetze, um das gegenseitige Vertrauen wiederherzustellen und destruktive Dynamiken wie Rückzug oder Angriffe zu stoppen. Durch die systematische Auflösung der Verletzungen wird eine Gesprächsbasis und das gegenseitige Vertrauen wiederhergestellt.",
  },
  {
    index: "IV",
    title: "Alltagstauglichkeit sichern.",
    body: "Mit dem Wissen um die Systemgesetze meistern Sie Konflikte souverän und können Verletzungen sofort lösen. Gemeinsam erarbeiten wir verbindliche Regeln und Rollenbilder, die Ihren Alltag entlasten. Damit die neuen Lösungen fest verankert bleiben und ein Zurückfallen in alte Dynamiken verhindert werden, kann ich Sie auf Wunsch gerne begleiten.",
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
        imageSrc="/img/mediation-arbeitsraum.jpg"
        imageAlt="Mediation · Arbeitsraum"
        meta={[
          { label: "Verfahren", value: "4 Schritte" },
          { label: "Umfang", value: "1 Tag – ca. 6 Monate" },
          { label: "Format", value: "vor Ort | Hamburg | Kiel" },
        ]}
      />

      <ContentSection
        eyebrow="Methodik"
        heading="Empathie trifft Klarheit."
        align="image-right"
        imageSrc="/img/mediation-start.jpg"
        imageAlt="Start einer Mediation"
        imageAspect="portrait"
        body={[
          "Mediation ist eine geführte Form des Denkens, des Fühlens — und des Zuhörens.",
          "Als Mediatorin verantworte ich den Rahmen und den Raum für das, was schwer auszusprechen ist. Ich arbeite strukturiert und erweitert um systemische und kommunikative Perspektiven.",
          "Ziel ist nicht der schnelle Kompromiss, sondern die Auflösung von Verletzungen, um eine stabile Basis für gesunde und tragfähige Beziehungen zu ermöglichen.",
        ]}
        quote="Mediation ist eine geführte Form des Denkens, des Fühlens — und des Zuhörens."
        cta={{ label: "Mehr über meine Haltung", href: "/about#haltung" }}
      />

      <section className="py-20 md:py-24 bg-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-navy/40" />
                <span className="label text-navy/65">4 Schritte</span>
              </div>
              <h2 className="display-2 text-navy">Das Verfahren, Schritt für Schritt.</h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <p className="prose-editorial">
                <span>
                  Jedes Verfahren wird auf Ihren Fall zugeschnitten. Innerhalb dieses Rahmens ist vieles möglich: vom
                  einzelnen Klärungstag, Einzel-Coachings bis zu einem mehrstufigen Prozess über Monate.
                </span>
                <span>
                  Zudem arbeite ich mit dem Hausmodell von meinem langjährigen und geschätzten Freund und Kollegen
                  Dr. Dieter Bischop.
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

      <section className="py-20 md:py-24 bg-navy text-ivory">
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
