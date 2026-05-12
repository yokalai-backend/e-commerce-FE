import Card from "@/app/components/products/Card";
import Header from "@/app/components/products/Header";

export default function Page() {
  return (
    <main className="flex flex-col px-3 py-2 gap-5">
      <Header />
      <Card />
    </main>
  );
}
