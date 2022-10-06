import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from 'contentlayer/source-files';

import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { slugify } from './utils/slugify';

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    path: { type: 'string', description: 'Featured image url', required: true },
    creator: {
      type: 'string',
      description: 'Creator of the featured image',
      required: true
    },
    externalLink: {
      type: 'string',
      description: 'Featured image on external hosting website',
      required: true
    }
  }
}));

const EmbeddedImagesLocal = defineNestedType(() => ({
  name: 'EmbeddedImagesLocal',
  fields: {
    paths: {
      type: 'list',
      of: { type: 'string' }
    }
  }
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'A title for the post',
      required: true
    },
    description: {
      type: 'string',
      description: 'A description of the post',
      required: true
    },
    image: {
      type: 'nested',
      of: Image,
      required: true
    },
    publishedAt: {
      type: 'string',
      description: 'Publish date for the post',
      required: true
    },
    published: {
      type: 'boolean',
      description: 'Is page published or just a draft',
      required: true
    },
    embeddedImagesLocal: {
      type: 'nested',
      of: EmbeddedImagesLocal
    }
  },
  computedFields: {
    readingTime: {
      type: 'json',
      resolve: (doc: any) => readingTime(doc.body.raw)
    },
    wordCount: {
      type: 'number',
      resolve: (doc: any) => doc.body.raw.split(/\s+/gu).length
    },
    slug: {
      type: 'string',
      resolve: (doc: any) => slugify(doc.title)
    }
  }
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
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

export default contentLayerConfig;
