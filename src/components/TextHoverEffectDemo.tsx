"use client";

import React from "react";

interface TextHoverEffectDemoProps {
    className?: string;
}

import { TextHoverEffect } from "./UI/text-hover-effect";
import TypewriterEffectDemo from "./TypewriterEffectDemo";

const TextHoverEffectDemo: React.FC<TextHoverEffectDemoProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className="h-[20rem] flex flex-col items-center justify-center ">
                <TextHoverEffect text="Vectr." />
                <TypewriterEffectDemo />
            </div>
        </div>
    );
}

export default TextHoverEffectDemo;