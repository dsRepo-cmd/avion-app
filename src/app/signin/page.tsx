import Container from "@/components/Container/Container";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import SignInForm from "@/components/SignInForm/SignInForm";
import Typography from "@/components/Typography/Typography";

import Link from "next/link";
import React, { Suspense } from "react";

async function Signin() {
  return (
    <main className="">
      <Container className=" items-center">
        <div className=" flex w-[500px] flex-col gap-10 p-10 bg-lightGrey">
          <SignInForm />
          <Suspense fallback={<>Loading...</>}>
            <GoogleButton title="Sign in with Google" />
          </Suspense>

          <div className=" flex gap-3">
            <Typography
              size="14px"
              fontFamily="primary"
              color="light"
              tag="span"
            >
              {"Don't have an account?"}
            </Typography>
            <Link className=" text-sm  font-second underline" href={"/signup"}>
              Sign Up
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Signin;
