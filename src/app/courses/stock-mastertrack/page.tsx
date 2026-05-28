import {
  BottomCTA,
  Curriculum,
  Hero,
  Mentor,
  Testimonials,
} from "@/app/courses/stock-mastertrack/_components";

export default function StockMasterTrackPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Curriculum />
      <Mentor />
      <Testimonials />
      <BottomCTA />
    </main>
  );
}
