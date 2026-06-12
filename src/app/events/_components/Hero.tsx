import Image from "next/image";
import { EventsData } from "@/services/events.service";
import { LucideIcon } from "@/components/lucide-icon";

type HeroProps = Pick<EventsData, "hero">;

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 flex items-center">
      <div className="absolute lg:left-165 inset-y-0 right-0 z-0 hidden w-1/2 lg:block">
        <Image
          src={hero.background_image}
          alt="Stock MasterTrack Workshop"
          fill
          priority
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent w-[30%]" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          <div className="flex flex-col lg:col-span-7 justify-center">
            <span className="text-sm font-black text-lime-600 uppercase">
              {hero.tag}
            </span>

            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 leading-[1.4]">
              {hero.title}
              <br />
              <span className="text-lime-600">
                {hero.sub_title.text_1}
              </span>{" "}
              <span className="text-slate-900">—</span>{" "}
              <span className="text-fuchsia-700">{hero.sub_title.text_2}</span>{" "}
              <span className="text-slate-900">—</span>{" "}
              <span className="text-slate-900">{hero.sub_title.text_3}</span>
            </h1>

            <p className="mt-4 lg:w-130 text-base lg:text-[15px] font-medium text-gray-600 leading-relaxed whitespace-pre-wrap">
              {hero.description}
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-5 lg:gap-4">
              {hero.stats.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-lime-500/20 bg-lime-50">
                      <LucideIcon
                        name={item.icon}
                        className="size-5 text-lime-600"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm lg:text-[13px] font-bold text-gray-900 leading-tight">
                        {item.title}
                      </span>
                      <span className="mt-0.5 text-xs lg:text-[11px] font-medium text-gray-500 leading-normal">
                        {item.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative w-full lg:col-span-5 lg:hidden">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={hero.background_image}
                alt="Stock MasterTrack Workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
