<script></script>

<template>
  <main>
    <section id="hero">
      <h1>ANTON LEHRBERG</h1>
      <h3>FULL STACK DEVELOPER</h3>
      <h4>from <span>SWEDEN</span></h4>
    </section>

    <section id="tools">
      <h2>MAIN TOOLS<span class="small">:</span></h2>

      <div class="tools-wrapper">
        <div class="tool">HTML</div>
        <div class="tool">CSS</div>
        <div class="tool">JS</div>
        <div class="tool">Vue.js</div>
        <div class="tool">Node.js</div>
        <div class="tool">Express.js</div>
        <div class="tool">SQL</div>
        <div class="tool">Figma</div>
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
            <a href="https://www.mhfothem.se/" target="_blank" rel="noopener noreferrer" class="link-1">mhfothem.se</a>
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
#tools {
  --color-background: var(--green-yellow);
  --color-text: var(--blue--dark);
  --color-text--dark: var(--blue--dark60);
}

#portfolio {
  --color-background: var(--blue);
  --color-text: var(--blue--lighter);
  --color-text--dark: var(--blue--lighter60);
}
</style>
