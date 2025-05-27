// Career and Education Data
// This file contains professional experience and education information
// for easy maintenance and updates
//
// Usage:
// import { careerExperiences, education } from '../data/career.js';

export const careerExperiences = [
  {
    id: 'dealfront-2022',
    title: 'Senior Growth Manager',
    company: 'Dealfront',
    companyUrl: 'https://www.dealfront.com',
    startDate: 'January 2022',
    endDate: 'Present',
    location: 'Remote',
    description: [
      'Owned activation metrics for the website and 3 products',
      'Improved Leadfeeder key onboarding metrics by 50%+ and trial to paid CR by 15% via signup and onboarding optimizations',
      'Coordinated multiple successful product launches with PLG and sales assisted motions',
      'Generated 500+ incremental leads per month from data-driven experiments on key website pages',
    ],
    skills: [
      'Growth Marketing',
      'CRO',
      'Lifecycle Marketing',
      'Product Marketing',
      'A/B Testing',
      'Metabase',
      'Data Analysis',
      'Team Leadership',
    ],
  },
  {
    id: 'upstatement-2018',
    title: 'Lead Engineer',
    company: 'Upstatement',
    companyUrl: 'https://www.upstatement.com',
    startDate: '2018',
    endDate: '2024',
    description:
      'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
    skills: [
      'JavaScript',
      'TypeScript',
      'HTML & SCSS',
      'React',
      'Next.js',
      'React Native',
      'WordPress',
      'Contentful',
      'Node.js',
      'PHP',
    ],
  },
  {
    id: 'upstatement-senior-2020',
    title: 'Senior Engineer',
    company: 'Upstatement',
    companyUrl: 'https://www.upstatement.com',
    startDate: '2020',
    endDate: '2022',
    description:
      'Led development of complex web applications and design systems for high-profile clients. Mentored junior developers and established best practices for code quality, testing, and deployment processes.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'GraphQL', 'AWS'],
  },
  {
    id: 'upstatement-engineer-2018',
    title: 'Engineer',
    company: 'Upstatement',
    companyUrl: 'https://www.upstatement.com',
    startDate: '2018',
    endDate: '2020',
    description:
      'Developed responsive websites and web applications using modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect user interfaces and ensure optimal user experience across all devices.',
    skills: ['JavaScript', 'React', 'HTML & CSS', 'WordPress', 'jQuery'],
  },
];

export const education = [
  {
    id: 'northeastern-cs',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Northeastern University',
    year: '2018',
    details: 'Concentration in Software Engineering',
  },
  {
    id: 'aws-certified',
    degree: 'AWS Certified Solutions Architect',
    institution: 'Amazon Web Services',
    year: '2022',
    details: 'Associate Level Certification',
  },
  {
    id: 'react-certification',
    degree: 'React Developer Certification',
    institution: 'Meta',
    year: '2021',
    details: 'Advanced React and Frontend Development',
  },
];
