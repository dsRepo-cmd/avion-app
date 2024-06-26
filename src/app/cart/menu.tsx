"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Counter from "@/components/Counter/Counter";
import Typography from "@/components/Typography/Typography";
import DeleteIcon from "@/assets/x.svg";
import { truncateDescription } from "@/lib/cart";
import { useCart } from "@/lib/CartContext";

function CartMenu() {
  const { cart, removeProduct, updateProductQuantity, loading } = useCart();

  const calculateSubtotal = () => {
    return cart.products.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <Container bgColor="light">
      <Typography fontFamily="secondary" size="32px" tag="h2" className=" mb-8">
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
            <tr key={cartItem.product.id} className="border-none">
              <td className="py-4  flex items-center gap-5">
                <Link
                  href={`/product/${cartItem.product.id}`}
                  className=" duration-200 hover-hover:hover:scale-[1.04] hover-none:active:scale-[1.04] "
                  title="product"
                >
                  <Image
                    src={cartItem.product.imageSrc}
                    alt={cartItem.product.id}
                    width={305}
                    height={375}
                    className="w-[109px] h-[134px] object-cover md:min-w-[133px] md:h-[166px] "
                  />
                </Link>
                <div className=" max-w-[250px] flex w-full  flex-col gap-2">
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
                  <div className=" hidden md:flex w-full  justify-between ">
                    <Counter
                      loading={loading}
                      value={cartItem.quantity}
                      className="bg-lightGrey "
                      onCountChange={(count) =>
                        updateProductQuantity(cartItem.product.id, count)
                      }
                    />

                    <Button
                      onClick={() => removeProduct(cartItem.product.id)}
                      variant="clear"
                      bgColor="gray"
                      title="delete"
                    >
                      <DeleteIcon />
                    </Button>
                  </div>
                </div>
              </td>
              <td className="py-4  md:hidden">
                <div className=" flex gap-4">
                  <Counter
                    value={cartItem.quantity}
                    className="bg-lightGrey"
                    onCountChange={(count) =>
                      updateProductQuantity(cartItem.product.id, count)
                    }
                  />
                </div>
              </td>
              <td className=" py-4 ps-6 md:hidden">
                <Button
                  onClick={() => removeProduct(cartItem.product.id)}
                  variant="clear"
                  bgColor="gray"
                  title="delete"
                >
                  <DeleteIcon />
                </Button>
              </td>
              <td className="py-4 text-end md:hidden w-16">
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
          The cart is empty
        </Typography>
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
          disabled={cart.products.length === 0}
        >
          Go to checkout
        </Button>
      </div>
    </Container>
  );
}

export default CartMenu;
