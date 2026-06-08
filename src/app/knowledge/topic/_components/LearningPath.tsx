import { Button } from "@/components/ui";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export function LearningPath() {
  return (
    <section className="mx-auto px-6 lg:px-12 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 sm:px-6">
        <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-700 shadow-xs">
            <BookOpen className="size-6" />
          </div>
          <div>
            <h3 className="text-base sm:text-xl font-bold text-gray-950">
              Không biết bắt đầu từ đâu?
            </h3>
            <p className="mt-0.5 text-sm text-gray-600">
              Khám phá lộ trình học tập được thiết kế theo từng cấp độ.
            </p>
          </div>
        </div>

        <Button>
          <Link
            href={"/courses/stock-mastertrack"}
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-xs hover:bg-gray-50 transition-colors"
          >
            Xem lộ trình học tập
            <ArrowRight className="size-3.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
