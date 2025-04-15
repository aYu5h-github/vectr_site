// "use client";

// import Link from 'next/link';
// import React from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import { siteDetails } from '@/data/siteDetails';
// import { footerDetails } from '@/data/footer';

// const getPlatformIconByName = (platformName: string): JSX.Element | null => {
//   const icons: Record<string, React.ComponentType> = {
//     github: FaGithub,
//     linkedin: FaLinkedin,
//     instagram: FaInstagram,
//   };

//   const IconComponent = icons[platformName.toLowerCase()];
//   return IconComponent ? <IconComponent /> : null;
// };

// const Footer: React.FC = () => {
//   const router = useRouter();

//   const isActive = (path: string) => {
//     return router.pathname === path ? 'text-blue-500' : 'text-green-500 hover:text-blue-500';
//   };

//   return (
//     <div id='footer'>
//       <footer className="bg-hero-background text-foreground py-10">
//         <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
//           <div>
//             <Link href="/" className="flex items-center gap-2">
//               <Image src="/images/Vectr Logo transparent BG.png" alt="Vectr" width={50} height={50} className='p-0 mr-5' />
//               <h3 className="manrope text-5xl font-semibold cursor-pointer bg-gradient-to-t from-purple-900 to-purple-400 bg-clip-text text-transparent">
//                 {siteDetails.siteName}
//               </h3>
//             </Link>
//           </div>
//           <div className='flex flex-col'>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="text-foreground-accent">
//               {footerDetails.quickLinks.map(link => (
//                 <li key={link.text} className="mb-2">
//                   <Link href={link.url} className="hover:text-purple-700 ">
//                     {link.text}
//                   </Link>
//                   <Link href="/teams">
//                     <span className={`${isActive('/teams')} transition duration-300 cursor-pointer`}>Teams</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//             {footerDetails.email && (
//               <a
//                 href={`mailto:${footerDetails.email}`}
//                 className="block text-foreground-accent hover:text-purple-700"
//               >
//                 Email: {footerDetails.email}
//               </a>
//             )}
//             {footerDetails.telephone && (
//               <a
//                 href={`tel:${footerDetails.telephone}`}
//                 className="block text-foreground-accent hover:text-purple-700"
//               >
//                 Phone: {footerDetails.telephone}
//               </a>
//             )}
//             {footerDetails.socials && (
//               <div className="mt-5 flex items-center gap-5 flex-wrap text-3xl">
//                 {Object.keys(footerDetails.socials).map(platformName => {
//                   if (platformName && footerDetails.socials[platformName]) {
//                     return (
//                       <Link
//                         href={footerDetails.socials[platformName]}
//                         key={platformName}
//                         aria-label={platformName}
//                       >
//                         {getPlatformIconByName(platformName)}
//                       </Link>
//                     );
//                   }
//                   return null;
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="mt-8 md:text-center text-gray-900 px-6">
//           <p>
//             Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName} All rights
//             reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;













// TO DO
"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';

const getPlatformIconByName = (platformName: string): JSX.Element | null => {
  const icons: Record<string, React.ComponentType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
  };

  const IconComponent = icons[platformName.toLowerCase()];
  return IconComponent ? <IconComponent /> : null;
};

const Footer: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? 'text-foreground-accent'
      : 'hover:text-purple-700';
  };

  return (
    <div id='footer'>
      <footer className="bg-hero-background text-foreground py-10">
        <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/Vectr Logo transparent BG.png"
                alt="Vectr"
                width={50}
                height={50}
                className='p-0 mr-5'
              />
              <h3 className="manrope text-5xl font-semibold cursor-pointer bg-gradient-to-t from-purple-900 to-purple-400 bg-clip-text text-transparent">
                {siteDetails.siteName}
              </h3>
            </Link>
          </div>
          <div className='flex flex-col'>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-foreground-accent">
              {footerDetails.quickLinks.map(link => (
                <li key={link.text} className="mb-2">
                  <Link href={link.url} className="hover:text-purple-700">
                    {link.text}
                  </Link>
                </li>
              ))}
              
              <li>
                <Link href="/teams">
                  <span className={`${isActive('/teams')} transition duration-300 cursor-pointer`}>
                    Teams
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            {footerDetails.email && (
              <a
                href={`mailto:${footerDetails.email}`}
                className="block text-foreground-accent hover:text-purple-700"
              >
                Email: {footerDetails.email}
              </a>
            )}
            {footerDetails.telephone && (
              <a
                href={`tel:${footerDetails.telephone}`}
                className="block text-foreground-accent hover:text-purple-700"
              >
                Phone: {footerDetails.telephone}
              </a>
            )}
            {footerDetails.socials && (
              <div className="mt-5 flex items-center gap-5 flex-wrap text-3xl">
                {Object.keys(footerDetails.socials).map(platformName => {
                  if (platformName && footerDetails.socials[platformName]) {
                    return (
                      <Link
                        href={footerDetails.socials[platformName]}
                        key={platformName}
                        aria-label={platformName}
                      >
                        {getPlatformIconByName(platformName)}
                      </Link>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 md:text-center text-gray-900 px-6">
          <p>
            Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
