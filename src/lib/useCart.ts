import { ICartBase, ICartData } from "@/app/product/types";
import { ICart } from "@/models/Cart";
import { useEffect, useState } from "react";

const useCart = (userEmail: string) => {
  const [cart, setCart] = useState<ICartBase>({
    id_: "",
    userEmail,
    products: [],
    totalPrice: 0,
    status: "active",
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`/api/cart?userEmail=${userEmail}`);

        const data: ICartData = await res.json();

        if (res.ok) {
          setCart(data.cart);
        } else {
          console.error(data.message, "Error:", data.error);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    if (userEmail) {
      fetchCart();
    }
  }, [userEmail]);

  const removeProduct = async (productId: string) => {
    try {
      const res = await fetch(`/api/cart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail, productId }),
      });

      const data: ICartData = await res.json();

      if (res.ok) {
        setCart(data.cart);
      } else {
        console.error(data.message, "Error:", data.error);
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const updateProductQuantity = async (
    productId: string,
    newQuantity: number
  ) => {
    try {
      const res = await fetch(`/api/cart`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail, productId, quantity: newQuantity }),
      });

      const data: ICartData = await res.json();

      if (res.ok) {
        setCart(data.cart);
      } else {
        console.error(data.message, "Error:", data.error);
      }
    } catch (error) {
      console.error("Error updating product quantity:", error);
    }
  };

  return { cart, setCart, removeProduct, updateProductQuantity };
};

export default useCart;
