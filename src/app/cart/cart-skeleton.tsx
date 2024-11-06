import Container from "@/components/shared/Container/Container";
import LoadingDots from "@/components/shared/LoadingDots/LoadingDots";
import Calculation from "./calculation";
import Heading from "./heading";

function CartSkeleton() {
  return (
    <Container bgColor="light">
      <Heading />

      <div className=" flex w-full justify-center items-center h-28">
        <LoadingDots className=" bg-darkPrimary " />
      </div>

      <Calculation isDisabled />
    </Container>
  );
}

export default CartSkeleton;
