<script lang="ts">
  import Posts from "$lib/components/Posts.svelte"
  import Section from "$lib/components/Section.svelte"
  import type { Metadata } from "$lib/request/fetch"

  export let data: Array<Metadata>
</script>

<Section title="Recent Posts">
  <Posts data={data}/>
</Section>
