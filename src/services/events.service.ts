import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface EventsData {
  hero: {
    background_image: string;
    tag: string;
    title: string;
    sub_title: {
      text_1: string;
      text_2: string;
      text_3: string;
    };
    description: string;
    stats: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  event_types: {
    title: string;
    stats: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  bottom_cta: {
    text_1: string;
    text_2: string;
  };
}

const SLUG = "events";

export const EventsService = {
  async getData(): Promise<EventsData | null> {
    const data = await getACFDataBySlug<EventsData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      hero: {
        ...data.hero,
        stats: Object.values(data.hero?.stats || {}),
      },
      event_types: {
        ...data.event_types,
        stats: Object.values(data.event_types?.stats || {}),
      },
    };
  },
};
