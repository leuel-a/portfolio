import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Challenges [01] - Ecommerce Product Page',
};

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return <div className={`font-kumbh-sans`}>{children}</div>;
}
