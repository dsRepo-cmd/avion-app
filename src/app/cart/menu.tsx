"use client";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Counter from "@/components/Counter/Counter";
import Typography from "@/components/Typography/Typography";
import Image from "next/image";

import { ICartBase } from "../product/types";

interface Props {
  cart: ICartBase;
}
function CartMenu({ cart }: Props) {
  const calculateSubtotal = () => {
    return cart.products.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };
  return (
    <Container bgColor="light">
      <div className=" p-16 w-full">
        <Typography fontFamily="secondary" size="32px" tag="h1">
          Your shopping cart
        </Typography>

        <table className="min-w-full">
          <thead>
            <tr className="w-full bg-gray-100 text-left border-b border-b-borderGrey ">
              <th className="py-4 ">
                <Typography fontFamily="secondary" size="14px" tag="span">
                  Product
                </Typography>
              </th>
              <th className="py-4 ">
                <Typography fontFamily="secondary" size="14px" tag="span">
                  Quantity
                </Typography>
              </th>
              <th className="py-4  text-end">
                <Typography fontFamily="secondary" size="14px" tag="span">
                  Total
                </Typography>
              </th>
            </tr>
          </thead>

          <tbody className=" border-b border-b-borderGrey ">
            {cart.products.map((cartItem) => (
              <tr
                key={cartItem.product._id.toString()}
                className=" border-none"
              >
                <td className="py-4 px-6 flex items-center">
                  <Image
                    src={cartItem.product.imageSrc}
                    alt={cartItem.product._id}
                    width={305}
                    height={375}
                    className="w-[109px] h-[134px] object-cover mr-4"
                  />
                  <div>
                    <h3>{cartItem.product.name}</h3>
                    <p>{cartItem.product.description}</p>
                    <p>£{cartItem.product.price}</p>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <Counter
                    value={cartItem.quantity}
                    className=" bg-lightGrey"
                    onCountChange={(count) => console.log("count", count)}
                  />
                </td>
                <td className="py-4 px-6  text-end">
                  £{cartItem.product.price * cartItem.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className=" flex self-end flex-col gap-3 mt-6 items-end">
          <h3 className="text-xl font-semibold">
            Subtotal £{calculateSubtotal()}
          </h3>
          <p className="text-gray-500">
            Taxes and shipping are calculated at checkout
          </p>
          <Button>Go to checkout</Button>
        </div>
      </div>
    </Container>
  );
}

export default CartMenu;
