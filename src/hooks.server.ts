import { v4 as uuid } from '@lukeed/uuid';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
  const response = await resolve(event)

  const userId = event.cookies.get('userid');
  if (userId) {
    // if this is the first time the user has visited this app,
    // set a cookie so that we recognise them when they return
    return {
      ...response,
      headers: {
        ...response.headers,
        'set-cookie': `userid=${uuid()}; Path=/; HttpOnly`
      }
    };
  }

  return response;
}) satisfies Handle;

