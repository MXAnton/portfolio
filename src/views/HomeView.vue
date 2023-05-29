<script>
const FORMSPARK_ACTION_URL = 'https://submit-form.com/6H31VKDg'
const BOTPOISON_PUBLIC_KEY = 'pk_fe43b230-e893-4d80-9009-d5d1b91fd595'

import axios from 'axios'
import Botpoison from '@botpoison/browser'

import MouseTrailComp from '../components/MouseTrailComp.vue'
import ExampleComp from '../components/ExampleComp.vue'

export default {
  components: { MouseTrailComp, ExampleComp },
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
        <h1 class="flip-on-hover">
          <div v-for="letter in 'ANTON LEHRBERG'">
            <div>{{ letter }}</div>
          </div>
        </h1>

        <h3 class="flip-on-hover">
          <div v-for="letter in 'FULL STACK DEVELOPER'">
            <div>{{ letter }}</div>
          </div>
        </h3>

        <span class="from-country">
          <h4 class="flip-on-hover">
            <div v-for="letter in 'from'">
              <div>{{ letter }}</div>
            </div>
          </h4>
          <h4 class="from-country__country flip-on-hover">
            <div v-for="letter in 'SWEDEN'">
              <div>{{ letter }}</div>
            </div>
          </h4>
        </span>
      </div>

      <RouterLink to="/#tools" class="call-to-action--scroll">
        <img src="@/assets/down-arrow.svg" alt="Down arrow" />
      </RouterLink>

      <MouseTrailComp uniqueId="mouse-trail--home" />
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

      <MouseTrailComp uniqueId="mouse-trail--tools" />
    </section>

    <section id="portfolio">
      <div class="wrapper">
        <h2>PORTFOLIO<span class="small">:</span></h2>
        <p>
          I do both frontend (the visual part) and backend (if you need a database for example), to
          ensure you get a complete site. If you do not have your own design, I can help you with
          that as well. Here are some of the websites I have worked on:
        </p>

        <div class="examples">
          <ExampleComp
            name="calmprofessor.se"
            link="https://www.calmprofessor.se/"
            description="Take quick online courses where ever you are!"
            tools="HTML,CSS,JS,Vue.js,Node.js,Express.js,SQL"
          >
            <img src="/images/showcase-calmprofessor.jpg" alt="Display of homepage of site"
          /></ExampleComp>

          <ExampleComp
            name="mhfothem.se"
            link="https://www.mhfothem.se/"
            description="Motocross association that gives everyone the opportunity to ride motocross, with
                main focus on children."
            tools="HTML,CSS,JS,Vue.js,Google Firestore & Auth,Figma"
          >
            <img src="/images/showcase-mhfothem.jpg" alt="Display of homepage of site" />
          </ExampleComp>

          <ExampleComp
            name="gamifiera.com"
            link="https://www.gamifiera.com/"
            description="Gamifiera® offers a one stop solution for your e-commerce and omnichannel gamification and social platform needs."
            tools="HTML,CSS,JS,Vue.js"
          >
            <img src="/images/showcase-gamifiera.jpg" alt="Display of homepage of site" />
          </ExampleComp>

          <ExampleComp
            name="delari3d.se"
            link="https://www.delari3d.se/"
            description="Web store where you can by 3D-printed objects."
            tools="HTML,CSS,JS,Vue.js,Node.js,Express.js,SQL,Figma"
          >
            <img src="/images/showcase-delari3d.jpg" alt="Display of homepage of site" />
          </ExampleComp>
        </div>
      </div>

      <MouseTrailComp uniqueId="mouse-trail--portfolio" />
    </section>

    <section id="contact">
      <div class="wrapper">
        <h2>HIT ME UP<span class="small">:</span></h2>

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
      <MouseTrailComp uniqueId="mouse-trail--contact" />
    </section>
  </main>
</template>

<style scoped>
.flip-on-hover {
  display: flex;

  cursor: default;
}
.flip-on-hover > div {
  width: 0.65em;
  height: 1.1em;
}

.flip-on-hover > div > div {
  font-weight: bold;

  transform-origin: center bottom;
  transition: all 0.2s ease-in-out;

  animation: 1s ease-out 0s scale-reverse;
}
@keyframes scale-reverse {
  0% {
    transform: scale(-1, 0);
    font-weight: 100;
  }
  80% {
    transform: scale(-1, 0);
    font-weight: 100;
  }
  100% {
    transform: scale(1, 1);
    font-weight: bold;
  }
}
.flip-on-hover > div:hover > div {
  transform: scale(-1, 1);
  font-weight: 100;
}

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
  grid-template-columns: 1fr;

  gap: 1.5rem;
}

/* contact */
#contact {
  --color-background: none;
}

/* MEDIA QUERIES */
@media only screen and (min-width: 699px) {
  .examples {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
