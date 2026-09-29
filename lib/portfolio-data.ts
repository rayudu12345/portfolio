export const profile = {
  name: 'Changalrayudu D',
  role: 'Frontend Developer',
  tagline:
    'Building scalable, secure web and mobile experiences with React.js, Next.js, React Native and TypeScript.',
  yearsExperience: '8+',
  uiPages: '100+',
  pageMigrations: '40+',
  platforms: 'Web + Mobile',
  phone: '+91-8790087842',
  email: 'changalrayudu.d@gmail.com',
  linkedin: 'https://www.linkedin.com/in/changalrayudu-d-794a7a149',
  linkedinHandle: 'changalrayudu-d-794a7a149',
  github: 'https://github.com/rayudu12345',
  githubHandle: 'rayudu12345',
  resumeUrl: '#',
  location: 'Hyderabad, India',
};

export const heroStats = [
  { label: 'Years Experience', value: '8+', icon: 'Briefcase' },
  { label: 'UI Pages Built', value: '100+', icon: 'LayoutDashboard' },
  { label: 'Page Migrations', value: '40+', icon: 'ArrowRightLeft' },
  { label: 'Platforms', value: 'Web + Mobile', icon: 'Smartphone' },
];

export const heroTech = ['React', 'Next.js', 'TypeScript', 'React Native', 'Redux'];

export const aboutText = [
  'Frontend Developer with 8+ years of professional experience in web and mobile application development, specialising in React.js, Next.js, TypeScript, JavaScript and React Native.',
  'Experienced in building scalable, responsive applications, migrating large-scale legacy projects, developing reusable UI components and integrating RESTful APIs.',
  'Proven experience leading development activities, collaborating with cross-functional teams, improving application security and maintaining complex enterprise dashboards.',
];

export const domains = [
  'Banking / FinTech',
  'E-commerce',
  'Clinical Trial Management',
  'Construction Management',
  'Law Enforcement',
  'Restaurant Management',
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'Code2',
    skills: ['React.js', 'Next.js', 'React Native', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'State Management',
    icon: 'Component',
    skills: ['Redux', 'React-Redux', 'Context API'],
  },
  {
    title: 'UI Frameworks',
    icon: 'Palette',
    skills: ['Ant Design', 'Material UI', 'Tailwind CSS'],
  },
  {
    title: 'API Integration',
    icon: 'Server',
    skills: ['REST APIs', 'Axios'],
  },
  {
    title: 'Data Visualisation',
    icon: 'ChartNoAxesCombined',
    skills: ['Recharts', 'Chart.js'],
  },
  {
    title: 'Testing',
    icon: 'BadgeCheck',
    skills: ['Jest', 'React Testing Library', 'Unit Testing', 'Integration Testing'],
  },
  {
    title: 'Development Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'npm', 'Postman'],
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: ['SQLite', 'PostgreSQL'],
  },
  {
    title: 'Deployment & Security',
    icon: 'ShieldCheck',
    skills: ['IIS', 'PM2', 'Next.js Standalone', 'Node.js', 'Responsive Design', 'Reusable Components', 'Application Migration', 'RBAC', 'Web Security'],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
};

export const experience: Experience[] = [
  {
    company: 'Travash Software Solutions Pvt Ltd',
    role: 'Frontend Application Developer',
    period: 'February 2017 – June 2025',
    current: false,
    description:
      'Developed and maintained enterprise-scale web and mobile applications using React.js, Next.js, React Native, TypeScript and Redux. Built reusable UI components and shared application functionality, coordinated cross-functional teams, integrated RESTful APIs, improved application security and delivered complex enterprise dashboards.'
  },
];

export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  role: string;
  technologies: string[];
  team: number;
  duration: string;
  keyContribution: string;
  domain: string;
  platform: 'Web' | 'Mobile';
};

