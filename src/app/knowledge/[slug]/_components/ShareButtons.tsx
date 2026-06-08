"use client";

import { Link2 } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { Button } from "@/components/ui";
import { toast } from "sonner";

export function ShareButtons() {
  const getCurrentUrl = () => window.location.href;

  const handleFacebookShare = () => {
    const url = getCurrentUrl();
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=500",
    );
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getCurrentUrl());
      toast.success("Đã sao chép liên kết");
    } catch {
      toast.error("Không thể sao chép liên kết! Vui lòng thử lại.");
    }
  };

  const handleZaloShare = async () => {
    try {
      await navigator.clipboard.writeText(getCurrentUrl());
      toast.success("Đã sao chép liên kết để chia sẻ qua Zalo");
    } catch {
      toast.error("Không thể sao chép liên kết! Vui lòng thử lại.");
    }
  };

  return (
    <>
      <Button
        type="button"
        onClick={handleFacebookShare}
        className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
      >
        <FaFacebook className="size-3.5 fill-current" />
      </Button>

      <Button
        type="button"
        onClick={handleZaloShare}
        className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
      >
        <SiZalo className="size-4 fill-current" />
      </Button>

      <Button
        type="button"
        onClick={handleCopyLink}
        className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
      >
        <Link2 className="size-3.5" />
      </Button>
    </>
  );
}
