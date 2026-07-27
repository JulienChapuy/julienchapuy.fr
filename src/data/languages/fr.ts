import type { SiteData } from '../../types/site';

export const fr: SiteData = {
  meta: {
    title: 'Julien Chapuy — Ingénieur IA freelance',
    description:
      'Ingénieur IA freelance à Osaka, au Japon, spécialisé en RAG, traitement documentaire et infrastructure cloud.',
  },
  nav: {
    brand: 'Julien Chapuy',
    home: 'Accueil',
    about: 'À propos',
    blog: 'Blog',
    resume: 'CV',
    contact: 'Contact',
  },
  intro: {
    greeting: 'Ingénieur IA freelance',
    name: 'Julien Chapuy',
    roles: 'RAG, traitement documentaire et infrastructure cloud.',
    btn: 'Me contacter',
    ctaHref: 'mailto:pro@julienchapuy.fr',
    stack: [
      {
        category: 'Langages',
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
        category: 'Outils',
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
    title: 'Expérience',
    seeMore: 'Voir le CV complet',
    jobs: [
      {
        company: 'Indépendant',
        roles: [
          {
            role: 'Ingénieur IA freelance',
            period: 'Mai 2026 - Présent',
            desc: [
              'Conception de pipelines de recherche et de traitement documentaire.',
              'Intégration de modèles de langage dans des produits existants et des outils internes.',
              'Mise en place de workflows d’évaluation, de monitoring et de déploiement.',
              'Revue de l’architecture applicative et cloud.',
              'Implémentation de composants backend, frontend et infrastructure selon les besoins.',
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
            period: 'Juin 2025 - Mai 2026',
            desc: [
              'Pilotage de la réalisation technique sur des workflows de traitement documentaire, RAG et de données assistées par IA.',
              'Accompagnement d’ingénieurs IA via des revues d’architecture, du support à l’implémentation et des revues de code.',
              'Responsabilité de l’architecture AWS et du déploiement de projets réalisés par une équipe de 5 à 10 ingénieurs.',
              'Contribution à des audits techniques, à l’avant-vente et au recrutement, avec plus de 20 entretiens techniques.',
              'Conception et animation de formations internes sur AWS, Terraform et l’infrastructure de diffusion de contenu.',
            ],
          },
          {
            role: 'AI Software Engineer',
            period: 'Juin 2024 - Juin 2025',
            desc: [
              'Conception d’une plateforme distribuée de collecte de données sur AWS ECS avec Celery et RabbitMQ.',
              'Développement d’un produit de reconnaissance d’œuvres d’art avec backend Rust, back office React et application mobile React Native.',
              'Travail sur l’extraction de documents, des applications RAG et des systèmes de nettoyage de données assistés par IA.',
              'Gestion de l’infrastructure as code et des workflows de déploiement avec AWS et Terraform.',
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
            period: 'Avril 2023 - Septembre 2023',
            desc: [
              "Développement d'un système de recommandation hybride personnalisé pour les offres promotionnelles (NLP, Collaborative Filtering, Deep Learning).",
              "Conception et déploiement d'un outil OCR et NLP pour détecter et identifier les marques sur des images de produits non étiquetées.",
              "Déploiement d'une solution de classification ABC et intégration via une application Power BI pour l'aide à la décision.",
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
            period: 'Avril 2022 - Août 2022',
            desc: [
              'Analyse de données approfondie et création de tableaux de bord (Power BI, Grafana, HubSpot) pour le suivi des métriques clés.',
              "Automatisation des processus d'analyse via scripts Python et web scraping.",
              "Mise en place d'un environnement de développement conteneurisé avec Docker.",
              "Acquisition d'une connaissance approfondie du paysage de la publicité audio numérique.",
            ],
          },
        ],
      },
      {
        company: 'University of Otago',
        url: 'https://www.otago.ac.nz',
        roles: [
          {
            role: 'Stage de Recherche',
            period: 'Mars 2020 - Août 2020',
            desc: [
              "Analyse de marché des dispositifs de surveillance en Nouvelle-Zélande pour la mesure de la qualité de l'air intérieur (QAI) et la consommation énergétique.",
              'Analyse détaillée de datasets provenant de dispositifs de monitoring QAI et énergie.',
              'Modélisation de bâtiments 3D (SketchUp) et analyse de performance énergétique avec une suite EBM (Euclid, OpenStudio, EnergyPlus).',
            ],
          },
        ],
      },
      {
        company: 'Thoonsen Trading',
        url: 'https://www.thoonsen.fr',
        roles: [
          {
            role: 'Stage Ingénieur',
            period: 'Janvier 2019 - Février 2019',
            desc: [
              "Contribution à la finalisation d'un nouveau produit : siège de cross-country électrique pour personnes handicapées (conception CAO SolidWorks).",
              "Utilisation de l'impression 3D pour le prototypage et tests scientifiques pour valider la conception.",
            ],
          },
        ],
      },
    ],
  },
  education: {
    title: 'Formation',
    items: [
      {
        school: 'École Centrale de Lille',
        degree: "Diplôme d'Ingénieur",
        period: '2018 - 2023',
        desc: "École d'Ingénieur Généraliste.",
      },
      {
        school: 'Université de Lille',
        degree: 'Master, Data Science',
        period: '2021 - 2023',
        desc: 'Spécialisation en Data Science.',
      },
      {
        school: 'Lycée Louis-le-Grand',
        degree: 'Classes Préparatoires (MPSI / MP*)',
        period: '2016 - 2018',
        desc: 'Formation intensive en mathématiques et physique.',
      },
    ],
  },
  resumePage: {
    title: 'CV',
    experience: 'Expérience',
    education: 'Formation',
    skills: 'Compétences',
  },
  about: {
    title: 'À propos',
    profileImage: '/assets/img/photo.jpg',
    description: 'Ingénieur IA freelance basé à Osaka, au Japon.',
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
      'Ingénieur IA basé au Japon, avec une expérience dans la conception et l’exploitation de systèmes d’IA en production.',
      'Mon travail couvre l’architecture d’applications IA, le développement backend, le traitement asynchrone, l’infrastructure as code et les workflows de déploiement.',
      'J’accompagne les équipes qui développent des systèmes RAG, des pipelines de traitement documentaire et des applications intégrant des LLM.',
    ],
  },
  insights: {
    title: 'Blog',
    subtitle:
      'Notes pratiques sur le RAG, l’évaluation des LLM et les systèmes d’IA en production.',
    items: [
      {
        category: 'Benchmark backend',
        title: 'Quel langage pour un backend performant en 2026 ?',
        link: '/blog/benchmark',
        desc: 'Retour d’expérience sur un benchmark de backends avec Grafana K6.',
      },
    ],
  },
  benchmarkArticle: {
    title: 'Quel langage pour un backend performant en 2026 ?',
    subtitle: 'Benchmarker avec Grafana K6.',
    content: [
      'Dans cet article publié chez Galadrim, j’ai comparé des implémentations backend en Go, Rust, Python et JavaScript pour une API REST représentative.',
      'Le protocole s’appuie sur Grafana K6 et simule le parcours d’un utilisateur sur un mini réseau social, avec une charge allant de 50 à 1 000 utilisateurs virtuels simultanés.',
      'L’article présente la méthodologie, les limites du benchmark et les enseignements pour choisir entre performance brute, productivité et contraintes d’architecture.',
    ],
    externalLinkText: 'Lire l’article complet sur le blog de Galadrim',
    externalLink:
      'https://galadrim.fr/blog/quel-langage-pour-un-backend-performant-en-2026/',
  },
  contact: {
    send: 'Envoyer un message',
    subtitle: 'Collaborons sur vos projets',
    desc: 'Vous avez un projet IA autour du RAG, du traitement documentaire ou de l’infrastructure cloud ? N’hésitez pas à me contacter.',
    address: 'Osaka, Japon · À distance',
    phone: 'linkedin.com/in/julien-chapuy',
    email: 'pro@julienchapuy.fr',
    form: {
      name: 'Votre nom',
      email: 'Votre email (optionnel)',
      subject: 'Objet',
      message: 'Message',
      btn: 'Envoyer le message',
    },
  },
  pages: {
    about: {
      title: 'À propos | Julien Chapuy',
      description:
        'Parcours en ingénierie IA, réalisation technique et systèmes en production.',
    },
    resume: {
      title: 'CV | Julien Chapuy',
      description:
        'Parcours en ingénierie IA, réalisation technique et systèmes en production.',
    },
    blog: {
      title: 'Blog | Julien Chapuy',
      description:
        'Notes pratiques sur le RAG, l’évaluation des LLM et les systèmes d’IA en production.',
    },
    benchmark: {
      title:
        'Quel langage pour un backend performant en 2026 ? | Julien Chapuy',
      description:
        'Retour d’expérience sur un benchmark de backends avec Grafana K6.',
    },
  },
  notFound: {
    title: '404 - Page Non Trouvée',
    description: "Oups ! La page que vous cherchez n'existe pas.",
    btn: "Retour à l'accueil",
  },
};
