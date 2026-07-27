import type { SiteData } from '../../types/site';

export const en: SiteData = {
  meta: {
    title: 'Julien Chapuy — Freelance AI Engineer',
    description:
      'Freelance AI engineer in Osaka, Japan, working on RAG, document processing and cloud infrastructure.',
  },
  nav: {
    brand: 'Julien Chapuy',
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    resume: 'Resume',
    contact: 'Contact',
  },
  intro: {
    greeting: 'Freelance AI Engineer',
    name: 'Julien Chapuy',
    roles: 'RAG, document processing and cloud infrastructure.',
    btn: 'Get in touch',
    ctaHref: 'mailto:pro@julienchapuy.fr',
    stack: [
      {
        category: 'Languages',
        items: [
          { name: 'Python', icon: '/icons/python.svg', level: 'master' },
          {
            name: 'TypeScript',
            icon: '/icons/typescript.svg',
            level: 'master',
          },
          { name: 'Rust', icon: '/icons/rust.svg', level: 'learning' },
          { name: 'SQL', icon: '/icons/postgresql.svg', level: 'master' },
        ],
      },
      {
        category: 'Frameworks',
        items: [
          { name: 'React', icon: '/icons/react.svg', level: 'master' },
          { name: 'Node.js', icon: '/icons/nodejs.svg', level: 'master' },
          { name: 'Astro', icon: '/icons/astro.svg', level: 'master' },
          { name: 'FastAPI', icon: '/icons/fastapi.svg', level: 'master' },
        ],
      },
      {
        category: 'Tools',
        items: [
          { name: 'Docker', icon: '/icons/docker.svg', level: 'master' },
          { name: 'AWS', icon: '/icons/aws.svg', level: 'master' },
          { name: 'Terraform', icon: '/icons/terraform.svg', level: 'master' },
          { name: 'Git', icon: '/icons/git.svg', level: 'master' },
        ],
      },
    ],
  },
  experience: {
    title: 'Experience',
    seeMore: 'See full resume',
    jobs: [
      {
        company: 'Freelance',
        roles: [
          {
            role: 'Freelance AI Engineer',
            period: 'May 2026 - Present',
            desc: [
              'Building retrieval and document-processing pipelines.',
              'Integrating language models into existing products and internal tools.',
              'Setting up evaluation, monitoring and deployment workflows.',
              'Reviewing application and cloud architecture.',
              'Implementing backend, frontend and infrastructure components when needed.',
            ],
          },
        ],
      },
      {
        company: 'Galadrim',
        url: 'https://www.galadrim.fr',
        roles: [
          {
            role: 'Lead AI Engineer',
            period: 'June 2025 - May 2026',
            desc: [
              'Led technical delivery across document processing, RAG and AI-assisted data workflows.',
              'Mentored AI engineers through architecture reviews, implementation support and code reviews.',
              'Owned AWS and deployment architecture supporting projects delivered by a team of 5–10 engineers.',
              'Contributed to technical audits, pre-sales work and recruitment, including more than 20 technical interviews.',
              'Designed and delivered internal training on AWS, Terraform and content-delivery infrastructure.',
            ],
          },
          {
            role: 'AI Software Engineer',
            period: 'June 2024 - June 2025',
            desc: [
              'Built a distributed data-collection platform on AWS ECS using Celery and RabbitMQ.',
              'Developed an artwork-recognition product with a Rust backend, React back office and React Native mobile application.',
              'Worked on document extraction, RAG applications and AI-assisted data-cleaning systems.',
              'Managed infrastructure as code and deployment workflows using AWS and Terraform.',
            ],
          },
        ],
      },
      {
        company: 'Auchan Retail',
        url: 'https://www.auchan-retail.com',
        roles: [
          {
            role: 'Data Scientist',
            period: 'April 2023 - September 2023',
            desc: [
              'Developed and implemented a hybrid, personalized recommendation system for promotional offers, leveraging NLP, Collaborative Filtering, Content-based Filtering, Boosting, and Deep Learning techniques.',
              'Engineered and deployed an OCR and NLP-based tool to accurately detect and identify brands on unlabeled product images.',
              'Deployed an ABC classification solution (Pareto principle) and facilitated its integration by business teams through a Power BI application, enhancing data-driven decision-making.',
            ],
          },
        ],
      },
      {
        company: 'Shoutcast',
        url: 'https://www.shoutcast.com',
        roles: [
          {
            role: 'Data Analyst',
            period: 'April 2022 - August 2022',
            desc: [
              'Conducted in-depth data analysis and developed insightful dashboards using Power BI, Grafana, and HubSpot to monitor key metrics.',
              'Automated data analysis processes through Python scripting and web scraping techniques, improving efficiency.',
              'Established a containerized personal development environment using Docker, streamlining project setup and reproducibility.',
              'Acquired extensive knowledge of the digital audio advertising landscape through data-driven insights and project involvement.',
            ],
          },
        ],
      },
      {
        company: 'University of Otago',
        url: 'https://www.otago.ac.nz',
        roles: [
          {
            role: 'Research Internship',
            period: 'March 2020 - August 2020',
            desc: [
              'Conducted a market analysis of monitoring devices in New Zealand to select optimal solutions for measuring Indoor Air Quality (IAQ) and energy consumption in passive houses.',
              'Performed detailed analysis of datasets originating from selected IAQ and energy monitoring devices.',
              'Developed 3D building models using SketchUp and analyzed their energy performance with an Energy Building Modeling (EBM) suite (Euclid, OpenStudio, EnergyPlus).',
            ],
          },
        ],
      },
      {
        company: 'Thoonsen Trading',
        url: 'https://www.thoonsen.fr',
        roles: [
          {
            role: 'Engineering Internship',
            period: 'January 2019 - February 2019',
            desc: [
              'Contributed to the finalization of a new product: an electric cross-country seat for individuals with disabilities, performing CAD design for approximately forty components using SolidWorks.',
              'Utilized 3D printing to create product prototypes and conducted scientific tests to validate design and functionality.',
            ],
          },
        ],
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        school: 'École Centrale de Lille',
        degree: 'Engineer Degree',
        period: '2018 - 2023',
        desc: 'Generalist Engineering School.',
      },
      {
        school: 'Université de Lille',
        degree: 'Master, Data Science',
        period: '2021 - 2023',
        desc: 'Specialization in Data Science.',
      },
      {
        school: 'Lycée Louis-le-Grand',
        degree: 'Preparatory Classes (MPSI / MP*)',
        period: '2016 - 2018',
        desc: 'Intensive training in Mathematics and Physics.',
      },
    ],
  },
  resumePage: {
    title: 'Resume',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
  },
  about: {
    title: 'About Me',
    profileImage: '/assets/img/photo.jpg',
    description: 'Freelance AI Engineer based in Osaka, Japan.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/julien-chapuy',
        icon: 'devicon-linkedin-plain',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/JulienChapuy',
        icon: 'devicon-github-original',
      },
      {
        name: 'Email',
        url: 'mailto:pro@julienchapuy.fr',
        icon: 'ion-ios-email',
      },
    ],
    aboutMe: [
      'AI engineer based in Japan, with experience building and operating production AI systems.',
      'My work covers AI application architecture, backend implementation, asynchronous processing, infrastructure as code and deployment workflows.',
      'I work with teams developing RAG systems, document-processing pipelines and LLM-enabled applications.',
    ],
  },
  insights: {
    title: 'Blog',
    subtitle:
      'Practical notes on RAG, LLM evaluation and production AI systems.',
    items: [
      {
        category: 'Backend benchmark',
        title: 'Which language for a high-performance backend in 2026?',
        link: '/en/blog/benchmark',
        desc: 'A practical account of benchmarking backends with Grafana K6.',
      },
    ],
  },
  benchmarkArticle: {
    title: 'Which language for a high-performance backend in 2026?',
    subtitle: 'Benchmarking with Grafana K6.',
    content: [
      'In this article published by Galadrim, I compared backend implementations in Go, Rust, Python and JavaScript for a representative REST API.',
      'The protocol uses Grafana K6 to simulate a user journey through a small social network, with loads from 50 to 1,000 concurrent virtual users.',
      'The article presents the methodology, the benchmark limitations and the trade-offs between raw performance, development speed and architectural constraints.',
    ],
    externalLinkText: 'Read the full article on Galadrim’s blog',
    externalLink:
      'https://galadrim.fr/blog/quel-langage-pour-un-backend-performant-en-2026/',
  },
  contact: {
    send: 'Get in touch',
    subtitle: "Let's build something together",
    desc: 'Have an AI project involving RAG, document processing or cloud infrastructure? Feel free to get in touch.',
    address: 'Osaka, Japan · Remote',
    phone: 'linkedin.com/in/julien-chapuy',
    email: 'pro@julienchapuy.fr',
    rights: 'All rights reserved.',
    form: {
      name: 'Your Name',
      email: 'Your Email (optional)',
      subject: 'Subject',
      message: 'Message',
      btn: 'Send Message',
      fallbackSubject: 'Contact from website',
      sending: 'Opening your email client…',
    },
  },
  pages: {
    about: {
      title: 'About | Julien Chapuy',
      description:
        'Background in AI engineering, technical delivery and production systems.',
    },
    resume: {
      title: 'Resume | Julien Chapuy',
      description:
        'AI-engineering background spanning technical delivery and production systems.',
    },
    blog: {
      title: 'Blog | Julien Chapuy',
      description:
        'Practical writing on RAG, LLM evaluation and production AI systems.',
    },
    benchmark: {
      title:
        'Which Language for a High-Performance Backend in 2026? | Julien Chapuy',
      description:
        'A practical account of benchmarking backends with Grafana K6.',
    },
  },
  notFound: {
    title: '404 - Page Not Found',
    description: 'Oops! The page you are looking for does not exist.',
    btn: 'Back to Home',
  },
};
