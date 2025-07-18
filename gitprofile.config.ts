// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'NaveedMohiuddin', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['NaveedMohiuddin/Multi-AZ-Disaster-Recovery','NaveedMohiuddin/bigdata-spark-dataproc','NaveedMohiuddin/real-time-stream-processing-kafka-spark-gcp','NaveedMohiuddin/Upify', 'NaveedMohiuddin/shortnt','NaveedMohiuddin/ProfilePage_flutter','NaveedMohiuddin/YahtzeeGame_flutter','NaveedMohiuddin/FlashCardsApp_flutter','NaveedMohiuddin/BattleShips_flutter','NaveedMohiuddin/WeatherApp_flutter','NaveedMohiuddin/ML_Project1','NaveedMohiuddin/ML_Project2'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'ShortNt (Short + Notes)',
          description:
            'ShortNt is a web application designed to efficiently summarize lengthy content, including text, audio files, and YouTube videos. The app allows users to input their content in three formats: text, audio, or YouTube URL, and generates summarized outputs in both text and audio formats. We leveraged the BART Model for advanced abstractive summarization. Built using a tech stack that includes React.js for the front end, Django and Python for the back end, and SQLite for data storage, ShortNt also features user registration and file management, enabling users to save and access their summaries conveniently.',
          imageUrl:
            '/Shortnt.png',
          link: 'https://github.com/NaveedMohiuddin/shortnt',
        },
        {
          title: 'Upify (Updates + Notify)',
          description:
            'Upify is a web application that keeps users informed about the latest internships, jobs, webinars, and courses by sending timely email notifications. As the project leader, I guided a team of three in developing this platform, which utilizes React.js for the front end and Node.js, Express, and MongoDB for the back end. Upify streamlines access to valuable career opportunities, ensuring registered users never miss important updates.',
          imageUrl:'/upify.png',
          link: 'https://github.com/NaveedMohiuddin/Upify',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Naveed Mohiuddin',
    description: '',
    imageURL: '/Linkedin_profile.jpg',
  },
  social: {
    linkedin: 'naveed-mohiuddin-852021196',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'naveedmohiuddin.github.io',
    phone: '',
    email: 'naveedmohiuddin0311@gmail.com',
  },
  resume: {
    fileUrl:
      '/Naveed_Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'AWS',
    'EC2',
    'S3',
    'ELB',
    'VPC',
    'Python',
    'React.js',
    'Node.js',
    'SQL',
    'Git',
    'Docker',
    'CSS',
    'git',
    'Dart',
    'Flutter',
    'MongoDB',
    'Snowflake',
    'github',
    'VS Code',
    'Azure',
  ],
  experiences: [
    {
      company: 'Applied Information Sciences',
      position: 'Software Engineer',
      from: 'April 2022',
      to: 'July 2023',
      companyLink: 'https://www.linkedin.com/company/geico/',
    },
    {
      company: 'Applied Information Sciences ',
      position: 'Intern',
      from: 'March 2022',
      to: 'April 2022',
      companyLink: 'https://www.linkedin.com/company/appliedis/',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified: Solutions Architect Associate',
      body: 'Amazon Web Services',
      year: 'July 2025',
      link: 'https://www.credly.com/badges/5d45af7f-a5fa-4328-95db-33a65c90b5fb/public_url',
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      body: 'Microsoft',
      year: 'August 2022',
      link: 'https://www.credly.com/badges/71031c3f-ac61-49a3-885b-1d2cd3624135/linked_in_profile',
    },
    
  ],
  educations: [
    {
      institution: 'Illinois Institute of Technology',
      degree: 'Masters in Computer Science',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Osmania University',
      degree: 'Bachelor of Engineering - CSE',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: '', // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'sunset',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  // enablePWA: true,
};

export default CONFIG;
