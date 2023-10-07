<script context="module">
  import { browser, dev } from '$app/environment';
  import TechSection from '$lib/components/about/TechSection.svelte';
  import Section from '$lib/components/Section.svelte';
  import SEO from '$lib/components/SEO.svelte';

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<SEO />
<main class="main">
  <div class="content">
    <Section title="About Me">
      <body>
        <p>
          I'm a software engineer working in Sydney, Australia.
          <br />
          My experience has mostly been on web apps, but I consider myself as more of a generalist.
        </p>
        <br />
        <p>Learning things as I go is the name of the game.</p>
      </body>
    </Section>
    <TechSection />
    <Section title="Hobbies">
      <ul>
        <li>Small, random projects like <a href="https://github.com/jamszh/blog">this blog</a></li>
        <li>
          Tinkering with my Neovim <a href="https://www.youtube.com/watch?v=QMVIJhC9Veg">PDE</a>
        </li>
        <li>Exploring the late modern period in history</li>
        <li>Oldschool Runescape and Street Fighter 6. It used to be a lot of Dota2.</li>
        <li>Reading blogs and books on science/tech</li>
        <li>Tennis, yoga, and general fitness</li>
        <li>Learning German and Mandarin Chinese</li>
        <li>
          Music. Favourite genre is either Trance or Progressive House but I usually find myself
          enjoying almost anything
        </li>
        <ul />
      </ul></Section
    >
  </div>
</main>

<style>
  .main {
    display: flex;
    justify-content: center;
    max-width: 1080px;
    margin: 0 auto;
  }

  .content {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
  }
</style>
