import type { SiteData } from "../../types/site";

export const en: SiteData = {
    meta: {
        title: "Julien Chapuy - AI Engineer",
        description: "AI Engineer specializing in LLMs, RAG Architectures, and Scalable Backend Systems."
    },
    nav: {
        brand: "Julien Chapuy",
        home: "Home",
        about: "About",
        services: "Expertise",
        work: "Projects",
        blog: "Blog",
        resume: "Resume",
        contact: "Contact"
    },
    intro: {
        greeting: "Software Engineer @ Galadrim",
        name: "Julien Chapuy",
        roles: "AI Engineer specializing in LLMs, RAG Architectures, and Scalable Backend Systems.",
        btn: "Read Bio",
        stack: [
            {
                category: "Languages",
                items: [
                    { name: "Python", icon: "/icons/python.svg", level: "master" },
                    { name: "TypeScript", icon: "/icons/typescript.svg", level: "master" },
                    { name: "Rust", icon: "/icons/rust.svg", level: "learning" },
                    { name: "SQL", icon: "/icons/postgresql.svg", level: "master" }
                ]
            },
            {
                category: "Frameworks",
                items: [
                    { name: "React", icon: "/icons/react.svg", level: "master" },
                    { name: "Node.js", icon: "/icons/nodejs.svg", level: "master" },
                    { name: "Astro", icon: "/icons/astro.svg", level: "master" },
                    { name: "FastAPI", icon: "/icons/fastapi.svg", level: "master" }
                ]
            },
            {
                category: "Tools",
                items: [
                    { name: "Docker", icon: "/icons/docker.svg", level: "master" },
                    { name: "AWS", icon: "/icons/aws.svg", level: "master" },
                    { name: "Terraform", icon: "/icons/terraform.svg", level: "master" },
                    { name: "Git", icon: "/icons/git.svg", level: "master" }
                ]
            }
        ]
    },
    experience: {
        title: "Experience",
        seeMore: "See full resume",
        jobs: [
            {
                company: "Galadrim",
                url: "https://www.galadrim.fr",
                roles: [
                    {
                        role: "Lead AI Engineer",
                        period: "June 2025 - Present",
                        desc: [
                            "Architected and deployed a highly scalable scrapping infrastructure utilizing AWS ECS, Celery, and RabbitMQ, overseeing DevOps and cloud infrastructure for a team of 5-10 engineers.",
                            "Provided technical leadership and mentorship to two AI engineers on projects including document extraction and analysis, RAG chatbot development, and AI-augmented data cleaning processes.",
                            "Played a key role in talent acquisition by conducting over 20 technical interviews for AI engineering positions.",
                            "Contributed to multiple technical audits and supported pre-sales activities by providing technical expertise."
                        ]
                    },
                    {
                        role: "AI Software Engineer",
                        period: "June 2024 - June 2025",
                        desc: [
                            "Engineered a comprehensive full-stack solution, including a Rust backend, a React-based backoffice, and a React Native mobile application featuring AI-powered artwork retrieval via image recognition.",
                            "Developed and delivered internal training programs on key technologies including AWS, Terraform, and Content Delivery Networks (CDNs)."
                        ]
                    }
                ]
            },
            {
                company: "Auchan Retail",
                url: "https://www.auchan-retail.com",
                roles: [
                    {
                        role: "Data Scientist",
                        period: "April 2023 - September 2023",
                        desc: [
                            "Developed and implemented a hybrid, personalized recommendation system for promotional offers, leveraging NLP, Collaborative Filtering, Content-based Filtering, Boosting, and Deep Learning techniques.",
                            "Engineered and deployed an OCR and NLP-based tool to accurately detect and identify brands on unlabeled product images.",
                            "Deployed an ABC classification solution (Pareto principle) and facilitated its integration by business teams through a Power BI application, enhancing data-driven decision-making."
                        ]
                    }
                ]
            },
            {
                company: "Shoutcast",
                url: "https://www.shoutcast.com",
                roles: [
                    {
                        role: "Data Analyst",
                        period: "April 2022 - August 2022",
                        desc: [
                            "Conducted in-depth data analysis and developed insightful dashboards using Power BI, Grafana, and HubSpot to monitor key metrics.",
                            "Automated data analysis processes through Python scripting and web scraping techniques, improving efficiency.",
                            "Established a containerized personal development environment using Docker, streamlining project setup and reproducibility.",
                            "Acquired extensive knowledge of the digital audio advertising landscape through data-driven insights and project involvement."
                        ]
                    }
                ]
            },
            {
                company: "University of Otago",
                url: "https://www.otago.ac.nz",
                roles: [
                    {
                        role: "Research Internship",
                        period: "March 2020 - August 2020",
                        desc: [
                            "Conducted a market analysis of monitoring devices in New Zealand to select optimal solutions for measuring Indoor Air Quality (IAQ) and energy consumption in passive houses.",
                            "Performed detailed analysis of datasets originating from selected IAQ and energy monitoring devices.",
                            "Developed 3D building models using SketchUp and analyzed their energy performance with an Energy Building Modeling (EBM) suite (Euclid, OpenStudio, EnergyPlus)."
                        ]
                    }
                ]
            },
            {
                company: "Thoonsen Trading",
                url: "https://www.thoonsen.fr",
                roles: [
                    {
                        role: "Engineering Internship",
                        period: "January 2019 - February 2019",
                        desc: [
                            "Contributed to the finalization of a new product: an electric cross-country seat for individuals with disabilities, performing CAD design for approximately forty components using SolidWorks.",
                            "Utilized 3D printing to create product prototypes and conducted scientific tests to validate design and functionality."
                        ]
                    }
                ]
            }
        ]
    },
    education: {
        title: "Education",
        items: [
            {
                school: "École Centrale de Lille",
                degree: "Engineer Degree",
                period: "2018 - 2023",
                desc: "Generalist Engineering School."
            },
            {
                school: "Université de Lille",
                degree: "Master, Data Science",
                period: "2021 - 2023",
                desc: "Specialization in Data Science."
            },
            {
                school: "Lycée Louis-le-Grand",
                degree: "Preparatory Classes (MPSI / MP*)",
                period: "2016 - 2018",
                desc: "Intensive training in Mathematics and Physics."
            }
        ]
    },
    resumePage: {
        title: "Resume",
        summary: "Summary",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        download: "Download PDF"
    },
    about: {
        title: "About Me",
        profileImage: "/assets/img/photo.jpg",
        description: "AI Engineer @ Galadrim",
        socials: [
            { name: "LinkedIn", url: "https://linkedin.com/in/julien-chapuy", icon: "devicon-linkedin-plain" },
            { name: "GitHub", url: "https://github.com/JulienChapuy", icon: "devicon-github-original" },
            { name: "Email", url: "mailto:contact@julienchapuy.fr", icon: "ion-ios-email" }
        ],
        aboutMe: [
            "A graduate of <strong>École Centrale de Lille</strong>, I specialize in the intersection of software engineering and artificial intelligence.",
            "Passionate about innovation, I help companies leverage Generative AI to turn complex ideas into robust, high-performance solutions.",
            "My expertise covers RAG architecture design, LLM optimization, and the development of scalable full-stack applications."
        ]
    },
    services: {
        title: "Expertise",
        subtitle: "Focus on technical delivery and pragmatic innovation.",
        items: [
            {
                icon: "ion-code-working",
                title: "Large Language Models",
                desc: "Designing RAG architectures, prompt optimization, and fine-tuning. Strong focus on output accuracy and hallucination reduction."
            },
            {
                icon: "ion-ios-gear",
                title: "Software Engineering",
                desc: "Robust full-stack development (TypeScript, React, Python). Micro-services architecture and scalable APIs built for production environments."
            },
            {
                icon: "ion-stats-bars",
                title: "Technical Excellence",
                desc: "Performance benchmarking, inference cost optimization, and implementing automated CI/CD pipelines."
            }
        ]
    },
    stats: {
        experience: "Years of Experience",
        projects: "Core AI Projects",
        articles: "Technical Posts",
        papers: "Papers"
    },
    portfolio: {
        title: "Projects",
        subtitle: "A selection of my work in Artificial Intelligence and Software Engineering.",
        seeMore: "See more projects",
        items: []
    },
    insights: {
        title: "Blog",
        subtitle: "Technical documentation, blog posts, and academic archives.",
        items: [
            {
                category: "Technical Leadership",
                title: "LLM Benchmark & Optimization",
                link: "blog/benchmark",
                desc: "LLM cost analysis, RAG architectures, and AI system security."
            }
        ]
    },
    benchmarkArticle: {
        title: "LLM Benchmark & Optimization",
        subtitle: "In-depth analysis of LLM cost/performance trade-offs for production RAG systems.",
        content: [
            "At Galadrim, I led a comprehensive study on the performance of various market LLMs (OpenAI, Anthropic, Mistral, Llama).",
            "The goal was to define cost/performance benchmarks to guide our RAG architecture choices.",
            "I developed an automated testing protocol measuring latency (TTFT, TPS) and response quality on specific tasks (summarization, extraction, classification)."
        ],
        galadrimLinkText: "Read the full article on Galadrim's blog",
        galadrimLink: "https://www.galadrim.fr/blog"
    },
    contact: {
        send: "Get in touch",
        subtitle: "Let's build something together",
        desc: "Have an AI project, need technical expertise, or just want to chat about the future of tech? Feel free to reach out.",
        address: "Paris, France / Remote",
        phone: "linkedin.com/in/julien-chapuy",
        email: "contact@julienchapuy.fr",
        form: {
            name: "Your Name",
            email: "Your Email",
            subject: "Subject",
            message: "Message",
            btn: "Send Message"
        }
    }
};
