import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      projects: [
        {
          id: 0,
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
          github: ['https://github.com/MXAnton/puzzle-online']
        },

        {
          id: 1,
          name: 'bitlearny.com',
          time: 'February 2023 - now',
          link: 'https://bitlearny.com/',
          intro:
            'Learn computer science in a fun and interactive way, by taking courses on bitlearny.',
          description: `From ideas and Figma design I decide what technologies to use, develop and publish the website. It is still under development, but we have come a far way.
          The website is hosted on a VPS using Caddy Server to serve the frontend and backend. The frontend is built using Vue and Axios to connect to the backend API which is built using Node.js and Express. PostgreSQL is used as database.
          Guest users are allowed to do the courses but their progress gets deleted when they refresh or leave the site. If you create an account your progress will be stored in the database.
          When completing a lesson your score increases, the more correct answers the more score you get.
          There are 10+ different lesson bites with different layout and/or content.
          If something is wrong all users can report the problem by pressing the questionmark in the bottom left corner.`,
          skills: [
            'Vue.js',
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'Github Actions',
            'Project Management'
          ],
          images: [
            '/images/sc_bitlearny_landing-page.png',
            '/images/sc_bitlearny_dragndrop.png',
            '/images/sc_bitlearny_multiple-choice.png',
            '/images/sc_bitlearny_click-through.png',
            '/images/sc_bitlearny_super-layout.png',
            '/images/sc_bitlearny_course.png',
            '/images/sc_bitlearny_account.png'
          ]
        },

        {
          id: 5,
          name: 'Your shoes',
          time: 'Late 2023 - now',
          link: 'https://your-shoes.netlify.app/',
          github: [
            'https://github.com/MXAnton/webshop-frontend',
            'https://github.com/MXAnton/webshop-backend'
          ],
          intro: 'Modern responsive webshop selling shoes.',
          description: `Browse different shoes with several filters and sorting options to find the correct shoes.
            Look through the different colors and their images.
            Select your desired size and quantity.
            Shopping cart where you can easily change the quantity of or remove shoes from the cart.
            Checkout using Stripe (test mode).`,
          skills: ['Stripe', 'Vue.js', 'Node.js', 'Express.js', 'MySQL', 'Figma'],
          images: [
            '/images/sc_your-shoes_home.png',
            '/images/sc_your-shoes_men.png',
            '/images/sc_your-shoes_women.png',
            '/images/sc_your-shoes_mini-shopping-cart.png',
            '/images/sc_your-shoes_shopping-cart-checkout.png',
            '/images/sc_your-shoes_stripe-checkout.png',
            '/images/sc_your-shoes_contact.png',
            '/images/sc_your-shoes_about.png'
          ]
        },

        {
          id: 2,
          name: 'Attendance system',
          time: 'March 2024 - March 2024',
          link: 'https://www.youtube.com/watch?v=IAtH0lDpLbo',
          github: ['https://github.com/MXAnton/mhf-othem-narvarosystem'],
          intro: 'Report attendance in a neat and simple user interface, MHF Othem.',
          description: `Report attendance in a neat and simple user interface that automatically sends files to Dropbox App formatted for easy importing into Excel, from which the responsible person of the association can easily access attendance and edit the membership list.
          This saves a lot of time for the attendance reporting person to access the information via Dropbox and avoid entering all attendance into Excel from paper (which was used before).`,
          skills: [
            'Vue.js',
            'Node.js',
            'Express.js',
            'MySQL',
            'Caddy Server',
            'Dropbox App',
            'Ubuntu',
            'Raspberry Pi server',
            'Project Management'
          ],
          images: [
            '/images/sc_mhfnarvarosystem_landing-page.png',
            '/images/sc_mhfnarvarosystem_landing-page-2.png',
            '/images/sc_mhfnarvarosystem_names.png',
            '/images/sc_mhfnarvarosystem_confirm.png',
            '/images/sc_mhfnarvarosystem_login.png',
            '/images/sc_mhfnarvarosystem_narvarolist.png'
          ]
        },

        {
          id: 3,
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
          id: 4,
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
        }
      ]
    }
  }
})

export default store
