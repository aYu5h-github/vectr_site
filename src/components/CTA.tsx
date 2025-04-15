// "use client";

// import { ctaDetails } from "@/data/cta"

// import Link from "next/link"
// import { useState } from "react";

// // import AppStoreButton from "./AppStoreButton"
// // import PlayStoreButton from "./PlayStoreButton"

// const CTA: React.FC = () => {

//     const [email, setEmail] = useState("");

//     return (
//         <section id="cta" className="mt-10 mb-5 lg:my-20">
//             <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
//                 <div className="h-full w-full">
//                     <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
//                         <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
//                     </div>

//                     <div className="h-full flex flex-col items-center justify-center text-purple-100 text-center px-5">
//                         <h2 className="text-2xl sm:text-3xl md:text-4xl md:leading-tight font-semibold mb-4 max-w-7xl">{ctaDetails.heading}</h2>

//                         <div className="md:px-0">{ctaDetails.subheading}</div>
//                         <div className="flex items-center justify-between bg-gray-800 p-2 rounded-full w-full max-w-5xl my-5">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your E-mail address"
//                                 className="flex-1 bg-transparent text-gray-300 placeholder-gray-400 px-4 py-2 outline-none"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                             <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
//                                 Register
//                             </button>
//                         </div>

//                         <Link href={"https://web.telegram.org"} className="hover:text-blue-600"><p className="mx-auto max-w-xl md:px-5">{ctaDetails.footer}</p></Link>

//                         {/* <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
//                             <AppStoreButton />
//                             <PlayStoreButton />
//                         </div> */}

//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default CTA





// "use client";

// import { ctaDetails } from "@/data/cta";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// const CTA: React.FC = () => {
//     const [mobileOS, setMobileOS] = useState<string>("");

//     useEffect(() => {
//         const userAgent = window.navigator.userAgent || window.navigator.vendor;
//         if (/android/i.test(userAgent)) {
//             setMobileOS("android");
//         } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//             setMobileOS("ios");
//         } else {
//             setMobileOS("desktop");
//         }
//     }, []);

//     return (
//         <section id="cta" className="mt-10 mb-5 lg:my-20">
//             <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
//                 <div className="h-full w-full">
//                     <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
//                         <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
//                     </div>

//                     <div className="h-full flex flex-col items-center justify-center text-purple-100 text-center px-5">
//                         {/* <h2 className="text-2xl sm:text-3xl md:text-4xl md:leading-tight font-semibold mb-4 max-w-7xl">
//                             {ctaDetails.heading}
//                         </h2>

//                         <div className="md:px-0">{ctaDetails.subheading}</div> */}

//                         {mobileOS === "android" && (
//                             <a
//                                 href="https://play.google.com/store"
//                                 className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition my-5"
//                             >
//                                 Download from Google Play Store
//                             </a>
//                         )}

//                         {mobileOS === "ios" && (
//                             <a
//                                 href="https://www.apple.com/app-store/"
//                                 className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition my-5"
//                             >
//                                 Download from App Store
//                             </a>
//                         )}

//                         {mobileOS === "desktop" && (
//                             <>
//                                 <h2 className="text-2xl sm:text-3xl md:text-4xl md:leading-tight font-semibold mb-4 max-w-7xl">
//                                     {ctaDetails.heading}
//                                 </h2>

//                                 <div className="md:px-0">{ctaDetails.subheading}</div>

//                                 <div className="flex items-center justify-between bg-gray-800 p-2 rounded-full w-full max-w-5xl my-5">
//                                     <input
//                                         type="email"
//                                         placeholder="Enter your E-mail address"
//                                         className="flex-1 bg-transparent text-gray-300 placeholder-gray-400 px-4 py-2 outline-none"
//                                         value={""}
//                                     />
//                                     <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
//                                         Register
//                                     </button>
//                                 </div>
//                             </>
//                         )}

//                         <Link href="https://web.telegram.org" className="hover:text-blue-600">
//                             <p className="mx-auto max-w-xl md:px-5">{ctaDetails.footer}</p>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CTA;














// TO DO
"use client";

import AppStoreButton from "./AppStoreButton"
import PlayStoreButton from "./PlayStoreButton"
import { ctaDetails } from "@/data/cta";
import Link from "next/link";
import { useState, useEffect } from "react";

const CTA: React.FC = () => {
    const [mobileOS, setMobileOS] = useState<string>("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const userAgent = window.navigator.userAgent || window.navigator.vendor;
        if (/android/i.test(userAgent)) {
            setMobileOS("android");
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            setMobileOS("ios");
        } else {
            setMobileOS("desktop");
        }
    }, []);

    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-purple-100 text-center px-5">
                        {/* Uncommented only for desktop content */}
                        {mobileOS === "android" && (
                            <>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl md:leading-tight font-semibold mb-4 max-w-7xl">
                                    Download the app now!!
                                    <br/>Your Distraction-Free Prep Starts Here
                                </h2>
                                <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">

                                    <PlayStoreButton />
                                </div>
                            </>
                        )}

                        {mobileOS === "ios" && (
                            <>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl md:leading-tight font-semibold mb-4 max-w-7xl">
                                    Download the app now!!
                                    <br/>Your Distraction-Free Prep Starts Here
                                </h2>
                                <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">

                                    <AppStoreButton />
                                </div>
                            </>
                        )}

                        {mobileOS === "desktop" && (
                            <>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl md:leading-tight font-semibold mb-4 max-w-7xl">
                                    {ctaDetails.heading}
                                </h2>

                                <div className="md:px-0">{ctaDetails.subheading}</div>

                                <div className="flex items-center justify-between bg-gray-800 p-2 rounded-full w-full max-w-5xl my-5">
                                    <input
                                        type="email"
                                        placeholder="Enter your E-mail address"
                                        className="flex-1 bg-transparent text-gray-300 placeholder-gray-400 px-4 py-2 outline-none"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
                                        Register
                                    </button>
                                </div>
                                <Link href="https://web.telegram.org" className="hover:text-blue-600">
                                    <p className="mx-auto max-w-xl md:px-5">{ctaDetails.footer}</p>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;