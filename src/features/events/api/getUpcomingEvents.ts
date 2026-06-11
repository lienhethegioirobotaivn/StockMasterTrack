import { graphqlFetch } from "@/lib/graphql-client";
import { GetEventsDocument } from "@/graphql/__generated__/graphql";
import { mapEvent } from "@/features/events/utils";

export async function getUpcomingEvents(first = 3) {
  const data = await graphqlFetch(GetEventsDocument, {
    first,
  });

  const now = new Date();

  return (
    data.events?.nodes
      ?.filter((event) => {
        const date = event?.eventsFields?.date;

        if (!date) return false;

        return new Date(date) >= now;
      })
      .sort(
        (a, b) =>
          new Date(a?.eventsFields?.date ?? "").getTime() -
          new Date(b?.eventsFields?.date ?? "").getTime(),
      )
      .slice(0, first)
      .map(mapEvent) ?? []
  );
}
