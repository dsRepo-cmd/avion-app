import Container from "@/components/shared/Container/Container";
import LoadingDots from "@/components/shared/LoadingDots/LoadingDots";
import Typography from "@/components/shared/Typography/Typography";
import Calculation from "./calculation";

function CartSkeleton() {
  return (
    <Container bgColor="light">
      <Typography fontFamily="secondary" size="32px" tag="h2" className=" mb-8">
        Your shopping cart
      </Typography>

      <div className=" flex w-full justify-center items-center h-28">
        <LoadingDots className=" bg-darkPrimary " />
      </div>

      <Calculation isDisabled />
    </Container>
  );
}

export default CartSkeleton;
