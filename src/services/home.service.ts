import { getACFDataBySlug } from "@/lib/wp-rest-api";

export interface HomeData {
  hero: {
    background_image: string;
    title: {
      text_1: string;
      text_2: string;
      text_3: string;
    };
    description: string;
    buttons: {
      text: string;
      endpoint: string;
    }[];
    stats: {
      icon: string;
      text_1: string;
      text_2: string;
    }[];
    highlights: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  features: {
    title: {
      text_1: string;
      text_2: string;
      text_3: string;
    };
    features: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  courses: {
    tag: string;
    title: string;
    description: string;
    content: string;
    tuition: string;
    modules: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  teachers: {
    title: {
      text_1: string;
      text_2: string;
    };
    teachers: {
      avatar: string;
      name: string;
      role: string;
      experiences: string;
    }[];
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
  community: {
    tag: string;
    title: string;
    description: string;
    button: {
      text: string;
      endpoint: string;
    };
    image_1: string;
    image_2: string;
    image_3: string;
  };
  knowledge: {
    title: string;
  };
}

const SLUG = "home";

export const HomeService = {
  async getData(): Promise<HomeData | null> {
    const data = await getACFDataBySlug<HomeData>(SLUG);

    if (!data) return null;

    return {
      ...data,
      hero: {
        ...data.hero,
        buttons: Object.values(data.hero?.buttons || {}),
        stats: Object.values(data.hero?.stats || {}),
        highlights: Object.values(data.hero?.highlights || {}),
      },
      features: {
        ...data.features,
        features: Object.values(data.features?.features || {}),
      },
      courses: {
        ...data.courses,
        modules: Object.values(data.courses?.modules || {}),
      },
      teachers: {
        ...data.teachers,
        teachers: Object.values(data.teachers?.teachers || {}),
      },
      testimonials: {
        ...data.testimonials,
        students: Object.values(data.testimonials?.students || {}),
      },
    };
  },
};
