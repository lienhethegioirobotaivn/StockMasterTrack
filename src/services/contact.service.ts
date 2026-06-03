import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface ContactData {
  hero: {
    background_image: string;
    tag: string;
    title: {
      text_1: string;
      text_2: string;
      text_3: string;
    };
    description: string;
    stats: {
      icon: string;
      text_1: string;
      text_2: string;
    }[];
  };
  contact_section: {
    right_section: {
      title: string;
      address: string;
      hotline: string;
      email: string;
      fanpage: string;
      working_hours: string;
      contact: {
        facebook: string;
        youtube: string;
        zalo: string;
        telegram: string;
      };
    };
  };
  map: string;
  why_choose: {
    title: string;
    reasons: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  faq: {
    title: string;
    qna: {
      question: string;
      answer: string;
    }[];
  };
}

const SLUG = "contact";

export const ContactService = {
  async getData(): Promise<ContactData | null> {
    const data = await getACFDataBySlug<ContactData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      hero: {
        ...data.hero,
        stats: Object.values(data.hero?.stats || {}),
      },
      why_choose: {
        ...data.why_choose,
        reasons: Object.values(data.why_choose?.reasons || {}),
      },
      faq: {
        ...data.faq,
        qna: Object.values(data.faq?.qna || {}),
      },
    };
  },
};
