import Image from "next/image";

type RelatedArticle = {
  title: string;
  image: string;
  date: string;
};

const relatedItems: RelatedArticle[] = [
  {
    title: "5 chỉ số tài chính quan trọng nhà đầu tư cần biết",
    image: "/knowledge/post-2.jpg",
    date: "18/05/2024",
  },
  {
    title: "Hướng dẫn đọc biểu đồ nến cho người mới bắt đầu",
    image: "/knowledge/post-3.jpg",
    date: "16/05/2024",
  },
  {
    title: "Nguyên tắc cắt lỗ: Bảo vệ vốn để tồn tại trên thị trường",
    image: "/knowledge/post-4.jpg",
    date: "14/05/2024",
  },
  {
    title: "3 sai lầm tâm lý khiến nhà đầu tư thua lỗ liên tục",
    image: "/knowledge/post-5.jpg",
    date: "12/05/2024",
  },
  {
    title: "Dòng tiền thông minh là gì? Cách nhận biết trên thị trường",
    image: "/knowledge/post-4.jpg",
    date: "04/05/2024",
  },
];

export function RelatedArticles() {
  return (
    <section className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-xs">
      <h2 className="text-[17px] sm:text-lg font-bold uppercase text-slate-900">
        Bài viết liên quan
      </h2>
      <div className="mt-4 flex flex-col gap-3.5">
        {relatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <div className="relative aspect-8/5 w-24 shrink-0 overflow-hidden rounded-md bg-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition group-hover:scale-105"
              />
            </div>
            <div className="min-w-0">
              <h3 className="line-clamp-2 text-xs sm:text-sm font-bold leading-snug text-slate-800 transition group-hover:text-lime-500">
                {item.title}
              </h3>
              <span className="mt-1 block text-[10px] text-gray-400 md:text-[11px]">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
