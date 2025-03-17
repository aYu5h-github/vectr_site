import React from 'react';
// import Image from 'next/image';

// import AppStoreButton from './AppStoreButton';
// import PlayStoreButton from './PlayStoreButton';

// import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <>
            <section
                id="hero"
                className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 ">
                <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                    <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
                    {/* <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"> */}
                    </div>
                </div>

                <div className="text-center">
                    <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                        {/* <AppStoreButton dark />
                    <PlayStoreButton dark /> */}
                    </div>
                    {/* <Image
                        src={heroDetails.centerImageSrc}
                        width={300}
                        height={300}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 384px"
                        priority={true}
                        unoptimized={true}
                        alt=""
                        className="relative z-10 mx-auto
                                     transform-gpu rotate-y-[-8deg] hover:rotate-y-[0deg] 
                                     transition-transform duration-700 ease-out
                                     drop-shadow-[0_20px_50px_rgba(0,0,255,1.35)]
                                     rounded-lg"
                    // className='relative mt-12 md:mt-16 mx-auto z-10 '
                    /> */}
                </div>
            </section>
        </>
    );
};

export default Hero;
