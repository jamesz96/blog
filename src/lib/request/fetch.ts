import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const basePath = path.join(process.cwd(), 'src', 'blogposts')

export interface Metadata {
  title: string;
  date: string;
  desc: string;
  tags: string[];
  demo: string;
  source: string;
  layout: string;
  // stack: string[][];
  slug: string;
  draft: boolean;
  type: string;
}

function mostRecent(a: Metadata, b: Metadata) {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}
async function readFile(file: string) {
  const postContent = await fs.promises.readFile(`${basePath}/${file}`, { encoding: "utf8" });
  return { ...matter(postContent).data as Metadata };
}

export async function getResources(): Promise<Metadata[]> {
  const files: string[]= await fs.promises.readdir(basePath)
  const result = await Promise.all(files.map(readFile))
  return result.sort(mostRecent)
}
