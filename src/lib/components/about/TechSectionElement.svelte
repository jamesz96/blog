<script lang="ts">
  import InlineGroup from '$lib/components/common/InlineGroup.svelte';
  import type { ComponentType } from 'svelte'

  export let Icon: ComponentType
  export let name: string;

  const dimensions = { height: 20, width: 20 };
</script>

<InlineGroup>
  <body>{name}</body>
  <svelte:component
    this={Icon}
    width={dimensions.width}
    height={dimensions.height}
    style="fill: var(--color-alt-text); transition: all ease-out 0.1s"
  />
</InlineGroup>
