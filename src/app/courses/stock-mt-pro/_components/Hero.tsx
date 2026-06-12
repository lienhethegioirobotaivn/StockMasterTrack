import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { StockMTProRegisterDialog } from "@/components/layout/dialog";
import { StockMTProData } from "@/services/courses/stockmtpro.service";
import { LucideIcon } from "@/components/lucide-icon";

type HeroProps = Pick<StockMTProData, "hero">;

const breadcrumb = [
  { label: "Trang chủ", href: "/" },
  { label: "Khóa học", href: "#" },
  { label: "Stock MT Pro", href: "#", active: true },
];

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden py-8 lg:py-8 flex items-center font-sans bg-[#060606]">
      <div className="lg:left-140 absolute inset-0 z-0 hidden lg:block">
        <Image
          src={hero.background_image}
          alt="Stock MT Pro Chart Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#060606] to-transparent w-[25%]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16">
        <div className="flex flex-wrap items-center gap-2 text-xs mb-8 lg:mb-10">
          {breadcrumb.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.active ? (
                <span className="font-medium text-white">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors text-white/60 hover:text-white"
                >
                  {item.label}
                </Link>
              )}
              {index < breadcrumb.length - 1 && (
                <span className="text-white/60">&gt;</span>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="relative z-10 flex flex-col lg:col-span-7 justify-center">
            <span className="text-xs sm:text-sm font-bold text-[#C3944E]">
              {hero.tag}
            </span>

            <h1 className="mt-4 sm:mt-2 text-5xl sm:text-6xl lg:text-6xl font-black leading-none flex flex-wrap items-center gap-x-4">
              <span className="text-white">{hero.title.text_1}</span>{" "}
              <span className="bg-linear-to-b from-[#E1BB70] to-[#C3944E] bg-clip-text text-transparent">
                {hero.title.text_2}
              </span>
            </h1>

            <p className="mt-3 text-lg sm:text-2xl lg:text-xl font-bold text-white whitespace-pre-wrap leading-1.2">
              {hero.sub_title}
            </p>

            <p className="mt-3 text-sm sm:text-base lg:text-sm leading-relaxed lg:w-130 text-white/70 whitespace-pre-wrap">
              {hero.description}
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 items-center gap-3 lg:gap-2.5 lg:w-160">
              {hero.stats.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full sm:w-fit flex items-center gap-2 py-2 rounded-lg"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-[rgba(212,175,55,0.1)] border-[rgba(212,175,55,0.2)]">
                      <LucideIcon
                        name={item.icon}
                        className="size-4 text-[#ffe082]"
                      />
                    </div>
                    <span className="text-xs font-bold text-white/90">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <StockMTProRegisterDialog>
                <Button className="w-full sm:w-fit h-11 px-8 text-sm font-bold text-black border-0 bg-linear-to-r from-[#E1BB70] via-[#F4E3C1] via-50% to-[#C3944E]">
                  {hero.buttons.button_1.text}
                </Button>
              </StockMTProRegisterDialog>

              <Link
                href={hero.buttons.button_2.endpoint}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-fit h-11 px-8 text-sm font-bold text-white/90 hover:text-white bg-white/5 border-white/30">
                  {hero.buttons.button_2.text}
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:col-span-5 flex flex-col gap-4">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-[#121212] lg:hidden border border-white/20">
              <Image
                src={hero.background_image}
                alt="Stock MT Pro Class Preview"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
