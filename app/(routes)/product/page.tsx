import DetailCard from "@/app/components/product/DetailCard";
import Comment from "@/app/components/product/Comment";
import Header from "@/app/components/product/Header";

export default function Page() {
  return (
    <main className="flex flex-col gap-5 px-5 py-3">
      <Header />

      <section className="grid grid-cols-3 gap-3">
        <DetailCard title={"Price"} value={`$${2000}`} />
        <DetailCard title={"Owner"} value={"Yoka"} />
        <DetailCard title={"Rates"} value={4.9} />
        <DetailCard title={"Stock"} value={12} />
        <DetailCard title={"Solds"} value={8} />
        <DetailCard title={"Comments"} value={3} />
      </section>

      <button className="border border-black/80 py-2 rounded-2xl active:translate-y-2 active:scale-95 transition">
        Add to cart
      </button>

      <footer className="flex flex-col gap-3">
        <section className="flex gap-3">
          <input
            className="bg-gray-100 rounded-lg px-3 py-2 w-full text-sm focus:outline-none"
            type="text"
            placeholder="Coment..."
          />

          <div className="flex gap-2">
            <button className="bg-black px-2 rounded-lg text-white active:scale-95 active:translate-y-1 transition">
              Send
            </button>

            <button className="bg-black px-2 rounded-lg text-white active:scale-95 active:translate-y-1 transition">
              Rate
            </button>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-semibold text-black/70">Comments</h3>

          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </section>
      </footer>
    </main>
  );
}
