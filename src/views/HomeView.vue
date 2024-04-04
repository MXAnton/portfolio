<script>
const FORMSPARK_ACTION_URL = 'https://submit-form.com/6H31VKDg'
const BOTPOISON_PUBLIC_KEY = 'pk_fe43b230-e893-4d80-9009-d5d1b91fd595'

import axios from 'axios'
import Botpoison from '@botpoison/browser'

import MouseTrailComp from '../components/MouseTrailComp.vue'
import ExampleComp from '../components/ExampleComp.vue'
import CarousellComp from '../components/CarousellComp.vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: { MouseTrailComp, ExampleComp, CarousellComp },
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
  mounted() {
    this.gsapScrollInit()
  },

  methods: {
    gsapScrollInit() {
      // HEADERS
      const headings = document.querySelectorAll('h2')
      headings.forEach((heading) => {
        gsap.from(heading, {
          scrollTrigger: {
            toggleActions: 'play none none none',
            trigger: heading
          },
          x: 500,
          duration: 0.4
        })
      })

      // skills WRAPPER
      const toolRows = document.querySelectorAll('.skills__row')
      let index = 0
      toolRows.forEach((toolRow) => {
        toolRow.querySelectorAll('div').forEach((tool) => {
          gsap.from(tool, {
            scrollTrigger: {
              toggleActions: 'play none none none',
              trigger: '.skills-wrapper',
              start: 'top 70%'
            },
            opacity: 0,
            y: 100,
            duration: 0.3,
            delay: index * 0.2, // Apply the delay based on the index
            ease: 'sine'
          })

          index++
        })
      })

      // SECTIONS PARAGRAPHS
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => {
        section.querySelectorAll('p').forEach((paragraph) => {
          gsap.from(paragraph, {
            scrollTrigger: {
              toggleActions: 'play none none none',
              trigger: paragraph,
              start: 'top bottom'
            },
            opacity: 0,
            y: 100,
            duration: 0.7,
            ease: 'sine'
          })
        })
      })

      // PORTFOLIO CARDS
      const portfolioCarousell = document.querySelector('.carousell')
      gsap.from(portfolioCarousell, {
        scrollTrigger: {
          toggleActions: 'play none none none',
          trigger: portfolioCarousell,
          start: '80% bottom'
        },
        opacity: 0,
        y: 100,
        duration: 0.4,
        ease: 'sine'
      })

      // HIT ME UP FORM
      const formInputs = document.querySelector('#contact-form').querySelectorAll('div')
      formInputs.forEach((formInput) => {
        gsap.from(formInput, {
          scrollTrigger: {
            toggleActions: 'play none none none',
            trigger: formInput,
            start: '80% bottom'
          },
          opacity: 0,
          y: 100,
          duration: 0.4,
          ease: 'sine'
        })
        gsap.from(formInput.querySelector('label'), {
          scrollTrigger: {
            toggleActions: 'play none none none',
            trigger: formInput,
            start: '80% bottom'
          },
          opacity: 0,
          x: 100,
          duration: 0.3,
          delay: 0.3,
          ease: 'sine'
        })
      })

      const formButton = document.querySelector('#contact-form').querySelector('button')
      gsap.from(formButton, {
        scrollTrigger: {
          toggleActions: 'play none none none',
          trigger: formButton,
          start: '80% bottom'
        },
        opacity: 0,
        y: 100,
        duration: 0.4,
        ease: 'sine'
      })
    },

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
        <div class="photo">
        </div>
        
        <h1 class="flip-on-hover">
          <div v-for="word in 'Anton Lehrberg'.split(' ')" class="flip-on-hover__word">
            <div v-for="letter in word" class="flip-on-hover__letter">
              <div>{{ letter }}</div>
            </div>
          </div>
        </h1>


        <p class="flip-on-hover h3">
          <div v-for="word in 'Full stack developer'.split(' ')" class="flip-on-hover__word">
            <div v-for="letter in word" class="flip-on-hover__letter">
              <div>{{ letter }}</div>
            </div>
          </div>
        </p>

        <span class="from-country">
          <p class="flip-on-hover h4">
            <div class="flip-on-hover__word">
              <div v-for="letter in 'from'" class="flip-on-hover__letter">
                <div>{{ letter }}</div>
              </div>
            </div>
          </p>
          <p class="from-country__country flip-on-hover h4">
            <div class="flip-on-hover__word">
              <div v-for="letter in 'SWEDEN'" class="flip-on-hover__letter">
                <div>{{ letter }}</div>
              </div>
            </div>
          </p>
        </span>
      </div>

      <RouterLink to="/#skills" class="call-to-action--scroll">
        <img src="@/assets/down-arrow.svg" alt="Down arrow" />
      </RouterLink>

      <MouseTrailComp uniqueId="mouse-trail--home" />
    </section>

    <section id="skills">
      <div class="wrapper">
        <h2>Skills<span class="small">:</span></h2>

        <div class="skills-wrapper skills-wrapper--tech">
          <div class="skills__row">
          </div>
          <div class="skills__row">
            <div class="skill--big">Vue.js</div>
            <div class="skill--big">Node.js</div>
            <div class="skill--big">Express.js</div>
          </div>
          <div class="skills__row">
            <div class="skill--big">SQL</div>
            <div class="skill--big">Github Actions</div>
            <div class="skill--big">Ubuntu</div>
            <div class="skill--big">Caddy</div>
          </div>
        </div>

        <div class="skills-wrapper">
          <div class="skills__row">
            <div class="skill--big">Leadership</div>
            <div class="skill--big">Consulting</div>
            <div class="skill--big">Communication</div>
          </div>
          <div class="skills__row">
            <div class="skill--big">Teamwork</div>
            <div class="skill--big">Planning</div>
          </div>
        </div>
      </div>

      <MouseTrailComp uniqueId="mouse-trail--skills" />
    </section>

    <section id="portfolio">
      <div class="wrapper">
        <h2>Portfolio<span class="small">:</span></h2>
        <p>
          I'm a passionate full-stack developer with focus on Vue 3, Node.js, Express.js and SQL. Here are some
          of the projects I have worked on:
        </p>

        <CarousellComp><li class="carousell__item" v-for="(item, i) in $store.state.projects" :key="i">
          <RouterLink :to="'/project/' + i">
            <div class="link--img">
              <img :src="item.images[0]" alt="Display of homepage of site" />
            </div>

            <div class="carousell__item__text">
              <h3 class="link-1">{{ item.name }}</h3>
              <p>{{ item.intro }}</p>
              
              <p class="button-1">Read more</p>
            </div>

          </RouterLink>
        </li></CarousellComp>
      </div>

      <MouseTrailComp uniqueId="mouse-trail--portfolio" />
    </section>

    <section id="contact">
      <div class="wrapper">
        <h2>Hit me up<span class="small">:</span></h2>

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
              autocomplete="email"
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
/* #region HERO */
.photo {
  width: 14rem;
  aspect-ratio: 1/1;

  margin-bottom: 1rem;


  background-image: url('/src/assets/me.jpg');
  background-size: cover;
  background-position: center center;
  box-shadow: 0 .4em .3em .2em rgba(0, 0, 0, 0.2);

  animation: photo-anim 8s linear infinite alternate;
  transition: box-shadow .3s ease-in-out;
}
@keyframes photo-anim {
  0% {
    border-radius: 60% 40% 40% 70%/60% 40% 70% 40%;
  }
  40% {
    border-radius: 40% 60% 70% 40%/50% 60% 40% 60%;
  }
  70% {
    border-radius: 70% 50% 30% 40%/70% 30% 80% 50%;
  }
  100% {
    border-radius: 60% 40% 40% 70%/60% 40% 70% 40%;
  }
}
.photo:hover {
  box-shadow: 0 .4em .8em .6em rgba(0, 0, 0, 0.2);
  
}

