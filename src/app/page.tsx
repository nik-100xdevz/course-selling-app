"use client";

import { HoverEffect } from "@/components/Card-hover-effect";
import { skills } from "@/constants/Iskills";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { Testimonials } from "@/constants/Testimonials";
import { AccordionComponent } from "@/components/AccordionComponent";
import { LampComponent } from "@/components/ui/lamp";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Lamp Section */}
      <section className="relative">
        <LampComponent />

        <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="my-10 font-['Outfit'] text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            The Skills You Should{" "}
            <span className="text-heat">Learn</span>
          </h1>

          <HoverEffect items={skills} className="mt-6" />
        </div>
      </section>

      {/* Testimonials Infinite Scroll */}
      <section className="relative h-[40rem] overflow-hidden flex items-center justify-center bg-background dark:bg-grid-white/[0.05] border-t border-white/10">
        <InfiniteMovingCards
          items={Testimonials}
          direction="right"
          speed="slow"
          className="mt-4"
        />
      </section>

      {/* Accordion Section */}
      <section className="bg-muted/30 border-t border-white/10 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <AccordionComponent />
        </div>
      </section>
    </main>
  );
}
