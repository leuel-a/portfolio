import Link from 'next/link';
import * as Icons from '@/assets/icons';
import {Button} from '@/components/ui/button';
import {UPWORK_PROFILE_LINK} from '@/config/constants';

export function ClickActions() {
    return (
        <div className="flex h-10 flex-col gap-2 md:h-12 md:flex-row md:gap-4">
            <Button className="group h-full cursor-pointer space-x-2 border border-green-500 bg-green-500 hover:bg-green-500/80" asChild>
                <Link href={UPWORK_PROFILE_LINK} target="_blank">
                    <span>Hire me on Upwork</span>
                    <div className="flex aspect-square w-8 items-center justify-center rounded-full border border-white group-hover:bg-white group-hover:text-green-500">
                        <Icons.UpworkIcon className="h-full w-full" width={50} height={50} />
                    </div>
                </Link>
            </Button>
            <Button className="h-full cursor-pointer border border-very-dark-blue bg-white text-very-dark-blue hover:bg-white/90">
                Download my Resume
            </Button>
        </div>
    );
}
