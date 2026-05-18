import { toast } from "sonner";
import { postData } from "../axios/fetch";

export default async function replyComment(comment: string, commentId: string) {
  const res = await postData(`/comments/reply/${commentId}`, { comment }, true);

  if (!res.success) toast.error(res.message);

  toast.success(res.message);
}
