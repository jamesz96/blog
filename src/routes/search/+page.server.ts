import { building, dev } from '$app/environment';
import { buildIndices } from '$services/algolia';
import type { PageServerLoad } from './$types';

if (building && !dev) {
  buildIndices()
}

export const load = (async ({ fetch }) => {
  const response = await (await fetch(`/api/posts`)).json()
  return {
    posts: response.body
  }
}) satisfies PageServerLoad
