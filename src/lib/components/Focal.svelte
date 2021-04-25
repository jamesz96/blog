<style>
  .focal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    color: var(--color-main-text);
  }

  .focal__pict {
    width: clamp(12rem, calc(20vw + 4rem), 16rem);
    height: clamp(12rem, calc(20vw + 4rem), 16rem);
    border-radius: 10rem;
    border: 0.5rem var(--color-alt-bg) solid;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    transition: all ease-out 0.5s;
  }

  @media only screen and (max-width: 960px) {
    .focal {
      gap: 2rem;
      grid-template-columns: 1fr;
      grid-template-rows: 14rem 1fr;
      text-align: center;
      margin-top: 0;
      gap: 1rem;
    }
    :global(.focal__pattern) {
      position: absolute;
      right: 0;
      top: 0;
      height: 6rem;
      z-index: -1;
      color: rgba(77, 125, 214, 0.075);
    }
  }
  </style>

  <section class="focal">
    <a href="https://github.com/jamesz96">
      <img
        class="focal__pict"
        src="https://avatars.githubusercontent.com/u/30682722?v=4"
        alt="github profile"
      />
    </a>
  </section>
