"use client";
import Card from "@/app/components/products/Card";
import Header from "@/app/components/products/Header";
import { Products } from "@/app/types/products";
import { getData } from "@/app/utils/axios/fetch";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [products, setProducts] = useState<Products[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getData<Products[]>("/products", false);

      if (!res.success) return alert("ERROR");

      setProducts(res.data!);
    };

    fetchProducts();
  }, []);

  return (
    <main className="flex flex-col px-5 py-2 gap-5">
      <Header router={router} />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-15">
        {products?.map((e) => (
          <Card
            id={e.id}
            name={e.name}
            price={e.price}
            image={e.image}
            rates={e.rates}
            key={e.id}
            createdAt={e.createdAt}
          />
        ))}
      </section>
    </main>
  );
}
