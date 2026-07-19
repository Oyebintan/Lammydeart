import React from "react"
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import heroImage from "../assets/hero2.JPG"

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "10+", label: "Happy Clients" },
]

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/lammyde.art", label: "Instagram" },
  { icon: FaXTwitter, href: "https://x.com/oyebintan?s=21", label: "Twitter" },
  { icon: FaWhatsapp, href: "http://Wa.me/2347015848547", label: "WhatsApp" },
]

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#03050a] pt-24 pb-10 px-6 lg:px-14">
      {/* Ambient glows */}
      <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.3),transparent_70%)] blur-2xl pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[10%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.14),transparent_70%)] blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div className="flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 py-[5px] px-[13px] rounded-full bg-[rgba(59,130,246,0.08)] border border-[rgba(96,165,250,0.25)] text-[11px] font-semibold tracking-[0.14em] text-[#93C5FD] uppercase w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shadow-[0_0_8px_#60A5FA]" />
            Graphic Designer + Web Designer
          </div>

          <h1 className="font-display font-bold text-4xl lg:text-5xl leading-[1.1] tracking-[-0.01em] text-[#F3F6FB]">
            Designing brands and websites people{" "}
            <span className="bg-gradient-to-r from-[#1D4ED8] via-[#60A5FA] to-[#BAE6FD] bg-clip-text text-transparent">
              actually remember.
            </span>
          </h1>

          <p className="text-[15px] leading-relaxed text-[rgba(219,234,254,0.6)] max-w-md">
            I'm Olamidé — a graphic and web designer crafting bold visual
            identities and clean, functional websites.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="/project"
              className="flex items-center gap-2 px-[22px] py-[10px] rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] text-white text-sm font-semibold shadow-[0_8px_26px_-8px_rgba(37,99,235,0.65)] transition-transform duration-300 hover:scale-105"
            >
              View my work <span>&#8594;</span>
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 px-[22px] py-[10px] rounded-full border border-[rgba(147,197,253,0.25)] text-[#F3F6FB] text-sm font-semibold transition-colors duration-300 hover:border-[#60A5FA]"
            >
              Let's talk
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-[30px] h-[30px] rounded-full border border-[rgba(147,197,253,0.2)] flex items-center justify-center text-[rgba(219,234,254,0.7)] hover:text-white hover:border-[#60A5FA] transition-colors duration-300"
              >
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          <div className="flex gap-7 pt-3 border-t border-[rgba(147,197,253,0.12)]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-xl font-bold text-[#F3F6FB]">{stat.value}</div>
                <div className="text-[11px] text-[rgba(219,234,254,0.5)] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex flex-col gap-4">
          <div className="absolute -top-4 right-0 w-44 h-44 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.28),rgba(29,78,216,0.1)_60%,transparent_75%)] blur-sm animate-[pulseGlow_4.5s_ease-in-out_infinite] pointer-events-none" />

          <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/3] rounded-[26px] bg-gradient-to-br from-[#0b1526] to-[#050a14] border border-[rgba(147,197,253,0.18)] p-2 shadow-[0_30px_60px_-24px_rgba(0,0,30,0.7)] z-[2]">
            <div className="w-full h-full rounded-[20px] overflow-hidden">
              <img src={heroImage} alt="Olamidé" className="w-full h-full object-cover" loading="lazy" />
            </div>

            <div className="absolute top-3 -right-3.5 flex items-center gap-2 py-2 px-3 rounded-2xl bg-[rgba(11,21,38,0.85)] backdrop-blur-md border border-[rgba(147,197,253,0.2)] shadow-[0_10px_24px_-10px_rgba(0,0,20,0.6)] animate-[floaty2_5.5s_ease-in-out_infinite]">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] flex items-center justify-center text-[11px] text-white">
                &#9733;
              </div>
              <div className="text-[11px] font-bold text-[#F3F6FB] whitespace-nowrap">4.9 client rating</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 w-full">
            <div className="rounded-[18px] bg-[rgba(147,197,253,0.04)] border border-[rgba(147,197,253,0.14)] p-3.5 flex flex-col justify-between gap-2">
              <div className="text-[10.5px] font-bold tracking-[0.08em] uppercase text-[rgba(219,234,254,0.5)]">
                Palette
              </div>
              <div className="flex gap-1.5">
                <span className="w-4.5 h-4.5 rounded-md bg-[#0b1526]" />
                <span className="w-4.5 h-4.5 rounded-md bg-[#1D4ED8]" />
                <span className="w-4.5 h-4.5 rounded-md bg-[#60A5FA]" />
                <span className="w-4.5 h-4.5 rounded-md bg-[#BAE6FD]" />
              </div>
            </div>
            <div className="rounded-[18px] bg-gradient-to-br from-[rgba(29,78,216,0.14)] to-[rgba(96,165,250,0.05)] border border-[rgba(147,197,253,0.14)] p-3.5 flex flex-col justify-between items-start gap-2">
              <div className="text-[10.5px] font-bold tracking-[0.08em] uppercase text-[rgba(219,234,254,0.5)]">
                Mark
              </div>
              <div className="font-display text-[26px] font-bold bg-gradient-to-br from-[#1D4ED8] to-[#7DD3FC] bg-clip-text text-transparent">
                L.
              </div>
            </div>
            <div className="relative rounded-[18px] bg-[rgba(147,197,253,0.04)] border border-[rgba(147,197,253,0.14)] p-3.5 flex flex-col justify-between gap-2 overflow-hidden">
              <div className="absolute -top-2.5 -right-2.5 w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] opacity-50" />
              <div className="text-[10.5px] font-bold tracking-[0.08em] uppercase text-[rgba(219,234,254,0.5)]">
                In progress
              </div>
              <div>
                <div className="text-[11.5px] font-bold text-[#F3F6FB] mb-1.5">Ad Campaign</div>
                <div className="h-1 rounded-full bg-[rgba(147,197,253,0.15)] overflow-hidden">
                  <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#7DD3FC]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
