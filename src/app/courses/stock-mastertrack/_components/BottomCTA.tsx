import { CourseRegisterDialog } from "@/components/layout/dialog";
import { Button } from "@/components/ui";
import { StockMasterTrackCourseData } from "@/services/courses/stockmastertrack.service";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

type BottomCTAProps = Pick<StockMasterTrackCourseData, "bottomcta">;

export function BottomCTA({ bottomcta }: BottomCTAProps) {
  return (
    <section className="relative overflow-hidden bg-lime-100/20 py-12 font-sans">
      {/* <div
        className="absolute inset-y-0 right-0 hidden w-1/3 bg-contain bg-right bg-no-repeat opacity-80 md:block"
        style={{
          backgroundImage: "url('/courses/stock-mastertrack/cta-bg.png')",
        }}
      /> */}

      <div className="relative mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-[34px] lg:text-3xl font-extrabold text-gray-900">
              {bottomcta.text_1}
            </h2>
            <p className="text-sm sm:text-lg lg:text-base font-medium text-gray-500">
              {bottomcta.text_2}
            </p>
          </div>

          <div className="flex w-full flex-col sm:flex-row gap-3 sm:w-auto sm:items-center">
            <CourseRegisterDialog>
              <Button className="h-10 w-full rounded-lg bg-fuchsia-700 px-6 text-sm sm:text-base font-bold text-white shadow-xs hover:bg-fuchsia-800 sm:w-auto">
                {bottomcta.buttons[0].text}
              </Button>
            </CourseRegisterDialog>

            <Button
              asChild
              variant="outline"
              className="h-10 w-full rounded-lg border border-gray-200 bg-white px-6 text-sm sm:text-base font-bold text-gray-700 shadow-xs hover:bg-gray-50 sm:w-auto"
            >
              <Link
                href={bottomcta.buttons[1].endpoint}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-1.5 size-4 text-lime-600" />
                {bottomcta.buttons[1].text}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
