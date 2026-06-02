import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CommunityData } from "@/services/community.service";
import { LucideIcon } from "@/components/lucide-icon";

type HeroProps = Pick<CommunityData, "hero">;

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-6 lg:py-10 flex items-center">
      <div className="lg:left-140 absolute inset-0 z-0 hidden lg:block">
        <Image
          src={hero.background_image}
          alt="Community Background"
          fill
          priority
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white to-transparent w-[15%]" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col lg:col-span-7 justify-center">
            <span className="text-[14px] lg:text-[13px] font-bold text-lime-600 uppercase mb-2">
              {hero.tag}
            </span>

            <h1 className="text-[30px] sm:text-[42px] lg:text-[42px] font-black text-slate-900 leading-[1.3] sm:leading-[1.2]">
              {hero.title.text_1}
              <br />
              {hero.title.text_2}{" "}
              <span className="text-fuchsia-700">{hero.title.text_3}</span>
            </h1>

            <p className="mt-4 lg:max-w-120 text-[15px] lg:text-base font-medium text-gray-600">
              {hero.description}
            </p>

            <ul className="mt-6 space-y-3">
              {hero.content &&
                hero.content
                  .split("\n")
                  .filter((item) => item.trim() !== "")
                  .map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 lg:size-4 shrink-0 text-lime-600 mt-0.5" />
                      <span className="text-[15px] lg:text-[15px] font-medium text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row sm:justify-between lg:justify-start gap-8 lg:gap-12 border border-gray-300 rounded-xl p-6 lg:p-0 lg:border-none">
              {hero.stats.map((item, index) => (
                <div key={index} className="flex items-center gap-4 lg:gap-2">
                  <LucideIcon
                    name={item.icon}
                    className="size-10 lg:size-7 shrink-0 text-lime-600"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xl sm:text-lg lg:text-[15px] font-bold text-gray-900 leading-tight">
                      {item.text_1}
                    </span>
                    <span className="text-lg sm:text-base lg:text-[13px] font-medium text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.text_2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:col-span-5 flex flex-col gap-4 lg:pl-4">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100 lg:hidden">
              <Image
                src={hero.background_image}
                alt="Stock MasterTrack Community"
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
