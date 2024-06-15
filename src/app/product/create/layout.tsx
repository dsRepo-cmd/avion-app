import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avion - product create",
  description: "Avionapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
