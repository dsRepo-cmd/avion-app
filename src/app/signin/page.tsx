import { Suspense } from "react";
import Link from "next/link";
import SignInForm from "@/components/features/SignInForm/SignInForm";
import Container from "@/components/shared/Container/Container";
import Divider from "@/components/shared/Divider/Divider";
import GoogleButton from "@/components/features/GoogleButton/GoogleButton";
import Page from "@/components/shared/Page/Page";
import Typography from "@/components/shared/Typography/Typography";
import Spinner from "@/components/shared/Spinner/Spinner";

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

          <Suspense fallback={<Spinner />}>
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
