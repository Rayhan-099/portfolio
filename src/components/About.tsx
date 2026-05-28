"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Bot, Binary, Network, Box, Rocket } from "lucide-react";

type SkillItem = {
    name: string;
    icon?: string;
    lucideIcon?: any;
};

type SkillGroup = {
    category: string;
    items: SkillItem[];
};

const skills: SkillGroup[] = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
            { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
            { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
            { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
            { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" }
        ]
    },
    {
        category: "AI & Data Science",
        items: [
            { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
            { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
            { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
            { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
            { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
            { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
            { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
            { name: "MediaPipe", lucideIcon: Network }
        ]
    },
    {
        category: "Web Frameworks",
        items: [
            { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
            { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
            { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" }
        ]
    },
    {
        category: "Databases & Cloud",
        items: [
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
            { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" }
        ]
    },
    {
        category: "Tools & Environments",
        items: [
            { name: "Git/GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
            { name: "CI/CD", lucideIcon: Rocket },
            { name: "Jupyter/Colab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
            { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }
        ]
    },
    {
        category: "Core Competencies",
        items: [
            { name: "Machine Learning", lucideIcon: Brain },
            { name: "Generative AI", lucideIcon: Sparkles },
            { name: "Agentic AI", lucideIcon: Bot },
            { name: "Data Structures & Algorithms", lucideIcon: Binary },
            { name: "REST APIs", lucideIcon: Network },
            { name: "OOP", lucideIcon: Box }
        ]
    }
];

export function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 text-slate-600 dark:text-slate-400 font-inter text-lg leading-relaxed"
                    >
                        <p>
                            I am a Software Engineer currently pursuing my Bachelor of Technology in Computer Science and Engineering at Dr. A.P.J. Abdul Kalam Technical University (AKTU).
                        </p>
                        <p>
                            My passion lies in architecting scalable web platforms and engineering robust, data-driven solutions. I specialize in the MERN stack for full-stack web development and have deep expertise in advanced Python ecosystems, including AI and computer vision.
                        </p>
                        <p>
                            When I'm not coding, I'm constantly learning new technologies, problem-solving, and trying to build the next big thing.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid sm:grid-cols-2 gap-6"
                    >
                        {skills.map((skillGroup, idx) => (
                            <div key={idx} className="bg-white/50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm hover:border-primary/50 transition-colors">
                                <h3 className="font-syne font-bold text-lg mb-4 text-foreground">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-lg font-medium"
                                        >
                                            {skill.icon && <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain brightness-110" />}
                                            {skill.lucideIcon && <skill.lucideIcon className="w-4 h-4" />}
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
