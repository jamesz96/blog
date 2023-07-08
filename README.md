# My Personal Website

Just a small blog/portfolio app written in Typescript using [SvelteKit](https://kit.svelte.dev/).

The good stuff:

- Blog search enabled with [Algolia](https://www.algolia.com/)
- Markdown blogposts in Svelte preproccessed using [mdsvex](https://mdsvex.pngwn.io/)
- [Giscus](https://giscus.app/) comment section

### Running it locally

```bash
cp .env.example .env
npm install
npm run dev
```

### Production build

```bash
npm run build
npm run preview
```
