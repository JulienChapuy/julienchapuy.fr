export interface MetaData {
  title: string;
  description: string;
}

export interface NavLabels {
  brand: string;
  home: string;
  about: string;
  blog: string;
  resume: string;
  contact: string;
}

export interface IntroContent {
  greeting: string;
  name: string;
  roles: string;
  subRoles?: string;
  btn: string;
  ctaHref: string;
  stack: StackCategory[];
}

export interface Role {
  role: string;
  period: string;
  desc: string[];
  stack?: StackItem[];
}

export interface Job {
  company: string;
  url?: string;
  roles: Role[];
}

export interface ExperienceContent {
  title: string;
  seeMore?: string;
  jobs: Job[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  desc: string;
}

export interface EducationContent {
  title: string;
  items: EducationItem[];
}

export interface ResumePageLabels {
  title: string;
  experience: string;
  education: string;
  skills: string;
}

export interface StackItem {
  name: string;
  icon: string;
  level?: 'master' | 'learning';
}

export interface StackCategory {
  category: string;
  items: StackItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AboutContent {
  title: string;
  profileImage: string;
  description: string;
  socials: SocialLink[];
  aboutMe: string[];
}

export interface InsightItem {
  category: string;
  title: string;
  link: string;
  desc: string;
}

export interface InsightsContent {
  title: string;
  subtitle: string;
  items: InsightItem[];
}

export interface ContactContent {
  send: string;
  subtitle: string;
  desc: string;
  address: string;
  phone: string;
  email: string;
  form: {
    name: string;
    email: string;
    subject: string;
    message: string;
    btn: string;
  };
}

export interface BenchmarkArticle {
  title: string;
  subtitle: string;
  content: string[];
  externalLinkText: string;
  externalLink: string;
}

export interface PageMetadata {
  title: string;
  description: string;
}

export interface PageMetadataContent {
  about: PageMetadata;
  resume: PageMetadata;
  blog: PageMetadata;
  benchmark: PageMetadata;
}

export interface NotFoundContent {
  title: string;
  description: string;
  btn: string;
}

export interface SiteData {
  meta: MetaData;
  nav: NavLabels;
  intro: IntroContent;
  experience: ExperienceContent;
  education: EducationContent;
  resumePage: ResumePageLabels;
  about: AboutContent;
  insights: InsightsContent;
  contact: ContactContent;
  benchmarkArticle: BenchmarkArticle;
  pages: PageMetadataContent;
  notFound: NotFoundContent;
}
