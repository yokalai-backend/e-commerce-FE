interface Products {
  id: string;
  name: string;
  price: number;
  rates: number;
  image: string;
  createdAt: string;
}

export default function Card({
  id,
  name,
  price,
  rates,
  image,
  createdAt,
}: Products) {
  return (
    <main className="flex flex-col gap-2">
      <header className="flex flex-col gap-3">
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
        <p className="font-semibold text-2xl">${price}</p>
        <p className="text-sm">{rates}</p>
      </section>

      <button className="w-full bg-black text-white rounded-2xl py-1 active:translate-y-1 active:scale-95 transition">
        Add to cart
      </button>
    </main>
  );
}
