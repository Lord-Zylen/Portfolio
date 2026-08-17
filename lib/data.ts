export const profile = {
  name: "Alex Osei Sarpong",
  role: "Full-Stack Developer",
  tagline:
    "Software developer building web applications end to end — from interactive React frontends to Express and MongoDB-powered APIs.",
  bio: [
    "I'm a software development student at Code Train Africa (Accra, Ghana) with a background in Geography and Resource Development from the University of Ghana. I love learning new things and taking on challenges, and I build interactive frontends with React and Vite, wired to real backends with Express, MongoDB, and Firebase.",
    "I have hands-on IT experience from roles with Ajesnko Ventures and Nadkansco Cashew Processing Limited, where I worked as an IT personnel. I'm hardworking, creative, and a team player — but equally comfortable working independently and solving problems with technology.",
  ],
  highlights: [
    { value: "5+", label: "Years IT experience" },
    { value: "19", label: "Repos on GitHub" },
    { value: "15+", label: "Projects built" },
  ],
  links: {
    email: "alex.oseisarpong@yahoo.com",
    phone: "0249408234",
    location: "Techiman, Bono East Region, Ghana",
    github: "https://github.com/Lord-Zylen",
    linkedin: "",
    twitter: "",
  },
};

export const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Vite",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "Firebase", "REST APIs"],
  },
  {
    category: "Tools & More",
    items: ["Python", "AI", "Git", "MS Office", "Photoshop", "CorelDRAW"],
  },
];

export const experience = [
  {
    role: "IT Personnel",
    company: "Nadkansco Cashew Processing Limited",
    period: "Jun 2026 — Present",
    summary:
      "Providing IT support and maintaining systems for a cashew processing company.",
    stack: ["IT Support", "Systems", "MS Office"],
  },
  {
    role: "IT Personnel",
    company: "Ajesnko Ventures, Techiman",
    period: "Jan 2023 — Feb 2026",
    summary:
      "Handled IT operations, system maintenance, and technical support across the organization.",
    stack: ["IT Support", "Networking", "Troubleshooting"],
  },
  {
    role: "National Service Person",
    company: "National Disaster Management Organization (NADMO)",
    period: "Oct 2021 — Sep 2022",
    summary:
      "Supported the municipal disaster management office during national service.",
    stack: ["Administration", "Reporting"],
  },
  {
    role: "Software Development Student",
    company: "Code Train Africa, Accra",
    period: "2024 — 2026",
    summary:
      "Training in full-stack web development with hands-on weekly projects in React, Node.js, Express, and Firebase.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
  },
];

export const projects = [
  {
    title: "Sika AI",
    description:
      "An agentic RAG financial assistant for Ghana's formal and informal economy — Groq-hosted Llama 3.3, local embeddings, ChromaDB, DuckDuckGo search, and a Streamlit chat UI.",
    tags: ["Python", "RAG", "Groq", "ChromaDB", "Streamlit"],
    demo: "https://sika-ai-ecru.vercel.app/",
    github: "https://github.com/Lord-Zylen/Sika-AI",
    preview: "/previews/sika-ai.jpg",
    accent: "from-emerald-500/30 to-green-900/40",
  },
  {
    title: "SmartBiz AI",
    description:
      "An AI-powered business management platform for SMEs in Ghana — inventory, sales, expenses, customers, suppliers, and a LangGraph AI consultant that analyzes your business data and gives recommendations.",
    tags: ["React", "FastAPI", "MongoDB", "LangGraph", "Firebase"],
    demo: "https://smart-biz-seven.vercel.app/",
    github: "https://github.com/Lord-Zylen/SmartBiz",
    preview: "/previews/smartbiz.jpg",
    accent: "from-teal-500/30 to-cyan-900/40",
  },
  {
    title: "Plant Scheduler",
    description:
      "A plant-care dashboard with a landing page, calendar view, task charts, and a form to schedule plant care tasks — all powered by React context.",
    tags: ["React", "Vite", "Context API", "Charts"],
    demo: null,
    github: "https://github.com/Lord-Zylen/Plant-Scheduler",
    preview: "/previews/plant-scheduler.jpg",
    accent: "from-emerald-500/30 to-teal-900/40",
  },
  {
    title: "React Horizons",
    description:
      "A travel agency website showcasing destinations across Africa, with a hero, body sections, and footer built from React components.",
    tags: ["React", "Vite", "CSS"],
    demo: null,
    github: "https://github.com/Lord-Zylen/React-horizon",
    preview: "/previews/react-horizons.jpg",
    accent: "from-indigo-500/30 to-blue-900/40",
  },
  {
    title: "React Pizza",
    description:
      "A pizza restaurant website with a hero, gallery, about section, and navigation — a complete multi-component React landing page.",
    tags: ["React", "Vite", "CSS"],
    demo: null,
    github: "https://github.com/Lord-Zylen/react-pizza",
    preview: "/previews/react-pizza.jpg",
    accent: "from-amber-500/30 to-orange-900/40",
  },
  {
    title: "Contact List",
    description:
      "A CRUD contact manager that lists users, adds new contacts through a form, and renders each contact as a card component.",
    tags: ["React", "Vite", "CRUD"],
    demo: null,
    github: "https://github.com/Lord-Zylen/Contact-List",
    preview: "/previews/contact-list.jpg",
    accent: "from-fuchsia-500/30 to-purple-900/40",
  },
  {
    title: "Firebase CRUD App",
    description:
      "A full CRUD app backed by Firebase Firestore, with form, edit, and list components wired through a Zustand store.",
    tags: ["React", "Firebase", "Zustand"],
    demo: null,
    github: "https://github.com/Lord-Zylen/Firebase-week-1-2",
    preview: "/previews/firebase-crud.jpg",
    accent: "from-sky-500/30 to-cyan-900/40",
  },
  {
    title: "Node.js REST API",
    description:
      "An Express and Mongoose REST API with user and product controllers, model schemas, and MongoDB integration.",
    tags: ["Node.js", "Express", "Mongoose", "MongoDB"],
    demo: null,
    github: "https://github.com/Lord-Zylen/nodejs-week3",
    preview: "/previews/nodejs-rest-api.jpg",
    accent: "from-rose-500/30 to-red-900/40",
  },
];
