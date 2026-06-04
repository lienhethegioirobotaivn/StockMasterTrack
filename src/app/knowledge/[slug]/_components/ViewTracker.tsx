"use client";

import { env } from "@/lib/env";
import { useEffect } from "react";

interface ViewTrackerProps {
  postId: number;
}

export function ViewTracker({ postId }: ViewTrackerProps) {
  useEffect(() => {
    fetch(
      `${env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/post-views-counter/view-post`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: postId,
        }),
      },
    );
  }, [postId]);

  return null;
}
