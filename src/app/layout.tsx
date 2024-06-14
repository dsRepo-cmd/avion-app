import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const satoshi = localFont({
  src: "./fonts/Satoshi-Regular.woff",
  weight: "400",
  display: "swap",
  style: "normal",
  variable: "--font-family",
});

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Regular.woff",
  weight: "400",
  display: "swap",
  style: "normal",
  variable: "--second-family",
});

export const metadata: Metadata = {
  title: "Avion",
  description: "Avionapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${clashDisplay.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
