import { ICartBase, ICartData } from "@/app/product/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useCart = () => {
  const session = useSession();
  const userEmail = session?.data?.user?.email || null;
  const [loading, setLoading] = useState(false);

  const temporaryCartId = "temporaryCartId";
  const storedCartId =
    typeof window !== "undefined"
      ? localStorage.getItem(temporaryCartId)
      : null;
  const [tempUserId, setTempUserId] = useState(storedCartId || uuidv4());

  useEffect(() => {
    if (!userEmail && !storedCartId) {
      localStorage.setItem(temporaryCartId, tempUserId);
    }
  }, [tempUserId, userEmail, storedCartId]);

  const userIdentifier = userEmail || tempUserId;

  const [cart, setCart] = useState<ICartBase>({
    id_: "",
    userIdentifier: userIdentifier,
    products: [],
    totalPrice: 0,
    status: "active",
  });

  //initialize
  useEffect(() => {
    const fetchCart = async () => {
      console.log("userIdentifier============", userIdentifier);
      setLoading(true);
      try {
        if (userIdentifier) {
          const res = await fetch(`/api/cart?userIdentifier=${userIdentifier}`);
          const data: ICartData = await res.json();

          if (res.ok) {
            setLoading(false);
            setCart(data.cart);
          } else {
            console.error(data.message, "Error:", data.error);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [userIdentifier]);

  //===========================================
  const removeProduct = async (productId: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/cart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userIdentifier, productId }),
      });

      const data: ICartData = await res.json();

      if (res.ok) {
        setLoading(false);
        setCart(data.cart);
      } else {
        console.error(data.message, "Error:", data.error);
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  //===========================================
  const addProductToCart = async (productId: string, quantity: number) => {
    setLoading(true);
    try {
      setLoading(true);
      const res = await fetch(`/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userIdentifier, productId, quantity }),
      });

      const data: ICartData = await res.json();

      if (res.ok) {
        setLoading(false);
        setCart(data.cart);
      } else {
        console.error(data.message, "Error:", data.error);
      }
    } catch (error) {
      console.error("Error updating product quantity:", error);
    }
  };
  //===========================================
  const updateProductQuantity = async (
    productId: string,
    newQuantity: number
  ) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/cart`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userIdentifier,
          productId,
          quantity: newQuantity,
        }),
      });

      const data: ICartData = await res.json();

      if (res.ok) {
        setLoading(false);
        setCart(data.cart);
      } else {
        console.error(data.message, "Error:", data.error);
      }
    } catch (error) {
      console.error("Error updating product quantity:", error);
    }
  };

  return {
    cart,
    setCart,
    removeProduct,
    updateProductQuantity,
    addProductToCart,
    loading,
  };
};

export default useCart;
