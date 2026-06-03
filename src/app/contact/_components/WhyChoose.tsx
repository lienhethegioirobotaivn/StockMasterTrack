import { LucideIcon } from "@/components/lucide-icon";
import { ContactData } from "@/services/contact.service";

type WhyChooseProps = Pick<ContactData, "why_choose">;

const staticColors = [
  { bg: "bg-emerald-50", text: "text-emerald-600" },
  { bg: "bg-lime-50", text: "text-lime-600" },
  { bg: "bg-blue-50", text: "text-blue-600" },
  { bg: "bg-fuchsia-50", text: "text-fuchsia-600" },
];

export function WhyChoose({ why_choose }: WhyChooseProps) {
  return (
    <section className="w-full bg-white py-12 lg:py-16 border-b border-gray-100">
      <div className="mx-auto w-full px-6 lg:px-12">
        <h2 className="text-center text-[22px] sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase mb-10">
          {why_choose.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {why_choose.reasons.map((item, index) => {
            const colors = staticColors[index % staticColors.length];

            return (
              <div key={index} className="flex items-start gap-4">
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}
                >
                  <LucideIcon name={item.icon} className="size-6" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-[15px] font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-medium text-gray-500 mt-1.5 leading-relaxed">
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
