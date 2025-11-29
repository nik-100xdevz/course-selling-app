"use client";

import { ShoppingCartIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { ModeToggle } from "./ThemeSwitchButton";
import { AppMenu } from "./DropDownMenu";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Appbar() {
  const session = useSession();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 smooth-transition ${scrolled ? 'glass shadow-lg shadow-black/5' : 'bg-transparent'} flex justify-between items-center px-6 py-4 border-b border-white/5`}>
      <Link
        href="/"
        className="flex items-center gap-2 px-3 py-2 rounded-lg smooth-transition hover:scale-[1.02] will-change-transform group"
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-75 blur transition duration-200"></div>
          <Image src="/logo.svg" alt="Logo" width={32} height={32} className="relative" />
        </div>
        <span className="font-bold text-xl text-foreground font-['Outfit'] tracking-tight">
          Course's <span className="text-heat">Academy</span>
        </span>
      </Link>
      <div className="flex items-center gap-3">
        <Link
          href="/courses"
          className="px-4 py-2 rounded-lg font-medium smooth-transition text-muted-foreground hover:text-foreground hover:bg-secondary/50"
        >
          Courses
        </Link>
        {session.data?.user ? (
          <>
            <Link
              href="/wishlist"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg smooth-transition text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            >
              <ShoppingCartIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Wishlist</span>
            </Link>
            <Link
              href="/my-learnings"
              className="hidden md:block px-4 py-2 rounded-lg font-medium smooth-transition text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            >
              My Learnings
            </Link>
            <Link
              href="/add-course"
              className="hidden md:block px-5 py-2 rounded-lg font-medium smooth-transition bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-amber-500/20"
            >
              Add Course
            </Link>
            <AppMenu />
          </>
        ) : (
          <button
            className="px-6 py-2 rounded-lg font-medium smooth-transition bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-amber-500/20"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
}
