/** @type {import('next').NextConfig} */

import createMdx from '@next/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const withMDX = createMdx({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
});

const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
});
export default nextConfig;
