import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Users, ArrowRight, CalendarX } from "lucide-react";
import { Button } from "@/components/ui";
import { CourseRegisterDialog } from "@/components/layout/dialog";
import { Event } from "@/features/events/types";

interface UpcomingEventsProps {
  upcomingEvents: Event[];
}

export function UpcomingEvents({ upcomingEvents }: UpcomingEventsProps) {
  const hasEvents = upcomingEvents && upcomingEvents.length > 0;

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
            <Link href="/events" className="flex items-center">
              Xem tất cả sự kiện
              <ArrowRight className="size-4 ml-1" />
            </Link>
          </Button>
        </div>

        {hasEvents ? (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs transition-all hover:shadow-md"
              >
                <div className="w-full overflow-hidden bg-slate-100">
                  <Image
                    src={event.image?.url ?? ""}
                    alt={event.image?.alt ?? ""}
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full aspect-16/11 object-fill transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center justify-center rounded-lg bg-slate-50 border border-slate-100 p-2 min-w-14 text-center">
                      <span className="text-xl font-black text-lime-600 leading-none">
                        {event.date
                          ? event.date.split("T")[0].split("-")[2]
                          : "--"}
                      </span>
                      <span className="mt-1 text-[10px] font-bold text-gray-400">
                        TH{" "}
                        {event.date
                          ? event.date.split("T")[0].split("-")[1]
                          : "--"}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 line-clamp-2 leading-snug">
                      {event.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 border-y border-gray-100 py-4 text-sm font-medium text-gray-500">
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

                  <div
                    className="text-sm font-medium text-gray-500 line-clamp-2 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: event.excerpt ?? "",
                    }}
                  />

                  <div className="flex items-center justify-between pt-2">
                    <span
                      className={`text-base font-black ${
                        event.price
                          ?.normalize("NFD")
                          ?.replace(/[\u0300-\u036f]/g, "")
                          ?.replace(/\s+/g, "")
                          ?.toLowerCase() === "mienphi" ||
                        event.price?.replace(/\s+/g, "").toLowerCase() ===
                          "free"
                          ? "text-lime-600"
                          : "text-fuchsia-700"
                      }`}
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
        ) : (
          <div className="mt-4 lg:mt-12 flex flex-col items-center justify-center text-center py-6">
            <CalendarX className="size-12 text-gray-300 mb-3" />
            <p className="text-lg sm:text-xl font-bold text-slate-700">
              Hiện tại chưa có sự kiện nào sắp diễn ra.
            </p>
            <p className="text-sm sm:text-base text-gray-400 mt-1">
              Vui lòng quay lại sau để cập nhật thông tin mới nhất.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
