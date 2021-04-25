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

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<main class="main">
  <div class="content">
    <Section title="About Me">
      <body>
        <p>
          I'm a full-time Software Engineer working in Sydney, Australia.
        </p>
        <br />
        <p>
          My unremarkable journey into software began in my 2nd year of university when I transferred to a Computer Science program.
          Before that, I was the physical embodiment of the infamous <i>Flexible First-Year</i> engineering program; meandering through the different disciplines with no signs of certainty.
          I was, unsurprisingly, not allowed to remain as a <i>Flexible First-Year</i> student forever.
        </p>
        <br />
        <p>
          The decision to pick software over the other engineering disciplines was perhaps a leap of faith at the time. I knew absolutely nothing about programming or the world of software.
          All I knew was that I enjoyed solving silly random puzzles and building things for fun.
        </p>
        <br />
        <p>
          I really believe that I would have made decision to pivot eventually - I'm just glad I did it while I was still a student.
        </p>
      </body>
    </Section>
    <TechSection />
    <Section title="Hobbies">
      <ul>
        <li>Small, random projects like this blog</li>
        <li>Tinkering with my Neovim configuration</li>
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
