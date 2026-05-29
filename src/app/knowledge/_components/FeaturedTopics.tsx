import { Button } from "@/components/ui";
import {
  TrendingUp,
  CandlestickChart,
  ShieldCheck,
  Brain,
  BookOpen,
  LineChart,
  ArrowRight,
} from "lucide-react";

type Topic = {
  title: string;
  count: string;
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
};

const topics: Topic[] = [
  {
    title: "Phân tích thị trường",
    count: "136 bài viết",
    icon: TrendingUp,
    iconColor: "text-lime-600",
    bgColor: "bg-lime-50",
  },
  {
    title: "Phân tích cơ bản",
    count: "122 bài viết",
    icon: BookOpen,
    iconColor: "text-fuchsia-700",
    bgColor: "bg-fuchsia-50",
  },
  {
    title: "Phân tích kỹ thuật",
    count: "98 bài viết",
    icon: LineChart,
    iconColor: "text-lime-600",
    bgColor: "bg-lime-50",
  },
  {
    title: "Quản trị rủi ro",
    count: "64 bài viết",
    icon: ShieldCheck,
    iconColor: "text-lime-600",
    bgColor: "bg-lime-50",
  },
  {
    title: "Tâm lý đầu tư",
    count: "58 bài viết",
    icon: Brain,
    iconColor: "text-fuchsia-700",
    bgColor: "bg-fuchsia-50",
  },
  {
    title: "Kiến thức nền tảng",
    count: "105 bài viết",
    icon: CandlestickChart,
    iconColor: "text-violet-600",
    bgColor: "bg-violet-50",
  },
];

export function FeaturedTopics() {
  return (
    <section className="w-full px-6 lg:px-12 pt-6 lg:pt-12">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 md:mb-8">
        <h2 className="text-[26px] sm:text-2xl lg:text-[26px] font-bold uppercase text-gray-950">
          Chủ đề nổi bật
        </h2>

        <Button className="flex items-center gap-1.5 sm:gap-2 lg:gap-1.5 rounded-lg border border-lime-600/30 px-4 py-2 text-sm font-medium text-lime-700 transition hover:bg-lime-50">
          Xem tất cả chủ đề
          <ArrowRight className="size-3.5 md:size-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
        {topics.map((topic) => (
          <div
            key={topic.title}
            className="flex flex-col items-center justify-center rounded-xl border border-gray-100/80 bg-white p-5 text-center shadow-xs transition hover:shadow-md"
          >
            <div
              className={`flex size-12 lg:size-11 items-center justify-center rounded-full ${topic.bgColor}`}
            >
              <topic.icon className={`size-6 lg:size-5 ${topic.iconColor}`} />
            </div>

            <h3 className="mt-4 text-sm font-bold text-slate-900">
              {topic.title}
            </h3>

            <p className="mt-1.5 text-xs text-gray-400">{topic.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
