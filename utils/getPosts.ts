import { format } from 'date-fns';
import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import { slugify } from './slugify';

export async function getPosts() {
  let currentFolder: string;
  const folders = await readdir('./posts', { withFileTypes: true });
  const subFolders = await Promise.all(
    folders.map(folder => {
      currentFolder = folder.name;
      return readdir(`./posts/${folder.name}`, { withFileTypes: true });
    })
  );
  const files = subFolders.flat();
  const posts = await Promise.all(
    files.map(async file => {
      const fileContent = await readFile(
        `posts/${currentFolder}/${file.name}/index.mdx`
      );
      const { data, content } = matter(fileContent);
      return {
        slug: slugify(data.title),
        data: {
          ...data,
          publishedAt: format(new Date(data.publishedAt), 'yyyy-LL-d')
        },
        content
      };
    })
  );
  return posts;
}
