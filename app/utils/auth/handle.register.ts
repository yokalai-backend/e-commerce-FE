import { toast } from "sonner";
import { postData } from "../axios/fetch";

export default async function handleRegister(
  username: string,
  password: string,
  email: string,
  router: any,
) {
  const res = await postData("/auth/register", { username, password, email });

  if (res.success) {
    router.push("/products");

    toast.success(res.message);
    return;
  }

  toast.error(res.message);
}
