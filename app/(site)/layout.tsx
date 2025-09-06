import { Header } from '@/components/shared/header';
import {Footer} from '@/components/blocks/footer';

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-very-dark-blue text-white h-full font-kubmh-sans">
            <Header />
            {children}
            <Footer/>
        </div>
    )
}
