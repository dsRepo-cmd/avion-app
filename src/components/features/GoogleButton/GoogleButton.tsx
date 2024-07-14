"use client";
import { signIn } from "next-auth/react";
import Button from "../../shared/Button/Button";
import { useSearchParams } from "next/navigation";
import GoogleSquareIcon from "@/components/icons/GoogleSquareIcon";

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
      <GoogleSquareIcon /> {title}
    </Button>
  );
}

export default GoogleButton;
