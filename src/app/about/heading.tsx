import AppLink from "@/components/shared/AppLink/AppLink";
import Container from "@/components/shared/Container/Container";
import Typography from "@/components/shared/Typography/Typography";
import { heading } from "./data";

function Heading() {
  return (
    <Container>
      <div className=" flex gap-20 px-16  items-start lg:flex-col lg:p-0">
        <Typography size="36px" fontFamily="secondary" tag="h1">
          {heading.title}
        </Typography>
        <AppLink
          className=" lg:w-full"
          variant="filled"
          bgColor="gray"
          href={heading.link.href}
        >
          {heading.link.name}
        </AppLink>
      </div>
    </Container>
  );
}

export default Heading;
