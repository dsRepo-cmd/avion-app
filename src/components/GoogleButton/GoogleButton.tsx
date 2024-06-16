"use client";
import { signIn } from "next-auth/react";
import Button from "../Button/Button";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function GoogleButton() {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <Suspense fallback={<>Loading...</>}>
      <Button onClick={() => signIn("google", { callbackUrl })}>
        Sign in with Google
      </Button>
    </Suspense>
  );
}

export default GoogleButton;
