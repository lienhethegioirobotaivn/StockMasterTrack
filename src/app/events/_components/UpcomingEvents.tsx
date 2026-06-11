import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { CourseRegisterDialog } from "@/components/layout/dialog";

const upcomingEventsData = [
  {
    tag: "WORKSHOP OFFLINE",
    tagColor: "bg-lime-600",
    image: "/images/event-1.jpg",
    title: "Workshop: Phân tích báo cáo tài chính thực chiến",
    date: { day: "25", month: "MAY" },
    time: "09:00 - 12:00",
    location: "TP. Hồ Chí Minh",
    slots: "50 chỗ còn lại",
    description:
      "Hướng dẫn đọc – hiểu – phân tích báo cáo tài chính doanh nghiệp một cách hệ thống và dễ áp dụng.",
    price: "Miễn phí",
  },
  {
    tag: "WEBINAR ONLINE",
    tagColor: "bg-fuchsia-700",
    image: "/images/event-2.jpg",
    title: "Webinar: Triển vọng thị trường Quý 3/2024",
    date: { day: "01", month: "JUN" },
    time: "20:00 - 21:30",
    location: "Online qua Zoom",
    slots: "Không giới hạn",
    description:
      "Cập nhật bức tranh vĩ mô, phân tích các nhóm ngành triển vọng và chiến lược đầu tư cho Quý 3.",
    price: "Miễn phí",
  },
  {
    tag: "OFFLINE MEETUP",
    tagColor: "bg-lime-600",
    image: "/images/event-3.jpg",
    title: "Investor Meetup Tháng 6/2024",
    date: { day: "15", month: "JUN" },
    time: "13:30 - 17:00",
    location: "TP. Hồ Chí Minh",
    slots: "30 chỗ còn lại",
    description:
      "Giao lưu, chia sẻ kinh nghiệm đầu tư và kết nối cùng cộng đồng nhà đầu tư Stock MasterTrack.",
    price: "199.000đ",
  },
];

export function UpcomingEvents() {
  return (
    <section className="w-full bg-slate-50/50 py-16">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-black uppercase text-slate-900">
            Sự kiện sắp diễn ra
          </h2>
          <Button
            asChild
            variant="ghost"
            className="gap-2 font-bold text-gray-600 hover:text-gray-900"
          >
            <Button>
              <Link href="/events" className="flex">
                Xem tất cả sự kiện
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEventsData.map((event, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs transition-all hover:shadow-md"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <span
                  className={`absolute top-4 left-4 rounded-md px-3 py-1.5 text-xs font-black text-white ${event.tagColor}`}
                >
                  {event.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 border border-slate-100 p-2 min-w-14 text-center">
                    <span className="text-xl font-black text-lime-600 leading-none">
                      {event.date.day}
                    </span>
                    <span className="mt-1 text-[10px] font-bold text-gray-400">
                      {event.date.month}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 line-clamp-2 leading-snug">
                    {event.title}
                  </h3>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-2.5 border-y border-gray-100 py-4 text-sm font-medium text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-gray-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-gray-400" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="size-4 text-gray-400" />
                    <span>{event.slots}</span>
                  </div>
                </div>

                <p className="mt-2 text-sm font-medium text-gray-500 line-clamp-2 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-4 flex items-center justify-between pt-2">
                  <span
                    className={`text-base font-black ${event.price === "Miễn phí" ? "text-lime-600" : "text-fuchsia-700"}`}
                  >
                    {event.price}
                  </span>
                  <CourseRegisterDialog>
                    <Button className="bg-lime-600 text-sm font-bold text-white">
                      ĐĂNG KÝ NGAY
                    </Button>
                  </CourseRegisterDialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
