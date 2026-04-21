import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <section className="pt-36 md:pt-48 pb-32 bg-ivory">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 flex items-center gap-4 mb-10">
            <span className="h-px w-10 bg-navy/40" />
            <span className="label text-navy/70">Rechtliches</span>
          </div>
          <h1 className="col-span-12 display-1 text-navy">Datenschutz.</h1>

          <div className="col-span-12 md:col-span-8 mt-12 flex flex-col gap-10 prose-editorial">
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten ernst und halten uns strikt an die
              Regeln der Datenschutzgesetze. Personenbezogene Daten werden nur im technisch
              notwendigen Umfang erhoben und ausschließlich im Rahmen unserer Mandatsarbeit
              verwendet — niemals weitergegeben, niemals zu Werbezwecken verarbeitet.
            </p>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
              der Verarbeitung Ihrer Daten. Richten Sie Ihr Anliegen bitte schriftlich an
              datenschutz@bestmann-schmidt.de.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
