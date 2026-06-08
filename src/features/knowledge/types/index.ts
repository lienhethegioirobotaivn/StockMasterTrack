export type KnowledgeArticle = {
  id: string;
  databaseId: number;
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

  views: number;
  viewsFormatted: string;
};

export interface KnowledgeCategory {
  name: string;
  slug: string;
  icon: string;
  count: number;
  countFormatted: string;
  views?: number;
}
