import { Comments } from "@/app/types/products";

export default function Comment({
  userId,
  username,
  rates,
  comment,
  commentCreatedAt,
}: Comments) {
  return (
    <main>
      <div className="flex gap-3 border-b-2 border-b-black/20 border-l-4 border-l-black/30 px-2 py-2 rounded-lg">
        <p className="border border-black/70 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
          {username.charAt(0).toUpperCase()}
        </p>
        <div>
          <div className="flex justify-between">
            <p className="text-sm text-black/70">{username}</p>
            <p className="text-right text-sm text-black/70">
              {rates ?? "No rate"}
            </p>
          </div>

          <p className="line-clamp-5">{comment}</p>
        </div>
      </div>
    </main>
  );
}
