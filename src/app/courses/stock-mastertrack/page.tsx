import {
  BottomCTA,
  Curriculum,
  Hero,
  Mentor,
  Testimonials,
} from "@/app/courses/stock-mastertrack/_components";
import { createPageMetadata } from "@/lib/metadata";
import { StockMasterTrackCourseService } from "@/services/courses/stockmastertrack.service";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Khóa học Stock MasterTrack",
  description: "Stock MasterTrack - Nền tảng đầu tư bài bản – Tư duy vững chắc",
  path: "/courses/stock-mastertrack",
  ogImage: "/home/hero.jpg",
});

export default async function StockMasterTrackPage() {
  const pageData = await StockMasterTrackCourseService.getData();
  if (!pageData) return null;

  return (
    <main className="bg-white">
      <Hero hero={pageData.hero} />
      <Curriculum curriculum={pageData.curriculum} />
      <Mentor mentor={pageData.mentor} />
      <Testimonials testimonials={pageData.testimonials} />
      <BottomCTA bottomcta={pageData.bottomcta} />
    </main>
  );
}
