"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}
export default function Modal({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(
        <div className=" absolute z-50 flex justify-center items-center bg-[#00000055] w-screen h-screen">
          {children}
        </div>,
        document.body
      )
    : null;
}
