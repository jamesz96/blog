import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
  const response = await fetch('/api/diary')
  const { body } = await response.json()
  return {
    diaryEntries: body
  }
}) satisfies PageServerLoad
