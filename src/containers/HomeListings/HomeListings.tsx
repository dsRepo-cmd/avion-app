import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import { ListingData } from "@/data/home";
import Image from "next/image";

interface Props {
  data: ListingData;
}

function HomeListings({ data }: Props) {
  return (
    <Container>
      <div className=" flex flex-col items-start gap-9">
        <Typography fontFamily="secondary" size="32px" tag="h2">
          {data.title}
        </Typography>
        <ul className=" flex gap-5">
          {data.products.map((product) => (
            <li className=" flex flex-col gap-2" key={product.id}>
              <Image
                src={product.photoSrc}
                alt={product.photoSrc}
                width={product.isPhotoBig ? 630 : 305}
                height={375}
              />

              <Typography fontFamily="secondary" size="20px" tag="h4">
                {product.name}
              </Typography>

              <Typography fontFamily="primary" size="18px" tag="p">
                {product.price}
              </Typography>
            </li>
          ))}
        </ul>

        <Button className=" self-center" bgColor="gray" variant="filled">
          View collection
        </Button>
      </div>
    </Container>
  );
}

export default HomeListings;
