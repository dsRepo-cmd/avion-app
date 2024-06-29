import React, { Suspense } from "react";
import Link from "next/link";
import SignInForm from "@/features/SignInForm/SignInForm";
import Container from "@/components/Container/Container";
import Divider from "@/components/Divider/Divider";
import GoogleButton from "@/features/GoogleButton/GoogleButton";
import Page from "@/components/Page/Page";
import Typography from "@/components/Typography/Typography";

async function Signin() {
  return (
    <Page>
      <Container className=" items-center md:p-2">
        <div className=" flex w-[500px] flex-col gap-6 p-10 bg-lightGrey md:w-full ">
          <SignInForm />

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
    </Page>
  );
}

export default Signin;
