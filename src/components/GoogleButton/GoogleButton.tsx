"use client";
import { signIn } from "next-auth/react";
import Button from "../Button/Button";
import { useSearchParams } from "next/navigation";

function GoogleButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  const handleSignIn = () => {
    signIn("google", { callbackUrl });
  };

  return <Button onClick={handleSignIn}>Sign in with Google</Button>;
}

export default GoogleButton;
