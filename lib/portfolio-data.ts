export const profile = {
  name: 'Changalrayudu D',
  role: 'Senior Software Development Engineer',
  tagline:
    'Frontend and mobile engineer with 9+ years of experience designing, developing and maintaining enterprise-scale web and mobile applications using React.js, Next.js, React Native and TypeScript.',
  yearsExperience: '9+',
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
  { label: 'Years Experience', value: '9+', icon: 'Briefcase' },
  { label: 'UI Pages Built', value: '100+', icon: 'LayoutDashboard' },
  { label: 'Page Migrations', value: '40+', icon: 'ArrowRightLeft' },
  { label: 'Platforms', value: 'Web + Mobile', icon: 'Smartphone' },
];

export const heroTech = ['React', 'Next.js', 'TypeScript', 'React Native', 'Redux'];

export const aboutText = [
  'Senior Software Development Engineer with over 9 years of experience designing, developing and maintaining enterprise-scale web and mobile applications using React.js, Next.js, React Native and TypeScript.',
  'Experienced in leading frontend development, performing code reviews, building reusable responsive UI components and migrating legacy interfaces to modern stacks.',
  'Delivered enterprise dashboards with charts, complex tables, filters and exports, implemented secure authentication and RBAC, and collaborated with backend and infrastructure teams to troubleshoot production issues and remediate VAPT findings.',
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
    skills: ['React.js', 'Next.js', 'React Native', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'State Management',
    icon: 'Component',
    skills: ['Redux', 'React-Redux', 'Context API'],
  },
  {
    title: 'UI Frameworks',
    icon: 'Palette',
    skills: ['Material UI', 'Tailwind CSS', 'Ant Design'],
  },
  {
    title: 'API & Integration',
    icon: 'Server',
    skills: ['REST APIs', 'Axios', 'Firebase', 'Google Maps'],
  },
  {
    title: 'Mobile',
    icon: 'Smartphone',
    skills: ['React Native', 'SQLite', 'Push Notifications', 'Custom Animations'],
  },
  {
    title: 'Testing',
    icon: 'BadgeCheck',
    skills: ['Unit Testing', 'Integration Testing', 'Jest', 'React Testing Library'],
  },
  {
    title: 'Tools & Practices',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'CI/CD', 'Code Reviews', 'Responsive UI'],
  },
  {
    title: 'Security & Deployment',
    icon: 'ShieldCheck',
    skills: ['RBAC', 'Authentication', 'VAPT Remediation', 'Dependency Upgrades'],
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
    company: 'Travash Software Solutions Pvt. Ltd.',
    role: 'Senior Software Development Engineer',
    period: 'February 2017 – Present',
    current: true,
    description:
      'Led frontend development for web and mobile projects using React.js, Next.js, and React Native. Performed code reviews, designed reusable responsive UI components, migrated 40+ legacy pages to modern stacks, built enterprise dashboards with charts/tables/filters/exports, implemented authentication & RBAC, integrated RESTful APIs, developed React Native features (SQLite, Firebase, push notifications), wrote unit/integration tests, and collaborated on production issues, SSL, deployments, and VAPT remediations.',
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
    id: 'smart-rewards',
    name: 'Smart Rewards (Insigma BD App)',
    shortDescription:
      'Web application to gather feedback on nearby coolers with customer and retailer account modules.',
    role: 'Frontend Developer',
    technologies: ['React.js', 'Material UI', 'CSS'],
    team: 4,
    duration: '5 Months',
    keyContribution:
      'Developed modules for customer and retailer accounts. Implemented UI using external CSS classes, internal/inline CSS while adhering to coding standards. Contributed ReactJS and Material UI based components.',
    domain: 'E-commerce',
    platform: 'Web',
  },
  {
    id: 'i4c-api-dashboard',
    name: 'I4C API Status Dashboard',
    shortDescription:
      'Next.js App Router dashboard for monitoring banking API transactions against the NCRP API with request/response monitoring, secure OTP-based auth, and interactive charts.',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Recharts', 'Chart.js', 'Jest'],
    team: 2,
    duration: '2024 – 2025',
    keyContribution:
      'Developed a monitoring dashboard for tracking bank API requests, responses, transaction statuses and failures. Built reusable components, data tables, filters, charts, reporting modules. Implemented filtering, analytics, exports, RBAC, authentication with OTP, security remediations, and tests.',
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
      'Contributed to the migration of more than 40 pages. Developed responsive UI components and integrated APIs using modern Next.js patterns.',
    domain: 'E-commerce',
    platform: 'Web',
  },
  {
    id: 'indispare-mobile',
    name: 'Indispare Mobile Application',
    shortDescription:
      'Frontend development for a mobile application with reusable UI components.',
    role: 'Team Lead',
    technologies: ['React Native', 'Redux', 'NativeBase', 'Firebase'],
    team: 4,
    duration: 'Jul 2023 – Present',
    keyContribution:
      'Led frontend development activities. Developed reusable mobile UI components and coordinated implementation.',
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
      'Worked on a large application with 100+ pages. Developed reusable components and complex UIs, integrated APIs, and managed state with Redux.',
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
      'Led frontend development for construction management workflows, UI implementation, and API integration. Collaborated in a four-member team.',
    domain: 'Construction',
    platform: 'Mobile',
  },
  {
    id: 'darpan',
    name: 'Darpan',
    shortDescription:
      'Law-enforcement application supporting field workflows.',
    role: 'Mobile Application Developer',
    technologies: ['React Native', 'Redux', 'Firebase', 'Material UI'],
    team: 3,
    duration: 'Dec 2018 – Feb 2020',
    keyContribution:
      'Contributed to frontend development, UI implementation, and API integration for field workflows.',
    domain: 'Law Enforcement',
    platform: 'Mobile',
  },
  {
    id: 'dinedesk',
    name: 'DineDesk',
    shortDescription:
      'Restaurant management mobile application supporting operational workflows.',
    role: 'Mobile Application Developer',
    technologies: ['React Native', 'Redux', 'NativeBase', 'Realm'],
    team: 2,
    duration: 'Feb 2017 – Dec 2018',
    keyContribution:
      'Contributed to frontend development for restaurant management workflows, UI, and feature delivery. Collaborated on Dinesh projects.',
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
    title: 'Frontend Leadership',
    description:
      'Leading frontend development activities, performing code reviews, and coordinating with cross-functional teams to deliver features on time.',
    icon: 'Users',
  },
  {
    title: 'Application Migration',
    description:
      'Led migration of 40+ legacy pages to modern frontend technologies, improving maintainability and consistency.',
    icon: 'ArrowRightLeft',
  },
  {
    title: 'Reusable Components',
    description:
      'Designed and developed reusable, responsive UI components using TypeScript, JavaScript, HTML and CSS.',
    icon: 'Blocks',
  },
  {
    title: 'Enterprise Dashboards',
    description:
      'Delivered complex enterprise dashboards with charts, data tables, filters, reports and export functionality.',
    icon: 'LayoutDashboard',
  },
  {
    title: 'Security & RBAC',
    description:
      'Implemented authentication, protected routes, role-based access control, and remediated VAPT findings.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Mobile Development',
    description:
      'Built React Native features including SQLite local storage, Firebase integration, push notifications, and custom animations.',
    icon: 'Smartphone',
  },
  {
    title: 'Testing & Quality',
    description:
      'Wrote unit and integration tests for reusable components and key application functionality.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Cross-team Collaboration',
    description:
      'Collaborated with backend and infrastructure teams to troubleshoot production issues, deployments, and SSL.',
    icon: 'Handshake',
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Jawaharlal Nehru Technological University (JNTU)',
    period: '2014',
    description: 'Postgraduate degree in Computers.',
  },
  {
    degree: 'B.Sc | Computer Science and Technology',
    institution: 'Sri Venkateshwara University (SVU), Tirupati',
    period: '2011',
    description: 'Undergraduate degree in Computer Science and Technology.',
  },
];
