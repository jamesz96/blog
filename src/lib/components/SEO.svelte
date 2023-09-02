<script lang="ts">
  import { page } from '$app/stores'
  import { buildSEOMetadata } from '$lib/data/seo';
  const meta = buildSEOMetadata($page)
</script>

<svelte:head>
  <title>{meta.title}</title>
  <link rel="canonical" href={meta.url} />
  <meta name="description" content={meta.desc} />
  <meta name="keywords" content={meta.keywords} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={meta.ogType} />
  <meta property="og:url" content={meta.url} />
  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.desc} />
  <meta property="og:image" content={meta.img} />

  <!-- Twitter -->
  <meta property="twitter:card" content={meta.twitterCard} />
  <meta property="twitter:url" content={meta.url} />
  <meta property="twitter:title" content={meta.title} />
  <meta property="twitter:description" content={meta.desc} />
  <meta property="twitter:image" content={meta.img} />
</svelte:head>
