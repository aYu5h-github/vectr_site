// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { Transition } from '@headlessui/react';
// import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

// import Container from './Container';
// import { siteDetails } from '@/data/siteDetails';
// import { menuItems } from '@/data/menuItems';

// const Header: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <header className="bg-transparent fixed top-0 left-0 right-0 md:fixed z-50 mx-auto w-full backdrop-blur-md bg-gradient-to-t from-gray-50 to-transparent">
//             <Container className="!px-0">
//                 <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-6">
//                     <Link href="/" className="flex items-center mt-0 pt-0">
//                         <Image src="/images/Vectr Logo transparent BG.png" alt="Vectr" width={50} height={50} className='p-0 mr-5' />
//                         <span className="manrope text-4xl font-semibold cursor-pointer bg-gradient-to-t from-purple-900 to-purple-400 bg-clip-text text-transparent">
//                             {siteDetails.siteName}
//                         </span>
//                     </Link>

//                     <ul className="hidden md:flex space-x-6">
//                         {menuItems.map(item => (
//                             <li key={item.text}>
//                                 <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
//                                     {item.text}
//                                 </Link>
//                             </li>
//                         ))}
//                         <li>
//                             <Link href="https://d0odd8306ly.typeform.com/to/y4iH2brK" className="text-black bg-[#5bdf03] px-8 py-3 rounded-full transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#F50062] hover:scale-105">
//                                 {/* <Link href="https://d0odd8306ly.typeform.com/to/y4iH2brK" className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors"> */}
//                                 Join the Waitlist
//                             </Link>
//                         </li>
//                     </ul>
                    
//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden flex items-center">
//                         <button
//                             onClick={toggleMenu}
//                             type="button"
//                             className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
//                             aria-controls="mobile-menu"
//                             aria-expanded={isOpen}
//                         >
//                             {isOpen ? (
//                                 <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
//                             ) : (
//                                 <HiBars3 className="h-6 w-6" aria-hidden="true" />
//                             )}
//                             <span className="sr-only">Toggle navigation</span>
//                         </button>
//                     </div>
//                 </nav>
//             </Container>

//             <Transition
//                 show={isOpen}
//                 enter="transition ease-out duration-200 transform"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="transition ease-in duration-75 transform"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//             >
//                 <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
//                     <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
//                         {menuItems.map(item => (
//                             <li key={item.text}>
//                                 <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
//                                     {item.text}
//                                 </Link>
//                             </li>
//                         ))}
//                         <li>
//                             <Link href="https://d0odd8306ly.typeform.com/to/y4iH2brK" className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit" onClick={toggleMenu}>
//                                 Join the Waitlist
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </Transition>
//         </header>
//     );
// };
// export default Header;







// Scroll Effect
'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Hide header when scrolling down (with a small offset threshold) and show when scrolling up
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`bg-transparent fixed top-0 left-0 right-0 z-50 mx-auto w-full backdrop-blur-md bg-gradient-to-t from-gray-50 to-transparent transition-transform duration-300 ${
                showHeader ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-6">
                    <Link href="/" className="flex items-center mt-0 pt-0">
                        <Image
                            src="/images/Vectr Logo transparent BG.png"
                            alt="Vectr"
                            width={50}
                            height={50}
                            className="p-0 mr-5"
                        />
                        <span className="manrope text-4xl font-semibold cursor-pointer bg-gradient-to-t from-purple-900 to-purple-400 bg-clip-text text-transparent">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    <ul className="hidden md:flex space-x-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="https://d0odd8306ly.typeform.com/to/y4iH2brK"
                                className="text-black bg-[#5bdf03] px-8 py-3 rounded-full transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#F50062] hover:scale-105"
                            >
                                Join the Waitlist
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link
                                    href={item.url}
                                    className="text-foreground hover:text-primary block"
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="https://d0odd8306ly.typeform.com/to/y4iH2brK"
                                className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit"
                                onClick={toggleMenu}
                            >
                                Join the Waitlist
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
