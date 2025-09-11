import {Header} from '@/components/shared/header';
import {Footer} from '@/components/blocks/footer';

export default function SiteLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="flex h-full w-full flex-col items-center bg-very-dark-blue py-8 font-kubmh-sans text-white">
            <Header />
            <div className="flex-1 bg-very-dark-blue">{children}</div>
            <Footer />
        </div>
    );
}
