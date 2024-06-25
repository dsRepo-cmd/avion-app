import AppLink from "@/components/AppLink/AppLink";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import { heading } from "@/data/about";

function Heading() {
  return (
    <Container>
      <div className=" flex gap-20 px-16  items-start">
        <Typography size="36px" fontFamily="secondary" tag="h1">
          {heading.title}
        </Typography>
        <AppLink variant="filled" bgColor="gray" href={heading.link.href}>
          {heading.link.name}
        </AppLink>
      </div>
    </Container>
  );
}

export default Heading;
