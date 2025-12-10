"use client";
import React from "react";
import { Check } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

export default function PromisesSection() {
  return (
    <section className="py-24  relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ff5e00]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#ff5e00]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-16 border border-black/10 relative group">
          <img
            // src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            src="../img6.jpeg"
            alt="Architectural Detail"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-black">
            What We Promise to{" "}
            <span className="font-medium text-[#ff5e00]">Deliver</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONTENT.promises.map((promise, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 p-8 rounded-xl border border-black/5 hover:border-[#ff5e00]/50 hover:bg-white hover:shadow-lg transition-all duration-300 group flex items-start gap-4"
            >
              <div className="mt-1 shrink-0 p-2 rounded-full bg-black/5 group-hover:bg-[#ff5e00]/20">
                <Check className="w-4 h-4 text-zinc-500 group-hover:text-[#ff5e00] transition-colors" />
              </div>
              <p className="text-sm font-medium text-zinc-600 group-hover:text-black transition-colors leading-relaxed">
                {promise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
