export const profile = {
  name: 'Mateus Souza Marinho',
  tagline: 'Backend Developer',
  stack: ['TypeScript', 'Java', 'Python', 'Node.js', 'Linux'],
  location: 'Paulínia, São Paulo, Brazil',
  email: 'matiazzsouza@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mateus-marinho-5a3517357',
  github: 'https://github.com/matiazzsouza',
  intro:
    'Software Engineering student focused on backend development, building secure and well-validated APIs with Node.js and TypeScript.',
  bio: 'Software Engineering student focused on backend development, with experience building APIs using Node.js and TypeScript, and integrating relational and non-relational databases. Skilled in implementing business rules, data validation, and application security. Currently seeking an internship opportunity to grow technically and contribute to real-world projects.',
  education: {
    degree: "Bachelor's in Software Engineering",
    school: 'PUC-Campinas',
    period: 'Jan 2025 – Dec 2028',
  },
  language: 'English — Intermediate (B1/B2): reading, writing & conversation',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'C', 'C++'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Spring Boot', 'REST APIs'],
  },
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS', 'JavaScript'],
  },
  {
    category: 'Databases',
    items: ['Firebase Firestore', 'Oracle'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub'],
  },
]

export type Project = {
  name: string
  subtitle: string
  description: string
  tech: string[]
  link: string
}

export const projects: Project[] = [
  {
    name: 'MesclaInvest',
    subtitle: 'Startup Investment Platform (Simulation)',
    description:
      'Backend development with APIs for simulating token buy/sell operations, balance control, transaction logging, and valuation calculation (dashboard). Integrated with Firebase Firestore, with validation and security applied.',
    tech: ['TypeScript', 'Node.js', 'Firebase Firestore', 'Git/GitHub'],
    link: 'https://github.com/matiazzsouza/MesclaInvest.git',
  },
  {
    name: 'NotaDez',
    subtitle: 'Academic Grade Management System',
    description:
      'RESTful API for academic performance analysis, with business rules for pass/fail status. Contributed to interface development and applied basic validation and security.',
    tech: ['TypeScript', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Git/GitHub'],
    link: 'https://github.com/matiazzsouza/ES-PI2-2025-T03-G14.git',
  },
  {
    name: 'CiberFé',
    subtitle: 'Interactive Web Platform',
    description:
      'Web application with a quiz system and interactive timeline, implementing JavaScript logic to control questions, answers, and scoring.',
    tech: ['HTML5', 'CSS', 'JavaScript', 'Node.js', 'Git/GitHub'],
    link: 'https://github.com/matiazzsouza/PROJETO-PI.git',
  },
]
