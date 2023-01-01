import type { PageLoad } from './$types';
import { pathToSlug } from '$lib/utils/slug';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async({ params }) => {
  const modules = import.meta.glob<boolean, string, App.MdsvexFile>('/src/blogposts/*.svx')

  const item = Object.entries(modules).find(([path, _]) => params.slug === pathToSlug(path))
  if (!item) { throw error(404) }

  const post = await item[1]()
  if (!post) { throw error(404) }

  return { component: post.default, meta: post.metadata }
}
