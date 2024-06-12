import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
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

        <form>
          <input
            className=" w-[354px] bg-lightGrey px-8 py-4"
            type="text"
            placeholder="your@email.com"
          />
          <Button variant="filled" bgColor="black" type="submit">
            Sign up
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default HomeEmailSignUp;
