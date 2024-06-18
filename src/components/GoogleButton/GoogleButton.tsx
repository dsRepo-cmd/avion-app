"use client";
import { signIn } from "next-auth/react";
import Button from "../Button/Button";
import { useSearchParams } from "next/navigation";
import GoogleIcon from "@/assets/google-square.svg";

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
    <Button
      className=" font-primary items-center justify-center flex gap-4"
      bgColor="white"
      onClick={handleSignIn}
    >
      <GoogleIcon /> {title}
    </Button>
  );
}

export default GoogleButton;
