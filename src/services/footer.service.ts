import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface FooterData {
  column_1: {
    image: string;
    text: string;
    facebook: string;
    youtube: string;
    zalo: string;
    tiktok: string;
  };
  column_2: {
    title: string;
    links: {
      text: string;
      endpoint: string;
    }[];
  };
  column_3: {
    title: string;
    links: {
      text: string;
      endpoint: string;
    }[];
  };
  column_4: {
    title: string;
    email: string;
    phone: string;
    address: string;
  };
  column_5: {
    title: string;
    text: string;
  };
}

const SLUG = "footer";

export const FooterService = {
  async getData(): Promise<FooterData | null> {
    const data = await getACFDataBySlug<FooterData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      column_2: {
        ...data.column_2,
        links: Object.values(data.column_2?.links || {}),
      },
      column_3: {
        ...data.column_3,
        links: Object.values(data.column_3?.links || {}),
      },
    };
  },
};
