/**
 * Central data file for the portfolio.
 * This is the single source of truth for all student information.
 * Modify this file to update portfolio content.
 */

export interface StudentData {
  personal: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    title: string;
    subtitle: string;
    bio: string;
    location: string;
    avatar?: string;
  };
  stats?: {
    label: string;
    value: string | number;
  }[];
  skills: {
    technical: {
      category: string;
      icon: string; // Lucide icon name
      skills: string[];
    }[];
    soft?: {
      name: string;
      description: string;
      icon: string;
    }[];
  };
  education: {
    degree: string;
    field: string;
    institution: string;
    institutionUrl?: string;
    startYear: number;
    endYear?: number;
    description?: string;
    latest?: boolean;
  }[];
  experience?: {
    title: string;
    company: string;
    companyUrl?: string;
    startYear: number;
    endYear?: number;
    current?: boolean;
    description: string;
  }[];
  publications?: {
    title: string;
    url?: string;
    journal: string;
    authors: string[];
    year: number;
    doi?: string;
    isFirstAuthor: boolean;
  }[];
  certifications?: {
    name: string;
    issuer: string;
    issuerUrl?: string;
    date: string;
    skills: string[];
  }[];
  projects: {
    title: string;
    description: string;
    url?: string;
    tags: string[];
    featured?: boolean;
  }[];
  social: {
    platform: string;
    url: string;
    icon: string; // Lucide icon name
  }[];
}

export const studentData: StudentData = {
  personal: {
    firstName: "Abdolhak",
    lastName: "Staouni Ben Abdellah",
    email: "a.staounibenabdellah@esisa.ac.ma",
    title: "Software Engineering Student",
    subtitle: "AI & Machine Learning Enthusiast",
    bio: "I am a passionate software engineering student at ESISA (École Supérieure d'Ingénierie en Sciences Appliquées) in Fez, Morocco. I am deeply interested in artificial intelligence, machine learning, and computer vision. I believe in continuous learning and love contributing to innovative projects that solve real-world problems.",
    location: "Fez, Morocco",
    avatar: "/avatar.jpg",
  },
  stats: [
    { label: "Projects Completed", value: 5 },
    { label: "Technologies Mastered", value: 10 },
    { label: "Years of Study", value: 3 },
  ],
  skills: {
    technical: [
      {
        category: "AI & Machine Learning",
        icon: "Brain",
        skills: ["Deep Learning", "Machine Learning", "Neural Networks", "TensorFlow", "PyTorch"],
      },
      {
        category: "Data Science",
        icon: "BarChart3",
        skills: ["Data Analysis", "Pandas", "NumPy", "Scikit-learn", "Data Visualization"],
      },
      {
        category: "Programming Languages",
        icon: "Code",
        skills: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
      },
      {
        category: "Web Development",
        icon: "Globe",
        skills: ["HTML", "CSS", "React", "Astro", "Node.js"],
      },
      {
        category: "Tools & Platforms",
        icon: "Package",
        skills: ["Git", "Docker", "Jupyter Notebooks", "VS Code", "Linux"],
      },
    ],
    soft: [
      {
        name: "Problem Solving",
        description: "Breaking down complex problems and finding elegant solutions",
        icon: "Lightbulb",
      },
      {
        name: "Collaboration",
        description: "Working effectively in teams and sharing knowledge",
        icon: "Users",
      },
      {
        name: "Communication",
        description: "Clearly explaining technical concepts to diverse audiences",
        icon: "MessageSquare",
      },
      {
        name: "Continuous Learning",
        description: "Staying updated with latest technologies and best practices",
        icon: "BookOpen",
      },
    ],
  },
  education: [
    {
      degree: "Bachelor's Degree",
      field: "Software Engineering (Ingénierie Logiciel)",
      institution: "ESISA – École Supérieure d'Ingénierie en Sciences Appliquées",
      institutionUrl: "https://www.esisa.ac.ma",
      startYear: 2022,
      endYear: 2025,
      description: "Currently pursuing a degree in Software Engineering with a focus on AI, Machine Learning, and Data Science.",
      latest: true,
    },
  ],
  projects: [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio built with Astro and deployed on Vercel with analytics integration.",
      url: "https://github.com/astaounibenabdellah-ux/portfolio",
      tags: ["Astro", "TypeScript", "CSS", "Vercel"],
      featured: true,
    },
    {
      title: "Machine Learning Classification Project",
      description: "Multi-class classification model using scikit-learn with comprehensive data preprocessing and evaluation.",
      tags: ["Python", "Scikit-learn", "Data Science", "Machine Learning"],
      featured: true,
    },
    {
      title: "Research Paper on Neural Networks",
      description: "Academic research exploring novel architectures for image classification using deep learning.",
      tags: ["Deep Learning", "Computer Vision", "Python", "TensorFlow"],
      featured: true,
    },
    {
      title: "Web Application Development",
      description: "Full-stack web application using React and Node.js with real-time features.",
      tags: ["React", "Node.js", "JavaScript", "Web Development"],
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing large datasets with filtering and export capabilities.",
      tags: ["Python", "Pandas", "Matplotlib", "Data Visualization"],
    },
  ],
  social: [
      {
        platform: "GitHub",
        url: "https://github.com/astaounibenabdellah-ux",
        icon: "Github",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/abdolhak-staouni/",
        icon: "Linkedin",
      },
      {
        platform: "Email",
        url: "mailto:a.staounibenabdellah@esisa.ac.ma",
        icon: "Mail",
      },
  ],
};
