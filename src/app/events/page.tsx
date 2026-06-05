import {
  Hero,
  UpcomingEvents,
  EventTypes,
  PastEvents,
  BottomCTA,
} from "@/app/events/_components";

export default async function EventsPage() {
  //   const pageData = await EventsService.getData();
  //   if (!pageData) return null;

  return (
    <main className="overflow-hidden">
      <Hero />
      <UpcomingEvents />
      <EventTypes />
      <PastEvents />
      <BottomCTA />
    </main>
  );
}
