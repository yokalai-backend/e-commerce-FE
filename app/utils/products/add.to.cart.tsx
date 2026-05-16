import { postData } from "../axios/fetch";
import { toast } from "sonner";

let isLoading = false;

export default async function addToCart(
  productId: string,
  goToCart?: { router: any },
) {
  if (isLoading) return;
  isLoading = true;

  try {
    const res = await postData(`/cart/${productId}`, { quantity: 1 }, true);

    if (!res.success) {
      toast.error(res.message);

      if (res.code !== "BAD_REQUEST") return;

      if (goToCart?.router) {
        setTimeout(() => {
          toast.custom((id) => (
            <div
              onClick={() => {
                toast.dismiss(id);
                setTimeout(() => goToCart.router.push("/cart"), 150);
              }}
              className="relative flex items-center gap-3 px-4 py-3.5 bg-white border border-black/8 rounded-lg shadow-md text-sm font-medium cursor-pointer active:scale-[0.99] transition-all duration-200"
            >
              <span className="text-black/60 tracking-tight font-semibold">
                Go to your cart now
              </span>
              <span className="ml-auto text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                tap
              </span>{" "}
            </div>
          ));
        }, 500);
      }

      return;
    }

    toast.success(res.message);
  } finally {
    setTimeout(() => {
      isLoading = false;
    }, 1000);
  }
}
