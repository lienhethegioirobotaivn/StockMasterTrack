"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { StockMasterTrackCourseData } from "@/services/courses/stockmastertrack.service";

type TestimonialsProps = Pick<StockMasterTrackCourseData, "testimonials">;

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMd, setIsMd] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftState = useRef(0);

  const validStudents = testimonials.students.filter(
    (student) => student.name && student.name.trim() !== "",
  );

  const totalDots = Math.ceil(validStudents.length / 3);

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsMd(window.innerWidth >= 768);
    };
    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;

      if (window.innerWidth >= 768) {
        const pageIndex = Math.round(scrollLeft / containerWidth);
        if (pageIndex >= 0 && pageIndex < totalDots) {
          setActiveIndex(pageIndex);
        }
      } else {
        const itemIndex = Math.round(scrollLeft / containerWidth);
        if (itemIndex >= 0 && itemIndex < validStudents.length) {
          setActiveIndex(itemIndex);
        }
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [totalDots, validStudents]);

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
    <section className="bg-white py-12 px-6 lg:px-12 font-sans overflow-hidden select-none">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-[26px] sm:text-3xl lg:text-[34px] font-extrabold text-gray-900 uppercase leading-tight pointer-events-none">
          {testimonials.title.text_1}
          <br />
          <span className="text-lime-600">
            {testimonials.title.text_2}
          </span>{" "}
          <span className="text-fuchsia-700">{testimonials.title.text_3}</span>
        </h2>

        <div className="relative mt-6">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 md:flex-nowrap md:overflow-x-auto md:snap-x md:snap-mandatory cursor-grab active:cursor-grabbing"
            style={{ WebkitUserSelect: "none", userSelect: "none" }}
          >
            {validStudents &&
              validStudents.map((item, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 snap-center rounded-2xl border border-gray-100 bg-white p-6 shadow-xs flex flex-col justify-between md:w-[calc(33.333%-11px)] pointer-events-none"
                >
                  <div>
                    <Quote className="size-5 rotate-180 text-lime-600/40 mb-3" />
                    <p className="text-[15px] font-medium leading-relaxed text-gray-600">
                      {item.content}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative size-10 shrink-0 overflow-hidden rounded-full border border-gray-100">
                      {item.avatar && (
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          draggable={false}
                          className="object-cover"
                        />
                      )}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm font-medium text-gray-400 mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {isMd
            ? Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-4 bg-lime-600"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))
            : validStudents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-4 bg-lime-600"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
