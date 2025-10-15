import {useState} from 'react';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-bold text-transparent select-none">
                    ልኡል | Leuel
                </span>

                {/* Desktop Navigation */}
                <ul className="hidden gap-8 text-lg md:flex">
                    <li>
                        <a
                            href="#about"
                            className="group relative text-slate-300 transition-colors duration-200 hover:text-white"
                        >
                            About
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="group relative text-slate-300 transition-colors duration-200 hover:text-white"
                        >
                            Projects
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#frameworks"
                            className="group relative text-slate-300 transition-colors duration-200 hover:text-white"
                        >
                            Frameworks
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#languages"
                            className="group relative text-slate-300 transition-colors duration-200 hover:text-white"
                        >
                            What do I use?
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="p-2 text-slate-300 transition-colors hover:text-white md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="animate-fade-in absolute top-20 left-0 w-full border-b border-slate-800 bg-slate-900/95 backdrop-blur-md md:hidden">
                        <div className="space-y-4 px-6 py-4">
                            <a
                                href="#about"
                                className="block border-l-2 border-transparent py-2 text-lg text-slate-300 transition-all transition-colors duration-200 hover:border-cyan-400 hover:pl-4 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="block border-l-2 border-transparent py-2 text-lg text-slate-300 transition-all transition-colors duration-200 hover:border-cyan-400 hover:pl-4 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </a>
                            <a
                                href="#languages"
                                className="block border-l-2 border-transparent py-2 text-lg text-slate-300 transition-all transition-colors duration-200 hover:border-cyan-400 hover:pl-4 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                What do I use?
                            </a>
                            <a
                                href="#frameworks"
                                className="block border-l-2 border-transparent py-2 text-lg text-slate-300 transition-all transition-colors duration-200 hover:border-cyan-400 hover:pl-4 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Frameworks
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
