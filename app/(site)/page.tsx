import {Separator} from '@/components/ui/separator';
import {IconsMarquee} from '@/components/pages/home/icons-marquee';
import {ClickActions} from '@/components/pages/home/click-actions';
import { Experiences } from '@/components/pages/home/experiences';

export default function Home() {
    return (
        <div className="mx-auto max-w-[80rem] px-6 pt-10 md:px-4">
            <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-xl">Hi, I am Leuel</h1>
                        <p className="text-justify">I’m a curious builder who loves exploring ideas, and pushing my skills further every day.</p>
                    </div>
                    <ClickActions />
                </div>
                <IconsMarquee />
            </div>
            <Separator className="my-10 h-1" />
            <div>
                <h2 className="text-2xl font-semibold tracking-tighter">Experience</h2>
                <Experiences/>
            </div>
        </div>
    );
}
