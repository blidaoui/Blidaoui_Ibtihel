// Language-independent data: links, technologies and project metadata.

export const CV_FILE = "/BlidaouiCv.pdf";

export const links = {
  email: "blidaouiibtihel22@gmail.com",
  linkedin: "https://linkedin.com/in/ibtihel-blidaoui",
  github: "https://github.com/blidaoui",
  phone: "+216 99 985 908",
  phoneHref: "tel:+21699985908",
};

// Order = display order. `featured` renders full width.
export const projectsMeta = [
  {
    key: "haor",
    featured: true,
    tags: ["Python", "FastAPI", "PostgreSQL", "PyQt6", "MediaPipe", "Vosk"],
    repoUrl: "https://github.com/blidaoui/haor", // TODO: replace with the real repo URL
  },
  {
    key: "recruit",
    tags: ["React", "Node.js/Express", "PostgreSQL", "Google OAuth"],
    // Built during an internship (employer code): no public repository
  },
  {
    key: "aures",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    repoUrl: "https://github.com/blidaoui/aures-click-and-collect", // TODO: replace with the real repo URL
  },
  {
    key: "rag",
    tags: ["n8n", "RAG", "Supabase", "Gemini embeddings"],
    // Add a repoUrl here once the workflow is published
  },
  {
    key: "sqli",
    tags: ["SQLMap", "PHP", "MySQL"],
    repoUrl: "https://github.com/blidaoui/blind-sqli-assessment", // TODO: replace with the real repo URL
  },
];

export const heroLayers = [
  { key: "interface", tech: "React, Next.js, Tailwind CSS" },
  { key: "api", tech: "NestJS, Node.js, Flask, Spring" },
  { key: "ai", tech: "LLM, RAG, n8n, computer vision", highlight: true },
  { key: "data", tech: "PostgreSQL, MongoDB, Docker" },
];
