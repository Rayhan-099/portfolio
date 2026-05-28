import {
    Code2, Sparkles, Bot, Brain, LineChart, Terminal, Cloud, 
    TrendingUp, BarChart, PieChart, Database, Search, 
    GitBranch, Cpu, Code, BrainCircuit, Network, Blocks, 
    Layout, Layers, Lightbulb, Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Certification = {
    title: string;
    issuer: string;
    credentialId: string;
    verificationUrl: string;
    icon: LucideIcon;
    featured: boolean;
};

const COURSERA_VERIFY_URL = "https://www.coursera.org/account/accomplishments/verify/";

export const certifications: Certification[] = [
    {
        title: "Google Advanced Data Analytics Professional Certificate",
        issuer: "Google",
        credentialId: "DSRVIU40D9LE",
        verificationUrl: `${COURSERA_VERIFY_URL}DSRVIU40D9LE`,
        icon: LineChart,
        featured: true
    },
    {
        title: "Google IT Automation with Python Professional Certificate",
        issuer: "Google",
        credentialId: "GE9XM1DZBFLK",
        verificationUrl: `${COURSERA_VERIFY_URL}GE9XM1DZBFLK`,
        icon: Terminal,
        featured: true
    },
    {
        title: "Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI",
        issuer: "IBM",
        credentialId: "DVLZVBDMTHGD",
        verificationUrl: `${COURSERA_VERIFY_URL}DVLZVBDMTHGD`,
        icon: BrainCircuit,
        featured: true
    },
    {
        title: "Advanced RAG with Vector Databases and Retrievers",
        issuer: "IBM",
        credentialId: "5EG74MXD84HR",
        verificationUrl: `${COURSERA_VERIFY_URL}5EG74MXD84HR`,
        icon: Zap,
        featured: true
    },
    {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        credentialId: "WVK5BIFOKD36",
        verificationUrl: `${COURSERA_VERIFY_URL}WVK5BIFOKD36`,
        icon: Code2,
        featured: false
    },
    {
        title: "Generative AI: Prompt Engineering Basics",
        issuer: "IBM",
        credentialId: "HWYYME4N9S1R",
        verificationUrl: `${COURSERA_VERIFY_URL}HWYYME4N9S1R`,
        icon: Sparkles,
        featured: false
    },
    {
        title: "Generative AI: Introduction and Applications",
        issuer: "IBM",
        credentialId: "3O07S2XYO5KP",
        verificationUrl: `${COURSERA_VERIFY_URL}3O07S2XYO5KP`,
        icon: Sparkles,
        featured: false
    },
    {
        title: "AI Agents and MLOps for Production-Ready AI",
        issuer: "Packt",
        credentialId: "K7E8E6HC2H6D",
        verificationUrl: `${COURSERA_VERIFY_URL}K7E8E6HC2H6D`,
        icon: Bot,
        featured: false
    },
    {
        title: "Foundations of Model Optimization and Deep Learning",
        issuer: "Packt",
        credentialId: "7LMUM18TEJL7",
        verificationUrl: `${COURSERA_VERIFY_URL}7LMUM18TEJL7`,
        icon: Brain,
        featured: false
    },
    {
        title: "AWS Certified DevOps Engineer - Professional",
        issuer: "Packt",
        credentialId: "YCC7VIKSPRVM",
        verificationUrl: `${COURSERA_VERIFY_URL}YCC7VIKSPRVM`,
        icon: Cloud,
        featured: false
    },
    {
        title: "Regression Analysis: Simplify Complex Data Relationships",
        issuer: "Google",
        credentialId: "GAXXE1PN6ER0",
        verificationUrl: `${COURSERA_VERIFY_URL}GAXXE1PN6ER0`,
        icon: TrendingUp,
        featured: false
    },
    {
        title: "Go Beyond the Numbers: Translate Data into Insights",
        issuer: "Google",
        credentialId: "RN3MRO84GFP3",
        verificationUrl: `${COURSERA_VERIFY_URL}RN3MRO84GFP3`,
        icon: BarChart,
        featured: false
    },
    {
        title: "The Power of Statistics",
        issuer: "Google",
        credentialId: "B5FQDN0QML0V",
        verificationUrl: `${COURSERA_VERIFY_URL}B5FQDN0QML0V`,
        icon: PieChart,
        featured: false
    },
    {
        title: "Foundations of Data Science",
        issuer: "Google",
        credentialId: "JE8Z5RX3U1I6",
        verificationUrl: `${COURSERA_VERIFY_URL}JE8Z5RX3U1I6`,
        icon: Database,
        featured: false
    },
    {
        title: "Accelerate Your Job Search with AI",
        issuer: "Google",
        credentialId: "OF4SL6NHQUPE",
        verificationUrl: `${COURSERA_VERIFY_URL}OF4SL6NHQUPE`,
        icon: Search,
        featured: false
    },
    {
        title: "Automating Real-World Tasks with Python",
        issuer: "Google",
        credentialId: "C35CH3JUKVX4",
        verificationUrl: `${COURSERA_VERIFY_URL}C35CH3JUKVX4`,
        icon: Bot,
        featured: false
    },
    {
        title: "Configuration Management and the Cloud",
        issuer: "Google",
        credentialId: "B8MHD2LQUWFV",
        verificationUrl: `${COURSERA_VERIFY_URL}B8MHD2LQUWFV`,
        icon: Cloud,
        featured: false
    },
    {
        title: "Troubleshooting and Debugging Techniques",
        issuer: "Google",
        credentialId: "H6O3KUMOKCZE",
        verificationUrl: `${COURSERA_VERIFY_URL}H6O3KUMOKCZE`,
        icon: Code2,
        featured: false
    },
    {
        title: "Introduction to Git and GitHub",
        issuer: "Google",
        credentialId: "9Y2B1LJK4IOY",
        verificationUrl: `${COURSERA_VERIFY_URL}9Y2B1LJK4IOY`,
        icon: GitBranch,
        featured: false
    },
    {
        title: "Using Python to Interact with the Operating System",
        issuer: "Google",
        credentialId: "Z7N5GG7A3J31",
        verificationUrl: `${COURSERA_VERIFY_URL}Z7N5GG7A3J31`,
        icon: Cpu,
        featured: false
    },
    {
        title: "Crash Course on Python",
        issuer: "Google",
        credentialId: "ZVL3JHCGNTLZ",
        verificationUrl: `${COURSERA_VERIFY_URL}ZVL3JHCGNTLZ`,
        icon: Code,
        featured: false
    },
    {
        title: "Build AI Agents using MCP",
        issuer: "IBM",
        credentialId: "9DHUS500WM11",
        verificationUrl: `${COURSERA_VERIFY_URL}9DHUS500WM11`,
        icon: Bot,
        featured: false
    },
    {
        title: "Agentic AI with LangChain and LangGraph",
        issuer: "IBM",
        credentialId: "Q9UXHLQMSI4P",
        verificationUrl: `${COURSERA_VERIFY_URL}Q9UXHLQMSI4P`,
        icon: Network,
        featured: false
    },
    {
        title: "Fundamentals of Building AI Agents",
        issuer: "IBM",
        credentialId: "2WQ17MW91KQ3",
        verificationUrl: `${COURSERA_VERIFY_URL}2WQ17MW91KQ3`,
        icon: Blocks,
        featured: false
    },
    {
        title: "Build Multimodal Generative AI Applications",
        issuer: "IBM",
        credentialId: "OCBYV4IYP59O",
        verificationUrl: `${COURSERA_VERIFY_URL}OCBYV4IYP59O`,
        icon: Layout,
        featured: false
    },
    {
        title: "Vector Databases for RAG: An Introduction",
        issuer: "IBM",
        credentialId: "IA8YYUYNFP7C",
        verificationUrl: `${COURSERA_VERIFY_URL}IA8YYUYNFP7C`,
        icon: Database,
        featured: false
    },
    {
        title: "Build RAG Applications: Get Started",
        issuer: "IBM",
        credentialId: "0XCQ3O4AIQQ3",
        verificationUrl: `${COURSERA_VERIFY_URL}0XCQ3O4AIQQ3`,
        icon: Layers,
        featured: false
    },
    {
        title: "Develop Generative AI Applications: Get Started",
        issuer: "IBM",
        credentialId: "6O5BET9T01CH",
        verificationUrl: `${COURSERA_VERIFY_URL}6O5BET9T01CH`,
        icon: Sparkles,
        featured: false
    },
    {
        title: "SQL and Relational Databases 101",
        issuer: "Cognitive Class",
        credentialId: "4d22e718d8854cc6972a7835d864d5f6",
        verificationUrl: "https://courses.cognitiveclass.ai/certificates/4d22e718d8854cc6972a7835d864d5f6",
        icon: Database,
        featured: false
    },
    {
        title: "Machine Learning with Python",
        issuer: "IBM",
        credentialId: "97EGJY7JA3T4",
        verificationUrl: `${COURSERA_VERIFY_URL}97EGJY7JA3T4`,
        icon: Brain,
        featured: false
    },
    {
        title: "Introduction to Artificial Intelligence (AI)",
        issuer: "IBM",
        credentialId: "7HJICAQ0VF1H",
        verificationUrl: `${COURSERA_VERIFY_URL}7HJICAQ0VF1H`,
        icon: Lightbulb,
        featured: false
    }
];

export const featuredCertifications = certifications.filter(cert => cert.featured);
