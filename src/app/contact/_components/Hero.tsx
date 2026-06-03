import { LucideIcon } from "@/components/lucide-icon";
import { ContactData } from "@/services/contact.service";
import Image from "next/image";

type HeroProps = Pick<ContactData, "hero">;

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-6 lg:py-10 flex items-center">
      <div className="lg:left-160 absolute inset-0 z-0 hidden lg:block">
        <Image
          src={hero.background_image}
          alt="Contact Background"
          fill
          priority
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white to-transparent w-[15%]" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-11 lg:items-center">
          <div className="flex flex-col lg:col-span-6 justify-center">
            <span className="text-[14px] lg:text-[13px] font-bold text-lime-600 uppercase mb-2">
              {hero.tag}
            </span>

            <h1 className="text-[27px] sm:text-[42px] lg:text-[42px] font-black text-slate-900 leading-[1.3] sm:leading-[1.2]">
              {hero.title.text_1}
              <br />
              <span className="text-fuchsia-700">{hero.title.text_2}</span>{" "}
              {hero.title.text_3}
            </h1>

            <p className="mt-3 lg:w-145 text-[15px] sm:text-base font-medium text-gray-600 leading-relaxed">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-start sm:justify-between lg:justify-start gap-6 sm:gap-6 lg:gap-8 border border-gray-200 rounded-xl p-6 lg:p-0 lg:border-none">
              {hero.stats.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 sm:gap-2 lg:gap-2"
                >
                  <div className="flex size-12 lg:size-10 shrink-0 items-center justify-center rounded-full bg-lime-50 text-lime-600">
                    <LucideIcon name={item.icon} className="size-6 lg:size-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[16px] lg:text-[14px] font-bold text-gray-900 leading-tight">
                      {item.text_1}
                    </span>
                    <span className="text-[14px] lg:text-[12px] font-medium text-gray-500 mt-0.5">
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
                alt="Stock MasterTrack Contact"
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
