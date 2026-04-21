import type { Metadata } from "next";
import { ContentSection } from "@/components/ContentSection";
import { ImageFallback } from "@/components/ImageFallback";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu Bestmann & Schmidt — Hamburg, Wien, Zürich.",
};

const offices = [
  {
    city: "Hamburg",
    label: "Hauptsitz",
    address: ["Alsterufer 12", "20354 Hamburg"],
    contact: "+49 40 / 000 000",
  },
  {
    city: "Wien",
    label: "Repräsentanz",
    address: ["Kärntner Ring 3", "1010 Wien"],
    contact: "+43 1 / 000 000",
  },
  {
    city: "Zürich",
    label: "Repräsentanz",
    address: ["Bahnhofstrasse 7", "8001 Zürich"],
    contact: "+41 44 / 000 00 00",
  },
];

export default function KontaktPage() {
  return (
    <>
      <section className="pt-36 md:pt-48 pb-24 bg-ivory">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 flex items-center gap-4 mb-10">
              <span className="h-px w-10 bg-navy/40" />
              <span className="label text-navy/70">Kontakt</span>
            </div>

            <div className="col-span-12 lg:col-span-10">
              <h1 className="display-1 text-navy">Beginnen wir mit Zuhören.</h1>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-8 mt-10">
              <p className="prose-editorial">
                <span>
                  Ein erstes Gespräch, 30 Minuten, vertraulich und unverbindlich. Wir bitten um ein paar Zeilen zum
                  Anlass — das spart Ihnen am Telefon die einleitende Erklärung.
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 mt-24">
            <div className="col-span-12 md:col-span-7">
              <form className="flex flex-col gap-10">
                <fieldset className="grid grid-cols-2 gap-x-8 gap-y-10">
                  <Field label="Name" name="name" />
                  <Field label="Organisation" name="org" />
                  <Field label="E-Mail" name="email" type="email" />
                  <Field label="Telefon (optional)" name="phone" />
                </fieldset>

                <label className="flex flex-col gap-3">
                  <span className="label text-navy/60">Worum geht es?</span>
                  <textarea
                    name="message"
                    rows={6}
                    className="bg-transparent border-b border-navy/30 focus:border-navy outline-none py-2 text-[16px] text-navy placeholder:text-navy/30 resize-none transition-colors"
                    placeholder="Kurze Situationsbeschreibung, falls möglich."
                  />
                </label>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="label text-navy/50 max-w-xs">
                    Ihre Angaben werden ausschließlich intern bearbeitet und nicht weitergegeben.
                  </span>
                  <button type="submit" className="btn-magnetic on-ivory">
                    <span className="label">Anfrage senden</span>
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </button>
                </div>
              </form>
            </div>

            <aside className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <span className="label text-navy/60">Direkt</span>
                <Link href="mailto:kontakt@bestmann-schmidt.de" className="link-underline text-navy text-lg tracking-tight">
                  kontakt@bestmann-schmidt.de
                </Link>
                <Link href="tel:+4940000000" className="link-underline text-navy/80 text-[15px]">
                  +49 40 / 000 000
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="label text-navy/60">Sprechzeiten</span>
                <p className="text-[15px] leading-relaxed text-slate-detail/90">
                  Mo — Fr, 9 — 18 Uhr<br />
                  Termine auch außerhalb auf Anfrage.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-editorial">
          <ImageFallback label="Kontor · Hamburg" aspect="landscape" />
        </div>
      </section>

      <section className="py-28 md:py-36 bg-paper">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-navy/40" />
                <span className="label text-navy/70">Standorte</span>
              </div>
              <h2 className="display-2 text-navy">Hamburg · Wien · Zürich.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((o) => (
              <article
                key={o.city}
                className="flex flex-col gap-3 rule-top pt-6"
              >
                <span className="label text-navy/55">{o.label}</span>
                <h3 className="display-3 text-navy">{o.city}</h3>
                <address className="not-italic text-[15px] text-slate-detail/90 leading-relaxed mt-1">
                  {o.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <Link
                  href={`tel:${o.contact.replace(/[^+\d]/g, "")}`}
                  className="label link-underline text-navy/80 mt-3 self-start"
                >
                  {o.contact}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContentSection
        eyebrow="Anreise"
        heading="Wir empfangen Sie gern — oder kommen zu Ihnen."
        imageLabel="Anreise · Hafen"
        align="image-right"
        imageAspect="landscape"
        body={[
          "Viele Gespräche führen wir in unseren Räumen in Hamburg — nah am Alsterufer, ruhig, zurückgenommen. Ebenso häufig treffen wir Sie in Ihrem Unternehmen, an einem neutralen Ort, oder digital, wenn Vertraulichkeit anders gewahrt werden kann.",
          "Für längere Klärungsprozesse empfehlen wir regelmäßig einen externen Ort — fernab des Tagesgeschäfts, in bewusst reduzierter Umgebung.",
        ]}
      />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-3 col-span-2 md:col-span-1">
      <span className="label text-navy/60">{label}</span>
      <input
        name={name}
        type={type}
        className="bg-transparent border-b border-navy/30 focus:border-navy outline-none py-2 text-[16px] text-navy placeholder:text-navy/30 transition-colors"
        autoComplete="off"
      />
    </label>
  );
}
