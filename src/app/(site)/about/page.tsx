import type { Metadata } from "next";
import { ContentSection } from "@/components/ContentSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Karen Bestmann — Coach, Mediatorin, Trainerin und Beraterin. Über 25 Jahre Erfahrung in Kommunikation und Konfliktklärung.",
};

const haltung = [
  {
    t: "Menschlichkeit steht für mich an erster Stelle.",
    d: "Ich begegne Menschen mit Respekt, Offenheit und echtem Interesse — nicht mit einem Methodenkoffer.",
  },
  {
    t: "Klarheit schafft Entwicklung.",
    d: "Was ausgesprochen ist, kann bearbeitet werden. Klarheit ist kein Härtezeichen, sondern eine Form der Fürsorge.",
  },
  {
    t: "Wertschätzung ermöglicht Veränderung.",
    d: "Menschen verändern sich dort, wo sie gesehen werden. Nicht dort, wo sie bewertet werden.",
  },
  {
    t: "Konflikte sind Chancen für Wachstum.",
    d: "In jedem Konflikt steckt Information. Gut geführt, wird daraus ein Ausgangspunkt — kein Endpunkt.",
  },
];

const arbeitsweise = [
  {
    t: "Strukturiert statt impulsiv.",
    d: "Ich arbeite mit klarem Vorgehen — nicht mit schneller Reaktion. Struktur gibt Halt, auch wenn das Thema emotional wird.",
  },
  {
    t: "Klar statt interpretativ.",
    d: "Ich höre genau hin und benenne, was ich wahrnehme. Keine Deutung von oben, sondern Rückmeldung auf Augenhöhe.",
  },
  {
    t: "Empathisch, aber nicht wertend.",
    d: "Menschen begegnen mir unterschiedlich — und jede Seite hat ihre Gründe. Ich halte Raum, ohne Partei zu ergreifen.",
  },
  {
    t: "Lösungsorientiert statt problemzentriert.",
    d: "Verstehen ist wichtig — aber nicht das Ziel. Ziel ist, wieder handlungsfähig zu werden.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 md:pt-48 pb-16 md:pb-20 bg-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 flex items-center gap-4 mb-8">
              <span className="h-px w-8 bg-navy/40" />
              <span className="label text-navy/65">Über mich</span>
            </div>
            <h1 className="col-span-12 lg:col-span-10 display-1 text-navy">
              Klarheit entsteht durch Erfahrung und Haltung.
            </h1>
            <div className="col-span-12 md:col-span-5 md:col-start-8 mt-6 flex flex-col gap-6">
              <p className="lede">
                Seit über 25 Jahren begleite ich Menschen in herausfordernden Kommunikations- und Konfliktsituationen
                — als Coach, Trainerin, Mediatorin und Beraterin.
              </p>
              <p className="label text-navy/55">
                Für Führungskräfte · Teams · Organisationen · Unternehmen im Wandel
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContentSection
        eyebrow="Meine Arbeit"
        heading="Ich arbeite mit Menschen — nicht mit Konzepten."
        align="image-right"
        imageSrc="/karenbestmannportait.jpeg"
        imageAlt="Karen Bestmann"
        tone="ivory"
        body={[
          "Im Laufe der Jahre hat sich meine Arbeit immer weiter verdichtet: Es geht nicht um Methoden allein — es geht um das, was zwischen Menschen geschieht, wenn Kommunikation schwierig wird.",
          "Ich habe mit Führungskräften gearbeitet, die unter hoher Verantwortung stehen. Mit Teams, die festgefahren waren. Mit Organisationen, in denen Zusammenarbeit nicht mehr funktioniert hat. Und immer wieder zeigt sich: Konflikte sind selten das eigentliche Problem — die zwischenmenschliche Kommunikation ist der Schlüssel.",
          "Meine Stärke liegt darin, komplexe Situationen schnell zu erfassen, Muster sichtbar zu machen und wieder Struktur und Verständnis in Gespräche zu bringen. Dabei arbeite ich ruhig, klar und mit einer Haltung, die auf Respekt und Verantwortung basiert.",
        ]}
        quote="Ich liebe meine Arbeit — nicht im lauten, sondern im tiefen Sinn: Weil sie Menschen wieder miteinander ins Gespräch bringt."
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-navy/40" />
                <span className="label text-navy/65">Arbeitsweise</span>
              </div>
              <h2 className="display-2 text-navy">Wie ich arbeite.</h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <p className="prose-editorial">
                <span>
                  Was mich auszeichnet, ist die Verbindung aus Erfahrung, Klarheit und echter Zugewandtheit. Vier
                  Prinzipien prägen, wie ich im Gespräch, im Coaching und in der Mediation vorgehe.
                </span>
              </p>
            </div>
          </div>

          <dl>
            {arbeitsweise.map((item, i) => (
              <div
                key={item.t}
                className="grid grid-cols-12 gap-6 rule-top py-8 last:border-b last:border-navy/15"
              >
                <dt className="col-span-12 md:col-span-6 flex items-baseline gap-5">
                  <span className="section-index tabular-nums pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display-3 text-navy">{item.t}</span>
                </dt>
                <dd className="col-span-12 md:col-span-5 md:col-start-8 text-[15px] leading-relaxed text-slate-detail/90 max-w-lg">
                  {item.d}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="haltung" className="py-24 md:py-32 bg-paper">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-navy/40" />
                <span className="label text-navy/65">Meine Haltung</span>
              </div>
              <h2 className="display-2 text-navy">Vier Überzeugungen, die meine Arbeit tragen.</h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <p className="prose-editorial">
                <span>
                  Ich begegne Menschen mit Respekt, Offenheit und echtem Interesse. Dabei ist es mir wichtig, sowohl
                  Lösungen zu erarbeiten als auch Verständnis und Verbindung wiederherzustellen.
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
            {haltung.map((item, i) => (
              <div key={item.t} className="rule-top py-8 flex flex-col gap-3">
                <span className="section-index tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-3 text-navy">{item.t}</h3>
                <p className="text-[15px] leading-relaxed text-slate-detail/90 max-w-md">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection
        eyebrow="Abschluss"
        heading="Ich arbeite dort, wo Klarheit notwendig ist, um wieder handlungsfähig zu werden."
        align="image-left"
        imageLabel="Raum · Fenster"
        imageAspect="landscape"
        tone="ivory"
        body={[
          "Meine berufliche Reise war von Anfang an geprägt von einer Frage: Wie gelingt echte und wertschätzende Verständigung zwischen Menschen? Diese Frage begleitet mich bis heute — in jedem Coaching, in jeder Mediation, in jedem Training.",
          "Ich liebe meine Arbeit — und ich empfinde sie als Berufung. Denn überall dort, wo Menschen wieder miteinander ins Gespräch kommen, entsteht Zukunft.",
        ]}
        cta={{ label: "Erstgespräch anfragen", href: "/kontakt" }}
      />

      <CTASection eyebrow="Kontakt" headline="Beginnen wir mit Zuhören." />
    </>
  );
}
