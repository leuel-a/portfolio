import {
    SiJavascript,
    SiPython,
    SiVim,
    SiNeovim,
    SiLangchain,
    SiUpwork,
} from '@icons-pack/react-simple-icons';

export function Hero() {
    const handleContact = () => {
        window.open('mailto:leuel.asfaw@gmail.com', '_blank');
    };

    const handleUpwork = () => {
        window.open('https://www.upwork.com/freelancers/~018ea1f7a77528490b', '_blank');
    };

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
            {/* Glass Break Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-blue-500/10" />
                <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500/5 blur-3xl" />
                <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/5 blur-3xl delay-1000" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                {/* Vim Quote */}
                <div className="animate-fade-in mb-8">
                    <p className="text-sm md:text-lg font-light text-slate-400 italic">
                        "Mastering Vim is like learning to play an instrument — awkward at first, beautiful later."
                    </p>
                </div>

                {/* Main Heading */}
                <h1
                    className="animate-fade-in mb-6 text-5xl font-bold md:text-7xl"
                    style={{animationDelay: '200ms'}}
                >
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        ልኡል አስፋው
                    </span>
                </h1>

                {/* Subtitle */}
                <p
                    className="animate-fade-in mb-8 text-xl text-slate-300 md:text-2xl"
                    style={{animationDelay: '400ms'}}
                >
                    Full-Stack Developer & AI Engineer
                </p>

                {/* Description */}
                <div
                    className="animate-fade-in mx-auto mb-12 max-w-2xl"
                    style={{animationDelay: '600ms'}}
                >
                    <p className="text-lg leading-relaxed text-slate-400">
                        Passionate about building{' '}
                        <span className="text-cyan-400">beautiful websites</span> and creating{' '}
                        <span className="text-blue-400">intelligent AI agents</span>. Currently
                        exploring the depths of{' '}
                        <span className="text-purple-400">compiler design</span> while crafting
                        digital experiences with modern tools.
                    </p>
                </div>

                {/* Tech Stack Icons */}
                <div
                    className="animate-fade-in mb-12 flex items-center justify-center gap-8"
                    style={{animationDelay: '800ms'}}
                >
                    <SiJavascript
                        className="h-8 w-8 text-yellow-400 transition-transform duration-300 hover:scale-110"
                        title="JavaScript"
                    />
                    <SiPython
                        className="h-8 w-8 text-blue-400 transition-transform duration-300 hover:scale-110"
                        title="Python"
                    />
                    <SiVim
                        className="h-8 w-8 text-green-400 transition-transform duration-300 hover:scale-110"
                        title="Vim"
                    />
                    <SiNeovim
                        className="h-8 w-8 text-teal-400 transition-transform duration-300 hover:scale-110"
                        title="Neovim"
                    />
                    <SiLangchain
                        className="h-8 w-8 text-orange-400 transition-transform duration-300 hover:scale-110"
                        title="LangChain"
                    />
                </div>

                {/* Environment Tools */}
                <div className="animate-fade-in mb-12" style={{animationDelay: '1000ms'}}>
                    <p className="mb-4 text-sm tracking-wider text-slate-500 uppercase">
                        Development Environment
                    </p>
                    <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                        <span className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1">
                            Tmux
                        </span>
                        <span className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1">
                            Neovim
                        </span>
                        <span className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1">
                            Gemini CLI
                        </span>
                        <span className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1">
                            Qwen Code
                        </span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div
                    className="animate-fade-in flex flex-col items-center justify-center gap-4 sm:flex-row"
                    style={{animationDelay: '1200ms'}}
                >
                    <button
                        onClick={handleContact}
                        className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                    >
                        Get In Touch
                        <svg
                            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={handleUpwork}
                        className="group flex items-center gap-3 rounded-2xl border border-slate-600 px-8 py-4 font-semibold text-slate-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-400"
                    >
                        <SiUpwork className="h-5 w-5" />
                        Upwork Profile
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
                <div className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-400">
                    <div className="mt-2 h-3 w-1 rounded-full bg-slate-400" />
                </div>
            </div>
        </section>
    );
}
