export interface Post {
  title: string;
  description: string;
  slug: string;
  body?: {
    raw: string;
    code: string;
  };
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

export interface Project {
  id: string;
  name: string;
  image: string;
  description: string;
  deployed: string;
  github: string;
}
