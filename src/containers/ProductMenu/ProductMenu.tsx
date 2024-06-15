import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Counter from "@/components/Counter/Counter";
import Divider from "@/components/Divider/Divider";
import Typography from "@/components/Typography/Typography";
import { getProductsByID } from "@/lib/products";
import Image from "next/image";

interface Props {
  id: string;
}
async function ProductMenu({ id }: Props) {
  const product = await getProductsByID(id);

  if (!product) return null;
  return (
    <Container bgColor="light">
      <div className=" flex">
        <Image
          className=" w-full"
          src={product.imageSrc}
          alt={product.imageSrc}
          width={305}
          height={375}
        />

        <div className=" flex w-full flex-col gap-4 p-14">
          <Typography fontFamily="secondary" size="32px" tag="h2">
            {product.name}
          </Typography>

          <Typography
            className=" mb-3"
            fontFamily="primary"
            size="24px"
            tag="h3"
          >
            £{product.price}
          </Typography>

          <Divider />

          <Typography
            className=" mt-2"
            fontFamily="secondary"
            size="16px"
            tag="h5"
          >
            Product description
          </Typography>

          <Typography
            className=" mb-4"
            fontFamily="primary"
            size="16px"
            tag="p"
          >
            {product.description}
          </Typography>

          <Typography
            className=" mb-2"
            fontFamily="secondary"
            size="16px"
            tag="h5"
          >
            Dimensions
          </Typography>

          <div className=" flex gap-20 mb-6">
            <div className=" flex flex-col gap-4">
              <Typography fontFamily="secondary" size="16px" tag="h5">
                Height
              </Typography>

              <Typography fontFamily="primary" size="16px" tag="p">
                {product.height}cm
              </Typography>
            </div>

            <div className=" flex flex-col gap-4">
              <Typography fontFamily="secondary" size="16px" tag="h5">
                Width
              </Typography>

              <Typography fontFamily="primary" size="16px" tag="p">
                {product.width}cm
              </Typography>
            </div>

            <div className=" flex flex-col gap-4">
              <Typography fontFamily="secondary" size="16px" tag="h5">
                Depth
              </Typography>

              <Typography fontFamily="primary" size="16px" tag="p">
                {product.depth}cm
              </Typography>
            </div>
          </div>

          <Typography fontFamily="secondary" size="16px" tag="h5">
            Quantitity
          </Typography>

          <Counter />

          <div className=" flex gap-4 mt-9">
            <Button variant="filled">Add to cart</Button>
            <Button variant="filled" bgColor="white">
              Save to favorites
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductMenu;
