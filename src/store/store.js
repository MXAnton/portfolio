import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      projects: [
        {
          name: 'Puzzle Online',
          time: 'January 2024 - now',
          link: 'https://puzzle-online.netlify.app/',
          intro:
            'Upload an image and create your own puzzle in your desired size. Then put together the puzzle while being timed.',
          description: `Generate a puzzle with desired amount of pieces and your own image.
          Grab single pieces by pressing left mouse button, grabbed piece is marked with a shadow.
          Grab multiple pieces by first marking them with right mouse button.
          Zoom with mouse scroll or by using the zoom input in the navigation to see even the tiniest details.
          Pan/move around the puzzle by pressing scroll button, grabbing empty board or by pressing PAN🔒 in the navigation.
          See the current position on puzzle board in the bottom left corner of the viewport while panning.
          See the image of the puzzle by pressing the 🖼🙈 button in the navigation.
          Pause the game to not ruin your time.
          Solve the puzzle by connecting the pieces.
          Music and sound effects is a must have 😃`,
          skills: ['HTML', 'CSS', 'JS'],
          images: [
            '/images/sc_puzzle_1.png',
            '/images/sc_puzzle_image.png',
            '/images/sc_puzzle_pause.png',
            '/images/sc_puzzle_zoom-pan.png',
            '/images/sc_puzzle_completed.png'
          ],
          github: 'https://github.com/MXAnton/puzzle-online'
        },

        {
          name: 'onezeroacademy.se',
          time: 'February 2023 - now',
          link: 'https://onezeroacademy.se/',
          intro:
            'Learn computer science in a fun and interactive way, by taking courses on onezeroacademy.se.',
          description: `From ideas and Figma design I decide what technologies to use, develop and publish the website. It is still under development, but we have come a far way.
          The website is hosted on a VPS using Caddy Server to serve the frontend and backend. The frontend is built using Vue and Axios to connect to the backend API which is built using Node.js and Express. PostgreSQL is used as database.`,
          skills: [
            'Vue.js',
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'Github Actions',
            'Project Management'
          ],
          images: [
            '/images/sc_onezeroacademy_landing-page.png',
            '/images/sc_onezeroacademy_dragndrop.png',
            '/images/sc_onezeroacademy_multiple-choice.png',
            '/images/sc_onezeroacademy_click-through.png',
            '/images/sc_onezeroacademy_super-layout.png',
            '/images/sc_onezeroacademy_course.png',
            '/images/sc_onezeroacademy_account.png'
          ]
        },

        {
          name: 'gamifiera.com',
          time: 'April 2023 - May 2023',
          link: 'https://www.gamifiera.com/',
          intro:
            'Gamifiera® offers a one stop solution for your e-commerce and omnichannel gamification and social platform needs.',
          description:
            'Together with a designer from Gamifiera I developed their website using Vue.',
          skills: ['Vue.js', 'Gitlab', 'Consulting', 'Teamwork'],
          images: [
            '/images/sc_gamifiera_landing-page.png',
            '/images/sc_gamifiera_landing-page-2.png',
            '/images/sc_gamifiera_customer-case-1.png',
            '/images/sc_gamifiera_customer-case-2.png'
          ]
        },

        {
          name: 'mhfothem.se',
          time: 'Nobember 2022 - January 2023',
          link: 'https://www.mhfothem.se/',
          intro:
            'Motocross association that gives everyone the opportunity to ride motocross, with main focus on children.',
          description:
            'When the old website through Idrottonline was shut down, I took on the task of designing, developing, and launching a new website for them.',
          skills: ['Vue.js', 'Google Firestore & Auth', 'MongoDB', 'Figma'],
          images: [
            '/images/sc_mhfothem_landing-page.png',
            '/images/sc_mhfothem_facility.png',
            '/images/sc_mhfothem_footer.png',
            '/images/sc_mhfothem_calendar.png',
            '/images/sc_mhfothem_opening.png',
            '/images/sc_mhfothem_admin-mondayactivity.png',
            '/images/sc_mhfothem_admin-news.png',
            '/images/sc_mhfothem_news-nav.png',
            '/images/sc_mhfothem_edit-new.png',
            '/images/sc_mhfothem_edit-new-2.png'
          ]
        },

        {
          name: 'Delar i 3D',
          time: 'Late 2022 - early. 2023',
          intro: 'Web store where you can by 3D-printed objects.',
          description:
            'This was my "gymnasiearbete". It was a fully working web store with products, basket and payment integrated using Stripe.',
          skills: ['Stripe', 'Vue.js', 'Node.js', 'Express.js', 'SQL', 'Figma'],
          images: [
            '/images/sc_delari3d.jpg',
            '/images/sc_delari3d_contact-1.png',
            '/images/sc_delari3d_contact-2.png',
            '/images/sc_delari3d_basket.png',
            '/images/sc_delari3d_menu.png'
          ]
        }
      ]
    }
  }
})

export default store
