import { LucideIcon } from "@/components/lucide-icon";
import { CommunityData } from "@/services/community.service";

type CommunityContentProps = Pick<CommunityData, "community_content">;

const staticColors = [
  { bg: "bg-lime-50", text: "text-lime-600" },
  { bg: "bg-pink-50", text: "text-pink-600" },
  { bg: "bg-amber-50", text: "text-amber-600" },
  { bg: "bg-blue-50", text: "text-blue-600" },
];

export function CommunityContent({ community_content }: CommunityContentProps) {
  return (
    <section className="w-full bg-white px-6 py-10 lg:px-12 lg:py-8">
      <div className="mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-black text-slate-900 uppercase tracking-wide text-center lg:text-left">
          {community_content.title}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {community_content.stats.map((item, index) => {
            const colors = staticColors[index % staticColors.length];

            return (
              <div
                key={index}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg text-center"
              >
                <div
                  className={`flex size-13 shrink-0 items-center justify-center rounded-full mx-auto ${colors.bg}`}
                >
                  <LucideIcon
                    name={item.icon}
                    className={`size-7 ${colors.text}`}
                  />
                </div>
                <h3 className="mt-4 text-base lg:text-[15px] font-bold text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm lg:text-[12px] font-medium text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
