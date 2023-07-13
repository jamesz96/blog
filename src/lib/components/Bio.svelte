<section class="bio">
  <div id="pyramid" style="width: 8em; height: 10em;">
    <div style="transform: translate3d(0em, -7em, 1em)"><div>On this 🌍 to:</div></div>
    <div style="transform: translate3d(3.53em, 0em, 3.53em)"><div>Learn 📖</div></div>
    <div style="transform: translate3d(-4.8em, 0em, 1.29em)"><div>Play 🎮</div></div>
    <div style="transform: translate3d(1.29em, 0em, -4.8em)"><div>Explore 🔭</div></div>
  </div>
  <body class="body">
    <p>Nice of you to drop by ~ </p>
    <p>
      Welcome to my small, humble abode on the world wide web.
      In here, I occasionally pen my musings on seemingly random topics that interest me.
    </p>
</section>

<style>
  #pyramid{
    font-family: var(--font-family-code);
    color: var(--color-main-text);
    position: relative;
    transform-style: preserve-3d;
    animation: spin 20s linear infinite;
    margin-top: 5rem;
    align-items: center;
  }

  #pyramid > div {
    position: absolute;
    transform-style: preserve-3d;
  }

  #pyramid > div > div {
    animation: un-spin 20s linear infinite;
  }

  @keyframes un-spin {
    from { transform: rotateY(0turn); }
    to { transform: rotateY(-1turn); }
  }

  @keyframes spin {
    from { transform: rotateX(-0.06turn) rotateY(0turn); }
    to { transform: rotateX(-0.06turn) rotateY(1turn); }
  }

  .body {
    margin-top: 3rem;
  }

  .bio {
    display: flex;
    flex-direction: column;
    color: var(--color-main-text);
    font-family: var(--font-family-code);
    align-items: center;
  }

  .bio > body > p + p {
    margin-top: 1rem;
  }
</style>
