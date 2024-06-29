import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avion - profile",
  description: "Avionapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
