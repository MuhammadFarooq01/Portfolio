export interface Project {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    longDescription: string;
    tags: string[];
    coverImage: string;
    images: string[];
    videoUrl?: string;
    liveUrl?: string;
    githubUrl?: string;
    year: string;
    featured: boolean;
    role: string;
    stack: string[];
    highlights: string[];
    mockupType?: "desktop" | "mobile" | "none";
}

export const projects: Project[] = [
    {
        slug: "najmAI",
        title: "NajmAI",
        tagline: "Modern AI-powered Framer Template",
        description: "A sleek, production-ready Framer template for AI SaaS products.",
        longDescription: `### The Challenge\nNajmAI is a premium Framer template built for modern AI products. It features a dark-first design system with glassmorphism elements, animated hero sections, and a complete set of marketing page components.\n\n### The Solution\nThe project started as an internal template and evolved into a fully released product used by **120+ studios** worldwide. Every component was built with performance and flexibility in mind — designers can customize the entire system using Framer's variable system without touching a single line of code.`,
        tags: ["Framer", "UI Design", "Template"],
        coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&q=80",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=700&fit=crop&q=80",
        ],
        videoUrl: "",
        liveUrl: "https://najmAI.framer.website",
        year: "2024",
        featured: true,
        role: "Designer & Developer",
        stack: ["Framer", "Figma", "CSS"],
        highlights: [
            "120+ studios using the template worldwide",
            "Featured in Framer's official showcase",
            "Sub-2s load time across all routes",
            "Full dark/light mode with zero flicker",
        ],
        mockupType: "desktop",
    },
    {
        slug: "bayt",
        title: "Bayt",
        tagline: "Real Estate Platform & Framer Template",
        description: "A full-featured real estate Framer template with property listing CMS.",
        longDescription: `### Project Overview\nBayt (Arabic for "home") is a real estate template and platform designed for property agencies and individual agents. It includes a full **CMS integration**, property filter system, map embeds, and a stunning image-forward design language.\n\n### The Architecture\nThe primary challenge was making a visually rich product that still felt fast. I implemented lazy loading, optimized image pipelines, and used Framer's built-in CMS APIs to allow non-technical users to manage dynamic real-estate listings themselves.`,
        tags: ["Framer", "Real Estate", "CMS"],
        coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=700&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=700&fit=crop&q=80",
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=700&fit=crop&q=80",
            "https://images.unsplash.com/photo-1582407947304-fd86f28f7f4e?w=1200&h=700&fit=crop&q=80",
        ],
        liveUrl: "https://bayt.framer.website",
        year: "2024",
        featured: true,
        role: "Full Stack Designer",
        stack: ["Framer", "Figma", "Google Maps API"],
        highlights: [
            "CMS-powered listings with custom filter logic",
            "Google Maps integration for property locations",
            "Mobile-first responsive across 6 breakpoints",
        ],
        mockupType: "mobile",
    },
    {
        slug: "damas",
        title: "Damas",
        tagline: "SaaS Dashboard & Marketing Template",
        description: "A comprehensive SaaS Framer template with dashboard and landing page.",
        longDescription: `### Idea to Reality\nDamas is a dual-purpose template — it ships both a marketing site and a functional dashboard preview, making it perfect for early-stage SaaS products that need to look credible before their official launch.\n\n### Design Language\nI focused intensely on information density and data scannability. The dashboard relies heavily on a custom fractional grid layout that adapts fluidly from a full widescreen desktop monitor down to an iPad tablet without creating any compromises to the intended data visual hierarchy.`,
        tags: ["SaaS", "Dashboard", "Framer"],
        coverImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=700&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=700&fit=crop&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&q=80",
        ],
        videoUrl: "",
        year: "2023",
        featured: false,
        role: "Designer",
        stack: ["Framer", "Figma"],
        highlights: [
            "Dual marketing + dashboard layout",
            "50+ reusable components",
            "Dark mode only design system",
        ],
        mockupType: "desktop",
    },
    {
        slug: "sham",
        title: "Sham",
        tagline: "Creative Studio Portfolio Template",
        description: "An artistic studio template for creative agencies and freelancers.",
        longDescription: `### The Concept\nSham is a bold, editorial portfolio template built specifically to cater to creative studios. It breaks all conventional web grid rules using overlapping spatial layers, massive typography, and motion-forward physical interactions.\n\n### The Design\nThe overall design language finds its inspiration in mid-century brutalist print design — raw, confident, and highly intentional. Despite the heavy aesthetic approach, every single interaction and morph animation is carefully optimized to feel native, responsive, and completely fluid at 60fps.`,
        tags: ["Portfolio", "Creative", "Framer"],
        coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=700&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=700&fit=crop&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop&q=80",
        ],
        year: "2023",
        featured: false,
        role: "Designer & Developer",
        stack: ["Framer", "Figma", "GSAP"],
        highlights: [
            "Award-winning brutalist design language",
            "Custom cursor interactions",
            "Magnetic button effects",
        ],
        mockupType: "desktop"
    },
];