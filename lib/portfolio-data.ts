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
    period: 'February 2017 \u2013 Present',
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
      'Built a feedback collection platform for nearby coolers, enabling seamless customer and retailer account management with intuitive modules.',
    role: 'Frontend Developer',
    technologies: ['React.js', 'Material UI', 'CSS'],
    team: 4,
    duration: '5 Months',
    keyContribution:
      'Delivered customer and retailer modules that streamlined feedback workflows, reducing manual processes by implementing clean, standards-compliant React and Material UI components with optimized CSS.',
    domain: 'E-commerce',
    platform: 'Web',
  },
  {
    id: 'i4c-api-dashboard',
    name: 'I4C API Status Dashboard',
    shortDescription:
      'Engineered a real-time Next.js monitoring dashboard that tracks banking API transactions, request/response flows, and failure rates with interactive visualizations.',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Recharts', 'Chart.js', 'Jest'],
    team: 2,
    duration: '2024 \u2013 2025',
    keyContribution:
      'Created a production-grade dashboard that improved operational visibility into API health, enabling faster issue detection through reusable charts, filters, exports, OTP-secured authentication, RBAC, and comprehensive test coverage.',
    domain: 'Banking / FinTech',
    platform: 'Web',
  },
  {
    id: 'indispare-web',
    name: 'Indispare \u2013 Web Application Migration',
    shortDescription:
      'Successfully migrated and modernized a large-scale e-commerce web application spanning 40+ pages to a maintainable Next.js architecture.',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'TypeScript', 'React', 'Redux', 'Ant Design'],
    team: 3,
    duration: 'Jul 2023 \u2013 Present',
    keyContribution:
      'Reduced technical debt and improved performance by migrating 40+ legacy pages, delivering consistent responsive UI components and seamless API integrations using modern Next.js patterns.',
    domain: 'E-commerce',
    platform: 'Web',
  },
  {
    id: 'indispare-mobile',
    name: 'Indispare Mobile Application',
    shortDescription:
      'Led frontend development of a cross-platform mobile app that delivered a cohesive user experience across key e-commerce workflows.',
    role: 'Team Lead',
    technologies: ['React Native', 'Redux', 'NativeBase', 'Firebase'],
    team: 4,
    duration: 'Jul 2023 \u2013 Present',
    keyContribution:
      'Drove mobile frontend delivery as Team Lead, establishing reusable component architecture that accelerated feature development and ensured UI consistency across the application.',
    domain: 'E-commerce',
    platform: 'Mobile',
  },
  {
    id: 'clinical-trial',
    name: 'CTMS \u2013 Clinical Trial Management System',
    shortDescription:
      'Developed core frontend for a complex clinical trial platform managing 100+ pages of workflows, data entry, and regulatory processes.',
    role: 'Frontend Developer',
    technologies: ['React', 'Redux', 'Material UI'],
    team: 2,
    duration: 'Jan 2022 \u2013 Jun 2023',
    keyContribution:
      'Enabled efficient clinical trial operations by building reusable components and complex data-rich UIs, integrating multiple APIs, and implementing robust Redux state management for a 100+ page enterprise application.',
    domain: 'Healthcare',
    platform: 'Web',
  },
  {
    id: 'civil-construction',
    name: 'CCM \u2013 Civil Construction Management',
    shortDescription:
      'Led mobile frontend development for a field operations platform supporting construction workflows, inspections, and real-time updates.',
    role: 'Team Lead',
    technologies: ['React Native', 'Redux', 'Material UI', 'Firebase'],
    team: 4,
    duration: 'Mar 2020 \u2013 Dec 2021',
    keyContribution:
      'Improved field team productivity by leading the development of mobile workflows, intuitive UIs, and reliable API integrations that supported critical construction management processes.',
    domain: 'Construction',
    platform: 'Mobile',
  },
  {
    id: 'darpan',
    name: 'Darpan',
    shortDescription:
      'Contributed to a law-enforcement mobile application that supported field officers with secure, offline-capable operational workflows.',
    role: 'Mobile Application Developer',
    technologies: ['React Native', 'Redux', 'Firebase', 'Material UI'],
    team: 3,
    duration: 'Dec 2018 \u2013 Feb 2020',
    keyContribution:
      'Enhanced officer effectiveness in the field by delivering reliable mobile UI components and API integrations tailored to law-enforcement operational requirements.',
    domain: 'Law Enforcement',
    platform: 'Mobile',
  },
  {
    id: 'dinedesk',
    name: 'DineDesk',
    shortDescription:
      'Built frontend features for a restaurant management mobile app that streamlined ordering, inventory, and staff workflows.',
    role: 'Mobile Application Developer',
    technologies: ['React Native', 'Redux', 'NativeBase', 'Realm'],
    team: 2,
    duration: 'Feb 2017 \u2013 Dec 2018',
    keyContribution:
      'Supported restaurant operations by implementing key mobile features and polished UIs that improved daily workflow efficiency for staff and management.',
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
