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

<script context="module">
	import { browser, dev } from '$app/environment';
  import TechSection from '$lib/components/about/TechSection.svelte';
  import Section from '$lib/components/Section.svelte';

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

<main class="main">
  <div class="content">
    <Section title="About Me">
      <body>
        <p>
          I'm a full-stack software engineer working in Sydney, Australia.
          <br />
          My experience has mostly been on web apps, but I consider myself as more of a generalist.
        </p>
        <br />
        <p>
          For me, learning things as I go is the name of the game.
          <br />
          Whether it being on-the-job or letting my interests take the driver's seat; it has been great fun so far.
        </p>
      </body>
    </Section>
    <TechSection />
    <Section title="Hobbies">
      <ul>
        <li>Small, random projects like this blog</li>
        <li>Tinkering with my Neovim <a href="https://www.youtube.com/watch?v=QMVIJhC9Veg">PDE</a></li>
        <li>Playing computer games. <i>Currently</i> Oldschool Runescape and Street Fighter V</li>
        <li>Venturing into the exceedingly deep modern history rabbit hole</li>
        <li>Reading blogs and books on science/tech</li>
        <li>Tennis, yoga, and general fitness</li>
        <li>Learning German and <i>maybe later...</i> Mandarin Chinese</li>
        <li>Exploring music - anything goes</li>
      <ul>
    </Section>
  </div>
</main>
