import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und rechtliche Angaben zu Karen Bestmann — Coaching, Mediation & Training, ein Geschäftsbereich der beeconnected GmbH.",
};

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
              <h2 className="display-3 text-navy mb-3">Anbieter gemäß § 5 DDG</h2>
              <p>
                beeconnected GmbH<br />
                Mühlweg 53<br />
                69502 Hemsbach<br />
                Deutschland
              </p>
              <p className="mt-4 text-[15px] text-slate-detail/90">
                Die Website karenbestmann.de wird als Geschäftsbereich{" "}
                <span className="italic">„Karen Bestmann — Coaching, Mediation &amp; Training“</span>{" "}
                der beeconnected GmbH betrieben. Rechtsträger und Diensteanbieter im Sinne des § 5 DDG ist
                ausschließlich die beeconnected GmbH.
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">Geschäftsbereich &amp; Ansprechpartnerin</h2>
              <p>
                Karen Bestmann<br />
                Coaching · Mediation · Training<br />
                Kiel | Hamburg | Bundesweit
              </p>
              <p className="mt-4">
                Telefon: +49 (0)177 432 43 88<br />
                E-Mail: kontakt@karenbestmann.de<br />
                Web: karenbestmann.de
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">Kontakt Unternehmenssitz</h2>
              <p>
                Telefon: 06201 / 478 99-0<br />
                Fax: 06201 / 478 99-88<br />
                Web: beeconnected.de
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">Vertretungsberechtigter Geschäftsführer</h2>
              <p>Rüdiger Heyden</p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">Registereintrag</h2>
              <p>
                Amtsgericht Mannheim<br />
                Handelsregister-Nr. HRB 432713
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">Umsatzsteuer-Identifikationsnummer</h2>
              <p>Gemäß § 27a Umsatzsteuergesetz: DE214571497</p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">
                Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV
              </h2>
              <p>
                Karen Bestmann<br />
                c/o beeconnected GmbH<br />
                Mühlweg 53, 69502 Hemsbach
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  className="link-underline text-navy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ec.europa.eu/consumers/odr
                </a>
                . Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">Haftung für Inhalte</h2>
              <p>
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als
                Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach den §§ 8 bis 10 DDG sind wir als Diensteanbieter
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt.
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar. Eine
                permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">Urheberrecht</h2>
              <p>
                Die durch die Betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
                der beeconnected GmbH. Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht-kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
