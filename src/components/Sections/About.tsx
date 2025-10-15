import { SiAccenture, SiGithub, SiLeetcode } from '@icons-pack/react-simple-icons';
import { useState, useEffect } from 'react';

export function About() {
    const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorPosition({
                x: 20 + Math.random() * 60,
                y: 30 + Math.random() * 40
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const experiences = [
        {
            company: "Addis Software",
            role: "Software Engineer (Contract)",
            period: "Dec 2023 – Jun 2024",
            achievements: [
                "Built production-ready admin panels using React Admin",
                "Contributed to multiple React Native apps across iOS and Android",
                "Improved network efficiency by optimizing API calls",
                "Developed RESTful APIs with Node.js, Express, and MongoDB",
                "Practiced Agile methodologies for team collaboration"
            ]
        },
        {
            company: "Afrimind",
            role: "Full Stack JavaScript Developer (Freelance)",
            period: "Aug 2024 – Dec 2024",
            achievements: [
                "Built a cross-platform expense management app using React Native",
                "Developed company web infrastructure and self-hosted GitLab instance"
            ]
        }
    ];

    const education = [
        {
            institution: "Addis Ababa University",
            degree: "BSc in Computer Science",
            details: "GPA 3.61/4.0"
        },
        {
            institution: "Africa to Silicon Valley (A2SV)",
            degree: "Google-backed program",
            details: "Data structures, algorithms, and interview preparation"
        },
        {
            institution: "ALX Software Engineering Programme",
            degree: "Full-stack education",
            details: "Project-based learning in Python, JavaScript, and C"
        }
    ];

    return (
        <section className="relative py-16">
            {/* Animated Vim Cursor */}
            <div
                className="absolute w-3 h-5 bg-cyan-400 rounded-sm opacity-80 z-0 transition-all duration-3000 ease-in-out"
                style={{
                    left: `${cursorPosition.x}%`,
                    top: `${cursorPosition.y}%`,
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)'
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-light text-slate-300 mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Personal Info */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Name & Basic Info */}
                        <div>
                            <h1 className="text-2xl font-light text-slate-100 mb-2">
                                Leuel A. Gebreselassie
                            </h1>
                            <div className="space-y-2 text-slate-400 text-sm">
                                <p>📍 Addis Ababa, Ethiopia</p>
                                <p>📞 +251 929185488</p>
                                <p>✉️ leuelasf@gmail.com</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-sm font-medium text-slate-300 mb-3 uppercase tracking-wider">
                                Connect
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                                >
                                    <SiAccenture className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                                >
                                    <SiGithub className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                                >
                                    <SiLeetcode className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium flex items-center"
                                >
                                    CF
                                </a>
                            </div>
                        </div>

                        {/* Technical Skills */}
                        <div>
                            <h3 className="text-sm font-medium text-slate-300 mb-3 uppercase tracking-wider">
                                Core Technologies
                            </h3>
                            <div className="space-y-2 text-sm text-slate-400">
                                <div>
                                    <span className="text-cyan-400">Languages:</span> Python, JavaScript, C#, C
                                </div>
                                <div>
                                    <span className="text-cyan-400">Frameworks:</span> React.js, Next.js, Node.js, FastAPI, ASP.NET Core 7, Flask, MongoDB
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview */}
                        <div>
                            <h3 className="text-lg font-medium text-slate-200 mb-4">
                                Software Engineer & Competitive Programmer
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                I craft elegant systems at the intersection of engineering precision and creative problem-solving. 
                                With a strong foundation in computer science and a passion for building scalable applications, 
                                I approach each project with the focus of a competitive programmer and the artistry of a craftsman.
                            </p>
                            <p className="text-slate-400 leading-relaxed mt-4">
                                My journey is fueled by continuous learning through platforms like LeetCode and Codeforces, 
                                where I sharpen my algorithmic thinking and push the boundaries of efficient code. 
                                I believe in writing software that not only functions flawlessly but also tells a story of thoughtful design.
                            </p>
                        </div>

                        {/* Experience */}
                        <div>
                            <h3 className="text-lg font-medium text-slate-200 mb-4">
                                Professional Experience
                            </h3>
                            <div className="space-y-6">
                                {experiences.map((exp, index) => (
                                    <div
                                        key={index}
                                        className="border-l-2 border-cyan-400/30 pl-4 py-2 hover:border-cyan-400/50 transition-colors duration-300"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                            <div>
                                                <h4 className="text-slate-100 font-medium">{exp.company}</h4>
                                                <p className="text-cyan-400 text-sm">{exp.role}</p>
                                            </div>
                                            <span className="text-slate-500 text-sm mt-1 sm:mt-0">{exp.period}</span>
                                        </div>
                                        <ul className="text-slate-400 text-sm space-y-1">
                                            {exp.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-cyan-400 mr-2">▸</span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 className="text-lg font-medium text-slate-200 mb-4">
                                Education
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {education.map((edu, index) => (
                                    <div
                                        key={index}
                                        className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 hover:border-cyan-400/30 transition-colors duration-300"
                                    >
                                        <h4 className="text-slate-100 font-medium text-sm">{edu.institution}</h4>
                                        <p className="text-cyan-400 text-xs mt-1">{edu.degree}</p>
                                        <p className="text-slate-500 text-xs mt-2">{edu.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
