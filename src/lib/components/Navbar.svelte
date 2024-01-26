<script lang="ts">
  import Moon from '$lib/components/Moon.svelte';
  import { page } from '$app/stores';
  const items = ['/', '/search', '/about', '/diary']
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
    backdrop-filter: blur(5px);
    height: 3rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 50;
    padding: 1rem;
  }

  .navbar > .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (min-width: 480px) {
    .navbar {
      justify-content: center;
    }

    .navbar > .content {
      width: 50%;
      justify-content: space-between;
    }
  }

  .navbar__container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .navbar__item {
    transition: all 0.5s ease;
  }

  .navbar__item__selected {
    filter: brightness(var(--hover-brightness));
  }

  .nav__link {
    font-family: var(--font-family-code);
    font-weight: 350;
    position: relative;
    color: var(--color-alt-text);
    text-decoration: none;
    padding: 1rem;
  }

  .navbar__item:hover {
    filter: brightness(var(--hover-brightness));
  }
</style>
