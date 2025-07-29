"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingImage {
  id: number;
  src: string;
  alt: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size: "sm" | "md" | "lg";
  delay: number;
  duration: number;
}

const floatingImages: FloatingImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60&fm=webp",
    alt: "Sign language hand gesture A",
    position: { top: "20%", left: "5%" },
    size: "md",
    delay: 0,
    duration: 6,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60&fm=webp",
    alt: "Person signing hello",
    position: { top: "15%", right: "8%" },
    size: "sm",
    delay: 1,
    duration: 8,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60&fm=webp",
    alt: "ASL alphabet letter B",
    position: { top: "45%", left: "2%" },
    size: "sm",
    delay: 2,
    duration: 7,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1607690735997-6970c5071b14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60&fm=webp",
    alt: "Sign language communication",
    position: { top: "40%", right: "5%" },
    size: "lg",
    delay: 0.5,
    duration: 9,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60&fm=webp",
    alt: "Hand forming letter C",
    position: { bottom: "25%", left: "8%" },
    size: "sm",
    delay: 3,
    duration: 6,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60&fm=webp",
    alt: "Sign language gesture love",
    position: { bottom: "20%", right: "10%" },
    size: "md",
    delay: 1.5,
    duration: 8,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60&fm=webp",
    alt: "Sign language peace gesture",
    position: { top: "60%", left: "12%" },
    size: "sm",
    delay: 2.5,
    duration: 7,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60&fm=webp",
    alt: "ASL thank you gesture",
    position: { top: "65%", right: "15%" },
    size: "sm",
    delay: 4,
    duration: 6,
  },
];

const getSizeClasses = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return "w-16 h-16 md:w-20 md:h-20";
    case "md":
      return "w-20 h-20 md:w-24 md:h-24";
    case "lg":
      return "w-24 h-24 md:w-28 md:h-28";
    default:
      return "w-20 h-20 md:w-24 md:h-24";
  }
};

const FloatingImages: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {floatingImages.map((image) => (
        <motion.div
          key={image.id}
          className="absolute opacity-15 hover:opacity-30 transition-opacity duration-700"
          style={image.position}
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -15,
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [0.1, 0.2, 0.15, 0.18],
            scale: [0.8, 1.1, 0.9, 1],
            rotate: [-15, 15, -8, 10],
            y: [-8, 12, -6, 8],
            x: [-4, 6, -3, 4],
            filter: ["blur(1px)", "blur(0px)", "blur(0.5px)", "blur(0px)"],
          }}
          transition={{
            duration: image.duration,
            delay: image.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className={cn(
              getSizeClasses(image.size),
              "rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/15 border border-white/10"
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover filter brightness-90 contrast-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 via-transparent to-purple-500/10 mix-blend-soft-light" />
          </div>
        </motion.div>
      ))}

      {/* Additional decorative elements */}
      <motion.div
        className="absolute top-10 left-1/4 w-6 h-6 rounded-full bg-gradient-to-r from-red-400/20 to-purple-400/20 blur-sm"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/3 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400/20 to-red-400/20 blur-sm"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 2,
        }}
      />
    </div>
  );
};

export default FloatingImages;
