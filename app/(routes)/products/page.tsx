"use client";
import Card from "@/app/components/products/Card";
import Header from "@/app/components/products/Header";
import { getData } from "@/app/utils/axios/fetch";
import { useEffect, useState } from "react";

interface Products {
  id: string;
  name: string;
  price: number;
  rates: number;
  image: string;
  createdAt: string;
}

export default function Page() {
  const [products, setProducts] = useState<Products[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getData<Products[]>("/products");

      if (!res.success) return alert("ERROR");

      setProducts(res.data!);
    };

    fetchProducts();
  }, []);

  return (
    <main className="flex flex-col px-3 py-2 gap-5">
      <Header />
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
