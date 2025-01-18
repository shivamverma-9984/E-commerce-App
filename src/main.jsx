import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";
// import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext.jsx";
import  { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <App />
      <Toaster duration={1000} position="top-center" 
 />
    </CartProvider>
  </AuthProvider>
);
