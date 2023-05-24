<script>
const FORMSPARK_ACTION_URL = 'https://submit-form.com/6H31VKDg'
const BOTPOISON_PUBLIC_KEY = 'pk_fe43b230-e893-4d80-9009-d5d1b91fd595'

import axios from 'axios'
import Botpoison from '@botpoison/browser'

export default {
  data() {
    return {
      botpoison: null,

      email: '',
      message: '',

      contactFormLoading: false
    }
  },

  created() {
    // 2. Create a new instance with your public key
    this.botpoison = new Botpoison({
      publicKey: BOTPOISON_PUBLIC_KEY
    })
  },

  methods: {
    async submitForm() {
      this.contactFormLoading = true

      try {
        // 3. Process a challenge
        const { solution } = await this.botpoison.challenge()
        await axios.post(FORMSPARK_ACTION_URL, {
          email: this.email,
          message: this.message,
          // 4. Forward the solution
          _botpoison: solution
        })

        console.log('Form submitted')
        this.$router.push({ path: '/thanks', query: { email: this.email, message: this.message } })
      } catch (error) {
        alert('Error submitting form')
      } finally {
        this.email = ''
        this.message = ''
        this.contactFormLoading = false
      }
    }
  }
}
</script>

<template>
  <main>
    <section id="home">
      <div class="wrapper">
        <h1>ANTON LEHRBERG</h1>
        <h3>FULL STACK DEVELOPER</h3>
        <span class="from-country"
          ><h4>from</h4>
          <h4 class="from-country__country">SWEDEN</h4></span
        >
      </div>
    </section>

    <section id="tools">
      <div class="wrapper">
        <h2>MAIN TOOLS<span class="small">:</span></h2>

        <div class="tools-wrapper">
          <div class="tools__row">
            <div class="tool--big">HTML</div>
            <div class="tool--big">CSS</div>
            <div class="tool--big">JS</div>
          </div>
          <div class="tools__row">
            <div class="tool--big">GSAP</div>
            <div class="tool--big">Vue.js</div>
            <div class="tool--big">Node.js</div>
          </div>
          <div class="tools__row">
            <div class="tool--big">Express.js</div>
            <div class="tool--big">SQL</div>
          </div>
          <div class="tools__row">
            <div class="tool--big">Figma</div>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio">
      <div class="wrapper">
        <h2>PORTFOLIO</h2>
        <p>I have made several websites, of which many are in professional use as you read this.</p>

        <div class="examples">
          <div class="example">
            <img src="/images/showcase-mhfothem.jpg" alt="Display of homepage of site" />

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
                <div class="tool--small">HTML</div>
                <div class="tool--small">CSS</div>
                <div class="tool--small">JS</div>
                <div class="tool--small">Vue.js</div>
                <div class="tool--small">Node.js</div>
                <div class="tool--small">Express.js</div>
                <div class="tool--small">SQL</div>
              </div>
            </div>
          </div>
        </div>

        <div class="example">
          <img src="/images/showcase-mhfothem.jpg" alt="Display of homepage of site" />

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
              <div class="tool--small">HTML</div>
              <div class="tool--small">CSS</div>
              <div class="tool--small">JS</div>
              <div class="tool--small">Vue.js</div>
              <div class="tool--small">Google Firestore & Auth</div>
              <div class="tool--small">Figma</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="wrapper">
        <h2>HIT ME UP</h2>

        <form
          @submit.prevent="submitForm"
          class="form-1"
          id="contact-form"
          :class="{ loading: contactFormLoading }"
        >
          <div>
            <label for="email" class="required">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email..."
              required
              v-model="email"
              class="input-1"
            />
          </div>

          <div>
            <label for="message" class="required">Message</label>
            <textarea
              name="message"
              id="message"
              rows="12"
              placeholder="Write me something..."
              required
              v-model="message"
              class="textarea-1"
            ></textarea>
          </div>

          <button type="submit" class="button-1" v-if="!contactFormLoading">Send</button>
          <button class="button-1" disabled v-else>Sending...</button>
        </form>
      </div>
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
#home > .wrapper {
  gap: 0;
  align-items: center;
  text-align: center;
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

#tools .tools-wrapper {
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

.examples {
  width: 100%;
  max-width: 700px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  gap: 1.5rem;
}

.example {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;

  background-color: var(--blue--dark);

  padding-bottom: 1rem;
}

.example__content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0.75rem;
}

.example__content .tools-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 0.5rem;

  margin-top: 0.25rem;
}

/* contact */
</style>
