"use client";
import { TypewriterEffect } from "./UI/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    { text: "where " },
    { text: "Magnitude " },
    { text: "meets " },
    { text: "Direction...", className: "text-primary text-dark-primary" },
  ];

  return (
    <div className="flex center full-height">
      <TypewriterEffect words={words} />
    </div>
  );
}
