import Container from "@/components/Container/Container";
import EmailSignUpForm from "@/components/EmailSignUpForm/EmailSignUpForm";
import Typography from "@/components/Typography/Typography";

const emailSignUp = {
  title: "Join the club and get the benefits",
  text: "Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more",
};
function JoinUs() {
  return (
    <Container className=" lg:p-0" bgColor="light">
      <div className=" flex flex-col justify-center items-center gap-4  bg-white p-14 lg:px-6 lg:py-12 ">
        <Typography fontFamily="secondary" size="32px" tag="h2">
          {emailSignUp.title}
        </Typography>
        <Typography className=" mb-14" fontFamily="primary" size="16px" tag="p">
          {emailSignUp.text}
        </Typography>
        <EmailSignUpForm className=" w-[472px] lg:w-full" />
      </div>
    </Container>
  );
}

export default JoinUs;
