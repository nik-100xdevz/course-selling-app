"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CategoryCard = ({
  category,
  Clink,
  CIcon,
}: {
  category: string;
  Clink: string;
  CIcon: any;
}) => {
  return (
    <Link href={`/courses/${Clink}`} className="block h-full">
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-colors duration-300 overflow-hidden"
      >
        {/* Hover Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col items-center text-center gap-4">
          <div className="p-4 rounded-full bg-white/5 group-hover:bg-amber-500/20 transition-colors duration-300 text-foreground group-hover:text-amber-500">
            <CIcon size={32} />
          </div>
          <span className="font-['Outfit'] font-semibold text-lg text-foreground group-hover:text-white transition-colors">
            {category}
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;