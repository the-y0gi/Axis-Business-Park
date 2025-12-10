"use client";
import React from "react";
import { ArrowRight, Mail, User } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-y border-black/5">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5e00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[#ff5e00]"></div>
            <span className="text-[#ff5e00] text-xs font-bold uppercase tracking-[0.2em]">
              Join The Circle
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl text-black font-medium mb-6 leading-tight">
            Be Part of Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a34] to-[#ff5e00]">
              Insider Community
            </span>
          </h2>

          <p className="text-zinc-600 text-lg font-light leading-relaxed max-w-md">
            Gain priority access to new releases, off-market opportunities, and
            refined industry intelligence before anyone else.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#ff5e00]/0 via-[#ff5e00]/40 to-[#ff5e00]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>

          <div className="relative bg-white p-8 md:p-10 rounded-2xl border border-black/10 shadow-2xl">
            <form className="space-y-5">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-zinc-50 border border-black/5 text-black pl-12 pr-6 py-4 rounded-xl focus:outline-none focus:border-[#ff5e00]/50 focus:bg-white transition-all placeholder:text-zinc-400 text-sm"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-zinc-50 border border-black/5 text-black pl-12 pr-6 py-4 rounded-xl focus:outline-none focus:border-[#ff5e00]/50 focus:bg-white transition-all placeholder:text-zinc-400 text-sm"
                />
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-[#ff8a34] to-[#ff5e00] text-black font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(192,142,110,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group/btn">
                Subscribe Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-zinc-500 text-[10px] uppercase tracking-wider">
                No spam. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}