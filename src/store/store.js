import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      projects: [
        {
          name: 'calmprofessor.se',
          link: 'https://www.calmprofessor.se/',
          description: 'Take quick interactive lessons where ever you are!',
          skills: 'HTML,CSS,JS,Vue.js,Node.js,Express.js,SQL',
          image: '/images/showcase-calmprofessor.jpg'
        },

        {
          name: 'mhfothem.se',
          link: 'https://www.mhfothem.se/',
          description:
            'Motocross association that gives everyone the opportunity to ride motocross, with main focus on children.',
          skills: 'HTML,CSS,JS,Vue.js,Google Firestore & Auth,Figma',
          image: '/images/showcase-mhfothem.jpg'
        },

        {
          name: 'gamifiera.com',
          link: 'https://www.gamifiera.com/',
          description:
            'Gamifiera® offers a one stop solution for your e-commerce and omnichannel gamification and social platform needs.',
          skills: 'HTML,CSS,JS,Vue.js',
          image: '/images/showcase-gamifiera.jpg'
        },

        {
          name: 'delari3d.se',
          link: 'https://www.delari3d.se/',
          description: 'Web store where you can by 3D-printed objects.',
          skills: 'HTML,CSS,JS,Vue.js,Node.js,Express.js,SQL,Figma',
          image: '/images/showcase-delari3d.jpg'
        }
      ]
    }
  }
})

export default store
