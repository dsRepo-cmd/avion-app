import { ICartBase, ICartData } from "@/app/product/types";
import { useSession } from "next-auth/react";
import { useEffect, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const useCart = () => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email || null;
  const [loading, setLoading] = useState(false);

  const temporaryCartId = "temporaryCartId";
  const isClient = typeof window !== "undefined";
  const storedCartId = isClient ? localStorage.getItem(temporaryCartId) : null;
  const [tempUserId, setTempUserId] = useState(storedCartId || uuidv4());

  useEffect(() => {
    if (!userEmail && !storedCartId && isClient) {
      localStorage.setItem(temporaryCartId, tempUserId);
    }
  }, [tempUserId, userEmail, storedCartId, isClient]);

  const userIdentifier = userEmail || tempUserId;

  const [cart, setCart] = useState<ICartBase>({
    id_: "",
    userIdentifier: userIdentifier,
    products: [],
    totalPrice: 0,
    status: "active",
  });

  const handleApiResponse = async (response: Response) => {
    const data: ICartData = await response.json();
    if (response.ok) {
      setCart(data.cart);
    } else {
      console.error(data.message, "Error:", data.error);
    }
  };

  const fetchCart = useCallback(async () => {
    setLoading(true);
    try {
      if (userIdentifier) {
        const res = await fetch(`/api/cart?userIdentifier=${userIdentifier}`);
        await handleApiResponse(res);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  }, [userIdentifier]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const removeProduct = useCallback(
    async (productId: string) => {
      setLoading(true);
      try {
        const res = await fetch(`/api/cart`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userIdentifier, productId }),
        });
        await handleApiResponse(res);
      } catch (error) {
        console.error("Error removing product:", error);
      } finally {
        setLoading(false);
      }
    },
    [userIdentifier]
  );

  const addProductToCart = useCallback(
    async (productId: string, quantity: number) => {
      setLoading(true);
      try {
        const res = await fetch(`/api/cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userIdentifier, productId, quantity }),
        });
        await handleApiResponse(res);
      } catch (error) {
        console.error("Error adding product to cart:", error);
      } finally {
        setLoading(false);
      }
    },
    [userIdentifier]
  );

  const updateProductQuantity = useCallback(
    async (productId: string, newQuantity: number) => {
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
        await handleApiResponse(res);
      } catch (error) {
        console.error("Error updating product quantity:", error);
      } finally {
        setLoading(false);
      }
    },
    [userIdentifier]
  );

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