export const projects: Project[] = [
  {
    id: 'i4c-api-dashboard',
    name: 'I4C API Status Dashboard',
    shortDescription:
      'Next.js App Router dashboard for monitoring banking API transactions against the NCRP (National Cyber Crime Reporting Portal) API with request/response monitoring, secure OTP-based auth, server-side API proxies and interactive filterable charts.',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Recharts', 'Chart.js', 'Jest'],
    team: 2,
    duration: '2024 – 2025',
    keyContribution:
      'Developed a monitoring dashboard for tracking bank API requests, responses, transaction statuses and failures. Built reusable dashboard components, data tables, filters, charts, reporting modules and bank-wise reports. Implemented bank-wise and date-wise filtering, transaction analytics, data exports, role-based page access, backend API integration through Axios, username/password authentication with OTP-based workflows, security remediation and dependency upgrades, plus unit and integration tests.',
    domain: 'Banking / FinTech',
    platform: 'Web',
  },
  {
    id: 'indispare-web',
    name: 'Indispare – Web Application Migration',
    shortDescription:
      'Migration and modernisation of a large-scale web application covering more than 40 pages, with responsive UI and integrated APIs.',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'TypeScript', 'React', 'Redux', 'Ant Design'],
    team: 3,
    duration: 'Jul 2023 – Present',
    keyContribution:
      'Contributed to the migration and modernisation of a large-scale web application covering more than 40 pages. Developed responsive UI components, integrated APIs using modern Next.js patterns, and used Redux with Ant Design for consistent interface development.',
    domain: 'E-commerce',
    platform: 'Web',
  },
  {
    id: 'indispare-mobile',
    name: 'Indispare Mobile Application',
    shortDescription:
      'Frontend development for a mobile application with reusable UI components and coordinated implementation workflows.',
    role: 'Team Lead',
    technologies: ['React Native', 'Redux', 'NativeBase', 'Firebase'],
    team: 4,
    duration: 'Jul 2023 – Present',
    keyContribution:
      'Led frontend development activities for a mobile application. Developed reusable mobile UI components and coordinated implementation and issue resolution across development activities.',
    domain: 'E-commerce',
    platform: 'Mobile',
  },
  {
    id: 'clinical-trial',
    name: 'CTMS – Clinical Trial Management System',
    shortDescription:
      'Large clinical trial management application with more than 100 pages and multiple business workflows.',
    role: 'Frontend Developer',
    technologies: ['React', 'Redux', 'Material UI'],
    team: 2,
    duration: 'Jan 2022 – Jun 2023',
    keyContribution:
      'Worked on a large application comprising more than 100 pages and multiple business workflows. Developed and maintained reusable components and complex user interfaces, integrated application functionality with backend APIs, and managed shared state through Redux.',
    domain: 'Healthcare',
    platform: 'Web',
  },
  {
    id: 'civil-construction',
    name: 'CCM – Civil Construction Management',
    shortDescription:
      'Construction management application supporting business workflows and mobile field operations.',
    role: 'Team Lead',
    technologies: ['React Native', 'Redux', 'Material UI', 'Firebase'],
    team: 4,
    duration: 'Mar 2020 – Dec 2021',
    keyContribution:
      'Contributed to frontend development across additional business applications, including construction management workflows, UI implementation, API integration, application maintenance and feature delivery.',
    domain: 'Construction',
    platform: 'Mobile',
  },
  {
    id: 'darpan',
    name: 'Darpan',
    shortDescription:
      'Law-enforcement application supporting field workflows, UI implementation and API integration.',
    role: 'Mobile Application Developer',
    technologies: ['React Native', 'Redux', 'Firebase', 'Material UI'],
    team: 3,
    duration: 'Dec 2018 – Feb 2020',
    keyContribution:
      'Contributed to frontend development across application workflows, including UI implementation, API integration, application maintenance and feature delivery.',
    domain: 'Law Enforcement',
    platform: 'Mobile',
  },
  {
    id: 'dinedesk',
    name: 'DineDesk',
    shortDescription:
      'Restaurant management mobile application supporting operational workflows and feature delivery.',
    role: 'Mobile Application Developer',
    technologies: ['React Native', 'Redux', 'NativeBase', 'Realm'],
    team: 2,
    duration: 'Feb 2017 – Dec 2018',
    keyContribution:
      'Contributed to frontend development across application workflows, including UI implementation, API integration, application maintenance and feature delivery.',
    domain: 'Restaurant',
    platform: 'Mobile',
  },
];

export type LeadershipItem = {
  title: string;
  description: string;
  icon: string;
};

export const leadership: LeadershipItem[] = [
  {
    title: 'Frontend Architecture',
    description:
      'Designing scalable, maintainable frontend architectures with modular component structures and clear state management patterns.',
    icon: 'Layers',
  },
  {
    title: 'Mobile Development',
    description:
      'Building cross-platform mobile applications with React Native that deliver native-quality experiences on iOS and Android.',
    icon: 'Smartphone',
  },
  {
    title: 'Team Leadership',
    description:
      'Leading and mentoring development teams, ensuring code quality, timely delivery and knowledge sharing across projects.',
    icon: 'Users',
  },
  {
    title: 'API Integration',
    description:
      'Integrating REST APIs and Firebase services with robust error handling, caching strategies and optimistic UI updates.',
    icon: 'Plug',
  },
  {
    title: 'Performance Optimisation',
    description:
      'Optimising load times and runtime performance through code splitting, memoisation, lazy loading and render-cycle tuning.',
    icon: 'Gauge',
  },
  {
    title: 'Reusable UI Components',
    description:
      'Creating reusable, well-documented component libraries that accelerate development and ensure design consistency.',
    icon: 'Blocks',
  },
  {
    title: 'Code Quality',
    description:
      'Enforcing code quality with SonarLint, TypeScript strictness, code reviews and consistent coding standards.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Stakeholder Collaboration',
    description:
      'Collaborating with product managers, designers and backend teams to translate requirements into reliable features.',
    icon: 'Handshake',
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Jawaharlal Nehru Technological University, Anantapur',
    period: 'Completed',
    description:
      'Postgraduate qualification supporting a professional focus on frontend architecture, web and mobile application development, API integration and software quality.',
  },
];
