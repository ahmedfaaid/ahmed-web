import { getPosts } from '@/utils/getPosts';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getPosts();
  const posts = allPosts.map(post => {
    return {
      url:
        process.env.NODE_ENV === 'production'
          ? `https://ahmedfaaid.com/blog/${post.slug}`
          : `http://localhost:3000/blog/${post.slug}`,
      lastModified: new Date(post.data.publishedAt)
    };
  });

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
    ...posts,
    {
      url:
        process.env.NODE_ENV === 'production'
          ? 'https://ahmedfaaid.com/projects'
          : 'http://localhost:3000/projects',
      lastModified: new Date()
    },
    {
      url:
        process.env.NODE_ENV === 'production'
          ? 'https://ahmedfaaid.com/about'
          : 'http://localhost:3000/about',
      lastModified: new Date()
    },
    {
      url:
        process.env.NODE_ENV === 'production'
          ? 'https://ahmedfaaid.com/lets-talk'
          : 'http://localhost:3000/lets-talk',
      lastModified: new Date()
    }
  ];
}
