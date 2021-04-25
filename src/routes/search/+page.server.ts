import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
  const response = await (await fetch(`/api/posts`)).json()
  return {
    posts: response.body
  }
}) satisfies PageServerLoad
