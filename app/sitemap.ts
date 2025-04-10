import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:
        process.env.NODE_ENV === 'production'
          ? 'https://ahmedfaaid.com'
          : 'http://localhost:3000',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url:
        process.env.NODE_ENV === 'production'
          ? 'https://ahmedfaaid.com/blog'
          : 'http://localhost:3000/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url:
        process.env.NODE_ENV === 'production'
          ? 'https://ahmedfaaid.com/projects'
          : 'http://localhost:3000/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7
    },
    {
      url:
        process.env.NODE_ENV === 'production'
          ? 'https://ahmedfaaid.com/about'
          : 'http://localhost:3000/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url:
        process.env.NODE_ENV === 'production'
          ? 'https://ahmedfaaid.com/lets-talk'
          : 'http://localhost:3000/lets-talk',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7
    }
  ];
}
