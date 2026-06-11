import {
  Hero,
  UpcomingEvents,
  EventTypes,
  PastEvents,
  BottomCTA,
} from "@/app/events/_components";
import { getPastEvents } from "@/features/events/api";
import { mapEvent } from "@/features/events/utils";

export default async function EventsPage() {
  //   const pageData = await EventsService.getData();
  //   if (!pageData) return null;

  const [pastEvents] = await Promise.all([getPastEvents(4)]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <UpcomingEvents />
      <EventTypes />
      <PastEvents pastEvents={pastEvents} />
      <BottomCTA />
    </main>
  );
}
