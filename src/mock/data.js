import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Matthew Sykes | Front End Developer',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Matthew Sykes',
  subtitle: `and I'm looking for my first job as a developer`,
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'itsme.jpg',
  paragraphOne:
    '	In January of 2020 I started my journey to leave my dead end career behind to become a front end developer. The last year and a half has been spent finishing my degree in Information Technology and learning as much I can about development in whatever free time I have. ',
  paragraphTwo:
    'I have knowledge in HTML, CSS, Sass, JavaScript(ES6+), and Python. I am currently teaching myself React and Gatsby. I have learned a lot since I started, but I realize that the learning never stops. ',
  paragraphThree:
    'My dream is to work with a team of people that wants to help the inexperienced become experienced. Whatever I lack in experience I more than make up for with my willingness to learn and drive to reach my goal of becoming a developer. ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ecbl.jpg',
    title: 'ECBL',
    info: 'HTML, CSS, jQuery',
    info2:
      'Class project: This was the first website I made, and it shows. The only links that are live on the site are for the Providence Roosters. ',
    url: 'https://admiring-johnson-83ee21.netlify.app/',
    repo: 'https://github.com/mnsykes/ecbl',
  },
  {
    id: nanoid(),
    img: 'seeds.jpg',
    title: 'Seeds of Solidarity',
    info: 'Bootstrap, JavaScript, Sass',
    info2:
      'Class project: This was the second site I built. Still not great, but getting better! The assignment was to redesign a website for a local non-profit.',
    url: 'https://upbeat-perlman-79a42e.netlify.app/',
    repo: 'https://github.com/mnsykes/seeds',
  },
  {
    id: nanoid(),
    img: 'form-validation.jpg',
    title: 'Form Validation',
    info: 'JavaScript',
    info2: 'Class project: Form validation using vanilla JavaScript. ',
    url: 'https://mnsykes.github.io/form-validation/',
    repo: 'https://github.com/mnsykes/form-validation',
  },
  {
    id: nanoid(),
    img: 'typography.jpg',
    title: 'Typography',
    info: 'HTML, CSS, Bootstrap',
    info2: 'Class project: Make a visually appealing blog post from a plain text document. ',
    url: 'https://mnsykes.github.io/typography/',
    repo: 'https://github.com/mnsykes/typography',
  },
];

// CONTACT DATA
export const contactData = {
  cta: `If you like what you see, let's talk some more`,
  btn: 'Say Hi',
  email: 'msykes.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/matthew-sykes-36416420b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mnsykes',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
