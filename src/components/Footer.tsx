import Link from "next/link";
import Image from "next/image";

const navGroups = [
  {
    title: "Angebote",
    links: [
      { label: "Coaching", href: "/coaching" },
      { label: "Training & Beratung", href: "/beratung" },
      { label: "Mediation", href: "/mediation" },
    ],
  },
  {
    title: "Praxis",
    links: [
      { label: "Über mich", href: "/about" },
      { label: "Haltung", href: "/about#haltung" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "kontakt@karenbestmann.de", href: "mailto:kontakt@karenbestmann.de" },
      { label: "+49 (0)40 · 000 000", href: "tel:+4940000000" },
      { label: "Hamburg", href: "/kontakt" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="container-editorial py-20 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-8">
            <Link href="/" className="inline-flex items-center w-fit group">
              <Image
                src="/Logo_karenbestmann.svg"
                alt="Karen Bestmann"
                width={311}
                height={153}
                className="h-12 w-auto invert opacity-95"
              />
            </Link>
            <p className="display-2 text-ivory max-w-xl">
              Menschlichkeit ist mein Kompass.
            </p>
            <Link
              href="/kontakt"
              className="btn-magnetic on-navy self-start"
            >
              <span className="label">Erstgespräch anfragen</span>
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
              © {new Date().getFullYear()} Karen Bestmann
            </span>
            <span
              aria-hidden
              className="hidden md:inline-block h-3 w-px bg-ivory/20"
            />
            <span className="label text-ivory/50">Coaching · Mediation · Training</span>
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
