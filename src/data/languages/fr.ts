import type { SiteData } from "../../types/site";

export const fr: SiteData = {
    meta: {
        title: "Julien Chapuy - Ingénieur en intelligence artificiellle",
        description: "AI Engineer specializing in LLMs, RAG Architectures, and Scalable Backend Systems."
    },
    nav: {
        brand: "Julien Chapuy",
        home: "Accueil",
        about: "À propos",
        services: "Expertise",
        work: "Projets",
        blog: "Blog",
        resume: "CV",
        contact: "Contact"
    },
    intro: {
        greeting: "Bonjour, je suis",
        name: "Julien Chapuy",
        roles: "AI Engineer @ Galadrim.",
        subRoles: "Je construis des expériences digitales accessibles et pixel-perfect.",
        btn: "Découvrir mes projets",
        stack: [
            {
                category: "Langages",
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
                category: "Outils",
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
        title: "Expérience",
        seeMore: "Voir le CV complet",
        jobs: [
            {
                company: "Galadrim",
                url: "https://www.galadrim.fr",
                roles: [
                    {
                        role: "Lead AI Engineer",
                        period: "Juin 2025 - Présent",
                        desc: [
                            "Architecture et déploiement d'une infrastructure de scraping hautement scalable utilisant AWS ECS, Celery et RabbitMQ, avec supervision DevOps pour une équipe de 5-10 ingénieurs.",
                            "Leadership technique et mentorat de deux ingénieurs IA sur des projets d'extraction de documents, chatbots RAG et nettoyage de données assisté par IA.",
                            "Rôle clé dans le recrutement, menant plus de 20 entretiens techniques pour des postes d'ingénieurs IA.",
                            "Contribution à de multiples audits techniques et support avant-vente via une expertise technique."
                        ]
                    },
                    {
                        role: "AI Software Engineer",
                        period: "Juin 2024 - Juin 2025",
                        desc: [
                            "Conception d'une solution full-stack complète incluant un backend Rust, un backoffice React et une application mobile React Native avec recherche d'œuvres d'art par reconnaissance d'image.",
                            "Développement et animation de formations internes sur des technologies clés incluant AWS, Terraform et les CDNs."
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
                        period: "Avril 2023 - Septembre 2023",
                        desc: [
                            "Développement d'un système de recommandation hybride personnalisé pour les offres promotionnelles (NLP, Collaborative Filtering, Deep Learning).",
                            "Conception et déploiement d'un outil OCR et NLP pour détecter et identifier les marques sur des images de produits non étiquetées.",
                            "Déploiement d'une solution de classification ABC et intégration via une application Power BI pour l'aide à la décision."
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
                        period: "Avril 2022 - Août 2022",
                        desc: [
                            "Analyse de données approfondie et création de tableaux de bord (Power BI, Grafana, HubSpot) pour le suivi des métriques clés.",
                            "Automatisation des processus d'analyse via scripts Python et web scraping.",
                            "Mise en place d'un environnement de développement conteneurisé avec Docker.",
                            "Acquisition d'une connaissance approfondie du paysage de la publicité audio numérique."
                        ]
                    }
                ]
            },
            {
                company: "University of Otago",
                url: "https://www.otago.ac.nz",
                roles: [
                    {
                        role: "Stage de Recherche",
                        period: "Mars 2020 - Août 2020",
                        desc: [
                            "Analyse de marché des dispositifs de surveillance en Nouvelle-Zélande pour la mesure de la qualité de l'air intérieur (QAI) et la consommation énergétique.",
                            "Analyse détaillée de datasets provenant de dispositifs de monitoring QAI et énergie.",
                            "Modélisation de bâtiments 3D (SketchUp) et analyse de performance énergétique avec une suite EBM (Euclid, OpenStudio, EnergyPlus)."
                        ]
                    }
                ]
            },
            {
                company: "Thoonsen Trading",
                url: "https://www.thoonsen.fr",
                roles: [
                    {
                        role: "Stage Ingénieur",
                        period: "Janvier 2019 - Février 2019",
                        desc: [
                            "Contribution à la finalisation d'un nouveau produit : siège de cross-country électrique pour personnes handicapées (conception CAO SolidWorks).",
                            "Utilisation de l'impression 3D pour le prototypage et tests scientifiques pour valider la conception."
                        ]
                    }
                ]
            }
        ]
    },
    education: {
        title: "Formation",
        items: [
            {
                school: "École Centrale de Lille",
                degree: "Diplôme d'Ingénieur",
                period: "2018 - 2023",
                desc: "École d'Ingénieur Généraliste."
            },
            {
                school: "Université de Lille",
                degree: "Master, Data Science",
                period: "2021 - 2023",
                desc: "Spécialisation en Data Science."
            },
            {
                school: "Lycée Louis-le-Grand",
                degree: "Classes Préparatoires (MPSI / MP*)",
                period: "2016 - 2018",
                desc: "Formation intensive en mathématiques et physique."
            }
        ]
    },
    resumePage: {
        title: "CV",
        summary: "Résumé",
        experience: "Expérience",
        education: "Formation",
        skills: "Compétences",
        download: "Télécharger PDF"
    },
    about: {
        title: "À propos",
        profileImage: "/assets/img/photo.jpg",
        description: "AI Engineer @ Galadrim",
        socials: [
            { name: "LinkedIn", url: "https://linkedin.com/in/julien-chapuy", icon: "devicon-linkedin-plain" },
            { name: "GitHub", url: "https://github.com/JulienChapuy", icon: "devicon-github-original" },
            { name: "Email", url: "mailto:contact@julienchapuy.fr", icon: "ion-ios-email" }
        ],
        aboutMe: [
            "Ingénieur diplômé de l'<strong>École Centrale de Lille</strong>, je me spécialise dans la convergence du génie logiciel et de l'intelligence artificielle.",
            "Passionné par l'innovation, j'accompagne les entreprises dans l'intégration de l'IA Générative pour transformer des idées complexes en solutions robustes et performantes.",
            "Mon expertise couvre la conception d'architectures RAG, l'optimisation des LLMs et le développement d'applications full-stack scalables."
        ]
    },
    services: {
        title: "Expertise",
        subtitle: "Focus sur la delivery technique et l'innovation pragmatique.",
        items: [
            {
                icon: "ion-code-working",
                title: "Large Language Models",
                desc: "Conception d'architectures RAG, optimisation des prompts et fine-tuning. Focus sur la précision des outputs et la réduction des hallucinations."
            },
            {
                icon: "ion-ios-gear",
                title: "Software Engineering",
                desc: "Développement full-stack robuste (TypeScript, React, Python). Architecture micro-services et APIs scalables conçues pour la production."
            },
            {
                icon: "ion-stats-bars",
                title: "Technical Excellence",
                desc: "Benchmarking de performance, optimisation des coûts d'inférence et mise en place de pipelines CI/CD automatisés."
            }
        ]
    },
    stats: {
        experience: "Années d'Expérience",
        projects: "Projets IA Majeurs",
        articles: "Articles Techniques",
        papers: "Publications"
    },
    portfolio: {
        title: "Projets",
        subtitle: "Sélection de travaux en intelligence artificielle et développement web.",
        seeMore: "Voir plus de projets",
        items: []
    },
    insights: {
        title: "Blog",
        subtitle: "Documentation technique, articles de blog et archives académiques.",
        items: [
            {
                category: "Leadership Technique",
                title: "Benchmark & Optimisation LLM",
                link: "/blog/benchmark",
                desc: "Analyse des coûts des LLMs, architectures RAG et sécurité des systèmes d'IA."
            }
        ]
    },
    benchmarkArticle: {
        title: "Optimisation & Benchmark LLM",
        subtitle: "Réduction des coûts et de la latence pour la mise en production d'IA Générative.",
        content: [
            "Chez Galadrim, j'ai mené une étude approfondie sur les performances des différents LLMs du marché (OpenAI, Anthropic, Mistral, Llama).",
            "L'objectif était de définir des abaques de coût/performance pour guider nos choix d'architecture RAG.",
            "J'ai développé un protocole de test automatisé mesurant la latence (TTFT, TPS) et la qualité des réponses sur des tâches spécifiques (résumé, extraction, classification)."
        ],
        galadrimLinkText: "Lire l'article complet sur le blog de Galadrim",
        galadrimLink: "https://www.galadrim.fr/blog"
    },
    contact: {
        send: "Envoyer un message",
        subtitle: "Collaborons sur vos projets",
        desc: "Vous avez un projet d'intelligence artificielle, besoin d'une expertise technique ou simplement envie d'échanger ? N'hésitez pas à me contacter.",
        address: "Paris, France / Remote",
        phone: "linkedin.com/in/julien-chapuy",
        email: "contact@julienchapuy.fr",
        form: {
            name: "Votre nom",
            email: "Votre email",
            subject: "Objet",
            message: "Message",
            btn: "Envoyer le message"
        }
    }
};
