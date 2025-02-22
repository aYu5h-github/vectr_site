// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

// export const getPlatformIconByName = (platformName: string): JSX.Element | null => {
//     switch (platformName) {
//         case 'github': {
//             return <FaGithub size={24} className='min-w-fit' />;
//         }
//         case 'instagram': {
//             return <FaInstagram size={24} className='min-w-fit' />;
//         }
//         case 'linkedin': {
//             return <FaLinkedin size={24} className='min-w-fit' />;
//         }
//         default:
//             console.log('Platform name not supported, no icon is returned:', platformName);
//             return null;
//     }
// }


// import { clsx } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs) {
//   return twMerge(clsx(inputs))
// }








"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function getPlatformIconByName(platformName: string): JSX.Element | null {
  switch (platformName) {
    case 'github':
      return <FaGithub size={24} className='min-w-fit' />;
    case 'instagram':
      return <FaInstagram size={24} className='min-w-fit' />;
    case 'linkedin':
      return <FaLinkedin size={24} className='min-w-fit' />;
    default:
      console.log('Platform name not supported:', platformName);
      return null;
  }
}

export function cn(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}