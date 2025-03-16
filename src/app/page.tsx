// import Hero from "@/components/Hero";
// import Section from "@/components/Section";
// import Testimonials from "@/components/WhyUs";
// import FAQ from "@/components/FAQ";
// import Benefits from "@/components/Benefits/Benefits";
// import Container from "@/components/Container";
// import Stats from "@/components/Stats";
// import CTA from "@/components/CTA";
// import TextHoverEffectDemo from "@/components/TextHoverEffectDemo";
// import gsap from "gsap";
// import { useState, useEffect } from "react";
// import Loader from "@/Loader/Loader";

// const HomePage: React.FC = () => {
//   const timeline = gsap.timeline();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {isLoading && <Loader timeline={timeline} />}

//       {!isLoading && (
//         <>
//           <TextHoverEffectDemo className="mt-[10rem] mb-0" />

//           <Hero />

//           <Container>

//             <Section
//               id="whyus"
//               title="Why Vectr?"
//               description=""
//             >
//               <Testimonials />
//             </Section>

//             <Benefits />

//             <FAQ />

//             <Stats />

//             <CTA />
//           </Container>
//         </>
//       )}

//       {/* <TextHoverEffectDemo className="mt-[10rem] mb-0" />

//       <Hero />

//       <Container>

//         <Section
//           id="whyus"
//           title="Why Vectr?"
//           description=""
//         >
//           <Testimonials />
//         </Section>

//         <Benefits />

//         <FAQ />

//         <Stats />

//         <CTA />
//       </Container> */}
//     </>
//   );
// };

// export default HomePage;



// To Do
"use client";

// import React, { useState, useEffect } from "react";
// import gsap from "gsap";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Testimonials from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
// import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import TextHoverEffectDemo from "@/components/TextHoverEffectDemo";
// import Loader from "@/Loader/Loader";

const HomePage: React.FC = () => {
  // const timeline = gsap.timeline();
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* {isLoading && <Loader timeline={timeline} />}
      {!isLoading && (
        <> */}
          <TextHoverEffectDemo className="mt-[10rem] mb-0" />
          <Hero />
          <Container>
            <Section id="whyus" title="Why Vectr?" description="">
              <Testimonials />
            </Section>
            <Benefits />
            <FAQ />
            {/* <Stats /> */}
            <CTA />
          </Container>
        {/* </>
      )} */}
    </>
  );
};

export default HomePage;
















// import { useEffect, useState } from 'react';
// import Hero from "@/components/Hero";
// import Section from "@/components/Section";
// import Testimonials from "@/components/Testimonials";
// import FAQ from "@/components/FAQ";
// import Benefits from "@/components/Benefits/Benefits";
// import Container from "@/components/Container";
// import Stats from "@/components/Stats";
// import CTA from "@/components/CTA";
// import TextHoverEffectDemo from "@/components/TextHoverEffectDemo";

// // Mobile-specific components
// // import Android from "@/components/mobile/Android";

// interface HomePageProps {
//   initialIsMobile: boolean;
// }

// const HomePage: React.FC<HomePageProps> = ({ initialIsMobile }) => {
//   const [isMobile, setIsMobile] = useState(initialIsMobile);

//   useEffect(() => {
//     // Client-side detection to handle window resizing or device changes
//     const checkMobile = () => {
//       const isClientMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//       setIsMobile(isClientMobile);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   if (isMobile) {
//     return (
//       <MobileLayout />
//     );
//   }

//   return (
//     <DesktopLayout />
//   );
// };

// // Desktop layout (your existing code)
// const DesktopLayout = () => (
//   <>
//     <TextHoverEffectDemo className="mt-[15rem] mb-0" />
//     <Hero />
//     <Container>
//       <Section
//         id="testimonials"
//         title="Why Vectr?"
//         description=""
//       >
//         <Testimonials />
//       </Section>
//       <Benefits />
//       <FAQ />
//       <Stats />
//       <CTA />
//     </Container>
//   </>
// );

// // Mobile layout (simplified version)
// const MobileLayout = () => (
//   <>
//     <Android />
//   </>
// );

// export async function getServerSideProps(context: any) {
//   // Server-side mobile detection
//   const userAgent = context.req.headers['user-agent'] || '';
//   const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

//   return {
//     props: {
//       initialIsMobile: isMobile
//     }
//   };
// }

// export default HomePage;