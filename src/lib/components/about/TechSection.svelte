<style>
  .table {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 5rem;
    font-family: var(--font-family-code);
  }
</style>

<script context="module">
  import TechSectionPart from './TechSectionPart.svelte';
  import Section from '$lib/components/Section.svelte';

  import React from '$lib/icons/React.svelte';
  import Docker from '$lib/icons/Docker.svelte';
  import Typescript from '$lib/icons/Typescript.svelte';
  import Python from '$lib/icons/Python.svelte';
  import Go from '$lib/icons/Go.svelte';
  import Cpp from '$lib/icons/Cpp.svelte';
  import CircleCi from '$lib/icons/CircleCi.svelte';
  import Jenkins from '$lib/icons/Jenkins.svelte';
  import Svelte from '$lib/icons/Svelte.svelte';
  import GoogleOptimize from '$lib/icons/GoogleOptimize.svelte';
  import Redux from '$lib/icons/Redux.svelte';
  import Redis from '$lib/icons/Redis.svelte';
  import PostgreSql from '$lib/icons/PostgreSQL.svelte';
  import Algolia from '$lib/icons/Algolia.svelte';
  import Webpack from '$lib/icons/Webpack.svelte';
  import Nodejs from '$lib/icons/Nodejs.svelte';
  import Nextjs from '$lib/icons/Nextjs.svelte';
  import Swagger from '$lib/icons/Swagger.svelte';

  const languages = [
    { icon: Go, name: "Go" },
    { icon: Cpp, name: "C++" },
    { icon: Python, name: "Python" },
    { icon: Typescript, name: "Typescript" },
  ]

  const frontEndItems = [
    { icon: React, name: "React" },
    { icon: Redux, name: "Redux" },
    { icon: Svelte, name: "Svelte" },
    { icon: Webpack, name: "Webpack" },
    { icon: Nextjs, name: "Next.js" },
  ]

  const backendItems = [
    { icon: Redis, name: "Redis" },
    { icon: Nodejs, name: "Node.js" },
    { icon: Swagger, name: "Swagger" },
    { icon: PostgreSql, name: "PostgreSQL" },
  ]

  const tools = [
    { icon: Docker, name: "Docker" },
    { icon: Jenkins, name: "Jenkins" },
    { icon: Algolia, name: "Algolia" },
    { icon: CircleCi, name: "CircleCI" },
    { icon: GoogleOptimize, name: "G Optimize" },
  ]
</script>

<Section title="Tech">
  <div class="table">
    <TechSectionPart label="languages" items={languages} />
    <TechSectionPart label="frontend" items={frontEndItems} />
    <TechSectionPart label="backend" items={backendItems} />
    <TechSectionPart label="tools & services" items={tools} />
  </div>
</Section>

