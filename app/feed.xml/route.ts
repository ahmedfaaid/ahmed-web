import { getPosts } from '@/utils/getPosts';
import RSS from 'rss';
import { metadata } from '../layout';

export async function GET() {
  const allPosts = await getPosts();

  const feed = new RSS({
    title: metadata.title as string,
    description: metadata.description as string,
    site_url:
      process.env.NODE_ENV === 'production'
        ? 'https://ahmedfaaid.com'
        : 'http://localhost:3000',
    feed_url:
      process.env.NODE_ENV === 'production'
        ? 'https://ahmedfaaid.com/feed.xml'
        : 'http://localhost:3000/feed.xml',
    copyright: `Copyright © ${new Date().getFullYear()} Ahmed Faaid`,
    language: 'en',
    pubDate: new Date(),
    managingEditor: 'ahmedfaaid.coding@gmail.com (Ahmed Faaid)',
    webMaster: 'ahmedfaaid.coding@gmail.com (Ahmed Faaid)'
  });

  allPosts.forEach(post => {
    feed.item({
      title: post.data.title,
      guid:
        process.env.NODE_ENV === 'production'
          ? `https://ahmedfaaid.com/blog/${post.slug}`
          : `http://localhost:3000/blog/${post.slug}`,
      url:
        process.env.NODE_ENV === 'production'
          ? `https://ahmedfaaid.com/blog/${post.slug}`
          : `http://localhost:3000/blog/${post.slug}`,
      date: new Date(post.data.publishedAt),
      description: post.data.description,
      author: 'Ahmed Faaid'
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
}
