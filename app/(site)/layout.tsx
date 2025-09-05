import { Header } from '@/components/shared/header';

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-very-dark-blue text-white h-full font-obritron-sans">
            <Header />
            {children}
        </div>
    )
}
