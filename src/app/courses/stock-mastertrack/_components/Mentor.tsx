import Image from "next/image";
import { Quote, ArrowRight, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui";
import { CourseRegisterDialog } from "@/components/layout/dialog";
import Link from "next/link";
import { StockMasterTrackCourseData } from "@/services/courses/stockmastertrack.service";
import { LucideIcon } from "@/components/lucide-icon";

type MentorProps = Pick<StockMasterTrackCourseData, "mentor">;

export function Mentor({ mentor }: MentorProps) {
  return (
    <section className="bg-white py-12 slg:py-16 px-6 lg:px-12 font-sans">
      <div className="mx-auto">
        <div className="grid gap-8 lg:grid-cols-11 lg:items-start">
          <div className="lg:col-span-7">
            <h2 className="text-[25px] sm:text-3xl lg:text-4xl font-black text-gray-900 text-center lg:text-left">
              {mentor.title.text_1}{" "}
              <span className="text-fuchsia-700">{mentor.title.text_2}</span>
            </h2>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="relative mx-auto w-48 shrink-0 overflow-hidden sm:mx-0">
                <Image
                  src={mentor.teacher.avatar}
                  alt={mentor.teacher.name}
                  width={220}
                  height={260}
                  priority
                  className="w-full object-cover"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-[22px] sm:text-2xl font-extrabold text-gray-900">
                  {mentor.teacher.name}
                </h3>
                <p className="mt-1 text-[16px] font-medium text-gray-600">
                  {mentor.teacher.role}
                </p>

                <ul className="mt-4 space-y-3 text-left">
                  {mentor.teacher.experience &&
                    mentor.teacher.experience
                      .split("\n")
                      .filter((item) => item.trim() !== "")
                      .map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gray-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-[#f9fcf8] p-5 sm:p-6 border border-gray-200">
              <div className="flex gap-4 items-start">
                <Quote className="size-6 shrink-0 rotate-180 text-lime-600/60" />
                <p className="text-[15px] font-medium leading-relaxed text-gray-700">
                  {mentor.teacher.quote}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border-[1.5px] border-gray-200 bg-white p-6 shadow-xs sm:p-8">
            <h3 className="text-xl font-bold uppercase text-lime-600">
              {mentor.information.title}
            </h3>

            <div className="mt-6 space-y-5">
              {mentor.information.stats.map((item, index) => (
                <div key={index} className="flex gap-3.5 items-start">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-lime-50/60 text-lime-600">
                    <LucideIcon name={item.icon} className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-sm text-gray-500 font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3.5 items-start">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-lime-50/60 text-lime-600">
                  <LucideIcon
                    name={mentor.information.tuition.icon}
                    className="size-4.5"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">
                    {mentor.information.tuition.title}
                  </h4>
                  <div className="mt-1 flex items-baseline">
                    <span className="text-2xl font-black text-fuchsia-700">
                      {mentor.information.tuition.content}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-medium mt-0.5">
                    {mentor.information.tuition.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <CourseRegisterDialog>
                <Button className="h-11 w-full rounded-lg bg-fuchsia-700 text-sm font-bold text-white shadow-xs hover:bg-fuchsia-800">
                  {mentor.information.buttons[0].text}
                  <ArrowRight className="ml-1 size-3.5" />
                </Button>
              </CourseRegisterDialog>

              <Button asChild variant="outline" className="h-11 w-full rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-700 shadow-xs hover:bg-gray-50">
                <Link
                  href={mentor.information.buttons[1].endpoint}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircleMore className="mr-1 size-3.5 text-lime-600" />
                  {mentor.information.buttons[1].text}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
