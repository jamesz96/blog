<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Loading from '$lib/components/Loading.svelte';
  import { theme, getSavedTheme, getPreferredTheme } from '$lib/utils/theme';

  export const segment: string = '';

  onMount(() => {
    theme.set(getSavedTheme() ?? getPreferredTheme());
    theme.subscribe((current) => {
      localStorage.setItem('theme', current);
      document.documentElement.setAttribute('data-theme', current);
    });
  });
</script>

<svelte:head>
  <script>
    try {
      const { matches: isDarkMode } = window.matchMedia('(prefers-color-scheme: dark)');
      const savedTheme = localStorage.getItem('theme');
      const preference = savedTheme ?? (isDarkMode ? 'dark' : 'light');
      if (preference) {
        document.documentElement.setAttribute('data-theme', preference);
      }
    } catch (err) {
      console.log(err);
    }
  </script>
</svelte:head>

<Navbar />
<main>
  <Loading />
  <div>
    <slot />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  div {
    flex: 1;
    margin-top: 4.5rem;
  }

  :global(html) {
    scroll-padding-top: 4.5rem;
  }
</style>
