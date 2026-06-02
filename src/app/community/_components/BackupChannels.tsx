import { LucideIcon } from "@/components/lucide-icon";
import { CommunityData } from "@/services/community.service";
import Link from "next/link";

type BackupChannelsProps = Pick<CommunityData, "backup_channels">;

const staticColors = [
  { bg: "bg-sky-400", text: "text-white" },
  { bg: "bg-green-400", text: "text-white" },
  { bg: "bg-indigo-600", text: "text-indigo-50" },
];

export function BackupChannels({ backup_channels }: BackupChannelsProps) {
  return (
    <section className="w-full bg-white px-6 py-10 lg:px-12 lg:py-16 border-t border-gray-100">
      <div className="mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-black text-slate-900 uppercase tracking-wide">
          {backup_channels.title}
        </h2>
        <p className="mt-2 text-sm sm:text-base font-medium text-gray-500">
          {backup_channels.description}
        </p>

        <div className="mt-6 lg:mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {backup_channels.channels.map((item, index) => {
            const colors = staticColors[index % staticColors.length];

            return (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white p-5 text-left transition-all hover:border-gray-400"
              >
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full ${colors.bg}`}
                >
                  <LucideIcon
                    name={item.icon}
                    className={`size-6 ${colors.text}`}
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                  <span className="mt-0.5 text-xs sm:text-sm font-medium text-gray-500 truncate">
                    {item.description}
                  </span>
                  <Link
                    href={item.button.endpoint}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-xs sm:text-sm font-bold text-lime-600 inline-flex items-center gap-1 hover:underline"
                  >
                    {item.button.text} <span className="text-[10px]">➔</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
