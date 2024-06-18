import { ICartBase } from "@/app/product/types";
import { useEffect, useState } from "react";

export const useCart = (userEmail: string) => {
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

  return { cart, setCart };
};
