import {
  BottomCTA,
  Curriculum,
  Hero,
  Mentor,
  Testimonials,
} from "@/app/courses/stock-mastertrack/_components";
import { StockMasterTrackCourseService } from "@/services/courses/stockmastertrack.service";

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
