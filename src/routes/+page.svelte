<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import Focal from '$lib/components/Focal.svelte';
  import RecentPostSection from '$lib/components/RecentPostSection.svelte';
  import Intro from '$lib/components/Intro.svelte';

  import type { PageData } from './$types';
  export let data: PageData;
</script>

<SEO title="Home" />

<main class="main">
  <div class="content">
    <div><Focal /></div>
    <div><Intro /></div>
    <div class="recent"><RecentPostSection data={data.posts} /></div>
  </div>
</main>

<style>
  .main {
    display: flex;
    justify-content: center;
    max-width: 1080px;
    margin: 0 auto;
  }

  .content {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
  }

  .recent {
    margin-top: 2rem;
  }
</style>
