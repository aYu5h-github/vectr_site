// "use client";

// import React from "react";

// interface TextHoverEffectDemoProps {
//     className?: string;
// }

// import { TextHoverEffect } from "./UI/text-hover-effect";
// import TypewriterEffectDemo from "./TypewriterEffectDemo";

// const TextHoverEffectDemo: React.FC<TextHoverEffectDemoProps> = ({ className }) => {
//     return (
//         <div className={className}>
//             <div className="h-[20rem] flex flex-col items-center justify-center ">
//                 <TextHoverEffect text="Vectr." fillColor="#8017CB"/>
//                 <TypewriterEffectDemo />
//             </div>
//         </div>
//     );
// }

// export default TextHoverEffectDemo;






"use client";

import React from "react";

interface TextHoverEffectDemoProps {
  className?: string;
}

import { TextHoverEffect } from "./UI/text-hover-effect";
import TypewriterEffectDemo from "./TypewriterEffectDemo";

const TextHoverEffectDemo: React.FC<TextHoverEffectDemoProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Background design */}
      <div className="absolute inset-0 h-[60vh] w-full bg-hero-background bg-[linear-gradient(to_right,#E4CDFF_1px,transparent_2px),linear-gradient(to_bottom,#E4CDFF_1px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      {/* Main content */}
      <div className="relative h-[20rem] flex flex-col items-center justify-center">
        <TextHoverEffect text="Vectr." fillColor="#8017CB" />
        <TypewriterEffectDemo />
      </div>
    </div>
  );
};

export default TextHoverEffectDemo;
