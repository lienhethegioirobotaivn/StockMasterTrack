import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface StockMTProData {
  hero: {
    background_image: string;
    tag: string;
    title: {
      text_1: string;
      text_2: string;
    };
    sub_title: string;
    description: string;
    stats: {
      icon: string;
      text: string;
    }[];
    buttons: {
      button_1: {
        text: string;
        endpoint: string;
      };
      button_2: {
        text: string;
        endpoint: string;
      };
    };
  };
  why_choose: {
    title: string;
    stats: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  for_who: {
    left: {
      title: string;
      content: string;
    };
    right: {
      title: string;
      pricing: {
        price: string;
        period: string;
      };
      note: string;
      stats: {
        icon: string;
        text: string;
      }[];
      register_button: {
        text_1: string;
        text_2: string;
      };
      note_2: {
        icon: string;
        text: string;
      };
    };
  };
  program_content: {
    title: string;
    top: {
      stats: {
        icon: string;
        title: string;
        content: string;
      }[];
    };
    bottom: {
      stats: {
        icon: string;
        title: string;
        description: string;
      }[];
    };
  };
  requirements: {
    title: string;
    stats: {
      icon: string;
      text: string;
    }[];
  };
  elite: {
    title: string;
    sub_title: string;
    button: {
      text: string;
      endpoint: string;
    };
    images: string[];
  };
}

const SLUG = "stock-mt-pro-course";

export const StockMTProService = {
  async getData(): Promise<StockMTProData | null> {
    const data = await getACFDataBySlug<StockMTProData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      hero: {
        ...data.hero,
        stats: Object.values(data.hero?.stats || {}),
      },
      why_choose: {
        ...data.why_choose,
        stats: Object.values(data.why_choose?.stats || {}),
      },
      for_who: {
        ...data.for_who,
        right: {
          ...data.for_who.right,
          stats: Object.values(data.for_who.right.stats || {}),
        },
      },
      program_content: {
        ...data.program_content,
        top: {
          ...data.program_content.top,
          stats: Object.values(data.program_content.top.stats || {}),
        },
        bottom: {
          ...data.program_content.bottom,
          stats: Object.values(data.program_content.bottom.stats || {}),
        },
      },
      requirements: {
        ...data.requirements,
        stats: Object.values(data.requirements?.stats || {}),
      },
      elite: {
        ...data.elite,
        images: Object.values(data.elite?.images || {}),
      },
    };
  },
};
