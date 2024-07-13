import { getCart } from "@/lib/cart";
import CartMenu from "./menu";
import Page from "@/components/Page/Page";

async function Cart() {
  const cart = await getCart();

  return (
    <Page>
      <CartMenu cart={cart} />
    </Page>
  );
}

export default Cart;
