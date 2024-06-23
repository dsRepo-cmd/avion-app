"use client";

import { CartProvider } from "@/lib/CartContext";
import { SessionProvider } from "next-auth/react";
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
