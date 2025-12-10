"use client";
import React, { useEffect } from "react";
import { SITE_CONTENT } from "@/data/content";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  useEffect(() => {
    // Left content animation
    gsap.fromTo(
      ".intro-left",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".intro-left",
          start: "top 85%",
          toggleActions: "play none play none",
        },
      }
    );

    // Right image animation
    gsap.fromTo(
      ".intro-image",
      { opacity: 1, scale: 0.85 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".intro-image",
          start: "top 85%",
          toggleActions: "play none play none",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff5e00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="intro-left opacity-0 translate-y-10">
          <h2 className="text-3xl md:text-4xl font-medium text-black mb-8">
            {SITE_CONTENT.intro.heading}
          </h2>

          <div className="h-1 w-20 bg-[#ff5e00] mb-10"></div>

          <p className="text-xl md:text-xl text-zinc-800 leading-relaxed font-light mb-6">
            This exclusive collection of{" "}
            <span className="text-[#ff5e00] font-semibold">
              {SITE_CONTENT.intro.highlight}
            </span>{" "}
            sets a new benchmark for modern warehousing.
          </p>

          <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
            Offering seamless transport connectivity, strong commercial demand,
            and a tightly held supply of premium facilities, it represents a
            rare opportunity to secure a long-term foothold in a
            high-performance industrial precinct.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="intro-image opacity-0 scale-95 relative h-[500px] w-full rounded-2xl overflow-hidden border border-black/5 bg-zinc-100 group">
          <img
            src="../img2.jpeg"
            alt="Axis Building Detail"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}