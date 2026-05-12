import Card from "./Card";

export default function Header() {
  const cardEx = {
    name: "A very elegant shoes with a very expensive price buy now and get the special discount!",
    price: 2000,
    rate: 4.3,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS3xWFGcDjCPy751UK0o9NTejgYoacMp4B0pXQAEQq1h4H8FOnu2VpbigcHXd-O3vW8irHOvFB9Ret-LoiyhVtT7GDquzsdEbhOYorQbqXSAqi5OXwCoeK-_UM",
  };

  return (
    <header className="flex flex-col gap-3">
      <button className="text-sm text-left text-black/70 underline">
        Go back
      </button>

      <div>
        <img src={cardEx.image} alt="" />
      </div>

      <section className="grid grid-cols-5 gap-2">
        <Card />
      </section>

      <div className="border-t border-t-black/20">
        <h1 className="text-2xl line-clamp-3 mt-5">{cardEx.name}</h1>
      </div>
    </header>
  );
}
