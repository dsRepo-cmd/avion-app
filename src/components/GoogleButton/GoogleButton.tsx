"use client";
import { signIn } from "next-auth/react";
import Button from "../Button/Button";
import { useSearchParams } from "next/navigation";

interface Props {
  title: string;
}
function GoogleButton({ title }: Props) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  const handleSignIn = () => {
    signIn("google", { callbackUrl });
  };

  return (
    <Button bgColor="white" onClick={handleSignIn}>
      {title}
    </Button>
  );
}

export default GoogleButton;
