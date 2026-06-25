"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { HomeData } from "@/services/home.service";

type TeachersProps = Pick<HomeData, "teachers">;

export function Teachers({ teachers }: TeachersProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftState = useRef(0);

  const validTeachers = teachers.teachers.filter(
    (teacher) => teacher.name && teacher.name.trim() !== "",
  );

  const totalDots = Math.ceil(validTeachers.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(3);
      } else if (width >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const pageIndex = Math.round(scrollLeft / containerWidth);
      if (pageIndex >= 0 && pageIndex < totalDots) {
        setActiveIndex(pageIndex);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [totalDots]);

  const scrollToPage = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    container.scrollTo({
      left: index * containerWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDown.current = true;
    container.style.scrollSnapType = "none";
    container.style.cursor = "grabbing";
    startX.current = e.pageX - container.offsetLeft;
    scrollLeftState.current = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!isDown.current) return;
    isDown.current = false;
    const container = scrollContainerRef.current;
    if (!container) return;
    container.style.scrollSnapType = "x mandatory";
    container.style.cursor = "grab";

    const containerWidth = container.clientWidth;
    const currentScroll = container.scrollLeft;
    const targetIndex = Math.round(currentScroll / containerWidth);
    scrollToPage(targetIndex);
  };

  const handleMouseUp = () => {
    if (!isDown.current) return;
    isDown.current = false;
    const container = scrollContainerRef.current;
    if (!container) return;
    container.style.scrollSnapType = "x mandatory";
    container.style.cursor = "grab";

    const containerWidth = container.clientWidth;
    const currentScroll = container.scrollLeft;
    const targetIndex = Math.round(currentScroll / containerWidth);
    scrollToPage(targetIndex);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeftState.current - walk;
  };

  return (
    <section className="w-full bg-[#fcfdfd] py-12 md:py-16 select-none overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 lg:gap-4 sm:flex-row sm:justify-between border-b border-gray-100 pb-5">
          <h2 className="text-[26px] sm:text-3xl font-extrabold text-gray-900 uppercase text-center lg:text-left">
            {teachers.title.text_1}{" "}
            <span className="text-fuchsia-700">{teachers.title.text_2}</span>
          </h2>

          <Button className="inline-flex gap-1 text-sm font-black text-gray-800 uppercase transition-all">
            XEM TẤT CẢ GIẢNG VIÊN
            <ArrowRight className="size-3.5" />
          </Button>
        </div>

        <div className="relative mt-8">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 md:flex-nowrap cursor-grab active:cursor-grabbing"
            style={{ WebkitUserSelect: "none", userSelect: "none" }}
          >
            {validTeachers.map((teacher, index) => (
              <div
                key={index}
                className="w-full shrink-0 snap-center flex items-start gap-5 rounded-2xl border border-gray-100/80 bg-white p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] pointer-events-none"
              >
                <div className="relative size-24 shrink-0 overflow-hidden rounded-full bg-gray-50 md:size-28">
                  <Image
                    src={teacher.avatar}
                    alt={teacher.name}
                    fill
                    sizes="(max-w-768px) 96px, 112px"
                    draggable={false}
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="text-base font-extrabold text-gray-950 uppercase">
                    {teacher.name}
                  </h3>

                  <p className="text-sm font-semibold text-gray-600">
                    {teacher.role}
                  </p>

                  <ul className="pt-2 space-y-1.5">
                    {teacher.experiences &&
                      teacher.experiences
                        .split("\n")
                        .filter((item) => item.trim() !== "")
                        .map((item, idx) => (
                          <li
                            key={idx}
                            className="relative pl-3 text-xs font-medium text-gray-700 before:absolute before:left-0 before:top-1.75 before:size-1 before:rounded-full before:bg-gray-400"
                          >
                            {item}
                          </li>
                        ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-4 bg-fuchsia-700" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
