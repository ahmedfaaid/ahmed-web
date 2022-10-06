export interface BlogProps {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  image: {
    path: string;
    creator: string;
    externalLink: string;
  };
  published?: boolean;
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}
