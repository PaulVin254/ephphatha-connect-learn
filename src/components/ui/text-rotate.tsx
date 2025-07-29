"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRotateProps {
  words: string[];
  duration?: number;
  className?: string;
}

export function TextRotate({
  words,
  duration = 2000,
  className,
}: TextRotateProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  // Calculate the maximum width needed for the longest word
  const maxWidth = Math.max(...words.map((word) => word.length)) * 0.6; // Approximate character width in em

  return (
    <span
      className="relative inline-block align-baseline"
      style={{ minWidth: `${maxWidth}em` }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94], // Smooth cubic-bezier easing
          }}
          className={cn("inline-block whitespace-nowrap", className)}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
