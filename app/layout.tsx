import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: "Datics — Electronics & Gadgets",
  description:
    "Discover the latest electronics and gadgets at Datics. Premium tech products, unbeatable prices, and fast shipping.",
  keywords: ["electronics", "gadgets", "tech", "phones", "laptops", "wearables"],
  openGraph: {
    title: "Datics — Electronics & Gadgets",
    description:
      "Discover the latest electronics and gadgets at Datics. Premium tech products, unbeatable prices, and fast shipping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0F172A] text-slate-100 antialiased font-sans">
        <LocaleProvider>
          <LanguageToggle />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}