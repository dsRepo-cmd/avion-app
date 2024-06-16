"use client";

import SignUpForm from "@/components/SignUpForm/SignUpForm";
import Container from "@/components/Container/Container";
import Link from "next/link";
import { Suspense } from "react";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import Typography from "@/components/Typography/Typography";
import Divider from "@/components/Divider/Divider";

const SignUp = () => {
  return (
    <main>
      <Container className=" items-center">
        <div className=" flex w-[500px] flex-col gap-6 p-10 bg-lightGrey">
          <SignUpForm />

          <div className=" flex items-center justify-center gap-10">
            <Divider className=" flex w-full border-b opacity-10" />
            <Typography
              size="18px"
              fontFamily="secondary"
              color="light"
              tag="span"
            >
              or
            </Typography>
            <Divider className=" flex w-full border-b opacity-10" />
          </div>
          <Suspense fallback={<>Loading...</>}>
            <GoogleButton title="Sign up with Google" />
          </Suspense>

          <div className=" flex gap-3">
            <Typography
              size="14px"
              fontFamily="primary"
              color="light"
              tag="span"
            >
              {"Already have an account?"}
            </Typography>
            <Link className="  text-sm font-second underline" href={"/signin"}>
              Sign In
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default SignUp;
