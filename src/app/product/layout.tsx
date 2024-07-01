import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avion - products",
  description: "Avionapp",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
