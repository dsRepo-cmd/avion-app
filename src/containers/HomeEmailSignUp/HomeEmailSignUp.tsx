import Container from "@/components/Container/Container";
import EmailSignUpForm from "@/components/InputForm/EmailSignUpForm";

import Typography from "@/components/Typography/Typography";
import { homeEmailSignUp } from "@/data/home";

function HomeEmailSignUp() {
  return (
    <Container bgColor="light">
      <div className=" flex flex-col justify-center items-center gap-4  bg-white p-14">
        <Typography fontFamily="secondary" size="32px" tag="h2">
          {homeEmailSignUp.title}
        </Typography>
        <Typography className=" mb-14" fontFamily="primary" size="16px" tag="p">
          {homeEmailSignUp.text}
        </Typography>
        <EmailSignUpForm className=" w-[472px]" />
      </div>
    </Container>
  );
}

export default HomeEmailSignUp;
