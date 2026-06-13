import {
  Hero,
  UpcomingEvents,
  EventTypes,
  PastEvents,
  BottomCTA,
} from "@/app/events/_components";
import { getPastEvents, getUpcomingEvents } from "@/features/events/api";
import { createPageMetadata } from "@/lib/metadata";
import { EventsService } from "@/services/events.service";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Sự kiện",
  description: "Cập nhật sự kiện - Kết nối — Học hỏi — Bứt phá",
  path: "/events",
  ogImage: "/events/hero.jpg",
});

export default async function EventsPage() {
  const pageData = await EventsService.getData();
  if (!pageData) return null;

  const [pastEvents, upcomingEvents] = await Promise.all([
    getPastEvents(4),
    getUpcomingEvents(3),
  ]);

  return (
    <main className="overflow-hidden">
      <Hero hero={pageData.hero} />
      <UpcomingEvents upcomingEvents={upcomingEvents} />
      <EventTypes event_types={pageData.event_types} />
      <PastEvents pastEvents={pastEvents} />
      <BottomCTA bottom_cta={pageData.bottom_cta} />
    </main>
  );
}
