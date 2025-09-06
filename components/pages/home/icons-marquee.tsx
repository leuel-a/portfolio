import * as Icons from '@/assets/icons';

export function IconsMarquee() {
    return (
        <div className="mt-40 flex justify-center md:mt-20 col-span-1 w-full">
            <div className="relative overflow-x-hidden bg-very-dark-blue py-4">
                <div className="flex flex-shrink-0 animate-marquee gap-10 whitespace-nowrap">
                    {[...Array(2)].map((_, index) => (
                        <div key={index} className="flex gap-10">
                            <Icons.CIcon width={80} height={80} />
                            <Icons.ReactIcon width={80} height={80} />
                            <Icons.NextIcon width={80} height={80} />
                            <Icons.LangchainIcon width={80} height={80} />
                            <Icons.UpworkIcon width={80} height={80} />
                        </div>
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-very-dark-blue to-transparent" />{' '}
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-very-dark-blue to-transparent" />
            </div>
        </div>
    );
}
