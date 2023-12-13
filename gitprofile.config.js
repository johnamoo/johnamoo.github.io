// gitprofile.config.js

const config = {
  github: {
    username: 'johnamoo', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'johnamoo',
    email: 'jn.linking@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1bovgEmse0et_7HLiihCBRiLX17RviZ5t/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'SQL',
    'Python',
    'Splunk',
    'Database Design',
    'Microsoft SQL Server',
    'Secure Network Architecture',
    'Network Design',
    'Network Configuration',
    'Network Troubleshooting',
    'Security Management',
    'Project Management',
  ],
  experiences: [
    {
      company: 'Duke University',
      position: 'Information Security Analyst',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://security.duke.edu/about-duke-security-offices/',
    },
    {
      company: 'Durham Rescue Mission',
      position: 'Volunteer and Systems Coordinator',
      from: 'October 2019',
      to: 'January 2021',
      companyLink: 'https://durhamrescuemission.org/about/meet-our-staff/',
    },
  ],
  certifications: [
    {
      name: 'ISC2 Certified in Cybersecurity',
      body: '',
      year: 'November 2023',
      link: 'https://example.com'
    },
  ],
  education: [
    {
      institution: 'East Carolina University',
      degree: 'Bachelors of Science in Business Administration, Management Information Systems',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Durham Technical Community College',
      degree: 'Associate in Engineering',
      from: '2019',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Elevator Pitch',
      description:
        '',
      imageUrl: 'https://www.officeevolution.com/wp-content/uploads/2022/08/elevator-pitch-stock-photo.jpeg',
      link: 'https://drive.google.com/file/d/1J2MLFPAuxQJ5Nr8x8SsxEbOLp5smO9eu/view?usp=sharing',
    },
    {
      title: 'Linux Commands',
      description:
        '',
      imageUrl: 'https://th.bing.com/th/id/OIP.Cc4Tb5Aa6x6MZrkn7eqAhgHaIL?rs=1&pid=ImgDetMain',
      link: 'https://drive.google.com/file/d/1lh5XjZeR9ZyaB-Y24O-X_C1zxyXk4CwX/view?usp=sharing',
    },
    {
      title: 'Financial Service Security Audit',
      description:
        '',
      imageUrl: 'https://bleuwire.com/wp-content/uploads/2018/12/security-audit-e1543866953603.jpg',
      link: 'https://drive.google.com/file/d/1WF5AAwtf5t4vxo_etCwMcm5s00ZJSDca/view?usp=sharing',
    },
    {
      title: 'AT&T Enterprise Architecture Report',
      description:
        '',
      imageUrl: 'https://www.bisinfotech.com/wp-content/uploads/2021/12/IIOT-400x300.jpg',
      link: 'https://drive.google.com/file/d/1wTOSA78E-XBZqs5sZ7pqCLzLQwCyJ1vV/view?usp=sharing',
    },
    {
      title: 'NIST Security Incident',
      description:
        '',
      imageUrl: 'https://dashautomoversnetwork.com/wp-content/uploads/2021/12/NIST-CSF-2048x1132.jpg',
      link: 'https://example.com',
    },
    {
      title: 'Home Network Heatmap',
      description:
        '',
      imageUrl: 'https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/2041/2019/12/heat-map-image-example-480.jpg',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'linkedin', // medium | dev
    username: 'johnamoo', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },

  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
