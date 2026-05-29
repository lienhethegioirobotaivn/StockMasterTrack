import { ArrowRight } from "lucide-react";

type TopicItem = {
  title: string;
  count: string;
};

const topics: TopicItem[] = [
  { title: "Phân tích thị trường", count: "136 bài viết" },
  { title: "Phân tích cơ bản", count: "122 bài viết" },
  { title: "Phân tích kỹ thuật", count: "98 bài viết" },
  { title: "Quản trị rủi ro", count: "64 bài viết" },
  { title: "Tâm lý đầu tư", count: "58 bài viết" },
  { title: "Kiến thức nền tảng", count: "105 bài viết" },
];

export function SidebarTopics() {
  return (
    <section className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-xs">
      <h2 className="text-[17px] sm:text-lg font-bold uppercase text-slate-900">
        Chủ đề nổi bật
      </h2>
      <div className="mt-4 flex flex-col gap-2">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-lg border border-gray-50 bg-slate-50/40 px-3 py-2.5 transition cursor-pointer hover:bg-emerald-50/50 group"
          >
            <span className="text-[13px] sm:text-sm font-semibold text-slate-700 transition group-hover:text-emerald-700">
              {topic.title}
            </span>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-400">
              <span>{topic.count}</span>
              <ArrowRight className="size-3 transition group-hover:translate-x-0.5 group-hover:text-emerald-600" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
