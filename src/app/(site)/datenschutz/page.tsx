import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung für karenbestmann.de — Informationen zur Verarbeitung personenbezogener Daten nach DSGVO.",
};

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
            <p className="lede">
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie
              gemäß Art. 13 und Art. 14 DSGVO darüber, welche Daten beim Besuch dieser Website und bei
              Kontaktaufnahmen über uns erhoben, verarbeitet und genutzt werden.
            </p>

            <div>
              <h2 className="display-3 text-navy mb-3">1. Verantwortliche Stelle</h2>
              <p>
                Verantwortliche im Sinne der Datenschutz-Grundverordnung ist:
              </p>
              <p className="mt-4">
                beeconnected GmbH<br />
                Mühlweg 53<br />
                69502 Hemsbach<br />
                Deutschland<br />
                Telefon: 06201 / 478 99-0<br />
                E-Mail: kontakt@karenbestmann.de
              </p>
              <p className="mt-4 text-[15px] text-slate-detail/90">
                Die Website karenbestmann.de wird als Geschäftsbereich{" "}
                <span className="italic">„Karen Bestmann — Coaching, Mediation &amp; Training“</span>{" "}
                der beeconnected GmbH betrieben. Für Anliegen rund um diesen Geschäftsbereich wenden Sie
                sich bitte direkt an kontakt@karenbestmann.de.
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">2. Datenschutzbeauftragte</h2>
              <p>
                Sabine Heyden<br />
                beeconnected GmbH<br />
                Mühlweg 53, 69502 Hemsbach<br />
                E-Mail: s.heyden@beeconnected.de
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">3. Allgemeines zur Datenverarbeitung</h2>
              <p>
                Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
                Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
                E-Mail-Adressen) erhoben werden, erfolgt dies stets auf freiwilliger Basis. Diese Daten
                werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              </p>
              <p className="mt-4">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation
                per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                Zugriff durch Dritte ist nicht möglich.
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">4. SSL- bzw. TLS-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher
                Inhalte, wie zum Beispiel Anfragen, die Sie an uns senden, eine SSL- bzw. TLS-Verschlüsselung.
                Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                „http://“ auf „https://“ wechselt und am Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">5. Server-Logfiles</h2>
              <p>
                Der Provider dieser Seiten erhebt und speichert automatisch Informationen in sogenannten
                Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="mt-4 list-disc pl-6 flex flex-col gap-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer-URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (in gekürzter bzw. anonymisierter Form)</li>
              </ul>
              <p className="mt-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
                Interesse liegt im sicheren, stabilen und funktionsfähigen Betrieb der Website.
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">6. Hosting</h2>
              <p>
                Diese Website wird bei der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
                (im Folgenden „Vercel“) gehostet. Personenbezogene Daten, die auf dieser Website erhoben
                werden, werden auf den Servern von Vercel verarbeitet. Die Nutzung von Vercel erfolgt auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
                möglichst zuverlässigen und performanten Darstellung unserer Website.
              </p>
              <p className="mt-4">
                Wir haben mit Vercel einen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO abgeschlossen.
                Soweit Daten in die USA übertragen werden, erfolgt dies auf Grundlage der EU-Standard­-
                vertragsklauseln nach Art. 46 DSGVO sowie — sofern Vercel entsprechend zertifiziert ist —
                auf Grundlage des EU-U.S. Data Privacy Framework.
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">7. Kontaktformular und Kontakt per E-Mail</h2>
              <p>
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben
                aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
                nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
                Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs.
                1 lit. a DSGVO).
              </p>
              <p className="mt-4">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
                Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
                Zwingende gesetzliche Bestimmungen — insbesondere Aufbewahrungsfristen — bleiben unberührt.
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">8. Zugangsschutz (Coming-Soon-Bereich)</h2>
              <p>
                Solange sich die Website in der Fertigstellung befindet, ist der Zugang durch ein Passwort
                geschützt. Bei erfolgreicher Eingabe wird ein technisch notwendiges Sitzungs-Cookie
                gesetzt, das ausschließlich dazu dient, Sie für die Dauer Ihres Besuchs als freigeschaltet
                zu erkennen. Es werden keine personenbezogenen Daten ausgewertet. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. f DSGVO sowie § 25 Abs. 2 Nr. 2 TDDDG (unbedingt erforderliches Cookie).
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">9. Cookies und Tracking</h2>
              <p>
                Diese Website verwendet keine Cookies oder Technologien zu Analyse-, Tracking- oder
                Werbezwecken. Es werden ausschließlich technisch notwendige Sitzungsdaten verarbeitet.
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">10. Ihre Rechte als betroffene Person</h2>
              <p>Ihnen stehen nach der DSGVO insbesondere folgende Rechte zu:</p>
              <ul className="mt-4 list-disc pl-6 flex flex-col gap-1">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                <li>Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
                <li>
                  Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO) — zuständig ist der
                  Landesbeauftragte für den Datenschutz Baden-Württemberg
                </li>
              </ul>
              <p className="mt-4">
                Zur Wahrnehmung Ihrer Rechte genügt eine formlose Mitteilung an die oben genannten
                Kontaktadressen. Eine automatisierte Entscheidungsfindung einschließlich Profiling findet
                nicht statt.
              </p>
            </div>

            <div>
              <h2 className="display-3 text-navy mb-3">11. Aktualität und Änderung dieser Erklärung</h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website
                oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden,
                diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Fassung kann jederzeit auf
                dieser Seite abgerufen werden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
