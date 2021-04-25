import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
  const response = await (await fetch(`/api/posts?limit=2`)).json()
  return {
    posts: response.body
  }
}) satisfies PageServerLoad
