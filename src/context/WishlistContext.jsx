import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext =
  createContext();

export function WishlistProvider({
  children,
}) {
  const [wishlist, setWishlist] =
    useState(() => {
      const savedWishlist =
        localStorage.getItem(
          "nexus-wishlist"
        );

      return savedWishlist
        ? JSON.parse(savedWishlist)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "nexus-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  const addToWishlist = (
    product
  ) => {
    const exists =
      wishlist.find(
        (item) =>
          item.id === product.id
      );

    if (!exists) {
      setWishlist([
        ...wishlist,
        product,
      ]);
    }
  };

  const removeFromWishlist = (
    id
  ) => {
    setWishlist(
      wishlist.filter(
        (item) => item.id !== id
      )
    );
  };

  const isInWishlist = (
    id
  ) => {
    return wishlist.some(
      (item) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(
    WishlistContext
  );
}