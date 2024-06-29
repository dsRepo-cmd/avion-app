"use client";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/lib/CartContext";

interface Props {
  children?: React.ReactNode;
}
function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <CartProvider>{children}</CartProvider>
    </SessionProvider>
  );
}

export default Providers;
