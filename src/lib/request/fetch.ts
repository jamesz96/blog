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

async function resolve(resolver: App.MdsvexResolver): Promise<App.MdsvexFile> {
  return await resolver()
}

export async function getResources(): Promise<Metadata[]> {
  const modules = import.meta.glob<boolean, string, App.MdsvexFile>('/src/blogposts/*.svx')
  const result = await Promise.all(Object.values(modules).map(resolve))
  return result.map(item => item.metadata as unknown as Metadata).sort(mostRecent)
}
