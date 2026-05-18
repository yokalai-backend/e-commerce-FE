import { toast } from "sonner";
import { postData } from "../axios/fetch";

export default async function sendComment(
  productId: string,
  comment: string,
  rates?: number,
) {
  let message = { success: true, msg: "" };

  if (!rates) {
    const res = await postData(`/comments/${productId}`, { comment }, true);

    message = { success: res.success, msg: res.message };
  } else {
    const res = await postData(
      `/comments/${productId}`,
      { comment, rates },
      true,
    );

    message = { success: res.success, msg: res.message };
  }

  if (!message.success) return toast.error(message.msg);

  toast.success(message.msg);
}
