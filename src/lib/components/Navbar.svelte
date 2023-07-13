<script lang="ts">
  import Moon from '$lib/components/Moon.svelte';
  import { page } from '$app/stores';
  const items = ['/', '/search', '/about']
</script>

<nav class="navbar">
  <div class="content">
    <div class="navbar__container">
      {#each items as item}
        <div class={$page.url.pathname === item ? "navbar__item__selected" : "navbar__item" }>
          <a class="nav__link" href={item}>{item}</a>
        </div>
      {/each}
    </div>
    <div class="navbar__container">
      <Moon />
    </div>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: center;
    height: 3rem;
    background-color: var(--color-main-bg);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }

  .navbar > .content {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .navbar__container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .navbar__item {
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .navbar__item__selected {
    filter: brightness(1.5);
  }

  .nav__link {
    font-family: var(--font-family);
    font-weight: 200;
    position: relative;
    color: var(--color-alt-text);
    text-decoration: none;
    padding: 1rem;
  }

  .navbar__item:hover {
    -webkit-filter: brightness(1.5);
    filter: brightness(1.5);
  }
</style>