.flip-on-hover {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 0.6em;

  cursor: default;
}
.flip-on-hover__word {
  display: flex;
}

.flip-on-hover__letter > div {
  width: 0.65em;
  height: 1.1em;

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
.flip-on-hover__letter:hover > div {
  transform: scale(-1, 1);
}

#home > .wrapper {
  gap: 0;
  align-items: center;
  text-align: center;
}

.h3 {
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
/* #endregion HERO */

/* #region SKILLS */
#skills {
  --color-background: var(--green-yellow);
  --color-text: var(--blue--dark);
  --color-text--dark: var(--blue--dark60);
}

.skills-wrapper--tech {
  --color: var(--green-yellow);
}
.skills-wrapper--tech .skill--big {
  --color: inherit;
}

.skills-wrapper:not(.skills-wrapper--tech) {
  margin-top: 1rem;
  align-items: end;
}
.skills-wrapper:not(.skills-wrapper--tech) .skills__row {
  justify-content: end;
}
/* #endregion SKILLS */

/* #region PORTFOLIO */
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

/* #region CAROUSELL SPECIFICS */
.carousell__item > a {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.5rem;
  margin: 2px 0 4px;

  background-color: var(--blue--dark);
  text-decoration: none;
  box-shadow: 0 4px 0 var(--blue--dark60);

  transform: translateY(0px);
  transition: all 0.1s ease-in-out, border 0.2s ease-in-out;
}
.carousell__item > a:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 0 var(--blue--dark60);
  opacity: 0.9;
  filter: blur(1px) brightness(0.4);
}
.carousell__item::after {
  content: 'Click to read more';
  font-size: calc(min(5svw, 2rem));
  font-weight: 700;
  line-height: 100%;
  color: black;
  text-align: center;
  text-transform: uppercase;

  padding: 0.2em;
  background-color: white;
  border-radius: 0.2em;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 2;

  filter: brightness(1.5);
  opacity: 0;

  pointer-events: none;

  transition: opacity 0.1s ease-in-out;
}
.carousell__item:has(a:hover)::after {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
.carousell__item > a:active {
  transform: translateY(4px);
  box-shadow: 0 0px 0 var(--blue--dark60);
}

.carousell__item__text {
  padding: 0.5rem 1rem 1.5rem;
}
.carousell__item__text h3 {
  text-shadow: none;
  font-size: 1.4rem;
  margin-bottom: 0.3em;
}
.carousell__item__text > p {
  line-height: 1.3;
}
@media screen and (width < 400px) {
  .carousell__item__text {
    padding: 0.8rem 2.2rem 1.5rem;
  }
}

.carousell__item__text .button-1 {
  width: fit-content;
  font-size: 1rem;
  padding: .2em .6em;
  border-radius: .3em;
  box-shadow: none;
  
  margin-top: .6em;
}
/* #endregion CAROUSELL SPECIFICS */
/* #endregion PORTFOLIO */

/* #region CONTACT */
#contact {
  --color-background: none;
}
/* #endregion CONTACT */

/* #region MEDIA QUERIES */
@media only screen and (min-width: 699px) {
  .examples {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (width < 450px) {
  h1 {
    font-size: 2.3rem;
    text-shadow: 0px 2px 1px var(--color-text--dark);
  }

  .h3 {
    margin-top: .5em;
  }
}
/* #endregion MEDIA QUERIES */
</style>
