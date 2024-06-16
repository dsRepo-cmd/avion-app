import Container from "@/components/Container/Container";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import SignInForm from "@/components/SignInForm/SignInForm";
import Typography from "@/components/Typography/Typography";
import React from "react";

async function Signin() {
  return (
    <main>
      <Container>
        <div className=" flex w-[500px] flex-col gap-10">
          <Typography tag="h2">Sign In</Typography>
          <SignInForm />
          <GoogleButton />
        </div>
      </Container>
    </main>
  );
}

export default Signin;
