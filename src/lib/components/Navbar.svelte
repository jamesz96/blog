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

  .navbar__item a {
    font-family: var(--font-family);
    font-weight: 200;
    position: relative;
    color: var(--color-alt-text);
    text-decoration: none;
    transition: color ease-out 0.001s;
    padding: 1rem;
  }

  .navbar__item:hover {
    background-color: var(--prism-comment)
  }

  .navbar__item a:hover::after {
    transform: scale(1);
  }

  .navbar__item a::after {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    right: 0;
    height: 0.125rem;
    transform: scale(0);
    transition: transform ease-out 0.2s;
  }
  </style>

  <nav class="navbar">
    <div class="content">
      <div class="navbar__container">
        <div class="navbar__item">
          <a href="/">/</a>
        </div>
        <div class="navbar__item">
          <a href="/search">/search</a>
        </div>
        <div class="navbar__item">
          <a href="/about" >/about</a>
        </div>
      </div>
      <div class="navbar__container">
        <Moon/>
      </div>
    </div>
  </nav>

  <script lang="ts">
  import Moon from "$lib/components/Moon.svelte"
  </script>
