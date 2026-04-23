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
              Ich nehme den Schutz Ihrer persönlichen Daten ernst und halte mich strikt an die Regeln der
              Datenschutzgesetze. Personenbezogene Daten werden nur im technisch notwendigen Umfang erhoben und
              ausschließlich im Rahmen der gemeinsamen Arbeit verwendet — niemals weitergegeben, niemals zu Werbezwecken
              verarbeitet.
            </p>
            <p>
              Wenn Sie über das Kontaktformular oder per E-Mail mit mir in Verbindung treten, speichere ich Ihre Angaben
              nur, um Ihre Anfrage zu beantworten und — falls eine Zusammenarbeit zustande kommt — die weitere
              Kommunikation führen zu können.
            </p>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
              Ihrer Daten. Richten Sie Ihr Anliegen bitte an kontakt@karenbestmann.de.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
