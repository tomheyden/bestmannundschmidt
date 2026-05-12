import type { Metadata } from "next";
import { ContentSection } from "@/components/ContentSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zu Karen Bestmann — Coaching, Mediation und Training. Hamburg und remote.",
};

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
                  Ein erstes Gespräch, rund 30 Minuten, vertraulich und unverbindlich. Ein paar Zeilen zum Anlass
                  genügen — den Rest besprechen wir am Telefon oder persönlich.
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 mt-24">
            <div className="col-span-12 md:col-span-7">
              <form className="flex flex-col gap-10">
                <fieldset className="grid grid-cols-2 gap-x-8 gap-y-10">
                  <Field label="Name" name="name" />
                  <Field label="Organisation (optional)" name="org" />
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
                    Ihre Angaben werden vertraulich behandelt und nicht weitergegeben.
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
                <Link href="mailto:kontakt@karenbestmann.de" className="link-underline text-navy text-lg tracking-tight">
                  kontakt@karenbestmann.de
                </Link>
                <Link href="tel:+4917743243488" className="link-underline text-navy/80 text-[15px]">
                  +49 (0)177 432 43 88
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="label text-navy/60">Erreichbarkeit</span>
                <p className="text-[15px] leading-relaxed text-slate-detail/90">
                  24/7 Anrufbeantworter<br />
                  Rückruf innerhalb eines Tages<br />
                  Termine nach Vereinbarung
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="label text-navy/60">Ort</span>
                <p className="text-[15px] leading-relaxed text-slate-detail/90">
                  Hamburg | Kiel<br />
                  Bundesweit vor Ort | Digital
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ContentSection
        eyebrow="Anreise"
        heading="Ob bei mir, bei Ihnen oder digital — passend zum Thema."
        imageSrc="/img/kontakt-hamburg-hafen.jpeg"
        imageAlt="Hamburger Hafen"
        imageLabel="Hamburg · Hafen"
        align="image-right"
        imageAspect="landscape"
        body={[
          "Viele Gespräche führe ich in Hamburg und in Kiel. Ebenso häufig treffen wir uns in Ihrem Unternehmen, an einem neutralen Ort, oder digital — wenn das für Sie besser passt oder Vertraulichkeit es nahelegt.",
          "Für längere Klärungsprozesse empfehle ich regelmäßig einen externen Ort — fernab des Tagesgeschäfts, in bewusst reduzierter Umgebung. Nichts macht Verständigung so leicht wie ein Raum, der selbst ruhig ist.",
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
