export interface Image {
  path: string;
  creator: string;
  externalLink: string;
}

export interface Project {
  id: string;
  name: string;
  image: string;
  description: string;
  deployed: string;
  github: string;
}

export interface EmbeddedImagesLocal {
  paths: string[];
}

export interface MdxData {
  title: string;
  description: string;
  image: Image;
  embeddedImagesLocal: EmbeddedImagesLocal;
  publishedAt: string;
  published: boolean;
}

export interface BlogPost {
  slug: string;
  data: MdxData;
  content: string;
}
