import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <section className="pt-36 md:pt-48 pb-32 bg-ivory">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 flex items-center gap-4 mb-10">
            <span className="h-px w-10 bg-navy/40" />
            <span className="label text-navy/70">Rechtliches</span>
          </div>
          <h1 className="col-span-12 display-1 text-navy">Impressum.</h1>

          <div className="col-span-12 md:col-span-8 mt-12 flex flex-col gap-10 prose-editorial">
            <div>
              <h2 className="display-3 text-navy mb-3">Anbieter</h2>
              <p>
                Karen Bestmann<br />
                Coaching · Mediation · Training<br />
                Musterstraße 00<br />
                20000 Hamburg
              </p>
            </div>
            <div>
              <h2 className="display-3 text-navy mb-3">Kontakt</h2>
              <p>
                Telefon: +49 (0)40 · 000 000<br />
                E-Mail: kontakt@karenbestmann.de<br />
                Web: karenbestmann.de
              </p>
            </div>
            <div>
              <h2 className="display-3 text-navy mb-3">Umsatzsteuer-ID</h2>
              <p>Gemäß §27a Umsatzsteuergesetz: DE000000000</p>
            </div>
            <div>
              <h2 className="display-3 text-navy mb-3">Verantwortlich für den Inhalt</h2>
              <p>Karen Bestmann, Anschrift wie oben.</p>
            </div>
            <div>
              <h2 className="display-3 text-navy mb-3">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <br />
                https://ec.europa.eu/consumers/odr
                <br />
                Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
