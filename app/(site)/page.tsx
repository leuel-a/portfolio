import * as motion from 'motion/react-client';
import * as Icons from '@/assets/icons';
import {Button} from '@/components/ui/button';

export default function Home() {
    return (
        <div className="mx-auto max-w-[80rem] pt-10 px-6 md:px-4">
            <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <h1 className="text-xl">Hi, I am Leuel Asfaw</h1>
                        <p className="text-justify">
                            I’m a curious mind who loves exploring ideas, tinkering with C, diving into JavaScript’s depths, and building things that
                            push my understanding a little further every day.
                        </p>
                    </div>
                    <div className="flex h-12 flex-col gap-4 md:flex-row">
                        <Button className="group h-full cursor-pointer space-x-2 border border-green-500 bg-green-500 hover:bg-green-500/80">
                            <span>Hire me on Upwork</span>
                            <div className="flex aspect-square w-8 items-center justify-center rounded-full border border-white group-hover:bg-white group-hover:text-green-500">
                                <Icons.UpworkIcon className="h-full w-full" width={50} height={50} />
                            </div>
                        </Button>
                        <Button className="h-full cursor-pointer border border-very-dark-blue bg-white text-very-dark-blue hover:bg-white/90">
                            Download my Resume
                        </Button>
                    </div>
                </div>
                <div className="mt-20 md:mt-0">
                    <motion.div
                        className="relative h-56 w-56 text-white md:h-64 md:w-64"
                        animate={{rotate: 360}}
                        transition={{repeat: Infinity, duration: 10, ease: 'linear'}}
                    >
                        <Icons.CIcon className="absolute top-0 left-1/2 -translate-x-1/2" width={80} height={80} />
                        <Icons.ReactIcon className="absolute top-1/2 right-0 -translate-y-1/2" width={80} height={80} />
                        <Icons.NextIcon className="absolute bottom-0 left-1/2 -translate-x-1/2" width={80} height={80} />
                        <Icons.LangchainIcon className="absolute top-1/2 left-0 -translate-y-1/2" width={80} height={80} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
