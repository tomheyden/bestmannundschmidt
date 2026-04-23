import type { Metadata } from "next";
import { Inter, Source_Serif_4, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Karen Bestmann — Coaching · Mediation · Training",
    template: "%s · Karen Bestmann",
  },
  description:
    "Klarheit in Konflikten. Stärke in Kommunikation. Wirkung in Zusammenarbeit. Coaching, Mediation und Kommunikations­training für Führungskräfte, Teams und Organisationen — mit über 25 Jahren Erfahrung.",
  metadataBase: new URL("https://karenbestmann.de"),
  openGraph: {
    title: "Karen Bestmann — Coaching · Mediation · Training",
    description:
      "Klarheit in Konflikten. Stärke in Kommunikation. Wirkung in Zusammenarbeit.",
    type: "website",
    locale: "de_DE",
    url: "https://karenbestmann.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${sourceSerif.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-ivory text-navy">{children}</body>
    </html>
  );
}
