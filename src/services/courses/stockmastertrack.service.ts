import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface StockMasterTrackCourseData {
  hero: {
    background_image: string;
    tag: string;
    title: {
      text_1: string;
      text_2: string;
    };
    sub_title: string;
    description: string;
    content: string;
    buttons: {
      text: string;
      endpoint: string;
    }[];
    stats: {
      icon: string;
      text_1: string;
      text_2: string;
    }[];
  };
  curriculum: {
    title: {
      text_1: string;
      text_2: string;
    };
    description: string;
    content: {
      icon: string;
      title: string;
      description: string;
    }[];
    bonus: {
      image: string;
      title: string;
      content: string;
    };
  };
  mentor: {
    title: {
      text_1: string;
      text_2: string;
    };
    teacher: {
      avatar: string;
      name: string;
      role: string;
      experience: string;
      quote: string;
    };
    information: {
      title: string;
      stats: {
        icon: string;
        title: string;
        description: string;
      }[];
      tuition: {
        icon: string;
        title: string;
        content: string;
        description: string;
      };
      buttons: {
        text: string;
        endpoint: string;
      }[];
    };
  };
  testimonials: {
    title: {
      text_1: string;
      text_2: string;
      text_3: string;
    };
    students: {
      avatar: string;
      name: string;
      role: string;
      content: string;
    }[];
  };
  bottomcta: {
    text_1: string;
    text_2: string;
    buttons: {
      text: string;
      endpoint: string;
    }[];
  };
}

const SLUG = "stock-mastertrack-course";

export const StockMasterTrackCourseService = {
  async getData(): Promise<StockMasterTrackCourseData | null> {
    const data = await getACFDataBySlug<StockMasterTrackCourseData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      hero: {
        ...data.hero,
        buttons: Object.values(data.hero?.buttons || {}),
        stats: Object.values(data.hero?.stats || {}),
      },
      curriculum: {
        ...data.curriculum,
        content: Object.values(data.curriculum?.content || {}),
      },
      mentor: {
        ...data.mentor,
        information: {
          ...data.mentor.information,
          stats: Object.values(data.mentor.information.stats || {}),
          buttons: Object.values(data.mentor.information.buttons || {}),
        },
      },
      testimonials: {
        ...data.testimonials,
        students: Object.values(data.testimonials?.students || {}),
      },
      bottomcta: {
        ...data.bottomcta,
        buttons: Object.values(data.bottomcta?.buttons || {}),
      },
    };
  },
};
