import Button from "@/components/shared/Button/Button";
import Typography from "@/components/shared/Typography/Typography";

interface Props {
  isDisabled: boolean;
  totalPrice: number;
}
function Calculation({ isDisabled, totalPrice = 0 }: Props) {
  return (
    <div className="flex self-end flex-col gap-3 mt-6 items-end md:self-stretch">
      <div className=" flex gap-4 items-end">
        <Typography tag="h3" size="20px" fontFamily="secondary">
          Subtotal
        </Typography>
        <Typography tag="h3" size="24px" fontFamily="secondary">
          £{totalPrice}
        </Typography>
      </div>
      <Typography tag="p" size="14px" fontFamily="primary">
        Taxes and shipping are calculated at checkout
      </Typography>
      <Button className=" md:self-stretch" disabled={isDisabled}>
        Go to checkout
      </Button>
    </div>
  );
}

export default Calculation;
