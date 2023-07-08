<script lang="ts">
  import SEO from "$lib/components/SEO.svelte"
  import Posts from "$lib/components/Posts.svelte"
  import type { Metadata } from "$lib/request/fetch"
  import { onMount } from 'svelte'
  import type { PageData } from "./$types";
  import algoliasearch, { type SearchClient, type SearchIndex } from 'algoliasearch'

  let searchClient: SearchClient | null = null
  let index: SearchIndex | null = null

  export let data: PageData

  let results: Metadata[] = []
  let query: string = ''

  onMount(() => {
    searchClient = algoliasearch(import.meta.env.VITE_ALGOLIA_APP_ID, import.meta.env.VITE_ALGOLIA_SEARCH_KEY)
    index = searchClient.initIndex("posts")
    results = data.posts
  })

  async function onSearch() {
    if (!index) { return }
    const algoliaResponse = await index.search<Metadata>(query)
    results = algoliaResponse.hits
  }

</script>

<SEO title="Search" />
<main class="main">
  <div class="search">
    <div class="search__icon">🔎︎</div>
    <input
      class="search__bar"
      id="search__posts"
      type="text"
      aria-label="search post"
      bind:value={query}
      on:keyup={onSearch}
    />
  </div>
  <div class="section">
    <Posts data={results} />
  </div>
</main>

<style>
  .main {
    max-width: 1080px;
    margin: 0 auto;
    padding: 2rem 1rem 0;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .main > .search {
    justify-content: center;
    width: 80%;
  }

  .main > .section {
    margin-top: 3rem;
    width: 80%;
  }

  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color: var(--color-alt-bg);
    border-radius: 1rem;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.075);
    padding: 0.75rem;
  }

  .search__bar {
    font-family: var(--font-family-code);
    display: inline-block;
    width: 100%;
    font-size: 1.125rem;
    border: none;
    background-color: var(--color-alt-bg);
    outline: none;
    color: var(--color-main-text);
    content: '';
  }

  .search__bar::after {
    position: absolute;
    content: '_';
    -webkit-animation: blink 1s linear infiniate;
    animation: blink 1s linear infinite;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 0;
    }
  }

  .search__icon {
    font-family: var(--font-sans);
    color: var(--color-main-text);
    margin-right: 0.5rem;
  }
</style>
