import Container from "@/components/shared/Container/Container";
import Typography from "@/components/shared/Typography/Typography";
import CartItem from "../../components/features/CartItem/CartItem";
import { getCart } from "@/lib/cart";
import Calculation from "./calculation";
import Heading from "./heading";

async function CartMenu() {
  const cart = await getCart();
  const calculateSubtotal = () => {
    return cart
      ? cart.products.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )
      : 0;
  };
  const isCartEmpty = !cart || cart.products.length === 0;

  return (
    <Container bgColor="light">
      <Heading />

      {isCartEmpty ? (
        <Typography
          className="my-10 w-full text-center"
          fontFamily="secondary"
          size="24px"
          tag="h3"
        >
          The cart is empty
        </Typography>
      ) : (
        <table className="min-w-full">
          <thead className=" md:hidden">
            <tr className="w-full bg-gray-100 text-left border-b border-b-borderGrey">
              <th className="py-4">
                <Typography fontFamily="secondary" size="14px" tag="span">
                  Product
                </Typography>
              </th>
              <th className="py-4">
                <Typography fontFamily="secondary" size="14px" tag="span">
                  Quantity
                </Typography>
              </th>
              <th className="py-4 text-end"> </th>
              <th className="py-4 text-end">
                <Typography fontFamily="secondary" size="14px" tag="span">
                  Total
                </Typography>
              </th>
            </tr>
          </thead>

          <tbody className="border-b border-b-borderGrey">
            {cart.products.map((cartItem) => (
              <tr key={cartItem.product.id} className="border-none">
                <CartItem cartItem={cartItem} />
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Calculation isDisabled={isCartEmpty} totalPrice={calculateSubtotal()} />
    </Container>
  );
}

export default CartMenu;
