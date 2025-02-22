"use client";
import { TypewriterEffect } from "./UI/typewriter-effect";

type Word = {
  text: string;
  className?: string;
};

export default function TypewriterEffectDemo() {
  const words: Word[] = [
    { text: "where " },
    { text: "magnitude " },
    { text: "meets " },
    { text: "direction...", className: "text-purple-600 dark:text-purple-500" },
  ];

  return (
    <div className="flex center full-height">
      <TypewriterEffect words={words} />
    </div>
  );
}
