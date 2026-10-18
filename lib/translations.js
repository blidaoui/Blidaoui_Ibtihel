// All visible text of the portfolio, in English, French and Arabic.
// Technology names (React, NestJS, PostgreSQL...) stay in Latin script in every language.

export const LANGS = [
  { code: "en", label: "EN", name: "English" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "ar", label: "عربي", name: "العربية" },
];

export const translations = {
  /* ------------------------------------------------------------------ */
  en: {
    meta: { title: "Ibtihel Blidaoui — Full-Stack & AI Developer" },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      resume: "Resume",
      contact: "Contact me",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
      home: "Go to top",
    },
    hero: {
      status: "Open to internships & final-year projects (PFE) — remote or on-site",
      name: "Ibtihel Blidaoui",
      lead: "Full-stack developer building secure, AI-powered web applications.",
      text: "End-to-end internship experience — REST APIs in NestJS, responsive interfaces in Next.js and React, and a gesture- and voice-controlled system for operating rooms.",
      ctaProjects: "Explore projects",
      ctaCv: "Download CV",
      diagramCaption: "The stack I build, end to end",
      layers: {
        interface: "Interface",
        api: "API",
        ai: "AI service",
        data: "Data & delivery",
      },
    },
    about: {
      title: "Secure, AI-powered full-stack development with real project impact",
      p1: "Software engineering student with hands-on full-stack experience across three internships, building production features end-to-end — from REST APIs in NestJS and Node.js/Express to responsive interfaces in Next.js and React, backed by PostgreSQL.",
      p2: "Most recently, I worked on the AI service of a recruitment platform — parsing CVs, extracting skills, and matching candidates to job offers. I also built a contact-free, gesture- and voice-controlled system for operating-room equipment, combining computer vision and speech recognition.",
      p3: "Comfortable owning a feature across the stack, working in Agile teams, and writing secure, maintainable code.",
      photoAlt: "Portrait of Ibtihel Blidaoui",
      facts: {
        location: { label: "Based in", value: "Kebili, Tunisia" },
        education: {
          label: "Studying",
          value: "Engineering degree in Software Engineering — ESSAT, Gabès",
        },
        languages: { label: "Languages", value: "Arabic, French, English" },
      },
    },
    skills: {
      title: "What I work with",
      groups: [
        {
          key: "languages",
          title: "Languages",
          items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "C/C++", "Dart", "PHP", "HTML/CSS"],
        },
        {
          key: "frontend",
          title: "Interface",
          items: ["React", "Next.js", "Tailwind CSS", "Flutter"],
        },
        {
          key: "backend",
          title: "Back end",
          items: ["Node.js/Express", "NestJS", "Flask", "Spring", "REST APIs"],
        },
        {
          key: "data",
          title: "Data",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Big Data"],
        },
        {
          key: "ai",
          title: "AI & automation",
          items: [
            "LLM",
            "RAG",
            "n8n automation",
            "CV parsing",
            "Skill extraction",
            "Matching algorithms",
            "Computer vision",
            "Speech recognition",
          ],
        },
        {
          key: "devops",
          title: "DevOps & tools",
          items: ["Docker", "Git", "GitHub", "VS Code", "Eclipse", "Agile/Scrum"],
        },
        {
          key: "security",
          title: "Security",
          items: ["SQLMap", "Secure coding"],
        },
      ],
    },
    experience: {
      title: "Work & internships",
      items: [
        {
          role: "Full-Stack & AI Developer Intern",
          company: "Softavera",
          period: "01/09/2026 – 30/09/2026",
          location: "Golâa, Douz, Tunisia",
          bullets: [
            "Built an AI-powered recruitment web platform: React interface, Node.js/Express REST API, PostgreSQL database and a separate AI service",
            "Designed the matching pipeline: CV parsing, skill extraction, then candidate-to-offer matching",
            "Set up the application architecture (interface / API / AI service separation) and Google-based authentication",
          ],
        },
        {
          role: "Full-Stack Developer Intern",
          company: "AURES Group",
          period: "15/02/2024 – 31/05/2024",
          location: "Golâa, Douz, Tunisia",
          bullets: [
            "Designed and built a full-stack click-and-collect restaurant ordering system with Next.js and NestJS",
            "Implemented secure online payment and real-time delivery tracking",
            "Added a Python chatbot to reduce customer friction and support order flow",
            "Collaborated in Agile sprints to improve checkout usability and overall experience",
          ],
        },
        {
          role: "Full-Stack Developer Intern",
          company: "AURES Group",
          period: "01/08/2023 – 31/08/2023",
          location: "Golâa, Douz, Tunisia",
          bullets: [
            "Built responsive React + Node.js applications with REST APIs",
            "Delivered UI components and backend features for internal projects",
            "Participated in code reviews and Agile ceremonies to improve quality",
          ],
        },
      ],
    },
    projects: {
      title: "Projects with real outcomes",
      viewCode: "View on GitHub",
      items: {
        haor: {
          title: "HAOR",
          subtitle: "Touchless control for operating room equipment",
          description:
            "A contact-free surgical control system combining computer vision and speech recognition to control operating-room equipment without touch. Presented and successfully defended before an academic jury.",
          status: "Year-end project",
        },
        recruit: {
          title: "AI Recruitment Platform",
          subtitle: "Intelligent CV-to-job matching",
          description:
            "A web platform that parses CVs, extracts skills and matches candidates to job offers. Built as a separated stack: React interface, Node.js/Express API, PostgreSQL and a dedicated AI service, with Google authentication.",
          status: "Internship project",
        },
        aures: {
          title: "AURES Click & Collect",
          subtitle: "Restaurant ordering platform",
          description:
            "Built a full-stack click-and-collect system with online payment, order tracking and a chatbot assistant during a production internship.",
          status: "Internship project",
        },
        rag: {
          title: "RAG Workflow with n8n",
          subtitle: "Document ingestion for retrieval-augmented generation",
          description:
            "An n8n workflow that downloads a PDF from Google Drive, splits it into chunks, generates Gemini embeddings and stores them in a Supabase vector store — the foundation for a RAG chat assistant.",
          status: "Workshop project",
        },
        sqli: {
          title: "Blind SQLi Assessment",
          subtitle: "Web security testing",
          description:
            "Detected and remediated a time-based Blind SQL Injection vulnerability using SQLMap, strengthening application resilience and data safety.",
          status: "Security analysis",
        },
      },
    },
    resume: {
      title: "Download the full resume",
      text: "Get the complete background on my experience, technical skills and projects in a polished PDF.",
      button: "Download CV",
      note: "PDF · French",
    },
    contact: {
      title: "Let’s build something together",
      text: "I’m looking for an international internship, remote or on-site, in full-stack or AI-driven development. If your team needs a developer comfortable across the stack, with a growing focus on AI, I’d love to hear from you.",
      based: "Based in Kebili, Tunisia — open to remote and on-site internships.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "Phone",
    },
    footer: { made: "Made with care." },
  },

  /* ------------------------------------------------------------------ */
  fr: {
    meta: { title: "Ibtihel Blidaoui — Développeuse Full-Stack & IA" },
    nav: {
      about: "À propos",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      resume: "CV",
      contact: "Me contacter",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      language: "Langue",
      toLight: "Passer au thème clair",
      toDark: "Passer au thème sombre",
      home: "Retour en haut",
    },
    hero: {
      status: "Disponible pour des stages et un PFE — à distance ou sur site",
      name: "Ibtihel Blidaoui",
      lead: "Développeuse full-stack qui conçoit des applications web sécurisées et pilotées par l’IA.",
      text: "Expérience de bout en bout en stage — API REST en NestJS, interfaces responsives en Next.js et React, et un système de commande par gestes et par la voix pour les salles d’opération.",
      ctaProjects: "Découvrir les projets",
      ctaCv: "Télécharger le CV",
      diagramCaption: "La stack que je construis, de bout en bout",
      layers: {
        interface: "Interface",
        api: "API",
        ai: "Service IA",
        data: "Données et déploiement",
      },
    },
    about: {
      title: "Développement full-stack sécurisé et orienté IA, avec un impact concret sur les projets",
      p1: "Étudiante en génie logiciel, j’ai une expérience full-stack concrète à travers trois stages : je développe des fonctionnalités de production de bout en bout, des API REST en NestJS et Node.js/Express aux interfaces responsives en Next.js et React, adossées à PostgreSQL.",
      p2: "Récemment, j’ai travaillé sur le service d’IA d’une plateforme de recrutement : analyse de CV, extraction de compétences et mise en correspondance des candidats avec les offres. J’ai aussi conçu un système de commande sans contact, par gestes et par la voix, pour les équipements de salle d’opération, qui combine vision par ordinateur et reconnaissance vocale.",
      p3: "À l’aise pour porter une fonctionnalité sur toute la stack, travailler en équipe Agile et écrire du code sûr et maintenable.",
      photoAlt: "Portrait d’Ibtihel Blidaoui",
      facts: {
        location: { label: "Basée à", value: "Kebili, Tunisie" },
        education: {
          label: "Formation",
          value: "Diplôme d’ingénieur en génie logiciel — ESSAT, Gabès",
        },
        languages: { label: "Langues", value: "Arabe, français, anglais" },
      },
    },
    skills: {
      title: "Mes outils et technologies",
      groups: [
        {
          key: "languages",
          title: "Langages",
          items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "C/C++", "Dart", "PHP", "HTML/CSS"],
        },
        {
          key: "frontend",
          title: "Interface",
          items: ["React", "Next.js", "Tailwind CSS", "Flutter"],
        },
        {
          key: "backend",
          title: "Back-end",
          items: ["Node.js/Express", "NestJS", "Flask", "Spring", "API REST"],
        },
        {
          key: "data",
          title: "Données",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Big Data"],
        },
        {
          key: "ai",
          title: "IA et automatisation",
          items: [
            "LLM",
            "RAG",
            "Automatisation n8n",
            "Analyse de CV",
            "Extraction de compétences",
            "Algorithmes de matching",
            "Vision par ordinateur",
            "Reconnaissance vocale",
          ],
        },
        {
          key: "devops",
          title: "DevOps et outils",
          items: ["Docker", "Git", "GitHub", "VS Code", "Eclipse", "Agile/Scrum"],
        },
        {
          key: "security",
          title: "Sécurité",
          items: ["SQLMap", "Code sécurisé"],
        },
      ],
    },
    experience: {
      title: "Expérience et stages",
      items: [
        {
          role: "Stagiaire développeuse Full-Stack & IA",
          company: "Softavera",
          period: "01/09/2026 – 30/09/2026",
          location: "Golâa, Douz, Tunisie",
          bullets: [
            "Développement d’une plateforme web de recrutement intelligente : interface React, API REST Node.js/Express, base PostgreSQL et service d’IA séparé",
            "Conception du pipeline de mise en correspondance : analyse du CV, extraction des compétences, puis matching entre candidats et offres",
            "Mise en place de l’architecture applicative (séparation interface / API / service d’IA) et de l’authentification via Google",
          ],
        },
        {
          role: "Stagiaire développeuse Full-Stack",
          company: "AURES Group",
          period: "02/2024 – 05/2024",
          location: "Golâa, Douz, Tunisie",
          bullets: [
            "Conception et développement d’un système de commande « click-and-collect » pour la restauration, full-stack, avec Next.js et NestJS",
            "Mise en œuvre du paiement en ligne sécurisé et du suivi de livraison en temps réel",
            "Ajout d’un chatbot Python pour réduire les frictions client et accompagner la prise de commande",
            "Collaboration en sprints Agile pour améliorer l’ergonomie du paiement et l’expérience globale",
          ],
        },
        {
          role: "Stagiaire développeuse Full-Stack",
          company: "AURES Group",
          period: "07/2023 – 08/2023",
          location: "Golâa, Douz, Tunisie",
          bullets: [
            "Développement d’applications responsives React + Node.js avec des API REST",
            "Livraison de composants d’interface et de fonctionnalités back-end pour des projets internes",
            "Participation aux revues de code et aux cérémonies Agile pour améliorer la qualité",
          ],
        },
      ],
    },
    projects: {
      title: "Des projets aux résultats concrets",
      viewCode: "Voir sur GitHub",
      items: {
        haor: {
          title: "HAOR",
          subtitle: "Commande sans contact des équipements de salle d’opération",
          description:
            "Un système de commande chirurgicale sans contact qui combine vision par ordinateur et reconnaissance vocale pour piloter les équipements de la salle d’opération sans les toucher. Présenté et soutenu avec succès devant un jury académique.",
          status: "Projet de fin d’année",
        },
        recruit: {
          title: "Plateforme de recrutement IA",
          subtitle: "Mise en correspondance intelligente CV / offres",
          description:
            "Une plateforme web qui analyse les CV, extrait les compétences et associe les candidats aux offres d’emploi. Architecture séparée : interface React, API Node.js/Express, PostgreSQL et service d’IA dédié, avec authentification Google.",
          status: "Projet de stage",
        },
        aures: {
          title: "AURES Click & Collect",
          subtitle: "Plateforme de commande pour la restauration",
          description:
            "Conception d’un système click-and-collect full-stack avec paiement en ligne, suivi des commandes et assistant chatbot, lors d’un stage en conditions réelles.",
          status: "Projet de stage",
        },
        rag: {
          title: "Workflow RAG avec n8n",
          subtitle: "Ingestion de documents pour la génération augmentée par récupération",
          description:
            "Un workflow n8n qui télécharge un PDF depuis Google Drive, le découpe en segments, génère des embeddings Gemini et les stocke dans un vector store Supabase — la base d’un assistant de chat RAG.",
          status: "Projet d’atelier",
        },
        sqli: {
          title: "Évaluation d’injection SQL aveugle",
          subtitle: "Tests de sécurité web",
          description:
            "Détection et correction d’une vulnérabilité d’injection SQL aveugle (time-based) avec SQLMap, pour renforcer la résilience de l’application et la sécurité des données.",
          status: "Analyse de sécurité",
        },
      },
    },
    resume: {
      title: "Télécharger le CV complet",
      text: "Retrouvez le détail de mon parcours, de mes compétences techniques et de mes projets dans un PDF soigné.",
      button: "Télécharger le CV",
      note: "PDF · en français",
    },
    contact: {
      title: "Construisons quelque chose ensemble",
      text: "Je recherche un stage international, à distance ou sur site, en développement full-stack ou orienté IA. Si votre équipe a besoin d’une développeuse à l’aise sur toute la stack, avec un intérêt croissant pour l’IA, j’aimerais échanger avec vous.",
      based: "Basée à Kebili, Tunisie — ouverte aux stages à distance et sur site.",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "Téléphone",
    },
    footer: { made: "Fait avec soin." },
  },

  /* ------------------------------------------------------------------ */
  ar: {
    meta: { title: "ابتهال بليداوي — مطوّرة Full-Stack وذكاء اصطناعي" },
    nav: {
      about: "نبذة عني",
      skills: "المهارات",
      experience: "الخبرة",
      projects: "المشاريع",
      resume: "السيرة الذاتية",
      contact: "تواصل معي",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      language: "اللغة",
      toLight: "التبديل إلى المظهر الفاتح",
      toDark: "التبديل إلى المظهر الداكن",
      home: "العودة إلى الأعلى",
    },
    hero: {
      status: "متاحة لتدريب أو لمشروع نهاية الدراسة (PFE) — عن بُعد أو حضوريًا",
      name: "ابتهال بليداوي",
      lead: "مطوّرة Full-Stack أبني تطبيقات ويب آمنة مدعومة بالذكاء الاصطناعي.",
      text: "خبرة متكاملة من خلال التدريب: واجهات REST باستخدام NestJS، وواجهات متجاوبة باستخدام Next.js وReact، ونظام يُتحكَّم فيه بالإيماءات والصوت لغرف العمليات.",
      ctaProjects: "استكشاف المشاريع",
      ctaCv: "تحميل السيرة الذاتية",
      diagramCaption: "التقنيات التي أبني بها، من البداية إلى النهاية",
      layers: {
        interface: "الواجهة",
        api: "واجهة API",
        ai: "خدمة الذكاء الاصطناعي",
        data: "البيانات والنشر",
      },
    },
    about: {
      title: "تطوير Full-Stack آمن ومدعوم بالذكاء الاصطناعي، بأثر حقيقي على المشاريع",
      p1: "طالبة هندسة برمجيات، ولدي خبرة عملية في التطوير Full-Stack من خلال ثلاث تدريبات، أنجزتُ فيها ميزات جاهزة للإنتاج من البداية إلى النهاية: من واجهات REST باستخدام NestJS وNode.js/Express إلى واجهات متجاوبة باستخدام Next.js وReact، مدعومة بقاعدة بيانات PostgreSQL.",
      p2: "عملتُ مؤخرًا على خدمة الذكاء الاصطناعي في منصة توظيف: تحليل السير الذاتية، واستخراج المهارات، ومطابقة المرشحين مع عروض العمل. كما طوّرتُ نظامًا بلا لمس يُتحكَّم فيه بالإيماءات والصوت لمعدات غرف العمليات، ويجمع بين الرؤية الحاسوبية والتعرّف على الكلام.",
      p3: "أرتاح في تحمّل مسؤولية ميزة كاملة عبر جميع طبقات التطبيق، والعمل ضمن فرق Agile، وكتابة شيفرة آمنة وسهلة الصيانة.",
      photoAlt: "صورة ابتهال بليداوي",
      facts: {
        location: { label: "مقيمة في", value: "قبلي، تونس" },
        education: {
          label: "الدراسة",
          value: "شهادة مهندس في هندسة البرمجيات — ESSAT، قابس",
        },
        languages: { label: "اللغات", value: "العربية، الفرنسية، الإنجليزية" },
      },
    },
    skills: {
      title: "ما أعمل به",
      groups: [
        {
          key: "languages",
          title: "لغات البرمجة",
          items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "C/C++", "Dart", "PHP", "HTML/CSS"],
        },
        {
          key: "frontend",
          title: "الواجهة الأمامية",
          items: ["React", "Next.js", "Tailwind CSS", "Flutter"],
        },
        {
          key: "backend",
          title: "الواجهة الخلفية",
          items: ["Node.js/Express", "NestJS", "Flask", "Spring", "واجهات REST"],
        },
        {
          key: "data",
          title: "البيانات",
          items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "البيانات الضخمة"],
        },
        {
          key: "ai",
          title: "الذكاء الاصطناعي والأتمتة",
          items: [
            "LLM",
            "RAG",
            "أتمتة n8n",
            "تحليل السير الذاتية",
            "استخراج المهارات",
            "خوارزميات المطابقة",
            "الرؤية الحاسوبية",
            "التعرّف على الكلام",
          ],
        },
        {
          key: "devops",
          title: "DevOps والأدوات",
          items: ["Docker", "Git", "GitHub", "VS Code", "Eclipse", "Agile/Scrum"],
        },
        {
          key: "security",
          title: "الأمان",
          items: ["SQLMap", "البرمجة الآمنة"],
        },
      ],
    },
    experience: {
      title: "الخبرة والتدريب",
      items: [
        {
          role: "متدرّبة مطوّرة Full-Stack وذكاء اصطناعي",
          company: "Softavera",
          period: "01/09/2026 – 30/09/2026",
          location: "Golâa، دوز، تونس",
          bullets: [
            "تطوير منصة ويب ذكية للتوظيف: واجهة React، وواجهة REST باستخدام Node.js/Express، وقاعدة بيانات PostgreSQL، وخدمة ذكاء اصطناعي منفصلة",
            "تصميم مسار المطابقة بالذكاء الاصطناعي: تحليل السيرة الذاتية، واستخراج المهارات، ثم مطابقة المرشحين مع العروض",
            "إعداد بنية التطبيق (الفصل بين الواجهة وواجهة REST وخدمة الذكاء الاصطناعي) والمصادقة عبر Google",
          ],
        },
        {
          role: "متدرّبة مطوّرة Full-Stack",
          company: "AURES Group",
          period: "02/2024 – 05/2024",
          location: "Golâa، دوز، تونس",
          bullets: [
            "تصميم وتطوير نظام طلبات «انقر واستلم» (click-and-collect) متكامل للمطاعم باستخدام Next.js وNestJS",
            "تنفيذ الدفع الإلكتروني الآمن وتتبّع التوصيل في الوقت الفعلي",
            "إضافة روبوت دردشة بلغة Python لتقليل صعوبات العملاء ومساعدتهم في إتمام الطلب",
            "التعاون ضمن دورات عمل Agile لتحسين سهولة الدفع والتجربة العامة",
          ],
        },
        {
          role: "متدرّبة مطوّرة Full-Stack",
          company: "AURES Group",
          period: "07/2023 – 08/2023",
          location: "Golâa، دوز، تونس",
          bullets: [
            "بناء تطبيقات متجاوبة باستخدام React وNode.js مع واجهات REST",
            "إنجاز مكوّنات واجهة وميزات خلفية لمشاريع داخلية",
            "المشاركة في مراجعات الشيفرة واجتماعات Agile لتحسين الجودة",
          ],
        },
      ],
    },
    projects: {
      title: "مشاريع بنتائج ملموسة",
      viewCode: "عرض على GitHub",
      items: {
        haor: {
          title: "HAOR",
          subtitle: "تحكّم بلا لمس في معدات غرفة العمليات",
          description:
            "نظام تحكّم جراحي بلا لمس يجمع بين الرؤية الحاسوبية والتعرّف على الكلام للتحكم في معدات غرفة العمليات دون لمسها. عُرض ودُوفع عنه بنجاح أمام لجنة أكاديمية.",
          status: "مشروع نهاية السنة",
        },
        recruit: {
          title: "منصة توظيف بالذكاء الاصطناعي",
          subtitle: "مطابقة ذكية بين السير الذاتية والوظائف",
          description:
            "منصة ويب تحلّل السير الذاتية وتستخرج المهارات وتطابق المرشحين مع عروض العمل. بنية مفصولة: واجهة React، وواجهة Node.js/Express، وPostgreSQL، وخدمة ذكاء اصطناعي مخصصة، مع المصادقة عبر Google.",
          status: "مشروع تدريب",
        },
        aures: {
          title: "AURES Click & Collect",
          subtitle: "منصة طلبات للمطاعم",
          description:
            "بناء نظام «انقر واستلم» متكامل مع الدفع الإلكتروني وتتبّع الطلبات ومساعد دردشة آلي، خلال تدريب في بيئة إنتاج حقيقية.",
          status: "مشروع تدريب",
        },
        rag: {
          title: "مسار RAG مع n8n",
          subtitle: "استيعاب المستندات للتوليد المعزَّز بالاسترجاع",
          description:
            "مسار عمل في n8n يحمّل ملف PDF من Google Drive ويقسّمه إلى مقاطع، ثم يولّد تضمينات Gemini ويخزّنها في مخزن متجهات Supabase — وهو الأساس لمساعد دردشة RAG.",
          status: "مشروع ورشة",
        },
        sqli: {
          title: "تقييم ثغرة حقن SQL الأعمى",
          subtitle: "اختبار أمان تطبيقات الويب",
          description:
            "اكتشاف ثغرة حقن SQL الأعمى القائمة على الزمن ومعالجتها باستخدام SQLMap، لتعزيز متانة التطبيق وسلامة البيانات.",
          status: "تحليل أمني",
        },
      },
    },
    resume: {
      title: "حمّل السيرة الذاتية الكاملة",
      text: "اطّلع على خلفيتي الكاملة من خبرات ومهارات تقنية ومشاريع في ملف PDF منسّق.",
      button: "تحميل السيرة الذاتية",
      note: "PDF · بالفرنسية",
    },
    contact: {
      title: "لنبنِ شيئًا معًا",
      text: "أبحث عن تدريب دولي، عن بُعد أو حضوريًا، في التطوير Full-Stack أو التطوير القائم على الذكاء الاصطناعي. إن كان فريقكم يحتاج إلى مطوّرة متمكنة عبر جميع طبقات التطبيق، مع اهتمام متزايد بالذكاء الاصطناعي، فيسعدني التواصل معكم.",
      based: "مقيمة في قبلي، تونس — منفتحة على التدريب عن بُعد أو حضوريًا.",
      email: "البريد الإلكتروني",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "الهاتف",
    },
    footer: { made: "صُنع بعناية." },
  },
};
