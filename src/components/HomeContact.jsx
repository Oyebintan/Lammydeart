import React from "react"
import { FaXTwitter, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6"

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/lammyde.art", label: "Instagram" },
  { icon: FaXTwitter, href: "https://x.com/oyebintan?s=21", label: "Twitter" },
  { icon: FaWhatsapp, href: "http://Wa.me/2347015848547", label: "WhatsApp" },
]

const HomeContact = () => {
  return (
    <section id="contact" className="px-6 lg:px-14 py-12 bg-[#03050a]">
      <div className="max-w-7xl mx-auto rounded-[24px] border border-[rgba(147,197,253,0.15)] bg-gradient-to-br from-[rgba(29,78,216,0.08)] to-[rgba(96,165,250,0.03)] p-8 lg:p-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <div>
          <div className="text-[11.5px] font-bold tracking-[0.16em] text-[#60A5FA] uppercase mb-2">
            Contact
          </div>
          <h2 className="font-display font-bold text-[28px] text-[#F3F6FB] mb-3">Let's work together</h2>
          <p className="text-sm leading-relaxed text-[rgba(219,234,254,0.6)] mb-5">
            Have a project in mind? Tell me about it — I usually reply within a day.
          </p>
          <div className="flex flex-col gap-2.5">
            <a href="mailto:lammydeart@gmail.com" className="text-[13.5px] text-[rgba(219,234,254,0.75)] hover:text-white transition-colors duration-300">
              lammydeart@gmail.com
            </a>
            <div className="text-[13.5px] text-[rgba(219,234,254,0.75)]">Lagos, Nigeria — Remote</div>
            <div className="flex gap-3 mt-1.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-[34px] h-[34px] rounded-full border border-[rgba(147,197,253,0.2)] flex items-center justify-center text-[rgba(219,234,254,0.7)] hover:text-white hover:border-[#60A5FA] transition-colors duration-300"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3.5">
          <a
            href="mailto:lammydeart@gmail.com"
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] text-white text-sm font-semibold transition-transform duration-300 hover:scale-[1.02]"
          >
            <FaEnvelope /> Send an email
          </a>
          <a
            href="http://Wa.me/2347015848547"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl border border-[rgba(147,197,253,0.25)] text-[#F3F6FB] text-sm font-semibold transition-colors duration-300 hover:border-[#60A5FA]"
          >
            <FaWhatsapp /> WhatsApp me
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeContact
