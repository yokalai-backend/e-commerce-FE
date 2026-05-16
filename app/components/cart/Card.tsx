import goToProductDetail from "@/app/utils/products/go.to.detail";
import { useRouter } from "next/navigation";

export default function Card({
  id,
  name,
  price,
  rates,
  image,
  quantity,
  totalPrice,
  createdAt,
  setIsEdit,
  fetchEditedProduct,
  handleRemove,
}: any) {
  const router = useRouter();

  return (
    <main className="flex flex-col gap-2">
      <header
        onClick={() => goToProductDetail(id, router)}
        className="flex flex-col gap-3"
      >
        <div className="w-full">
          <img
            className="w-full h-50 object-contain rounded-lg"
            src={image}
            alt={name}
          />
        </div>

        <h3 className="text-md line-clamp-3 text-black/80">{name}</h3>
      </header>

      <section className="flex justify-between items-center border-t border-t-black/20">
        <p className="font-semibold text-lg">${price}</p>
        <p className="text-sm">{rates}</p>
      </section>

      <section className="">
        <p className="text-sm text-black/70">
          Qty <span className="text-black font-semibold">{quantity}x</span>
        </p>
        <p className="text-sm font-semibold ">Total ${totalPrice}</p>
      </section>

      <section className="flex gap-2">
        <button
          onClick={async () => {
            fetchEditedProduct(id);
            setIsEdit(true);
          }}
          className="w-full bg-black text-white rounded-2xl py-1 active:translate-y-1 active:scale-95 transition"
        >
          Edit
        </button>

        <button
          onClick={() => handleRemove(id)}
          className="w-full bg-black text-white rounded-2xl py-1 active:translate-y-1 active:scale-95 transition"
        >
          Remove
        </button>
      </section>
    </main>
  );
}
