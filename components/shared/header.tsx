'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import {AlignJustify, X} from 'lucide-react';
import {cn} from '@/lib/utils';
import {useIsMobile} from '@/hooks/use-mobile';

export function Header() {
    const isMobile = useIsMobile();
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [headerOpen, setHeaderOpen] = useState<boolean>(!!isMobile);

    const toggleHeader = () => setHeaderOpen((prev) => !prev);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10 ? true : false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 mx-auto flex h-20 max-w-[80rem] items-center justify-between px-4 pt-10',
                isScrolled ? 'bg-dark-grayish-blue/90' : '',
            )}
        >
            <div className="fixed top-8 z-50 md:static">
                <h1 className={cn('text-2xl tracking-widest italic', isScrolled ? 'font-bold text-very-dark-blue' : '')}>LA</h1>
            </div>
            <button className="fixed top-8 right-4 z-50 cursor-pointer md:hidden" onClick={toggleHeader}>
                {headerOpen ? (
                    <X className={cn(isScrolled ? 'text-very-dark-blue' : '')} />
                ) : (
                    <AlignJustify className={isScrolled ? 'text-very-dark-blue' : ''} />
                )}
            </button>
            <nav
                className={cn(
                    'fixed top-0 right-0 bottom-0 z-10 w-4/6 bg-dark-grayish-blue px-4 py-20 pr-10 md:static md:p-0 md:pl-10',
                    'transition-transform duration-500 ease-in-out md:transition-none',
                    isMobile ? (headerOpen ? 'translate-x-0' : 'translate-x-full') : '',
                )}
            >
                <ul className="flex flex-col items-start justify-start gap-5 px-2 md:flex-row md:py-4">
                    <li>
                        <Link className="cursor-pointer hover:underline hover:underline-offset-[0.75rem]" href="#projects">
                            <span className="mr-2">01</span>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="cursor-pointer hover:underline hover:underline-offset-[0.75rem]" href="#experience">
                            <span className="mr-2">02</span>
                            Experience
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
