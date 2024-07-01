import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avion - about",
  description: "Avionapp",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
