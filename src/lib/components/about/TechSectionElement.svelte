<InlineGroup>
  <body>{name}</body>
  <svelte:component this={Icon}
    width={dimensions.width}
    height={dimensions.height}
  />
</InlineGroup>

<script lang="ts">
  import InlineGroup from '$lib/components/common/InlineGroup.svelte';
  export let Icon: any; // TYPE this
  export let name: string;

  const dimensions = { height: 20, width: 20 }
</script>
