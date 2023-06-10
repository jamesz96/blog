import type { PageServerLoad } from './$types';

const POST_LIMIT = 3

export const load = (async ({ fetch }) => {
  const response = await (await fetch(`/api/posts?limit=${POST_LIMIT}`)).json()
  return {
    posts: response.body
  }
}) satisfies PageServerLoad
