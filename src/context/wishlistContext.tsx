import { createContext, useContext, useState } from "react";

interface WishlistItem {
  id: string;
  productId: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  refreshWishlist: () => void;
}

const wishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const refreshWishlist = async () => {
    try {
      const response = await fetch("http://localhost:5000/wishList");

      const data = await response.json();
      setWishlist(data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };
  // Initial fetch to populate wishlist
  useState(() => {
    refreshWishlist();
  }, []);

  const defaultValue: WishlistContextType = {
    wishlist,
    refreshWishlist,
  };

  return (
    <wishlistContext.Provider value={defaultValue}>
      {children}
    </wishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(wishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
