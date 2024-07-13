"use client";

import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import { CartBase } from "@/types/cart";
import CartItem from "../../features/CartItem/CartItem";

interface Props {
  cart?: CartBase;
}

function CartMenu({ cart }: Props) {
  const calculateSubtotal = () => {
    return cart
      ? cart.products.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )
      : 0;
  };

  return (
    <Container bgColor="light">
      <Typography fontFamily="secondary" size="32px" tag="h2" className=" mb-8">
        Your shopping cart
      </Typography>

      {!cart || cart.products.length === 0 ? (
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

      <div className="flex self-end flex-col gap-3 mt-6 items-end md:self-stretch">
        <div className=" flex gap-4 items-end">
          <Typography tag="h3" size="20px" fontFamily="secondary">
            Subtotal
          </Typography>
          <Typography tag="h3" size="24px" fontFamily="secondary">
            £{calculateSubtotal()}
          </Typography>
        </div>
        <Typography tag="p" size="14px" fontFamily="primary">
          Taxes and shipping are calculated at checkout
        </Typography>
        <Button
          className=" md:self-stretch"
          disabled={!cart || cart.products.length === 0}
        >
          Go to checkout
        </Button>
      </div>
    </Container>
  );
}

export default CartMenu;
