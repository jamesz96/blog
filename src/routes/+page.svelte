<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import Focal from '$lib/components/Focal.svelte';
  import Intro from '$lib/components/Intro.svelte';
  import Bio from '$lib/components/Bio.svelte';
</script>

<SEO />

<main class="main">
  <div class="content">
    <Intro />
    <Focal />
    <Bio />
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
    margin-top: irem;
  }
</style>
