export default function goToProductDetail(productId: string, router: any) {
  localStorage.setItem("product", productId);

  router.push("/product");
}
