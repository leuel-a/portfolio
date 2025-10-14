export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto border-t border-slate-800 bg-slate-900/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="text-center md:text-left">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-bold text-transparent select-none">
                            ልኡል | Leuel
                        </span>
                        <p className="mt-2 text-sm text-slate-400">
                            Building digital experiences with passion
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 text-center sm:flex-row">
                        <div>
                            <h3 className="mb-4 font-semibold text-slate-300">Navigation</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                                    >
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 font-semibold text-slate-300">Connect</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:hello@leuel.com"
                                        className="text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                                    >
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
                    <p className="text-sm text-slate-500">
                        © {currentYear} Leuel. Vim is the way.
                    </p>
                </div>
            </div>
        </footer>
    );
}
