import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avion - sign up",
  description: "Avionapp",
};

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
