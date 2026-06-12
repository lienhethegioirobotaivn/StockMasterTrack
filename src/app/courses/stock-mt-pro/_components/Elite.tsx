"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { StockMTProData } from "@/services/courses/stockmtpro.service";

type EliteProps = Pick<StockMTProData, "elite">;

export function Elite({ elite }: EliteProps) {
  const validImages = elite.images.filter((image) => image.trim() !== "");

  const images =
    validImages.length > 0
      ? [validImages[validImages.length - 1], ...validImages, ...validImages]
      : [];

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;

    const transitionEnd = setTimeout(() => {
      setIsTransitioning(false);

      if (currentIndex === 0) {
        setCurrentIndex(validImages.length);
      } else if (currentIndex === validImages.length + 1) {
        setCurrentIndex(1);
      }
    }, 500);

    return () => clearTimeout(transitionEnd);
  }, [currentIndex, isTransitioning]);

  return (
    <section className="bg-[#060606] py-12 font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-2xl border border-white/5 bg-[#0e0e11] p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 flex flex-col justify-between h-full py-2 text-center lg:text-left">
              <div>
                <h2 className="text-xl sm:text-3xl lg:text-2xl font-bold text-white uppercase">
                  {elite.title}
                </h2>
                <p className="mt-4 text-sm sm:text-base lg:text-sm leading-relaxed text-neutral-400 font-medium max-w-sm mx-auto lg:mx-0">
                  {elite.sub_title}
                </p>
              </div>

              <div className="mt-6">
                <Button className="h-10 rounded-lg bg-linear-to-br from-[#E1BB70] to-[#C3944E] px-6 text-sm font-bold text-black uppercase hover:opacity-90 transition-all">
                  <Link
                    href={elite.button.endpoint}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {elite.button.text}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-8 relative px-4">
              <div className="overflow-hidden">
                <div
                  className={`flex [--slide-width:100%] lg:[--slide-width:33.333333%] ${
                    isTransitioning
                      ? "transition-transform duration-500 ease-in-out"
                      : "transition-none"
                  }`}
                  style={{
                    transform: `translateX(calc(-${currentIndex} * var(--slide-width)))`,
                  }}
                >
                  {images.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full shrink-0 px-2 lg:w-1/3"
                      >
                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-white/5 bg-[#141419]">
                          <Image
                            src={image}
                            alt={`Elite Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full border border-[#C3944E]/40 bg-[#0e0e11] text-[#C3944E] hover:bg-[#C3944E]/10 transition-all z-10"
              >
                <ChevronLeft className="size-4" />
              </Button>

              <Button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full border border-[#C3944E]/40 bg-[#0e0e11] text-[#C3944E] hover:bg-[#C3944E]/10 transition-all z-10"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
