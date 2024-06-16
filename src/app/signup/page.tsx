"use client";

import SignUpForm from "@/components/SignUpForm/SignUpForm";
import Container from "@/components/Container/Container";
import Link from "next/link";
import { Suspense } from "react";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import Typography from "@/components/Typography/Typography";

const SignUp = () => {
  return (
    <main>
      <Container className=" items-center">
        <div className=" flex w-[500px] flex-col gap-10 p-10 bg-lightGrey">
          <SignUpForm />

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
            <Link className=" text-sm font-second underline" href={"/signin"}>
              Sign In
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default SignUp;
