import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { Accordion } from "@/components/Accordion";
import { CTASection } from "@/components/CTASection";
import { ImageFallback } from "@/components/ImageFallback";

export const metadata: Metadata = {
  title: "Mediation",
  description:
    "Mediation bei Bestmann & Schmidt — Empathie trifft Pragmatismus. Für Konflikte in Unternehmen, Gesellschafterkreisen und Führungsteams.",
};

const methodItems = [
  {
    index: "I",
    title: "Vorphase — Vertraulich verstehen.",
    body: "Getrennte Vorgespräche mit allen Beteiligten. Wir klären Anliegen, Interessen, Erwartungen und Grenzen. Ergebnis ist nicht ein Urteil, sondern eine Landkarte: Wo stehen wir, wo wollen wir hin, und was muss anders werden?",
  },
  {
    index: "II",
    title: "Themen — Struktur schaffen.",
    body: "Gemeinsam benennen wir, worum es wirklich geht. Sachthemen werden von Beziehungsthemen getrennt — nicht, um letztere zu minimieren, sondern um beiden einen angemessenen Raum zu geben.",
  },
  {
    index: "III",
    title: "Interessen — Hinter den Positionen.",
    body: "Positionen sind die Oberfläche, Interessen der tragende Grund. Wir arbeiten mit beiden: mit den geäußerten Forderungen und mit den oft unausgesprochenen Motiven, Bedürfnissen und Befürchtungen.",
  },
  {
    index: "IV",
    title: "Optionen — Möglichkeiten öffnen.",
    body: "Kreative Phase. Wir entwickeln Lösungsvarianten, bevor wir bewerten — damit das Denken weit bleibt. Erst dann prüfen wir an objektiven Kriterien: Tragfähigkeit, Fairness, wirtschaftliche Belastbarkeit.",
  },
  {
    index: "V",
    title: "Vereinbarung — Was trägt.",
    body: "Eine Mediationsvereinbarung ist keine Kompromissformel, sondern ein gemeinsamer Entwurf. Sie ist schriftlich, konkret, prüfbar — und sie dokumentiert nicht nur das Was, sondern auch das Wie.",
  },
];

const applications = [
  {
    t: "Gesellschafterkonflikte",
    d: "Unterschiedliche Strategien, persönliche Geschichte, finanzielle Interessen — wir strukturieren das Gespräch und die Entscheidung.",
  },
  {
    t: "Nachfolge in Familienunternehmen",
    d: "Generationenübergänge sind selten rein sachlich. Wir begleiten die ökonomische, rechtliche und emotionale Klärung.",
  },
  {
    t: "Vorstands- und Führungskreise",
    d: "Wenn Rollen reiben, Loyalitäten verschwimmen, Entscheidungen blockiert sind — geführte Klärung statt Eskalation.",
  },
  {
    t: "Arbeitsrechtliche Trennungen",
    d: "Würdevolle Auseinandersetzung mit klarem wirtschaftlichen und rechtlichen Ergebnis.",
  },
  {
    t: "Stiftungs- und Aufsichtsgremien",
    d: "Moderation sensibler Beratungsrunden unter Wahrung von Vertraulichkeit und Governance.",
  },
];

export default function MediationPage() {
  return (
    <>
      <Hero
        eyebrow="Leistung · Mediation"
        headline="Weder gut noch schlecht — gelöst ist jeder Konflikt gehaltvoll."
        description="Mediation ist für uns mehr als ein Verfahren zur Streitbeilegung. Sie ist eine Methode, aus festgefahrenen Situationen gemeinsam neue Bewegung zu gewinnen — ohne Gesichtsverlust, mit Respekt und mit messbarem Ergebnis."
        imageLabel="Mediation · Arbeitsraum"
        meta={[
          { label: "Verfahren", value: "5 Phasen" },
          { label: "Dauer", value: "1 Tag – 6 Mo." },
          { label: "Format", value: "vor Ort / hybrid" },
        ]}
      />

      <ContentSection
        eyebrow="Methodik"
        heading="Empathie trifft Pragmatismus."
        align="image-right"
        imageLabel="Notizen · Verhandlung"
        imageAspect="portrait"
        body={[
          "Gute Mediation ist beides: warm und klar. Sie hält den Raum für das, was schwer auszusprechen ist — und sie bringt Entscheidungen zustande, die wirtschaftlich und rechtlich belastbar sind.",
          "Wir arbeiten nach den Grundsätzen des Harvard-Konzepts, erweitert um systemische, psychodynamische und ökonomische Perspektiven. Dieses Zusammenspiel ist unser Handwerk — gewachsen in über 240 Mediationen in Unternehmen, Stiftungen und Familien.",
        ]}
        quote="Mediation ist eine geführte Form des Denkens — und des Zuhörens."
        cta={{ label: "Partner kennenlernen", href: "/about" }}
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
                  Jedes Verfahren wird auf Ihren Fall zugeschnitten. Die fünf Phasen markieren den Rahmen; innerhalb
                  dieses Rahmens ist vieles möglich — vom einzelnen Klärungstag bis zu einem mehrstufigen Prozess über
                  Monate.
                </span>
              </p>
            </div>
          </div>
          <Accordion items={methodItems} />
        </div>
      </section>

      <ContentSection
        eyebrow="Value-Add"
        heading="Kostenkontrolle, Akzeptanz, neue Perspektiven."
        align="image-left"
        imageLabel="Haus · Detail"
        imageAspect="landscape"
        tone="paper"
        body={[
          "Mediation ist regelmäßig schneller, diskreter und günstiger als eine streitige Auseinandersetzung vor Gericht oder in Schiedsverfahren. Der eigentliche Wert liegt jedoch tiefer: Lösungen, die in Mediation gefunden werden, werden mitgetragen — und überleben den nächsten Sturm.",
          "Organisationen, die einen Konflikt mediativ klären, berichten übereinstimmend von drei Effekten: wieder freigesetzter Energie, präziseren Entscheidungsregeln für die Zukunft und einer anderen Qualität von Verbindlichkeit im Führungsteam.",
        ]}
        cta={{ label: "Gespräch vereinbaren", href: "/kontakt" }}
      />

      <section className="py-24 md:py-32 bg-navy text-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-ivory/40" />
                <span className="label text-ivory/65">Anwendungsfelder</span>
              </div>
              <h2 className="display-2 text-ivory">Wo Mediation Kraft entwickelt.</h2>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {applications.map((item, i) => (
              <li
                key={item.t}
                className="rule-top-ivory py-7 flex flex-col gap-3"
              >
                <div className="flex items-baseline gap-4">
                  <span className="section-index text-ivory/55 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display-3 text-ivory">{item.t}</span>
                </div>
                <p className="text-[15px] text-ivory/75 leading-relaxed pl-10 max-w-lg">
                  {item.d}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <ImageFallback label="Gespräch · Silhouetten" aspect="landscape" tone="paper" />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Mediation · Anfrage"
        headline="Wenn Sie über einen Konflikt sprechen möchten."
        description="Ein vertrauliches Vorgespräch ist kostenfrei und unverbindlich. Wir sind auch dann der richtige Gesprächspartner, wenn am Ende keine Mediation folgt — sondern ein anderer Weg."
      />
    </>
  );
}
