import { SmoothScrollWrapper } from "@/components/SmoothScrollWrapper";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrollWrapper>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </SmoothScrollWrapper>
  );
}
