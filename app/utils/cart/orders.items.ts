import { toast } from "sonner";
import { postData } from "../axios/fetch";

export default async function orderItems() {
  const res = await postData("/orders", {}, true);

  if (!res.success) return toast.error(res.message);

  toast.success(res.message);
}
