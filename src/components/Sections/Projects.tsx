import {SiGithub} from '@icons-pack/react-simple-icons';

const projects = [
    {
        name: 'Evently',
        description:
            'A modern event management platform with real-time updates and seamless user experience',
        githubUrl: 'https://github.com/leuel-a/evently',
        liveUrl: 'https://evently-liart-pi.vercel.app/',
        tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    },
];

export function Projects() {
    return (
        <section>
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-2xl font-light text-slate-300">Featured Projects</h2>
                <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={project.name}
                        className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10"
                        style={{
                            animationDelay: `${index * 200}ms`,
                        }}
                    >
                        {/* Animated Background Elements */}
                        <div className="absolute top-0 left-0 h-px w-full animate-pulse bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                        <div className="absolute right-0 bottom-0 h-32 w-32 translate-x-16 translate-y-16 transform rounded-full bg-cyan-400/5 blur-xl transition-transform duration-700 group-hover:scale-150" />

                        <div className="relative z-10">
                            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                <div className="flex-1">
                                    <h3 className="mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-2xl font-light text-slate-100 text-transparent">
                                        {project.name}
                                    </h3>
                                    <p className="mb-4 leading-relaxed text-slate-400">
                                        {project.description}
                                    </p>
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:gap-2">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400"
                                    >
                                        <SiGithub className="h-4 w-4" />
                                        View Code
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                                    >
                                        <svg
                                            className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
