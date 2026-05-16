import { toast } from "sonner";
import { patchData } from "../axios/fetch";

export default async function patchCart(productId: string, quantity: number) {
  const res = await patchData(`/cart/${productId}`, { quantity }, true);

  if (!res.success) return toast.error(res.message);

  toast.success(res.message);
}
