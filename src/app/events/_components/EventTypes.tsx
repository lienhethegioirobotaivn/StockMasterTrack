import { LucideIcon } from "@/components/lucide-icon";
import { EventsData } from "@/services/events.service";

type EventTypesProps = Pick<EventsData, "event_types">;

export function EventTypes({ event_types }: EventTypesProps) {
  return (
    <section className="py-12 px-6 lg:px-0 lg:mx-12 rounded-xl bg-green-50">
      <div className="mx-auto w-full">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-lime-600">
            {event_types.title}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:py-4 lg:px-6">
          {event_types.stats.map((item, index) => {
            return (
              <div key={index} className="flex gap-3 items-center">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-lime-50 text-lime-600">
                  <LucideIcon name={item.icon} className="size-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
