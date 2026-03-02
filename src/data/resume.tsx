import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

type Hackathon = {
  title: string;
  dates?: string;
  location?: string;
  description?: string;
  image?: string;
  links?: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[];
};

export const DATA = {
  name: "V Hariram",
  initials: "VH",
  url: "https://hariram.me",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/Chennai",
  description:
    "Systems & AI Infrastructure Engineer building distributed backends, production-grade RAG pipelines, and real-time embedded systems.",
  summary:
    "Systems-focused Software Engineer specializing in distributed architectures, LLM infrastructure, and real-time embedded systems. Experienced in architecting hybrid RAG pipelines, event-driven Kafka backends, cloud-native microservices, and multithreaded real-time systems with strong emphasis on reliability, observability, and performance.",

  avatarUrl: "/me.jpg",

  skills: [
    { name: "C++", icon: Csharp },
    { name: "Go", icon: Golang },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
  email: "hariram.unofficial123@gmail.com",
  tel: "+91-6381561831",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/hariram4862",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hariram4862/",
      icon: Icons.linkedin,
      navbar: true,
    },
    X: {
      name: "X",
      url: "https://twitter.com/", // dummy
      icon: Icons.x,
      navbar: false,
    },
    Youtube: {
      name: "Youtube",
      url: "https://youtube.com/", // dummy
      icon: Icons.youtube,
      navbar: false,
    },
    email: {
      name: "Send Email",
      url: "mailto:hariram.unofficial123@gmail.com",
      icon: Icons.email,
      navbar: false,
    },
  },
},

  work: [
    {
      company: "ThetaZero",
      href: "#",
      badges: ["AI Infrastructure", "LLM Systems"],
      location: "Hybrid",
      title: "Software Engineer Intern",
      logoUrl: "",
      start: "May 2025",
      end: "July 2025",
      description:
        "Architected and productionized a hybrid RAG pipeline integrating FAISS dense retrieval with Elasticsearch BM25 and cross-encoder reranking to improve answer precision and reduce hallucinations in enterprise knowledge systems. Implemented an MCP-compliant multi-agent orchestration layer with structured tool schemas, strict JSON validation, grounded citation enforcement, and prompt-injection mitigation. Built an async FastAPI LLM service with Redis caching, PostgreSQL metadata storage, automated ingestion via n8n, and latency/token instrumentation achieving sub-second response times with production-grade observability.",
    },
  ],

  education: [
    {
      school: "Vellore Institute of Technology, Chennai",
      href: "https://vit.ac.in",
      degree: "M.Tech (Integrated) in Software Engineering | CGPA: 8.42/10",
      logoUrl: "",
      start: "2022",
      end: "2027",
    },
  ],

  projects: [
    {
      title: "Event-Driven Notification System",
      href: "",
      dates: "2025",
      active: false,
      description:
        "Architected a distributed event-driven backend using Apache Kafka and consumer groups enabling horizontally scalable, asynchronous processing with at-least-once delivery semantics and safe offset management. Engineered a concurrent Go worker engine with CPU-aware pools, bounded queues, structured retries, DLQ routing, and Redis-backed idempotency ensuring duplicate-safe execution. Implemented CQRS with PostgreSQL read models and exposed via GraphQL with structured logging and Prometheus-based observability.",
      technologies: [
        "Go",
        "Apache Kafka",
        "PostgreSQL",
        "GraphQL",
        "Redis",
        "Prometheus",
      ],
      links: [],
      image: "",
      video: "",
    },

    {
      title: "Cloud-Native URL Shortener",
      href: "",
      dates: "2024",
      active: false,
      description:
        "Architected a cloud-native microservice backend using FastAPI with a decoupled gRPC-based analytics service to isolate traffic processing from user-facing APIs. Implemented JWT authentication with refresh token rotation, Redis-backed revocation, distributed rate limiting, and RBAC. Deployed PostgreSQL on Amazon RDS with Alembic migrations, containerized services via Docker, provisioned infrastructure using Terraform, and integrated Jenkins CI/CD pipelines.",
      technologies: [
        "FastAPI",
        "gRPC",
        "Amazon RDS",
        "Redis",
        "Docker",
        "Terraform",
        "Jenkins",
      ],
      links: [],
      image: "",
      video: "",
    },

    {
      title: "Railway Crack Detection System",
      href: "",
      dates: "2024",
      active: false,
      description:
        "Developed a real-time embedded monitoring system in C++ integrating piezoelectric sensors for structural fault detection. Built a low-level data acquisition pipeline with FFT-based spectral analysis and feature extraction under strict operating constraints. Architected a multithreaded on-device classification workflow achieving 96% accuracy with deterministic execution and controlled memory footprint.",
      technologies: [
        "C++",
        "Signal Processing",
        "Embedded Systems",
        "Real-Time Systems",
        "Machine Learning",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],

 hackathons: [] as Hackathon[],
} as const;