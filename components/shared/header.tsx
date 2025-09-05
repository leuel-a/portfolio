'use client';

import {useState} from 'react';
import Link from 'next/link';
import {AlignJustify, X} from 'lucide-react';
import {cn} from '@/lib/utils';
import {useIsMobile} from '@/hooks/use-mobile';

export function Header() {
    const isMobile = useIsMobile();
    const [headerOpen, setHeaderOpen] = useState<boolean>(!!isMobile); // TODO: extract this to its own hook for more usability

    const toggleHeader = () => setHeaderOpen((prev) => !prev);
    return (
        <header className="mx-auto flex max-w-[80rem] items-center justify-between px-4 pt-10">
            <div>
                <h1 className="text-2xl tracking-widest italic">LA</h1>
            </div>
            <button className="fixed top-10 right-4 z-50 cursor-pointer md:hidden" onClick={toggleHeader}>
                {headerOpen ? <X /> : <AlignJustify />}
            </button>
            <nav
                className={cn(
                    'fixed top-0 right-0 bottom-0 w-4/6 bg-white/5 px-4 py-20 pr-10 md:static md:p-0 md:pl-10',
                    'transition-transform duration-500 ease-in-out md:transition-none',
                    isMobile ? (headerOpen ? 'translate-x-0' : 'translate-x-full') : '',
                )}
            >
                <ul className="flex flex-col items-start justify-start gap-5 px-2 md:flex-row md:py-4">
                    <li>
                        <Link className="cursor-pointer hover:underline hover:underline-offset-[0.75rem]" href="#">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link className="cursor-pointer hover:underline hover:underline-offset-[0.75rem]" href="#">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="cursor-pointer hover:underline hover:underline-offset-[0.75rem]" href="#">
                            Stats
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
