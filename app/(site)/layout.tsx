import {Header} from '@/components/shared/header';
import {Footer} from '@/components/blocks/footer';

export default function SiteLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="h-full w-full bg-very-dark-blue font-kubmh-sans text-white">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
