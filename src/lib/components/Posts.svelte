<script lang="ts">
  import PostCard from '$lib/components/PostCard.svelte';
  export let data: Array<Record<string, any>>;
</script>

<div class="cards">
  {#each data as item}
    <PostCard
      title={item.title}
      href={`/blog/${item.slug}`}
      desc={item.desc}
      date={item.date}
      tags={item.tags}
    />
  {/each}
</div>

<style>
  .cards {
    display: grid;
    gap: 1rem;
    justify-items: center;
  }
</style>
