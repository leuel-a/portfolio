import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';

const kumbhSans = localFont({
    src: '../public/fonts/kumbh_sans/KumbhSans_VariableFont.ttf',
    variable: '--font-kumbh-sans',
});

export const metadata: Metadata = {
    title: 'Leuel A',
    description: 'My personal website',
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className={`${kumbhSans.variable} antialiased`}> {children} </body>
        </html>
    );
}
