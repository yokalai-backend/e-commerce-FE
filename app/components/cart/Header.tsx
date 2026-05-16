import doubleConfirmation from "@/app/utils/ui/double.confirmation";
import { useState } from "react";
import { toast } from "sonner";

export default function Header({ router, clearCart, products }: any) {
  const [isClearCart, setIsClearCart] = useState(false);

  return (
    <header className="top-1 left-3 right-0 z-50 px-2 py-2 flex justify-between items-end fixed bg-white">
      {isClearCart &&
        doubleConfirmation(
          clearCart,
          "This action will clear all items that currently in your cart, are you sure you want to proceed?",
          isClearCart,
          setIsClearCart,
        )}
      <div className="flex flex-col gap-2">
        <p
          onClick={() => router.back()}
          className="text-sm text-black/80 underline select-none"
        >
          Go back
        </p>
        <h1 className="text-xl font-semibold">Your cart</h1>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => {
            products.length > 0
              ? setIsClearCart((p) => !p)
              : toast.error("No items is in the cart");
          }}
          className="px-3 py-1.5 border border-black/50 rounded-lg text-black/70 active:translate-y-1 active:scale-95 transition select-none"
        >
          Clear cart
        </button>

        <button className="px-3 py-1.5 border border-black/50 rounded-lg text-black/70 active:translate-y-1 active:scale-95 transition select-none">
          Order now
        </button>
      </div>
    </header>
  );
}
