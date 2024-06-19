import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/features/Header/Header";
import Footer from "@/features/Footer/Footer";
import Providers from "@/components/Providers/Providers";

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
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
