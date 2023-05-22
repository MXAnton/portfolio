<script></script>

<template>
  <main>
    <section id="home">
      <h1>ANTON LEHRBERG</h1>
      <h3>FULL STACK DEVELOPER</h3>
      <span class="from-country"
        ><h4>from</h4>
        <h4 class="from-country__country">SWEDEN</h4></span
      >
    </section>

    <section id="tools">
      <h2>MAIN TOOLS<span class="small">:</span></h2>

      <div class="tools-wrapper">
        <div class="tools__row">
          <div class="tool--big">HTML</div>
          <div class="tool--big">CSS</div>
          <div class="tool--big">JS</div>
        </div>
        <div class="tools__row">
          <div class="tool--big">Vue.js</div>
          <div class="tool--big">Node.js</div>
        </div>
        <div class="tools__row">
          <div class="tool--big">Express.js</div>
          <div class="tool--big">SQL</div>
        </div>
        <div class="tools__row">
          <div class="tool--big">Figma</div>
          <div class="tool--big">Git</div>
        </div>
      </div>
    </section>

    <section id="portfolio">
      <h2>PORTFOLIO</h2>
      <p>I have made several websites, of which many are in professional use as you read this.</p>

      <div class="examples">
        <div class="example">
          <img src="" alt="Display of homepage of site" />

          <div class="example__content">
            <a
              href="https://www.calmprofessor.se/"
              target="_blank"
              rel="noopener noreferrer"
              class="link-1"
              >calmprofessor.se</a
            >
            <p>Take quick online courses where ever you are!</p>

            <div class="tools-wrapper">
              <div class="tool">HTML</div>
              <div class="tool">CSS</div>
              <div class="tool">JS</div>
              <div class="tool">Vue.js</div>
              <div class="tool">Node.js</div>
              <div class="tool">Express.js</div>
              <div class="tool">SQL</div>
            </div>
          </div>
        </div>

        <div class="example">
          <img src="" alt="Display of homepage of site" />

          <div class="example__content">
            <a
              href="https://www.mhfothem.se/"
              target="_blank"
              rel="noopener noreferrer"
              class="link-1"
              >mhfothem.se</a
            >
            <p>
              Motocross association that gives everyone the opportunity to ride motocross, with main
              focus on children.
            </p>

            <div class="tools-wrapper">
              <div class="tool">HTML</div>
              <div class="tool">CSS</div>
              <div class="tool">JS</div>
              <div class="tool">Vue.js</div>
              <div class="tool">Google Firestore & Auth</div>
              <div class="tool">Figma</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <h2>HIT ME UP</h2>

      <form action="">
        <input type="email" name="email" id="email" placeholder="Your email..." required />
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          placeholder="Write me something..."
          required
        ></textarea>
      </form>
    </section>
  </main>
</template>

<style scoped>
/* main {
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
main::-webkit-scrollbar{
  display: none;
} */

/* HERO / HOME */
#home {
  gap: 0;
}

h3 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.from-country {
  display: flex;
  gap: 0.4em;
}

.from-country > *:first-child {
  --color-text: var(--swedish-blue);
  --color-text--dark: var(--swedish-yellow);

  color: var(--color-text);
}

.from-country > .from-country__country {
  --color-text: var(--swedish-yellow);
  --color-text--dark: var(--swedish-blue);

  color: var(--color-text);
}

/* TOOLS */
#tools {
  --color-background: var(--green-yellow);
  --color-text: var(--blue--dark);
  --color-text--dark: var(--blue--dark60);

  /* align-items: start; */
}

.tools-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.tools__row {
  display: flex;
  gap: 0.5rem;
}

.tool--big,
.tool--small {
  background-color: var(--blue--light);
  color: var(--black);

  box-shadow: 0px 3px 0px var(--blue--lighter60);

  border-radius: 22px;

  padding: 0.5rem 1.25em;

  font-size: 1rem;
}

.tool--small {
  padding: 0.33em 1em;

  font-size: 0.75rem;
}

/* portfolio */
#portfolio {
  --color-background: var(--blue);
  --color-text: var(--blue--lighter);
  --color-text--dark: var(--blue--lighter60);
}
</style>
