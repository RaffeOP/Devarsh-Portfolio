export const projects = [
  {
    title: "VITspotCheck | Gen-4 Spatial Intelligence",
    slug: "vit-spot-check",
    tagline:
      "A real-time campus intelligence platform for VIT students featuring crowdsourced room availability and network mapping.",
    overview:
      "VITspotCheck is a high-fidelity spatial intelligence command center designed for the VIT Vellore ecosystem. It provides real-time analytics on classroom availability, Wi-Fi throughput, and FFCS-aware scheduling. Built with React 19, Tailwind CSS 4, and Framer Motion 12, it represents the absolute peak of localized campus utility.",
    features: [
      "Real-time crowdsourced room availability tracking",
      "Localized network performance mapping (Mbps/Latency)",
      "FFCS-aware classroom selection logic",
      "Single-scroll Spatial Intelligence architecture",
      "Fluid background shaders reacting to real-time data",
    ],
    techStack: [
      "React 19",
      "Tailwind CSS 4.2",
      "Framer Motion 12",
      "Vite",
      "Vercel",
    ],
    challenges: [
      "Implementing low-latency data synchronization for crowdsourced inputs.",
      "Designing a performant WebGL background that doesn't hinder UI responsiveness.",
      "Mapping complex campus zones into a intuitive spatial interface.",
    ],
    learnings: [
      "Mastered React 19's new concurrent rendering features.",
      "Advanced understanding of SVG-based spatial mapping.",
      "Optimized build pipelines for massive static asset delivery.",
    ],
    feedback: false,
    links: {
      live: "https://vit-spot-check.vercel.app/",
      github: "https://github.com/devxnshsharma/VITspotCheckFinal",
    },
  },
  {
    title: "Javascript-Project | localized utilities",
    slug: "javascript-project",
    tagline:
      "A collection of high-performance, purpose-built JavaScript utilities and design prototypes.",
    overview:
      "This project serves as a laboratory for experimental UI/UX patterns and raw JavaScript performance optimization. It includes custom-built speedtest engines, interactive data flux analyzers, and ultra-miniaturized web tools designed for maximum efficiency.",
    features: [
      "High-fidelity 'Data Flux Analyzer' for throughput measurement",
      "Professional Neon-Dashboard UI implementation",
      "Zero-dependency utility components",
      "Advanced DOM manipulation benchmarks",
    ],
    techStack: [
      "JavaScript (ESNext)",
      "HTML5",
      "CSS3 (Vanilla)",
      "Regex",
    ],
    challenges: [
      "Achieving sub-millisecond response times for real-time analyzers.",
      "Building complex UI components without external library dependencies.",
    ],
    learnings: [
      "Deep-dive into browser rendering engines and paint cycles.",
      "Mastery of vanilla JS performance bottlenecks and workarounds.",
    ],
    feedback: true,
    links: {
      live: "https://raffeop.github.io/Javascript-Project/",
      github: "https://github.com/RaffeOP/Javascript-Project",
    },
  },
  {
    title: "Devarsh Portfolio | Masterpiece Protocol",
    slug: "devarsh-portfolio",
    tagline:
      "A world-class developer showcase built with the 'Vanta-Metal Hyper-Matrix' design system.",
    overview:
      "This portfolio is the manifestation of the 'Masterpiece Protocol' v5.0. It features an Absolute Black Vantablack theme, hardware-inspired audio hubs, and a p5.js kinetic flux background that synchronizes with a curated technical playlist.",
    features: [
      "Absolute Black (#000) Vantablack Depth theme",
      "p5.js Kinetic Flux background synced to audio tempo",
      "Hardware-inspired Audio Command Deck with Playlist",
      "RaffeOP GitHub Engine integration",
    ],
    techStack: [
      "Next.js 15",
      "p5.js",
      "Framer Motion",
      "Lenis Smooth Scroll",
      "Tailwind CSS",
    ],
    challenges: [
      "Synchronizing p5.js canvas frame rate with audio frequency data.",
      "Maintaining 60 FPS under heavy shader and motion displacement load.",
    ],
    learnings: [
      "Advanced implementation of the 'Bencium' design philosophy.",
      "Mastery of high-end hardware-style UI implementation in React.",
    ],
    feedback: true,
    links: {
      live: "https://devarsh.dev",
      github: "https://github.com/RaffeOP/Devarsh-Portfolio",
    },
  },
];
