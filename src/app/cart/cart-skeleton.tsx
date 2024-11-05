import Button from "@/components/shared/Button/Button";
import Container from "@/components/shared/Container/Container";
import LoadingDots from "@/components/shared/LoadingDots/LoadingDots";
import Typography from "@/components/shared/Typography/Typography";

function CartSkeleton() {
  return (
    <Container bgColor="light">
      <Typography fontFamily="secondary" size="32px" tag="h2" className=" mb-8">
        Your shopping cart
      </Typography>

      <div className=" flex w-full justify-center items-center h-28">
        <LoadingDots className=" bg-darkPrimary " />
      </div>

      <div className="flex self-end flex-col gap-3 mt-6 items-end md:self-stretch">
        <div className=" flex gap-4 items-end">
          <Typography tag="h3" size="20px" fontFamily="secondary">
            Subtotal
          </Typography>
          <Typography tag="h3" size="24px" fontFamily="secondary">
            £0
          </Typography>
        </div>
        <Typography tag="p" size="14px" fontFamily="primary">
          Taxes and shipping are calculated at checkout
        </Typography>
        <Button className=" md:self-stretch" disabled>
          Go to checkout
        </Button>
      </div>
    </Container>
  );
}

export default CartSkeleton;
