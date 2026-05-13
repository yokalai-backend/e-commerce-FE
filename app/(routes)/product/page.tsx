"use client";
import DetailCard from "@/app/components/product/DetailCard";
import Comment from "@/app/components/product/Comment";
import Header from "@/app/components/product/Header";
import { useEffect, useState } from "react";
import { ProductsDetail } from "@/app/types/products";
import { getData } from "@/app/utils/axios/fetch";

export default function Page() {
  const [data, setData] = useState<ProductsDetail>();
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productId = localStorage.getItem("product");

      if (!productId) return alert("NO PRODUCT ID");

      const res = await getData<ProductsDetail>(`/products/${productId}`);

      if (!res.success) return alert("FAILED GET PRODUCT DETAIL");

      setCurrentImage(res.data?.product.image!);
      setData(res.data!);
    };

    fetchProduct();
  }, []);

  if (!data) return;

  return (
    <main className="flex flex-col gap-5 px-5 py-3">
      <Header
        name={data.product.name}
        image={currentImage!}
        images={data.product.images}
        setCurrentImage={setCurrentImage}
      />

      <section className="grid grid-cols-3 gap-3">
        <DetailCard title={"Price"} value={`$${data.product.price}`} />
        <DetailCard title={"Owner"} value={data.product.owner} />
        <DetailCard title={"Rates"} value={data.product.rates} />
        <DetailCard title={"Stock"} value={data.product.stock} />
        <DetailCard title={"Solds"} value={data.product.totalSolds} />
        <DetailCard title={"Category"} value={data.product.category} />
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

          {data.comments.map((e, i) => (
            <Comment
              key={i}
              userId={e.userId}
              username={e.username}
              comment={e.comment}
              rates={e.rates}
              commentCreatedAt={e.commentCreatedAt}
            />
          ))}
        </section>
      </footer>
    </main>
  );
}
