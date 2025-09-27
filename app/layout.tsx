import type { Metadata } from "next";
import { Kanit } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisWrapper from "./LenisWrapper";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Construction Website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-arp="">
      <body className={`${kanit.className}`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <LenisWrapper>{children}</LenisWrapper>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
