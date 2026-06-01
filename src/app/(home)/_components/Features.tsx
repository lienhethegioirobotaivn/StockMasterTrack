import { LucideIcon } from "@/components/lucide-icon";
import { HomeData } from "@/services/home.service";

type FeaturesProps = Pick<HomeData, "features">;

export function Features({ features }: FeaturesProps) {
  return (
    <section className="w-full bg-[#fcfdfd] py-12 md:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-black text-gray-900 uppercase">
          {features.title.text_1}{" "}
          <span className="text-lime-600">{features.title.text_2}</span>
          <span className="text-fuchsia-700">{features.title.text_3}</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-xl bg-white border border-gray-100/60 p-6 text-center shadow-sm"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-fuchsia-100/80">
                <LucideIcon
                  name={item.icon}
                  className="size-8 text-fuchsia-700 stroke-[1.5]"
                />
              </div>

              <h3 className="mt-4 text-base font-extrabold text-gray-900 uppercase">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
