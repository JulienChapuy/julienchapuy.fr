export interface MetaData {
    title: string;
    description: string;
}

export interface NavLabels {
    brand: string;
    home: string;
    about: string;
    services: string;
    work: string;
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
    url: string;
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
    summary: string;
    experience: string;
    education: string;
    skills: string;
    download: string;
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

export interface ServiceItem {
    icon: string;
    title: string;
    desc: string;
}

export interface ServicesContent {
    title: string;
    subtitle: string;
    items: ServiceItem[];
}

export interface StatsContent {
    experience: string;
    projects: string;
    articles: string;
    papers: string;
}

export interface PortfolioItem {
    link: string;
    img: string;
    title: string;
    category: string;
    tech: string;
}

export interface PortfolioContent {
    title: string;
    subtitle: string;
    seeMore: string;
    items: PortfolioItem[];
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
    galadrimLinkText: string;
    galadrimLink: string;
}

export interface SiteData {
    meta: MetaData;
    nav: NavLabels;
    intro: IntroContent;
    experience: ExperienceContent;
    education: EducationContent;
    resumePage: ResumePageLabels;
    about: AboutContent;
    services: ServicesContent;
    stats: StatsContent;
    portfolio: PortfolioContent;
    insights: InsightsContent;
    contact: ContactContent;
    benchmarkArticle: BenchmarkArticle;
}
