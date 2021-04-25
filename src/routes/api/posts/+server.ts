import { json } from '@sveltejs/kit'
import { getResources } from "$lib/request/fetch";
import type { RequestHandler } from './$types';

export const GET = (async (event) => {
  const limit = event.url.searchParams.get('limit') ?? '5'
  const num = parseInt(limit)
  const items = (await getResources()).slice(0, num)
  return json({ body: items });
}) satisfies RequestHandler

