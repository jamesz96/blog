<style>
  .card {
    overflow: hidden;
    text-align: left;
    background-color: var(--color-alt-bg);
    width: 100%;
    border-radius: 1rem;
  }

  .card__details {
    color: var(--color-main-text);
    text-decoration: none;
    padding: 1rem;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    border: 0.05rem solid transparent;
  }

  .card__title {
    font-family: var(--font-family);
    font-size: 1.25rem;
    font-weight: 300;
    text-align: center;
    line-height: 1.5em;
    text-transform: capitalize;
    grid-column-start: span 2;
  }

  .card__desc {
    border-top: 0.0625rem var(--color-borders) dotted;
    font-family: var(--font-family);
    color: var(--color-alt-text);
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    overflow: hidden;
    grid-column-start: span 2;
  }

  .card__date {
    font-family: var(--font-family);
    font-weight: 300;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-self: start;
    font-size: 0.8rem;
    color: var(--color-alt-text);
  }

  .card__date :global(.date__icon) {
    width: 1rem;
    height: 1rem;
    display: block;
  }

  .card__tags {
    display: flex;
    justify-self: end;
    gap: 0.5rem;
  }

  .card__tag {
    background-color: var(--color-special-bg);
    font-family: var(--font-family);
    font-weight: 200;
    color: var(--color-main-text);
    font-size: 0.8rem;
    text-decoration: none;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    text-transform: capitalize;
  }

  .card__tag:hover {
    filter: brightness(1.2);
  }

  @media only screen and (min-width: 480px) {
    .card__details:hover {
      border: 0.05rem dotted;
    }
  }
  </style>

  <div class="card" in:fade={{ duration: 200 }}>
    <a rel="prefetch" {href} class="card__details">
      <span class="card__title">{title}</span>
        <div class="card__date">
          <Calendar className="date__icon" />
          <span class="date__label">
            {new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <div class="card__tags">
          {#each tags as tag}<span class="card__tag">{tag}</span>{/each}
        </div>
      <p class="card__desc">{desc}</p>
    </a>
  </div>

  <script lang="ts">
  import { fade } from "svelte/transition"
  import Calendar from "$lib/icons/Calendar.svelte"

  export let title: string
  export let desc: string
  export let href: string
  export let date: string
  export let tags: Array<string>
  </script>
