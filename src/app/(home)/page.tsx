import {
  Community,
  Courses,
  Features,
  Hero,
  Knowledge,
  Teachers,
  Testimonials,
} from "@/app/(home)/_components";

export default function HomePage() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Courses />
        <Teachers />
        <Testimonials />
        <Community />
        <Knowledge />
      </main>
    </>
  );
}
