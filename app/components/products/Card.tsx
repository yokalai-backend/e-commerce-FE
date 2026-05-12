export default function Card() {
  const cardEx = {
    name: "A very elegant shoes with a very expensive price buy now and get the special discount!",
    price: 2000,
    rate: 4.3,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS3xWFGcDjCPy751UK0o9NTejgYoacMp4B0pXQAEQq1h4H8FOnu2VpbigcHXd-O3vW8irHOvFB9Ret-LoiyhVtT7GDquzsdEbhOYorQbqXSAqi5OXwCoeK-_UM",
  };

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      <main className="flex flex-col gap-2">
        <header className="flex flex-col gap-3">
          <div className="w-full aspect-square">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={cardEx.image}
              alt=""
            />
          </div>

          <h3 className="text-md line-clamp-3 text-black/80">{cardEx.name}</h3>
        </header>

        <section className="flex justify-between items-center border-t border-t-black/20">
          <p className="font-semibold text-2xl">${cardEx.price}</p>
          <p className="text-sm">{cardEx.rate}</p>
        </section>

        <button className="w-full bg-black text-white rounded-2xl py-1 active:translate-y-1 active:scale-95 transition">
          Add to cart
        </button>
      </main>
    </section>
  );
}
