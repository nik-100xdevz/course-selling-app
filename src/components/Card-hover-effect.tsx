"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: { title: string; description: string; link: string }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={idx}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative group block h-full w-full"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                layoutId="hoverBackground"
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-slate-300/30 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.97,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={cn(
        "rounded-3xl relative z-10 p-6 bg-white dark:bg-neutral-900 dark:border-neutral-800 border border-transparent shadow-md hover:shadow-2xl transition-all duration-300",
        className
      )}
    >
      <div className="relative z-20">{children}</div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition duration-300 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl -z-10" />
    </motion.div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-xl font-semibold tracking-wide text-black dark:text-white",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300",
        className
      )}
    >
      {children}
    </p>
  );
};
