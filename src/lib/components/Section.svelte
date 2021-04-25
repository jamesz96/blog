<style>
  .root {
    display: grid;
    font-family: var(--font-family);
    color: var(--color-main-text);
    justify-items: left;
  }

  .content {
    width: 100%;
    margin-top: 1rem;
    font-weight: 300;
  }
</style>

<script lang="ts">
  export let title: string;
</script>

<section class="root">
  <h2>{title}</h2>
  <div class="content">
    <slot />
  </div>
</section>
