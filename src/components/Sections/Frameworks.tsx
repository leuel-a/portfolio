import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiFastapi,
    SiLangchain,
    SiReact as SiReactnative,
    SiTailwindcss,
} from '@icons-pack/react-simple-icons';

const frameworks = [
    {name: 'React.js', icon: SiReact, color: 'text-cyan-400'},
    {name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-100'},
    {name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400'},
    {name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400'},
    {name: 'LangChain', icon: SiLangchain, color: 'text-orange-400'},
    {name: 'LangGraph', icon: SiLangchain, color: 'text-purple-400'},
    {name: 'React Native', icon: SiReactnative, color: 'text-blue-400'},
    {name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-300'},
];

export function Frameworks() {
    return (
        <section>
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-center text-2xl font-light text-slate-300">
                    Frameworks & Technologies
                </h2>
                <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                {frameworks.map((framework, index) => {
                    const Icon = framework.icon;
                    return (
                        <div
                            key={framework.name}
                            className="group animate-fade-in rounded-xl border border-slate-700 bg-slate-800/50 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-slate-500 hover:shadow-xl hover:shadow-slate-500/5"
                            style={{
                                animationDelay: `${index * 50}ms`,
                            }}
                        >
                            <div className="flex flex-col items-center space-y-3 text-center">
                                <div className="relative">
                                    <Icon
                                        className={`h-8 w-8 transition-transform duration-300 group-hover:scale-110 ${framework.color}`}
                                    />
                                    <div className="absolute inset-0 rounded-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                                </div>
                                <p className="text-sm leading-tight font-medium text-slate-200">
                                    {framework.name}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
