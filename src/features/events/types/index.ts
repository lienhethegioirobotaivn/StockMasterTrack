export interface Event {
  id: string;
  databaseId: number;
  title: string;
  excerpt: string;
  image?: {
    url: string;
    alt: string;
  };
  date: string;
  time: string;
  location: string;
  slots: string;
  price: string;
}
