export type KnowledgeArticle = {
  id: string;
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  content?: string;

  readingTime: string | null;

  category: {
    name: string;
    slug: string;
  } | null;

  image: {
    url: string;
    alt: string;
  } | null;

  author: {
    name: string;
    role: string | null;

    avatar: {
      url: string;
      alt: string;
    } | null;
  } | null;
};
