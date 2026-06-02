import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui";
import Link from "next/link";
import { LucideIcon } from "@/components/lucide-icon";
import { HomeData } from "@/services/home.service";

type HeroProps = Pick<HomeData, "hero">;

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-6 lg:py-10 flex items-center">
      <div className="lg:left-160 absolute inset-0 z-0 hidden lg:block">
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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col lg:col-span-7 justify-center">
            <h1 className="text-[38px] lg:text-[34px] font-black text-slate-900 leading-[1.3] lg:leading-[1.4] whitespace-pre-wrap">
              {hero.title.text_1}
              <br />
              <span className="text-lime-500">{hero.title.text_2}</span>{" "}
              <span className="text-fuchsia-700">{hero.title.text_3}</span>
            </h1>

            <p className="mt-2 lg:max-w-120 text-base lg:text-[14px] font-medium text-gray-600">
              {hero.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-4">
              <Button asChild className="w-full lg:w-fit inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-fuchsia-700 px-6 text-sm font-bold text-white transition-all hover:bg-fuchsia-800">
                <Link href={hero.buttons[0].endpoint} className="w-full lg:w-fit">
                  {hero.buttons[0].text}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button asChild className="w-full lg:w-fit inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50">
                <Link
                  href={hero.buttons[1].endpoint}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-fit"
                >
                  {hero.buttons[1].text}
                  <Users className="size-4 text-lime-600" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-col lg:flex-row gap-6 border border-gray-300 rounded-xl p-6 lg:p-0 lg:border-none">
              {hero.stats.map((item, index) => (
                <div key={index} className="flex items-center gap-4 lg:gap-2">
                  <LucideIcon
                    name={item.icon}
                    className="size-10 lg:size-7 shrink-0 text-lime-600"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xl lg:text-[14px] font-bold text-gray-900 leading-tight">
                      {item.text_1}
                    </span>
                    <span className="text-lg lg:text-xs font-medium text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
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
                alt="Stock MasterTrack Classroom"
                fill
                className="object-cover"
              />
            </div>

            {hero.highlights.map((item, index) => (
              <div
                key={index}
                className="lg:w-70 flex items-start gap-4 rounded-xl border border-gray-100 bg-white/95 p-4 shadow-lg backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 lg:ml-auto"
              >
                <div className="flex size-12 lg:size-10 shrink-0 items-center justify-center rounded-full bg-lime-50">
                  <LucideIcon
                    name={item.icon}
                    className="size-7 lg:size-5 text-lime-600"
                  />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-lg lg:text-sm font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-xs font-medium text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
