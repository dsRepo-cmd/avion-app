"use client";
import { signIn } from "next-auth/react";
import Button from "../Button/Button";
import { useSearchParams } from "next/navigation";

function GoogleButton() {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <Button onClick={() => signIn("google", { callbackUrl: "" })}>
      Sign in with Google
    </Button>
  );
}

export default GoogleButton;
