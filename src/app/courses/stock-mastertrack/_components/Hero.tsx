import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheck, MessageCircleMore } from "lucide-react";

import { Button } from "@/components/ui";
import { CourseRegisterDialog } from "@/components/layout/dialog";
import { StockMasterTrackCourseData } from "@/services/courses/stockmastertrack.service";
import { LucideIcon } from "@/components/lucide-icon";

type HeroProps = Pick<StockMasterTrackCourseData, "hero">;

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-6 lg:py-6 flex items-center font-sans">
      <div className="lg:left-145 absolute inset-0 z-0 hidden lg:block">
        <Image
          src={hero.background_image}
          alt="Hero Background"
          fill
          priority
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white to-transparent w-[25%]" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-gray-900">
              Trang chủ
            </Link>
            <span>&gt;</span>
            <div className="hover:text-gray-900">Khóa học</div>
            <span>&gt;</span>
            <span className="text-gray-400">Stock MasterTrack</span>
          </div>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="z-10 lg:col-span-6 xl:col-span-7">
            <span className="text-base sm:text-sm font-bold uppercase text-lime-500">
              {hero.tag}
            </span>

            <h1 className="mt-2 text-[38px] lg:text-[44px] font-black leading-tight text-gray-900">
              <span className="text-lime-500">{hero.title.text_1}</span>{" "}
              <span className="text-fuchsia-700">{hero.title.text_2}</span>
            </h1>

            <p className="mt-2 text-lg sm:text-xl lg:text-[22px] font-bold text-gray-900">
              {hero.sub_title}
            </p>

            <p className="mt-2 lg:w-130 text-sm sm:text-[16px] leading-relaxed text-gray-600">
              {hero.description}
            </p>

            <div className="mt-4 space-y-2.5">
              {hero.content &&
                hero.content
                  .split("\n")
                  .filter((item) => item.trim() !== "")
                  .map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CircleCheck className="size-4 shrink-0 text-lime-600" />
                      <span className="text-sm sm:text-[15px] font-medium text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <CourseRegisterDialog>
                <Button className="w-full lg:w-fit h-11 rounded-md bg-fuchsia-700 px-6 text-base font-bold text-white hover:bg-fuchsia-900">
                  {hero.buttons[0].text}
                  <ArrowRight className="ml-1 size-3.5" />
                </Button>
              </CourseRegisterDialog>

              <Button asChild variant="outline" className="w-full lg:w-fit h-11 rounded-md border border-lime-500 bg-white px-6 text-base font-bold text-gray-700 hover:bg-lime-50">
                <Link
                  href={hero.buttons[1].endpoint}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-fit"
                >
                  {hero.buttons[1].text}
                  <MessageCircleMore className="ml-1 size-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full lg:col-span-6 flex flex-col gap-4 lg:pl-4 lg:hidden">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={hero.background_image}
                alt="Stock MasterTrack Classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 z-20">
          <div className="mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 rounded-lg bg-gray-100/90 p-4 sm:p-5 shadow-sm backdrop-blur-md">
            {hero.stats.map((item, index) => (
              <div key={index} className="flex items-center gap-3 px-2 py-1">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-orange-200 bg-orange-50">
                  <LucideIcon
                    name={item.icon}
                    className="size-7 text-orange-400"
                  />
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-xl font-extrabold text-gray-900 line-clamp-1">
                    {item.text_1}
                  </span>
                  <span className="text-base text-gray-600 line-clamp-2">
                    {item.text_2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
