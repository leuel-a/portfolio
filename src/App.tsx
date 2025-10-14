import {Header, Footer} from '@/components/Common';
import lodashGet from 'lodash/get';
import {useQuery} from '@tanstack/react-query';
import {getAuthenticatedUser} from '@/lib/github';
import {popularLanguages} from './components/icons/popular-icons';
import {Hero} from './components/Common/Hero';

function App() {
    const {data} = useQuery({queryKey: ['user', ''], queryFn: getAuthenticatedUser});

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 to-slate-950 text-white">
            <Header />
            <Hero />
            <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data?.languages?.map(([name, percentage], index) => {
                        const Icon = lodashGet(popularLanguages, name);

                        return (
                            Icon && (
                                <div
                                    key={name}
                                    className="group animate-fade-in rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-slate-500 hover:shadow-2xl hover:shadow-slate-500/10"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                                            <div className="absolute inset-0 rounded-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-lg font-semibold text-slate-100">
                                                {name}
                                            </p>
                                            <div className="mt-2 flex items-center gap-3">
                                                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-700">
                                                    <div
                                                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ease-out"
                                                        style={{
                                                            width: `${percentage}%`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-sm font-medium whitespace-nowrap text-cyan-300">
                                                    {percentage}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        );
                    })}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
