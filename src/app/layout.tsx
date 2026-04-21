import type { Metadata } from "next";
import { Inter, Source_Serif_4, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollWrapper } from "@/components/SmoothScrollWrapper";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
    default: "Bestmann & Schmidt — Mediation & Management Consulting",
    template: "%s · Bestmann & Schmidt",
  },
  description:
    "Specialists for Mediation & Management Consulting. Nachhaltige Leistungssteigerung durch menschliche Klärung — individuell, persönlich und mit Respekt vor der Sache.",
  metadataBase: new URL("https://bestmann-schmidt.de"),
  openGraph: {
    title: "Bestmann & Schmidt",
    description:
      "Specialists for Mediation & Management Consulting. Nachhaltige Leistungssteigerung durch menschliche Klärung.",
    type: "website",
    locale: "de_DE",
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
      <body className="min-h-full bg-ivory text-navy">
        <SmoothScrollWrapper>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
