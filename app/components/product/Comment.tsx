import useInput from "@/app/hooks/useInput";
import { Comments } from "@/app/types/products";
import getReplies from "@/app/utils/product/get.replies";
import replyComment from "@/app/utils/product/reply.comment";
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useEffect, useState } from "react";

function formatTime(timestamp: string | Date) {
  return new Date(timestamp).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function ReplyItem({
  username,
  comment,
  commentCreatedAt,
  onReply,
}: Comments & { onReply: () => void }) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked((prev) => !prev);
    if (liked) setLiked(false);
  };

  return (
    <div className="flex gap-2 py-1.5">
      <p className="border border-black/50 w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs">
        {username.charAt(0).toUpperCase()}
      </p>
      <div className="min-w-0 w-full">
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium text-black/70 shrink-0">
            {username}
          </p>
          {commentCreatedAt && (
            <p className="text-xs text-black/30 truncate">
              {formatTime(commentCreatedAt)}
            </p>
          )}
        </div>
        <p className="text-sm wrap-break-word text-black/80">{comment}</p>

        <div className="flex items-center gap-5 mt-2">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 text-xs transition-colors ${
              liked ? "text-blue-500" : "text-black/40 hover:text-black/70"
            }`}
          >
            <ThumbsUp size={12} />
            <span>10rb</span>
          </button>
          <button
            onClick={handleDislike}
            className={`flex items-center gap-1 text-xs transition-colors ${
              disliked ? "text-red-500" : "text-black/40 hover:text-black/70"
            }`}
          >
            <ThumbsDown size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Comment({
  userId,
  username,
  id,
  rates,
  comment,
  commentCreatedAt,
}: Comments) {
  const reply = useInput();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState<Comments[]>([]);
  const [loadingReplies, setLoadingReplies] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked((prev) => !prev);
    if (liked) setLiked(false);
  };

  const handleSendReply = async () => {
    if (!reply.value.trim()) return;
    await replyComment(reply.value, id);
    reply.reset();
    const res = await getReplies(id);
    setReplies(res ?? []);
    setShowReplies(true);
    setShowReply(false);
  };

  useEffect(() => {
    if (!showReplies) return;

    const fetchReplies = async () => {
      setLoadingReplies(true);
      const res = await getReplies(id);
      setReplies(res ?? []);
      setLoadingReplies(false);
    };

    fetchReplies();
  }, [showReplies]);

  return (
    <div className="flex gap-3 border-b-2 border-b-black/20 border-l-4 border-l-black/30 px-2 py-2 rounded-lg">
      <p className="border border-black/70 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
        {username.charAt(0).toUpperCase()}
      </p>
      <div className="w-full min-w-0">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <p className="text-sm text-black/70 shrink-0">{username}</p>
            {commentCreatedAt && (
              <p className="text-xs text-black/40 truncate">
                {formatTime(commentCreatedAt)}
              </p>
            )}
          </div>
          <p className="text-right text-sm text-black/70 shrink-0">
            {rates ?? "No rate"}
          </p>
        </div>

        <p className="line-clamp-5 wrap-break-word">{comment}</p>

        <div className="flex items-end gap-4 mt-4">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 text-xs transition-colors ${
              liked ? "text-blue-500" : "text-black/40 hover:text-black/70"
            }`}
          >
            <ThumbsUp size={14} />
            <span className="mt-0.5">10rb</span>
          </button>
          <button
            onClick={handleDislike}
            className={`flex items-center gap-1 text-xs transition-colors ${
              disliked ? "text-red-500" : "text-black/40 hover:text-black/70"
            }`}
          >
            <ThumbsDown size={14} />
          </button>
          <button
            onClick={() => setShowReply((prev) => !prev)}
            className="flex items-center gap-1 text-xs text-black/40 hover:text-black/70 transition-colors"
          >
            <MessageCircle size={14} />
            <span>Reply</span>
          </button>
        </div>

        <button
          onClick={() => setShowReplies((prev) => !prev)}
          className="flex items-center gap-1 mt-3 text-xs text-blue-500 hover:text-blue-600 transition-colors"
        >
          {showReplies ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          <span>{showReplies ? "Hide replies" : "View replies"}</span>
        </button>

        {showReplies && (
          <div className="mt-1 flex flex-col divide-y divide-black/10 pl-2 border-l-2 border-black/10">
            {loadingReplies ? (
              <p className="text-xs text-black/30 italic py-2">Loading...</p>
            ) : replies.length > 0 ? (
              replies.map((r) => (
                <ReplyItem
                  key={r.id}
                  {...r}
                  onReply={() => {
                    setShowReply(true);
                    setShowReplies(true);
                  }}
                />
              ))
            ) : (
              <p className="text-xs text-black/30 italic py-2">
                No replies yet.
              </p>
            )}
          </div>
        )}

        {showReply && (
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              placeholder="Write a reply..."
              className="flex-1 w-full text-sm border border-black/20 rounded-lg px-3 py-1.5 outline-none focus:border-black/50"
              onChange={reply.onChange}
              value={reply.value}
            />
            <button
              onClick={handleSendReply}
              className="text-sm px-3 py-1.5 bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
