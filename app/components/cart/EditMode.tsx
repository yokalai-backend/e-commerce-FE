import { Products } from "@/app/types/products";
import patchCart from "@/app/utils/cart/patch.cart";
import { useState } from "react";

export default function EditMode({
  isEdit,
  setIsEdit,
  editedProduct,
  editedQty,
}: {
  isEdit: boolean;
  setIsEdit: (value: boolean) => void;
  editedQty: number;
  editedProduct:
    | (Products & {
        quantity: number;
        totalPrice: number;
        stock: number;
      })
    | null;
}) {
  const [currQuantity, setCurrQuantity] = useState<number>(
    editedQty <= 0 ? 1 : editedQty,
  );

  if (!isEdit || !editedProduct) return null;

  function handleIncrement() {
    if (currQuantity === editedProduct?.stock) return;
    setCurrQuantity((p) => p + 1);
  }

  function handleDecrement() {
    if (currQuantity === 1) return;
    setCurrQuantity((p) => p - 1);
  }

  return (
    <div className="flex justify-center items-center left-0 z-60 fixed top-0 w-full min-h-screen backdrop-blur-sm">
      <main className="flex flex-col py-2 gap-3 px-3 bg-white w-80 h-fit mb-10 rounded-lg border border-black/50">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-left text-black/80">
            Edit product in cart
          </h2>
          <button
            onClick={() => setIsEdit(false)}
            className="bg-black text-white rounded-full w-8 h-8 active:translate-y-1 active:scale-95 transition select-none"
          >
            X
          </button>
        </div>

        <section className="flex flex-col items-center gap-3">
          <div className="w-36">
            <img
              className="w-full h-full object-contain"
              src={editedProduct.image}
              alt={editedProduct.name}
            />
          </div>
          <h3 className="border-t border-t-black/20 text-black/70 font-semibold line-clamp-3">
            {editedProduct.name}
          </h3>
        </section>

        <section className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-widest text-black/40">
            Quantity
          </p>

          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handleDecrement}
              disabled={currQuantity === 1}
              aria-label="Decrease quantity"
              className="w-9 h-9 rounded-full border border-black/20 bg-black/5 flex items-center justify-center disabled:opacity-30 active:scale-95 transition"
            >
              <span className="text-lg leading-none">−</span>
            </button>

            <div className="flex-1 text-center">
              <span className="text-2xl font-medium text-black/80">
                {currQuantity}
              </span>
              <span className="text-sm text-black/30 ml-1">
                / {editedProduct.stock}
              </span>
            </div>

            <button
              onClick={handleIncrement}
              disabled={currQuantity === editedProduct.stock}
              aria-label="Increase quantity"
              className="w-9 h-9 rounded-full border border-black/20 bg-black/5 flex items-center justify-center disabled:opacity-30 active:scale-95 transition"
            >
              <span className="text-lg leading-none">+</span>
            </button>
          </div>

          <input
            type="range"
            min={1}
            max={editedProduct.stock}
            value={currQuantity}
            onChange={(e) => setCurrQuantity(Number(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />

          <button
            onClick={() => setCurrQuantity(editedProduct.quantity)}
            className="self-end text-xs text-black/40 flex items-center gap-1 hover:text-black/60 transition"
          >
            ↺ Reset
          </button>
        </section>

        <button
          onClick={async () => {
            await patchCart(editedProduct.id, currQuantity!);
            setIsEdit(false);
          }}
          className="w-full bg-black rounded-2xl py-2 text-white active:translate-y-1 active:scale-95 transition select-none"
        >
          Confirm
        </button>
      </main>
    </div>
  );
}
