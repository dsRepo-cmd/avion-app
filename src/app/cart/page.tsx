import dynamic from "next/dynamic";
import Page from "@/components/shared/Page/Page";
import CartSkeleton from "./cart-skeleton";

const CartMenu = dynamic(() => import("./menu"), {
  ssr: false,
  loading: () => <CartSkeleton />,
});

function Cart() {
  return (
    <Page>
      <CartMenu />
    </Page>
  );
}

export default Cart;
