import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { Event } from "@/features/events/types";

interface PastEventsProps {
  pastEvents: Event[];
}

export function PastEvents({ pastEvents }: PastEventsProps) {
  return (
    <section className="w-full bg-slate-50/50 py-12">
      <div className="mx-auto w-full px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-black uppercase text-slate-900">
            Sự kiện đã diễn ra
          </h2>
          <Button className="flex gap-2 font-bold text-gray-600 hover:text-gray-900">
            Xem tất cả
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-all hover:shadow-xs"
            >
              <div className="w-full overflow-hidden bg-slate-100">
                <Image
                  src={event.image?.url ?? ""}
                  alt={event.image?.alt ?? ""}
                  width={600}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                  <Calendar className="size-3.5" />
                  <span>
                    {event.date
                      ? event.date.split("T")[0].split("-").reverse().join("/")
                      : ""}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-lime-600">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
