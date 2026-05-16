"use client";
import Card from "@/app/components/cart/Card";
import EditMode from "@/app/components/cart/EditMode";
import Header from "@/app/components/cart/Header";
import { Products } from "@/app/types/products";
import { deleteData, getData } from "@/app/utils/axios/fetch";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Quantity = {
  quantity: number;
  stock: number;
  totalPrice: number;
};

type ProductsCart = Products & Quantity;

export default function Page() {
  const router = useRouter();
  const [products, setProducts] = useState<ProductsCart[]>();
  const [isRemove, setIsRemove] = useState(false);
  const [editedProductQty, setEditedProductQty] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [editedProduct, setEditedProduct] = useState<ProductsCart | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getData<ProductsCart[]>("/cart", true);

      if (!res.success) {
        toast.error(res.message);

        return;
      }

      setProducts(res.data!);
    };

    fetchProduct();
  }, [isEdit, isRemove]);

  async function fetchEditedProduct(productId: string) {
    const res = await getData<ProductsCart>(`/cart/${productId}`, true);

    if (!res.success) {
      toast.error(res.message);

      return;
    }

    setEditedProductQty(res.data?.quantity!);
    setEditedProduct(res.data);
  }

  async function handleRemove(productId: string) {
    const res = await deleteData(`/cart/${productId}`, {}, true);

    if (!res.success) return toast.error(res.message);

    setIsRemove((p) => !p);
    toast.success(res.message);
  }

  async function removeFromAllCart() {
    const res = await deleteData("/cart", {}, true);

    if (!res.success) return toast.error(res.message);

    setIsRemove((p) => !p);
    toast.success(res.message);
  }

  return (
    <main className="flex flex-col px-5 py-3 gap-5">
      <EditMode
        setIsEdit={setIsEdit}
        isEdit={isEdit}
        editedProduct={editedProduct}
        editedQty={editedProductQty}
      />

      <Header
        router={router}
        clearCart={removeFromAllCart}
        products={products}
      />

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-15">
        {products?.map((e) => (
          <Card
            id={e.id}
            name={e.name}
            price={e.price}
            image={e.image}
            rates={e.rates}
            key={e.id}
            quantity={e.quantity}
            totalPrice={e.totalPrice}
            createdAt={e.createdAt}
            setIsEdit={setIsEdit}
            fetchEditedProduct={fetchEditedProduct}
            handleRemove={handleRemove}
          />
        ))}
      </section>

      {!products?.length && (
        <div className="flex justify-center items-center">
          <p className="text-sm text-black/50">
            Add any product to your cart first...
          </p>
        </div>
      )}
    </main>
  );
}
