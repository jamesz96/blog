<style>
  .post {
    max-width: 1080px;
    padding: 1rem;
    margin: 0 auto;
    color: var(--color-main-text);
    text-align: center;
  }

  .post__title {
    font-family: var(--font-family);
    font-size: 2.5rem;
    margin-top: 2rem;
    max-width: 30ch;
    margin: 0 auto;
  }

  .post__date {
    font-family: var(--font-family);
    display: block;
    text-align: center;
    font-size: 1.125rem;
    line-height: 2em;
    color: var(--color-alt-text);
  }

  .post__edit {
    font-family: var(--font-family);
    text-align: center;
    font-size: 1.125rem;
    line-height: 2em;
    color: var(--color-main-accent);
    transition: color ease-out 0.2s;
    text-decoration: none;
  }

  .post__edit:hover {
    color: var(--color-main-text);
  }

  .post__edit:hover::before {
    transform: scale3d(1, 1, 1);
  }

  .post__content {
    font-family: var(--font-family);
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    font-size: 1.125rem;
    text-align: left;
  }

  .post__content :global(p) {
    line-height: 1.75em;
    font-size: 1.125rem;
  }

  .post__content :global(details) {
    line-height: 1.75em;
    cursor: pointer;
  }

  .post__content :global(details p) {
    padding-left: 1.5rem;
    color: var(--color-main-accent);
  }
  
  .post__content :global(details summary:hover) {
    color: var(--color-main-accent);
    user-select: none;
  }

  :global(.post__content > * + *) {
    margin-top: 1rem;
  }

  .post__content :global(h1) {
    position: relative;
    font-family: var(--font-family);
    font-size: 2rem;
    line-height: 1.75em;
  }

  .post__content :global(h1::after) {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.125rem;
    background-image: linear-gradient(
      to right,
      var(--color-main-accent),
      rgba(0, 0, 0, 0)
    );
  }

  .post__content :global(h2) {
    position: relative;
    font-family: var(--font-family);
    line-height: 1.5em;
    font-size: 1.625rem;
    padding-left: 1.5rem;
  }

  .post__content :global(h3) {
    position: relative;
    font-family: var(--font-family);
    font-size: 1.5rem;
    line-height: 2em;
    padding-left: 0.5rem;
    padding-left: 1.5rem;
  }

  .post__content :global(h3::after) {
    content: "• ";
    position: absolute;
    left: 0;
    color: var(--color-main-accent);
  }

  .post__content :global(h2::after) {
    content: "# ";
    position: absolute;
    left: 0;
    color: var(--color-main-accent);
  }

  .post__content :global(img) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  .post__content :global(pre) {
    scrollbar-color: var(--color-thin) var(--color-special-bg);
    border: 0.0625rem var(--color-borders) solid;
  }

  .post__content :global(pre::-webkit-scrollbar) {
    background-color: var(--color-alt-bg);
    height: 0.5rem;
  }

  .post__content :global(pre:hover::-webkit-scrollbar) {
    background-color: var(--color-special-bg);
    cursor: pointer;
  }

  .post__content :global(pre::-webkit-scrollbar-thumb) {
    background-color: var(--color-alt-bg);
    cursor: pointer;
  }

  .post__content :global(pre:hover::-webkit-scrollbar-thumb) {
    background-color: var(--color-thin);
  }

  .post__content :global(a) {
    position: relative;
    display: inline-block;
    color: var(--color-main-accent);
    text-decoration: none;
    z-index: 5;
  }

  .post__content :global(a:hover) {
    text-decoration: underline;
  }

  .post__content :global(code) {
    font-family: "JetBrains Mono", monospace;
    color: var(--color-main-accent);
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    background-color: var(--color-alt-bg);
    box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.1);
  }

  .post__content :global(pre code) {
    font-family: "JetBrains Mono", monospace;
    font-weight: 400;
    padding: 0;
    border-radius: 0;
    background: none;
    box-shadow: none;
    color: var(--color-main-text);
  }

  .post__content :global(ul) {
    list-style: none;
  }

  .post__content :global(ol) {
    list-style: decimal inside;
  }

  .post__content :global(ul li) {
    position: relative;
    font-size: 1.125rem;
    line-height: 1.75em;
    padding-left: 1rem;
  }

  .post__content :global(ol li) {
    position: relative;
    font-size: 1.125rem;
    line-height: 1.75em;
    padding-left: 1rem;
  }

  .post__content :global(ul li::before) {
    content: "•";
    color: var(--color-main-text);
    font-size: 1.5rem;
    line-height: 1.5em;
    margin-right: 0.5rem;
  }

  .post__content :global(ul li p) {
    display: inline-block;
    margin: 0;
  }

  .post__content :global(ul li > ul *) {
    font-size: 1.125rem;
  }

  .post__content :global(table) {
    width: 100%;
    border-radius: 2rem;
    overflow: hidden;
  }

  .post__content :global(table a) {
    transition: all ease-out 0.2s;
    font-weight: 600;
    line-height: 1.25em;
    font-style: italic;
  }

  .post__content :global(table tr:nth-child(odd)) {
    background-color: var(--color-special-bg);
  }

  .post__content :global(table th) {
    background-color: var(--color-alt-bg);
    color: var(--color-main-text);
    font-size: 1.25rem;
    text-align: center;
  }

  .post__content :global(table th),
  .post__content :global(table td) {
    padding: 0.75rem 1rem;
  }

  .post__content :global(blockquote p) {
    font-size: 1.125rem;
    letter-spacing: 0.02em;
    color: var(--color-thin);
    font-style: italic;
    font-family: serif;
    margin: 1rem 0;
  }

  .post__content :global(blockquote p::before) {
    content: "";
  }

  .post__content :global(blockquote p::after) {
    content: "";
  }

  .post__content :global(h1 a),
  .post__content :global(h2 a),
  .post__content :global(h3 a) {
    color: var(--color-main-text);
  }

  .post__content :global(del),
  .post__content :global(del *) {
    color: var(--color-alt-text) !important;
    font-style: italic;
    text-decoration: line-through;
  }

  .post__content :global(h1 a::before),
  .post__content :global(h2 a::before),
  .post__content :global(h3 a::before) {
    display: none;
  }

  .post__content > .comments {
    margin-top: 2rem;
  }

  .post__tags {
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  .post__tag {
    padding: 0.25rem 0.5rem;
    background-color: var(--color-special-bg);
    color: var(--color-main-text);
    border-radius: 0.25rem;
    font-family: var(--font-family);
    font-weight: 500;
  }

  .post__tag::before {
    content: "# ";
  }

  @media only screen and (max-width: 480px) {
    :global(.post__content pre) {
      margin-left: -1rem !important;
      margin-right: -1rem !important;
      border: none;
      border-radius: 0;
    }

    :global(.post__content ul *) {
      font-size: 0.95rem !important;
    }

    :global(.post__content p) {
      font-size: 1rem;
    }
  }
</style>

<svelte:head>
  <link
    rel="preload"
    as="style"
  />
</svelte:head>

<SEO {desc} {title} />

<section class="post">
  <h1 class="post__title">{title}</h1>
  <span class="post__date">
    Posted on
    {new Date(date).toLocaleDateString("en-AU", { weekday: "long" })},
    {new Date(date).toLocaleDateString("en-AU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}
  </span>
  <a class="post__edit" href={editLink} target="_blank" rel="norel noreferrer">Suggest an Edit</a>
  <div class="post__tags">
    {#each tags as tag}
      <div class="post__tag">{tag}</div>
    {/each}
  </div>
  <div class="post__content">
    <svelte:component this={component} />
    <div class="comments">
      <Giscus
        id="comments"
        category="General"
        categoryId="DIC_kwDOGmZlC84CRm4F"
        repo="jamesz96/blog"
        repoId="R_kgDOGmZlCw"
        reactionsEnabled="1"
        lang="en"
        loading="lazy"
        theme={$theme}
      />
    </div>
  </div>
</section>

<script lang="ts">
  import type { PageData } from './$types'
  import SEO from '$lib/components/SEO.svelte'
  import Giscus from '@giscus/svelte'
  import { theme } from '$lib/utils/theme'

  export let data: PageData

  const component = data.component
  const { title, date, desc, tags, slug } = data.meta
  const editLink = `https://github.com/jamesz96/blog/tree/main/src/blogposts/${slug}.svx`
</script>
