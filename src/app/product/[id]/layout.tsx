import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avion - product",
  description: "Avionapp",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
