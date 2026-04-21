import Link from "next/link";
import Image from "next/image";

const navGroups = [
  {
    title: "Leistungen",
    links: [
      { label: "Mediation", href: "/mediation" },
      { label: "Coaching", href: "/coaching" },
      { label: "Beratung", href: "/beratung" },
      { label: "Team-Entwicklung", href: "/beratung#team" },
    ],
  },
  {
    title: "Haus",
    links: [
      { label: "Über uns", href: "/about" },
      { label: "Partner & Netzwerk", href: "/about#partner" },
      { label: "Publikationen", href: "/about#publikationen" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "kontakt@bestmann-schmidt.de", href: "mailto:kontakt@bestmann-schmidt.de" },
      { label: "+49 40 / 000 000", href: "tel:+4940000000" },
      { label: "Hamburg · Wien · Zürich", href: "/kontakt" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="container-editorial py-24 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-8">
            <Link href="/" className="inline-flex items-center w-fit group">
              <Image
                src="/logo.svg"
                alt="Bestmann & Schmidt"
                width={220}
                height={108}
                className="h-14 w-auto invert opacity-95"
              />
            </Link>
            <p className="display-2 text-ivory max-w-xl">
              Weder gut noch schlecht — gelöst ist jeder Konflikt gehaltvoll.
            </p>
            <Link
              href="/kontakt"
              className="btn-magnetic on-navy self-start"
            >
              <span className="label">Gespräch vereinbaren</span>
            </Link>
          </div>

          {navGroups.map((group) => (
            <div key={group.title} className="col-span-12 sm:col-span-4 lg:col-span-2 flex flex-col gap-4">
              <span className="label text-ivory/50">{group.title}</span>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="link-underline text-[15px] text-ivory/85 hover:text-ivory">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-ivory/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <span className="label text-ivory/50">
              © {new Date().getFullYear()} Bestmann & Schmidt Partnerschaft mbB
            </span>
            <span
              aria-hidden
              className="hidden md:inline-block h-3 w-px bg-ivory/20"
            />
            <span className="label text-ivory/50">a beeconnected company</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="label link-underline text-ivory/70">
              Impressum
            </Link>
            <Link href="/datenschutz" className="label link-underline text-ivory/70">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
