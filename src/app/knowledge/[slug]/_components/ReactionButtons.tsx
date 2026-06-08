"use client";

import { useState, useTransition } from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui";
import { reactToKnowledgeArticle } from "@/features/knowledge/api";

interface Props {
  postId: number;
  likes: number;
  dislikes: number;
}

export function ReactionButtons({ postId, likes, dislikes }: Props) {
  const [pending, startTransition] = useTransition();

  const [reaction, setReaction] = useState({
    likes,
    dislikes,
  });

  const handleReaction = (type: "like" | "dislike") => {
    startTransition(async () => {
      const result = await reactToKnowledgeArticle(postId, type);

      setReaction({
        likes: result?.likes ?? 0,
        dislikes: result?.dislikes ?? 0,
      });
    });
  };

  return (
    <>
      <Button
        disabled={pending}
        onClick={() => handleReaction("like")}
        className="flex items-center rounded-md gap-2 border border-gray-200 px-3 py-1 text-xs font-semibold text-lime-600 hover:bg-lime-50"
      >
        <ThumbsUp className="size-3.5" />
        <span>{reaction.likes}</span>
      </Button>

      <Button
        disabled={pending}
        onClick={() => handleReaction("dislike")}
        className="flex items-center rounded-md gap-2 border border-gray-200 px-3 py-1 text-xs font-semibold text-rose-600 hover:bg-rose-50"
      >
        <ThumbsDown className="size-3.5" />
        <span>{reaction.dislikes}</span>
      </Button>
    </>
  );
}
