import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface CommunityData {
  hero: {
    background_image: string;
    tag: string;
    title: {
      text_1: string;
      text_2: string;
      text_3: string;
    };
    description: string;
    content: string;
    stats: {
      icon: string;
      text_1: string;
      text_2: string;
    }[];
  };
  community_content: {
    title: string;
    stats: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  backup_channels: {
    title: string;
    description: string;
    channels: {
      icon: string;
      title: string;
      description: string;
      button: {
        text: string;
        endpoint: string;
      };
      color: string;
      background_color: string;
    }[];
  };
  testimonials: {
    title: string;
    members: {
      avatar: string;
      name: string;
      role: string;
      content: string;
    }[];
  };
}

const SLUG = "community";

export const CommunityService = {
  async getData(): Promise<CommunityData | null> {
    const data = await getACFDataBySlug<CommunityData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      hero: {
        ...data.hero,
        stats: Object.values(data.hero?.stats || {}),
      },
      community_content: {
        ...data.community_content,
        stats: Object.values(data.community_content?.stats || {}),
      },
      backup_channels: {
        ...data.backup_channels,
        channels: Object.values(data.backup_channels?.channels || {}),
      },
      testimonials: {
        ...data.testimonials,
        members: Object.values(data.testimonials?.members || {}),
      },
    };
  },
};
