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

export type DiaryEntry = {
  cn: Metadata;
  de: Metadata;
}

function mostRecent(a: Metadata, b: Metadata) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

function metadataMapper(file: App.MdsvexFile): Metadata {
  return (file.metadata as unknown) as Metadata
}

async function getMetadataList(
  modules: Record<string, () => Promise<App.MdsvexFile>>
): Promise<Metadata[]> {
  const result = await Promise.all(Object.values(modules).map(resolve));
  return result
    .map(metadataMapper)
    .sort(mostRecent)
    .map(item => ({
      ...item,
      ...(item.tags ? { tags: item.tags } : { tags: [] }),
    }));
}

async function resolve(resolver: App.MdsvexResolver): Promise<App.MdsvexFile> {
  return await resolver();
}

export async function getResources(): Promise<Metadata[]> {
  const modules = import.meta.glob<boolean, string, App.MdsvexFile>('/src/blogposts/*.svx')
  return getMetadataList(modules)
}

export async function getDiaryEntries(): Promise<DiaryEntry[]> {
  const cnModules = import.meta.glob<boolean, string, App.MdsvexFile>('/src/diary/*_cn.svx')
  const deModules = import.meta.glob<boolean, string, App.MdsvexFile>('/src/diary/*_de.svx')

  const [cnList, deList] = await Promise.all([
    getMetadataList(cnModules),
    getMetadataList(deModules),
  ]);

  return cnList.map((entry, idx) => {
    return {
      cn: entry,
      de: deList[idx],
    }
  })
}
