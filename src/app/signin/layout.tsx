import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avion - sign in",
  description: "Avionapp",
};

export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
