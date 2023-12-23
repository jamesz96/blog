<script lang="ts">
  import StructuredGrid from '$lib/components/StructuredGrid.svelte';
  import TechSectionElement from './TechSectionElement.svelte';
  import type { ComponentType } from 'svelte'

  export let items: Array<{ icon: ComponentType; name: string }>;
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
    font-weight: 300;
    text-align: center;
  }

  .list {
    margin-top: 1rem;
  }
</style>
