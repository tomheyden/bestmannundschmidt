import type { Metadata } from "next";
import Image from "next/image";
import { UnlockForm } from "./UnlockForm";

export const metadata: Metadata = {
  title: "In Arbeit",
  description: "Die Website von Karen Bestmann erscheint in Kürze.",
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-dvh flex flex-col bg-ivory text-navy overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-navy/5 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -left-40 h-[36rem] w-[36rem] rounded-full bg-paper blur-3xl"
      />

      <header className="container-editorial pt-10 md:pt-14">
        <div className="flex items-center gap-4">
          <Image
            src="/Logo_karenbestmann.svg"
            alt="Karen Bestmann"
            width={311}
            height={153}
            priority
            className="h-12 md:h-14 w-auto"
          />
        </div>
      </header>

      <section className="relative flex-1 container-editorial flex items-center py-16 md:py-20">
        <div className="grid grid-cols-12 gap-6 w-full">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-navy/40" />
              <span className="label text-navy/65">In Arbeit · Coming Soon</span>
            </div>

            <h1 className="display-1 text-navy">
              Diese Website erscheint in Kürze.
            </h1>

            <p className="lede max-w-xl">
              Coaching, Mediation und Training — für Klarheit, Verbindung und Lösungen.
              Ich bereite die Seiten gerade vor. Bis dahin erreichen Sie mich per E-Mail.
            </p>

            <div className="flex flex-col gap-3">
              <span className="label text-navy/55">Kontakt</span>
              <a
                href="mailto:kontakt@karenbestmann.de"
                className="link-underline text-navy text-lg tracking-tight w-fit"
              >
                kontakt@karenbestmann.de
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-6 self-end">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-navy/40" />
              <span className="label text-navy/65">Zugang</span>
            </div>
            <p className="text-[15px] text-slate-detail/90 leading-relaxed max-w-sm">
              Sie haben ein Vorschau-Passwort erhalten? Geben Sie es hier ein, um die
              Website anzusehen.
            </p>
            <UnlockForm />
          </div>
        </div>
      </section>

      <footer className="container-editorial pb-8 md:pb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-navy/10">
          <span className="label text-navy/50">
            © {new Date().getFullYear()} Karen Bestmann · Coaching · Mediation · Training
          </span>
          <span className="label text-navy/40">karenbestmann.de</span>
        </div>
      </footer>
    </div>
  );
}
