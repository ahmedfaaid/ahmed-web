import { MdxData } from '@/types';
import { slugify } from '@/utils/slugify';
import { format } from 'date-fns';
import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

const POSTS_PATH = path.join(process.cwd(), 'posts');

export async function getPosts({ searchTerm }: { searchTerm?: string } = {}) {
  let currentFolder: string;
  const folders = await readdir(POSTS_PATH, { withFileTypes: true });
  const subFolders = await Promise.all(
    folders.map(folder => {
      currentFolder = folder.name;
      return readdir(`${POSTS_PATH}/${folder.name}`, { withFileTypes: true });
    })
  );
  const files = subFolders.flat();
  let posts = await Promise.all(
    files.map(async file => {
      const fileContent = await readFile(
        `${POSTS_PATH}/${currentFolder}/${file.name}/index.mdx`
      );
      const { data, content } = matter(fileContent);
      return {
        slug: slugify(data.title),
        data: {
          ...data,
          publishedAt: format(new Date(data.publishedAt), 'yyyy-LL-d')
        } as MdxData,
        content
      };
    })
  );
  if (searchTerm && searchTerm.trim() !== '') {
    posts = posts.filter(post => {
      const { data, content, slug } = post;
      const search = searchTerm.toLowerCase();
      return (
        data.title.toLowerCase().includes(search) ||
        data.description.toLowerCase().includes(search) ||
        content.toLowerCase().includes(search) ||
        slug.toLowerCase().includes(search)
      );
    });
  }
  return posts;
}
