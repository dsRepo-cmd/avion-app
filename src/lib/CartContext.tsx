import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import type { CartBase, CartData } from "@/types/cart";

interface CartContextType {
  cart: CartBase;
  removeProduct: (productId: string) => Promise<void>;
  updateProductQuantity: (
    productId: string,
    newQuantity: number
  ) => Promise<void>;
  addProductToCart: (productId: string, quantity: number) => Promise<boolean>;
  loading: boolean;
  productCount: number | null;
  successMessage: string | null;
  resetSuccessMessage: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email || null;
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const temporaryCartId = "temporaryCartId";
  const localStorageCartKey = "userCart";
  const isClient = typeof window !== "undefined";
  const storedCartId = isClient ? localStorage.getItem(temporaryCartId) : null;
  const tempUserId = storedCartId || uuidv4();

  useEffect(() => {
    if (userEmail && !storedCartId && isClient) {
      localStorage.setItem(temporaryCartId, userEmail);
    }

    if (!userEmail && !storedCartId && isClient) {
      localStorage.setItem(temporaryCartId, tempUserId);
    }
  }, [tempUserId, userEmail, storedCartId, isClient]);

  const userIdentifier = userEmail || tempUserId;

  const [cart, setCart] = useState<CartBase>({
    id: "",
    userIdentifier: userIdentifier,
    products: [],
    totalPrice: 0,
    status: "active",
  });

  const [productCount, setProductCount] = useState<number | null>(null);

  useEffect(() => {
    if (cart.products.length === 0) {
      setProductCount(null);
    } else {
      setProductCount(cart.products.length);
    }
  }, [cart.products]);

  useEffect(() => {
    if (isClient) {
      const cachedCart = localStorage.getItem(localStorageCartKey);
      if (cachedCart) {
        setCart(JSON.parse(cachedCart));
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(localStorageCartKey, JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const fetchCart = useCallback(async () => {
    setLoading(true);
    try {
      if (userIdentifier) {
        const res = await fetch(`/api/cart?userIdentifier=${userIdentifier}`);
        const data: CartData = await res.json();
        if (res.ok) {
          setCart(data.cart);
        } else {
          console.error(data.message, "Error:", data.error);
        }
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
        const data: CartData = await res.json();
        if (res.ok) {
          setCart(data.cart);
        } else {
          console.error(data.message, "Error:", data.error);
        }
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
        const data: CartData = await res.json();
        if (res.ok) {
          setCart(data.cart);
          setSuccessMessage("Product has been added to cart.");
          return true;
        } else {
          console.error(data.message, "Error:", data.error);
        }
      } catch (error) {
        console.error("Error adding product to cart:", error);
      } finally {
        setLoading(false);
      }
      return false;
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
        const data: CartData = await res.json();
        if (res.ok) {
          setCart(data.cart);
        } else {
          console.error(data.message, "Error:", data.error);
        }
      } catch (error) {
        console.error("Error updating product quantity:", error);
      } finally {
        setLoading(false);
      }
    },
    [userIdentifier]
  );

  const resetSuccessMessage = useCallback(() => {
    setSuccessMessage(null);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        removeProduct,
        updateProductQuantity,
        addProductToCart,
        loading,
        productCount,
        successMessage,
        resetSuccessMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
