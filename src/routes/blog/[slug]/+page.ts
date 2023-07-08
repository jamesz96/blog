import type { PageLoad } from './$types';
import { pathToSlug } from '$lib/utils/slug';
import { error } from '@sveltejs/kit';

type HandlerMap = { [slug: string]: () => Promise<App.MdsvexFile> }

export const load: PageLoad = async ({ params }) => {
  const modules = import.meta.glob<boolean, string, App.MdsvexFile>('/src/blogposts/*.svx');
  const handlerMap = Object.entries(modules).reduce<HandlerMap>((acc, [path, handler]) => {
    return { ...acc, [pathToSlug(path)]: handler }
  }, {})

  const handle = handlerMap[params.slug]
  if (!handle) {
    throw error(404);
  }

  const post = await handle();
  if (!post) {
    throw error(404);
  }

  return { component: post.default, meta: post.metadata };
};
