"use client";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Counter from "@/components/Counter/Counter";
import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import DeleteIcon from "@/assets/x.svg";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { useSession } from "next-auth/react";

function CartMenu() {
  const session = useSession();

  const { setCart, cart } = useCart(session?.data?.user?.email || "");

  const calculateSubtotal = () => {
    return cart.products.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  const handleRemoveProduct = async (productId: string) => {
    try {
      const res = await fetch(`/api/cart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail: cart.userEmail, productId }),
      });
      if (res.ok) {
        const updatedCart = await res.json();
        setCart(updatedCart);
      } else {
        const errorData = await res.json();
        console.error("Failed to remove product", errorData);
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const handleCountChange = async (productId: string, newQuantity: number) => {
    try {
      const res = await fetch(`/api/cart`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: cart.userEmail,
          productId,
          quantity: newQuantity,
        }),
      });
      if (res.ok) {
        const updatedCart = await res.json();
        setCart(updatedCart);
      } else {
        const errorData = await res.json();
        console.error("Failed to update product quantity", errorData);
      }
    } catch (error) {
      console.error("Error updating product quantity:", error);
    }
  };

  return (
    <Container bgColor="light">
      <Typography fontFamily="secondary" size="32px" tag="h1" className=" mb-8">
        Your shopping cart
      </Typography>

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
            <tr key={cartItem.product._id} className="border-none">
              <td className="py-4  ">
                <Link
                  className=" flex items-center gap-5"
                  href={`/product/${cartItem.product._id}`}
                  title="product"
                >
                  <Image
                    src={cartItem.product.imageSrc}
                    alt={cartItem.product._id}
                    width={305}
                    height={375}
                    className="w-[109px] h-[134px] object-cover md:w-[133px] md:h-[166px] "
                  />
                  <div className=" max-w-[250px] flex flex-col gap-2">
                    <Typography tag="h3" size="20px" fontFamily="secondary">
                      {cartItem.product.name}
                    </Typography>
                    <Typography tag="p" size="14px" fontFamily="primary">
                      {truncateDescription(
                        cartItem.product.description || "",
                        60
                      )}
                    </Typography>
                    <Typography tag="p" size="16px" fontFamily="primary">
                      £{cartItem.product.price}
                    </Typography>

                    <Counter
                      value={cartItem.quantity}
                      className="bg-lightGrey hidden md:flex"
                      onCountChange={(count) =>
                        handleCountChange(cartItem.product._id, count)
                      }
                    />
                  </div>
                </Link>
              </td>
              <td className="py-4  md:hidden">
                <div className=" flex gap-4">
                  <Counter
                    value={cartItem.quantity}
                    className="bg-lightGrey"
                    onCountChange={(count) =>
                      handleCountChange(cartItem.product._id, count)
                    }
                  />
                </div>
              </td>
              <td className=" py-4 ps-6">
                <Button
                  onClick={() => handleRemoveProduct(cartItem.product._id)}
                  variant="clear"
                  bgColor="gray"
                >
                  <DeleteIcon />
                </Button>
              </td>
              <td className="py-4 text-end md:hidden">
                <Typography tag="p" size="18px" fontFamily="primary">
                  £{cartItem.product.price * cartItem.quantity}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {cart.products.length === 0 && (
        <Typography
          className="my-10 w-full text-center"
          fontFamily="secondary"
          size="24px"
          tag="h3"
        >
          No product
        </Typography>
      )}

      <div className="flex self-end flex-col gap-3 mt-6 items-end">
        <h3 className="text-xl font-semibold">
          Subtotal £{calculateSubtotal()}
        </h3>
        <p className="text-gray-500">
          Taxes and shipping are calculated at checkout
        </p>
        <Button disabled={cart.products.length === 0}>Go to checkout</Button>
      </div>
    </Container>
  );
}

export default CartMenu;
