import {Header, Footer, Hero} from '@/components/Common';
import {About, ProgrammingLanguages, Frameworks, Projects} from '@/components/Sections';

function App() {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 to-slate-950 text-white">
            <Header />
            <Hero />
            <main className="mx-auto w-full max-w-7xl flex-1 space-y-16 px-6 py-12">
                <About />
                <Projects />
                <ProgrammingLanguages />
                <Frameworks />
            </main>
            <Footer />
        </div>
    );
}

export default App;
