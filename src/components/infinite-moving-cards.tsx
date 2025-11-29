"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    setupAnimation();
  }, []);

  function setupAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const itemsArray = Array.from(scrollerRef.current.children);

      // Duplicate items for perfect infinite scrolling
      itemsArray.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current?.appendChild(clone);
      });

      applyDirection();
      applySpeed();
      setStart(true);
    }
  }

  const applyDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const applySpeed = () => {
    let duration = "40s";
    if (speed === "fast") duration = "20s";
    if (speed === "slow") duration = "80s";

    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl mx-auto overflow-hidden py-10",
        // MASK FOR BOTH MODES
        "light:[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]",
        "dark:[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      {/* Heading */}
      <div className="flex justify-center items-center py-6 text-3xl font-semibold text-black dark:text-white">
        Learner Experiences 👨‍🎓
      </div>

      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max flex-nowrap gap-6 py-6 transition-all",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              "relative flex-shrink-0 w-[350px] md:w-[420px] p-6 rounded-3xl group",
              // ---- LIGHT MODE CARD ----
              "bg-white/70 border border-black/10 text-black shadow-[0_8px_25px_rgba(0,0,0,0.07)] backdrop-blur-xl",
              // ---- DARK MODE CARD ----
              "dark:bg-white/10 dark:border-white/10 dark:text-gray-100 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]",

              "hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300"
            )}
          >
            <blockquote>
              <p className="text-[15px] leading-relaxed font-normal text-black/80 dark:text-gray-200">
                “{item.quote}”
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-black/80 dark:text-gray-300">
                  {item.name}
                </p>
                <p className="text-xs text-black/60 dark:text-gray-400">
                  {item.title}
                </p>
              </div>
            </blockquote>

            {/* Glow Layer */}
            <div
              className={cn(
                "absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition duration-300 -z-10",

                // LIGHT MODE Glow
                "bg-gradient-to-br from-blue-400/20 to-purple-500/20",

                // DARK MODE Glow (brighter & cooler)
                "dark:from-blue-500/30 dark:to-purple-600/30"
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
