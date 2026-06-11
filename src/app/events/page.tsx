import {
  Hero,
  UpcomingEvents,
  EventTypes,
  PastEvents,
  BottomCTA,
} from "@/app/events/_components";
import { getPastEvents, getUpcomingEvents } from "@/features/events/api";

export default async function EventsPage() {
  //   const pageData = await EventsService.getData();
  //   if (!pageData) return null;

  const [pastEvents, upcomingEvents] = await Promise.all([
    getPastEvents(4),
    getUpcomingEvents(3),
  ]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <UpcomingEvents upcomingEvents={upcomingEvents} />
      <EventTypes />
      <PastEvents pastEvents={pastEvents} />
      <BottomCTA />
    </main>
  );
}
