<script lang="ts">
  import SEO from "$lib/components/SEO.svelte"
  import Posts from "$lib/components/Posts.svelte"
  import type { PageData } from "./$types";
  import Radio from "$lib/components/common/Radio.svelte"

  export let data: PageData

  let languageSelection: 'cn' | 'de' = 'cn'
  $: posts = data.diaryEntries.map((entry: any) => {
    return entry[languageSelection]
  })

  const options = [
    {
      value: 'cn',
      label: '中文',
    },
    {
      value: 'de',
      label: 'Deutsch'
    }
  ]

</script>

<SEO />
<main class="main">
  <Radio {options} fontSize={24} bind:userSelected={languageSelection} />
  <div class="section">
    <Posts data={posts} isDiary={true} />
  </div>
</main>

<style>
  .main {
    font-family: var(--font-family-code);
    color: var(--color-main-text);
    max-width: 1080px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .main > .section {
    margin-top: 3rem;
    width: 80%;
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
</style>
