"use client";
import { Suspense } from "react";
import Link from "next/link";
import SignUpForm from "@/components/features/SignUpForm/SignUpForm";
import GoogleButton from "@/components/features/GoogleButton/GoogleButton";
import Container from "@/components/shared/Container/Container";
import Typography from "@/components/shared/Typography/Typography";
import Divider from "@/components/shared/Divider/Divider";
import Page from "@/components/shared/Page/Page";

const SignUp = () => {
  return (
    <Page>
      <Container className=" items-center md:p-2">
        <div className=" flex w-[500px] flex-col gap-6 p-10 bg-lightGrey md:w-full ">
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
    </Page>
  );
};

export default SignUp;
