import { GetEventsQuery } from "@/graphql/__generated__/graphql";
import { Event } from "@/features/events/types";

type RawEvent = NonNullable<
  NonNullable<GetEventsQuery["events"]>["nodes"]
>[number];

export function mapEvent(event: RawEvent): Event {
  return {
    id: event.id,
    databaseId: event.databaseId,
    title: event.title ?? "",
    excerpt: event.excerpt ?? "",
    image: event.featuredImage?.node
      ? {
          url: event.featuredImage.node.sourceUrl ?? "",
          alt: event.featuredImage.node.altText ?? "",
        }
      : undefined,
    date: event.eventsFields?.date ?? "",
    time: event.eventsFields?.time ?? "",
    location: event.eventsFields?.location ?? "",
    slots: event.eventsFields?.slots ?? "",
    price: event.eventsFields?.price ?? "",
  };
}
