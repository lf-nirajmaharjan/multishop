import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.tsx";
import { WishlistProvider } from "./context/wishlistContext.tsx";
import Wishlist from "./pages/wishlist";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WishlistProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </WishlistProvider>
  </StrictMode>
);
