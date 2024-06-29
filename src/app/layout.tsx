import type { Metadata } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import Header from "@/features/Header/Header";
import Footer from "@/features/Footer/Footer";
import Banner from "@/features/Banner/Banner";
import Providers from "@/components/Providers/Providers";
import { isMobile } from "@/lib/isMobile";
import "./globals.css";

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
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${clashDisplay.variable}`}>
        <Providers>
          <Banner />
          <Header isMobile={mobileCheck} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
