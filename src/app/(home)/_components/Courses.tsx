"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseRegisterDialog } from "@/components/layout/dialog";
import { HomeData } from "@/services/home.service";
import { LucideIcon } from "@/components/lucide-icon";

type CoursesProps = Pick<HomeData, "courses">;

export function Courses({ courses }: CoursesProps) {
  return (
    <section className="w-full bg-[#f4fbf7] py-12 lg:mb-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-12">
          <div className="flex flex-col justify-between h-full xl:col-span-4 xl:sticky xl:top-6">
            <div>
              <p className="text-[11px] font-bold tracking-wider text-lime-600 uppercase">
                {courses.tag}
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-gray-900 whitespace-pre-wrap">
                {courses.title}
              </h2>

              <p className="mt-4 text-sm font-medium text-gray-500">
                {courses.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {courses.content &&
                  courses.content
                    .split("\n")
                    .filter((item) => item.trim() !== "")
                    .map((item, index) => (
                      <li key={index} className="flex items-center gap-2.5">
                        <CheckCircle2 className="size-4 shrink-0 text-lime-600" />
                        <span className="text-sm font-medium text-gray-600">
                          {item.trim()}
                        </span>
                      </li>
                    ))}
              </ul>
            </div>

            <div className="mt-10 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <p className="text-[12px] font-bold text-gray-900 tracking-wider">
                HỌC PHÍ
              </p>
              <div className="mt-1 flex items-center justify-between gap-4">
                <p className="text-xl font-black tracking-tight text-fuchsia-700">
                  {courses.tuition}
                </p>
                <CourseRegisterDialog>
                  <Button className="h-9 rounded-lg bg-lime-600 px-4 text-xs font-bold text-white hover:bg-lime-700 gap-1.5">
                    ĐĂNG KÝ NGAY
                    <ArrowRight className="size-3.5" />
                  </Button>
                </CourseRegisterDialog>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 xl:col-span-8 xl:grid-cols-4">
            {courses.modules.map((item, index) => {
              const moduleNumber = String(index + 1).padStart(2, "0");
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-xl bg-white p-5 shadow-sm relative overflow-hidden"
                >
                  <div>
                    <p className="text-xl font-black text-lime-500 leading-none">
                      {moduleNumber}
                    </p>

                    <h3 className="mt-3.5 text-base lg:text-[13px] font-extrabold text-gray-900 leading-snug uppercase">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm lg:text-[11.5px] font-medium text-gray-400 line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <LucideIcon
                      name={item.icon}
                      className="size-5 text-lime-600 stroke-[1.5]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
