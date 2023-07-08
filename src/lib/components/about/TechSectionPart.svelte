<script lang="ts">
  import StructuredGrid from '$lib/components/StructuredGrid.svelte';
  import TechSectionElement from './TechSectionElement.svelte';

  export let items: Array<{ icon: any; name: string }>;
  export let label: string;
</script>

<div>
  <div class="subtitle">{label}</div>
  <div class="list">
    <StructuredGrid>
      {#each items as item}
        <TechSectionElement Icon={item.icon} name={item.name} />
      {/each}
    </StructuredGrid>
  </div>
</div>

<style>
  .subtitle {
    font-weight: 500;
    text-align: center;
  }

  .list {
    margin-top: 1rem;
  }
</style>
