import type { Metadata } from "next";
import { ContentSection } from "@/components/ContentSection";
import { CTASection } from "@/components/CTASection";
import { ImageFallback } from "@/components/ImageFallback";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Bestmann & Schmidt — eine Partnerschaft für Mediation & Management Consulting. Expertise, Haltung und Netzwerk.",
};

const partners = [
  {
    name: "Dr. Ada Bestmann",
    role: "Partnerin · Mediation, Gesellschafterkonflikte",
    bio: "Promovierte Wirtschaftsmediatorin, zuvor zwölf Jahre in internationaler Unternehmensberatung. Lehrbeauftragte für Verhandlungsführung an mehreren europäischen Hochschulen.",
    meta: "Hamburg / Wien",
  },
  {
    name: "Henrik Schmidt",
    role: "Partner · Coaching, Organisationsberatung",
    bio: "Diplom-Psychologe und Master of Business Administration. Langjähriger Sparring-Partner von Vorständen in Familienunternehmen und öffentlichen Organisationen. Lehrsupervisor (DGSv).",
    meta: "Hamburg / Zürich",
  },
];

const publications = [
  { year: "2024", title: "Entscheidung und Beziehung — Führung unter Spannung", venue: "Edition B&S" },
  { year: "2023", title: "Was Mediation in Gesellschafterkreisen leisten kann", venue: "M&A Review" },
  { year: "2022", title: "Die dritte Stimme im Raum — Coaching als Urteilsübung", venue: "OSC Zeitschrift" },
  { year: "2021", title: "Nachfolge ist ein Satz, kein Projekt", venue: "F.A.Z. Sonderedition" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 md:pt-48 pb-16 md:pb-20 bg-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 flex items-center gap-4 mb-8">
              <span className="h-px w-8 bg-navy/40" />
              <span className="label text-navy/65">Haus · Über uns</span>
            </div>
            <h1 className="col-span-12 lg:col-span-10 display-1 text-navy">
              Eine Partnerschaft für Klärung — seit 2007.
            </h1>
            <div className="col-span-12 md:col-span-5 md:col-start-8 mt-6">
              <p className="lede">
                Bestmann & Schmidt wurde 2007 in Hamburg gegründet. Wir sind eine kleine Kanzlei aus zwei Partnerinnen
                und einem sorgfältig ausgewählten Netzwerk. Unsere Arbeit entsteht aus einer Handvoll Mandate pro
                Jahr — bewusst gewählt, ebenso bewusst geführt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-editorial">
          <ImageFallback label="Kontor · Hamburg" aspect="landscape" />
        </div>
      </section>

      <section id="partner" className="py-24 md:py-32 bg-paper">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-navy/40" />
                <span className="label text-navy/65">Partner</span>
              </div>
              <h2 className="display-2 text-navy">Wer mit Ihnen arbeitet.</h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <p className="prose-editorial">
                <span>
                  Sie sprechen immer mit einem der beiden Partner. Das ist keine Marketing-Aussage, sondern ein
                  Gestaltungsprinzip: Verantwortung lässt sich nicht delegieren, ohne dass etwas verloren geht.
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 items-start">
            {partners.map((p) => (
              <article key={p.name} className="col-span-12 md:col-span-6 flex flex-col gap-5">
                <ImageFallback
                  label={`Portrait · ${p.name.split(" ").pop()}`}
                  aspect="portrait"
                  tone="navy"
                />
                <div className="flex flex-col gap-2 pt-3">
                  <span className="label text-navy/55">{p.meta}</span>
                  <h3 className="display-3 text-navy">{p.name}</h3>
                  <span className="label text-navy/65">{p.role}</span>
                  <p className="text-[15px] leading-relaxed text-slate-detail/90 max-w-md mt-3">{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContentSection
        eyebrow="Netzwerk"
        heading="Wir arbeiten in einem Kollegium."
        align="image-left"
        imageLabel="Tisch · Kreis"
        imageAspect="landscape"
        tone="ivory"
        body={[
          "Wir kennen unsere Grenzen. Wenn ein Mandat spezifische Expertise verlangt — Transaktionsrecht, Bilanzierung, interkulturelle Mediation, Psychodiagnostik — arbeiten wir mit langjährigen Kolleginnen und Kollegen zusammen.",
          "Unser Netzwerk umfasst Wirtschaftsprüfer, Steuerberaterinnen, spezialisierte Anwältinnen und Kolleginnen im Coaching. Jede Empfehlung ist persönlich getroffen und wird persönlich verantwortet.",
        ]}
      />

      <section id="publikationen" className="py-24 md:py-32 bg-navy text-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-ivory/40" />
                <span className="label text-ivory/65">Publikationen</span>
              </div>
              <h2 className="display-2 text-ivory">Ausgewählte Texte.</h2>
            </div>
          </div>
          <ul>
            {publications.map((p) => (
              <li
                key={p.title}
                className="grid grid-cols-12 gap-6 rule-top-ivory py-6 last:border-b last:border-ivory/15 group"
              >
                <span className="col-span-3 md:col-span-2 section-index text-ivory/55 pt-1.5 tabular-nums">
                  {p.year}
                </span>
                <span className="col-span-9 md:col-span-7 display-3 text-ivory group-hover:opacity-80 transition-opacity">
                  {p.title}
                </span>
                <span className="col-span-12 md:col-span-3 label text-ivory/55 md:text-right pt-1.5">
                  {p.venue}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection eyebrow="Kontakt" headline="Wir hören zu." />
    </>
  );
}
