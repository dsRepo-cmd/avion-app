import Image from "next/image";
import Container from "@/components/Container/Container";
import Divider from "@/components/Divider/Divider";
import Typography from "@/components/Typography/Typography";
import { getProductsByID } from "@/lib/products";
import { Suspense } from "react";
import AddToCard from "@/features/AddToCard/AddToCard";

interface Props {
  id: string;
}
async function Menu({ id }: Props) {
  const product = await getProductsByID(id);

  if (!product) return null;
  return (
    <Container className=" lg:px-0 lg:pt-0" bgColor="light">
      <div className=" flex w-full lg:flex-col ">
        <Image
          className=" w-full object-contain"
          src={product.imageSrc}
          alt={product.imageSrc}
          width={607}
          height={661}
          priority
        />

        <div className=" flex w-full flex-col gap-4 p-14 lg:p-6 ">
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
            tag="h4"
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
            tag="h4"
          >
            Dimensions
          </Typography>

          <div className=" flex gap-20 mb-6">
            <div className=" flex flex-col gap-4">
              <Typography fontFamily="secondary" size="16px" tag="h4">
                Height
              </Typography>

              <Typography fontFamily="primary" size="16px" tag="p">
                {product.height}cm
              </Typography>
            </div>

            <div className=" flex flex-col gap-4">
              <Typography fontFamily="secondary" size="16px" tag="h4">
                Width
              </Typography>

              <Typography fontFamily="primary" size="16px" tag="p">
                {product.width}cm
              </Typography>
            </div>

            <div className=" flex flex-col gap-4">
              <Typography fontFamily="secondary" size="16px" tag="h4">
                Depth
              </Typography>

              <Typography fontFamily="primary" size="16px" tag="p">
                {product.depth}cm
              </Typography>
            </div>
          </div>

          <Typography fontFamily="secondary" size="16px" tag="h4">
            Quantitity
          </Typography>

          <Suspense fallback={null}>
            <AddToCard product={product} />
          </Suspense>
        </div>
      </div>
    </Container>
  );
}

export default Menu;
