import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadProvider } from "@/components/ui/LeadModal";
import { site } from "@/data/site";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oxanium",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-titillium",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.shortName} — прием лома в Перми`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  icons: {
    icon: "/brand/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${oswald.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <LeadProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LeadProvider>
      </body>
    </html>
  );
}
