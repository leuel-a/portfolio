export default async function Page() {
    return (
        <div className="">
            <Header />
            <div></div>
        </div>
    );
}

export function Header() {
    return (
        <header className="mx-auto flex h-20 max-w-[80rem] items-center">
            <div className="flex items-center gap-10">
                <h1 className="text-4xl font-semibold tracking-tighter">sneakers</h1>
                <nav className="my-auto">
                    <ul className="flex items-center gap-4">
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
