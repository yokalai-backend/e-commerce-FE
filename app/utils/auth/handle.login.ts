import { toast } from "sonner";
import { postData } from "../axios/fetch";

export default async function handleLogin(
  email: string,
  password: string,
  router: any,
) {
  const res = await postData("/auth/login", { email, password }, true);

  if (!res.success) {
    toast.error(res.message);

    return;
  }

  toast.success(res.message);

  router.push("/products");
}
