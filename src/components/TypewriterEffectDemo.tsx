"use client";
import { TypewriterEffect } from "./UI/typewriter-effect";

type Word = {
  text: string;
  className?: string;
};
export default function TypewriterEffectDemo() {
  const words: Word[] = [
    { text: "Where " },
    { text: "Magnitude " },
    { text: "Meets " },
    { text: "Direction...", className: "text-purple-600 dark:text-purple-500" },
  ];

  return (
    <div className="flex center full-height">
      <TypewriterEffect words={words} />
    </div>
  );
}
