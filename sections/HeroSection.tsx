"use client";

import React, { useEffect } from "react";
import { SITE_CONTENT } from "@/data/content";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  useEffect(() => {
    // Subtitle animation
    gsap.fromTo(
      ".wwa-heading-subtitle",
      {
        y: 60,
        autoAlpha: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".wwa-heading-subtitle",
          start: "top 85%",
          once: true,
        },
        y: 0,
        autoAlpha: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        immediateRender: false,
      }
    );

    // Title line animations (staggered)
    gsap.utils.toArray(".wwa-heading-title").forEach((el: any, index) => {
      gsap.fromTo(
        el,
        {
          y: 80,
          autoAlpha: 0,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          y: 0,
          autoAlpha: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: index * 0.15,
          immediateRender: false,
        }
      );
    });
  }, []);

  return (
    <section className="relative pt-28 px-4 md:px-6 pb-20 max-w-[1400px] mx-auto">
      <div className="relative w-full h-[75vh] md:h-[85vh] rounded-[2rem] overflow-hidden border border-black/10 shadow-2xl group">
        <Image
          src="/img9.jpeg"
          alt="Axis Warehouse Hero"
          height={1000}
          width={1920}
          className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
        <div className="absolute bottom-20 w-full px-4 sm:px-16 md:px-20 z-10 flex flex-col md:flex-row md:items-end items-start justify-between ">
          <div className=" max-w-5xl">
            <div className="overflow-hidden">
              <p className="text-white/90 text-base md:text-lg font-medium tracking-wide mb-3 wwa-heading-subtitle opacity-0">
                Premium Industrial Real Estate
              </p>
            </div>

            <div className="text-[2.5rem] lg:text-[3.25rem] xl:text-[3.75rem] font-bold leading-[1.05] tracking-tight">
              <div className="overflow-hidden">
                <span className="wwa-heading-title block  bg-gradient-to-b from-white to-[#E0D7CE] bg-clip-text text-transparent opacity-0">
                  Industrial Space That Adapts
                </span>
              </div>

              <div className="overflow-hidden">
                <span className="wwa-heading-title block bg-gradient-to-b from-[#DBCDBF] to-[#c8a58b] bg-clip-text text-transparent opacity-0">
                  To Your Business
                </span>
              </div>
            </div>
          </div>
          <button className="h-fit z-10 mt-8 px-8 py-3 bg-gradient-to-r from-[#ff8a34] to-[#ff5e00] text-black font-semibold text-xs md:text-sm uppercase tracking-widest rounded-full shadow-[0_0_18px_rgba(192,142,110,0.35)] hover:shadow-[0_0_28px_rgba(192,142,110,0.55)] hover:scale-105 transition-all">
            Explore Now
          </button>
        </div>
      </div>
      <div className="mt-20 text-center max-w-6xl mx-auto px-4">
        <p className="text-zinc-600 text-sm md:text-lg leading-relaxed tracking-wide font-light">
          {SITE_CONTENT.hero.bottomDesc}
        </p>
      </div>
    </section>
  );
}