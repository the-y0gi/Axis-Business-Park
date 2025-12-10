// "use client";
// import Image from "next/image";
// import React from "react";

// export default function FooterSection() {
//   const projectLinks = [
//     { name: "Warehouses", href: "/warehouse" },
//     { name: "Location", href: "#contact" },
//     { name: "Amenities", href: "#why-choose" },
//     { name: "Gallery", href: "#design" },
//   ];
//   const QuickLinks = [
//     { name: "Home", href: "/" },
//     { name: "Warehouses", href: "/warehouse" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const resourceLinks = [
//     { name: "Brochure", href: "#download" },
//     { name: "Floor Plans", href: "#warehouses" },
//     { name: "Construction", href: "#" },
//     { name: "FAQs", href: "#" },
//   ];
//   const companyLinks = [
//     { name: "Developer", href: "#" },
//     { name: "Contact", href: "/contact" },
//     { name: "Privacy Policy", href: "#" },
//     { name: "Disclaimer", href: "#" },
//     { name: "Terms", href: "#" },
//   ];

//   return (
//     <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 overflow-hidden">
//       <div className="max-w-[900px] mx-auto px-6 flex flex-col items-center text-center">
//         {/* AXIS BRAND */}
//         {/* <h2 className="text-[5rem] md:text-[8rem] leading-[0.8] font-bold text-[#111] tracking-tighter select-none">
//           AXIS
//         </h2> */}
//         <Image
//           src="/logo-with-name.png"
//           alt="Axis Logo"
//           width={200}
//           height={40}
//           className="z-10 mb-10"
//         />
//         {/* <p className="text-zinc-500 text-lg font-medium tracking-wide mt-3 mb-10">
//           Elite Storage Solutions
//         </p> */}

//         {/* CONTACT */}
//         <div className="flex flex-col gap-5 mb-14">
//           {/* Email */}
//           <a
//             href="mailto:info@creativelivinginnovations.com.au"
//             className="flex items-center gap-3 group mx-auto"
//           >
//             <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ff5e00] transition-colors">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="15"
//                 height="15"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-zinc-400 group-hover:text-black"
//               >
//                 <rect width="20" height="16" x="2" y="4" rx="2" />
//                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//               </svg>
//             </div>
//             <span className="text-zinc-400 text-sm group-hover:text-white transition-colors">
//               info@creativelivinginnovations.com.au
//             </span>
//           </a>

//           {/* Phone */}
//           <a
//             href="tel:+610414394798"
//             className="flex items-center gap-3 group mx-auto"
//           >
//             <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ff5e00] transition-colors">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="15"
//                 height="15"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-zinc-400 group-hover:text-black"
//               >
//                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//               </svg>
//             </div>
//             <span className="text-zinc-400 text-sm group-hover:text-white transition-colors">
//               +61 0414 394 798
//             </span>
//           </a>
//         </div>

//         {/* QUICK LINKS */}
//         <div className="mb-16 w-full">
//           <h4 className="text-white font-semibold uppercase tracking-[0.2em] text-xs mb-5">
//             Quick Links
//           </h4>
//           <ul className="flex gap-5 space-y-2 justify-center">
//             {QuickLinks.map((item) => (
//               <li key={item.name}>
//                 <a
//                   href={item.href}
//                   className="text-zinc-500 hover:text-[#ff5e00] text-sm transition-colors"
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* BOTTOM BAR */}
//         <div className="flex flex-col items-center gap-2 pt-6 border-t border-white/5 w-full">
//           <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
//             © 2025 Axis Elite Storage Solutions · All Rights Reserved
//           </p>
//           <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
//             AIMP — Modern · Functional · Refined
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



"use client";
import Image from "next/image";
import React from "react";

export default function FooterSection() {
  const projectLinks = [
    { name: "Warehouses", href: "/warehouse" },
    { name: "Location", href: "#contact" },
    { name: "Amenities", href: "#why-choose" },
    { name: "Gallery", href: "#design" },
  ];
  const QuickLinks = [
    { name: "Home", href: "/" },
    { name: "Warehouses", href: "/warehouse" },
    { name: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { name: "Brochure", href: "#download" },
    { name: "Floor Plans", href: "#warehouses" },
    { name: "Construction", href: "#" },
    { name: "FAQs", href: "#" },
  ];
  const companyLinks = [
    { name: "Developer", href: "#" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Disclaimer", href: "#" },
    { name: "Terms", href: "#" },
  ];

  return (
    <footer className="bg-zinc-50 pt-20 pb-10 border-t border-black/5 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6 flex flex-col items-center text-center">
        {/* AXIS BRAND */}
        {/* <h2 className="text-[5rem] md:text-[8rem] leading-[0.8] font-bold text-[#111] tracking-tighter select-none">
          AXIS
        </h2> */}
        <Image
          src="/logo-with-name.png"
          alt="Axis Logo"
          width={200}
          height={40}
          className="z-10 mb-10 invert"
        />
        {/* <p className="text-zinc-500 text-lg font-medium tracking-wide mt-3 mb-10">
          Elite Storage Solutions
        </p> */}

        {/* CONTACT */}
        <div className="flex flex-col gap-5 mb-14">
          {/* Email */}
          <a
            href="mailto:info@creativelivinginnovations.com.au"
            className="flex items-center gap-3 group mx-auto"
          >
            <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#ff5e00] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-600 group-hover:text-white"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <span className="text-zinc-600 text-sm group-hover:text-black transition-colors">
              info@creativelivinginnovations.com.au
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+610414394798"
            className="flex items-center gap-3 group mx-auto"
          >
            <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#ff5e00] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-600 group-hover:text-white"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="text-zinc-600 text-sm group-hover:text-black transition-colors">
              +61 0414 394 798
            </span>
          </a>
        </div>

        {/* QUICK LINKS */}
        <div className="mb-16 w-full">
          <h4 className="text-black font-semibold uppercase tracking-[0.2em] text-xs mb-5">
            Quick Links
          </h4>
          <ul className="flex gap-5 space-y-2 justify-center">
            {QuickLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-zinc-600 hover:text-[#ff5e00] text-sm transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center gap-2 pt-6 border-t border-black/5 w-full">
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
            © 2025 Axis Elite Storage Solutions · All Rights Reserved
          </p>
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
            AIMP — Modern · Functional · Refined
          </p>
        </div>
      </div>
    </footer>
  );
}