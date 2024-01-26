import { json } from '@sveltejs/kit'
import { getDiaryEntries } from "$lib/request/fetch";
import type { RequestHandler } from './$types';

export const GET = (async () => {
  const items = await getDiaryEntries()
  return json({ body: items });
}) satisfies RequestHandler

