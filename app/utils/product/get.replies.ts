import { toast } from "sonner";
import { getData } from "../axios/fetch";
import { Comments } from "@/app/types/products";

export default async function getReplies(commentId: string) {
  const res = await getData<Comments[]>(`/comments/${commentId}`, true);

  if (!res.success) {
    toast.error(res.message);

    return;
  }

  return res.data;
}
