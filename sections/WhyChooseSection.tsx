"use client";
import React, { useEffect } from "react";
import { SITE_CONTENT } from "@/data/content";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseSection() {
  useEffect(() => {
    const points = gsap.utils.toArray(".why-point");

    gsap.fromTo(
      points,
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".why-point",
          start: "top 85%",
          toggleActions: "play none play reverse",
        },
      }
    );
  }, []);

  return (
    <section id="why-choose" className="py-24 border-t border-black/5 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff5e00]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#ff5e00]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="order-2 lg:order-1 relative h-[600px] rounded-3xl overflow-hidden border border-black/10 group">
          <img
            // src={SITE_CONTENT.whyChoose.image}
            src="../img10.jpeg"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            alt="Why Choose Axis"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-black">
            Why Choose <span className="text-[#ff5e00]">AXIS?</span>
          </h2>
          <p className="text-zinc-600 mb-12">
            {SITE_CONTENT.whyChoose.subheading}
          </p>
          <div className="space-y-10 border-l border-[#ff5e00]/30 ml-3 pl-10 relative">
            <div className="absolute -left-[8px] top-0 w-4 h-2 bg-white"></div>
            {SITE_CONTENT.whyChoose.points.map((point, idx) => {
              const isLast = idx === SITE_CONTENT.whyChoose.points.length - 1;
              return (
                <div key={idx} className="relative group">
                  {isLast && (
                    <div className="absolute -left-[50px] top-[20px] w-6 h-full bg-white"></div>
                  )}
                  <div className="absolute -left-[46px] top-2 w-3 h-3 rounded-full bg-white border-2 border-[#ff5e00] group-hover:bg-[#ff5e00] transition-colors shadow-[0_0_10px_rgba(192,142,110,0.5)] z-10"></div>
                  <div className="why-point opacity-0 translate-x-[-40px]">
                    <h3 className="text-xl font-bold text-black group-hover:text-[#ff5e00] transition-colors ">
                      {point.title}
                    </h3>
                    <p className="text-zinc-600 mt-2 text-sm leading-relaxed w">
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}