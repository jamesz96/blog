import type { Page } from "@sveltejs/kit";
import data from '$lib/data/site';

type OpenGraphMetadata = {
  ogType: string;
}

type TwitterMetadata = {
  twitterCard: 'summary';
}

type GenericMetadata = {
  desc: string;
  keywords: string;
  title: string;
  url: string;
  img: string;
}

const routeTitleMap: { [key: string]: string } = {
  "/": "Home",
  "/search": "Search Posts",
  "/about": "About Me",
}

export function buildSEOMetadata(
  page: Page<Record<string, string>, string | null>
): OpenGraphMetadata & TwitterMetadata & GenericMetadata {
  const { siteDesc, siteKeywords, siteImg } = data
  const isBlogpost = Boolean(page.params.slug) && page.route.id === '/blog/[slug]'
  const routeId = page.route.id as string

  if (isBlogpost) {
    return {
      title: page.data.meta.title,
      desc: page.data.meta.desc,
      keywords: page.data.meta.tags.join(',').toLowerCase(),
      url: page.url.href,
      img: siteImg, /** @TODO Blogpost thumbnails */
      ogType: 'website',
      twitterCard: 'summary',
    }
  }

  return {
    title: routeTitleMap[routeId],
    desc: siteDesc,
    keywords: siteKeywords.join(',').toLowerCase(),
    url: page.url.href,
    img: siteImg,
    ogType: 'website',
    twitterCard: 'summary'
  }
}
