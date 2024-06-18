import { ICartBase } from "@/app/product/types";
import { useEffect, useState } from "react";

const useCart = (userEmail: string) => {
  const [cart, setCart] = useState<ICartBase>({
    id: "",
    userEmail,
    products: [],
    totalPrice: 0,
    status: "active",
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`/api/cart?userEmail=${userEmail}`);
        const data = await res.json();
        if (res.ok) {
          setCart(data);
        } else {
          console.error("Failed to initialize cart", data.message);
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

  return { cart, setCart, removeProduct, updateProductQuantity };
};

export default useCart;
