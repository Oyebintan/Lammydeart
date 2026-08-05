import { motion } from "framer-motion"
import IconButton from "../ui/IconButton"
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6"
import { fadeUp, springPress, stagger, viewportOnce } from "../../lib/motion"
import { socialLinks, EMAIL, EMAIL_HREF, WHATSAPP_HREF, LOCATION } from "../../data/site"

const HomeContact = () => {
  return (
    <motion.section
      id="contact"
      variants={stagger()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="relative overflow-hidden px-6 lg:px-14 py-12 bg-[#000000]"
    >
      <motion.div
        variants={fadeUp}
        className="relative max-w-7xl mx-auto rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[#050506] p-8 lg:p-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center"
      >
        <div>
          <div className="flex items-center gap-2 text-[11.5px] font-bold tracking-[0.16em] text-[rgba(255,255,255,0.55)] uppercase mb-2">
            <span>( 05 )</span>
            <span>Contact</span>
          </div>
          <h2 className="font-display font-bold text-[28px] text-[#FAFAFA] mb-3">Let's build something exceptional</h2>
          <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.70)] mb-5">
            Have a project in mind? Tell me about it — I usually reply within a day.
          </p>
          <div className="flex flex-col gap-2.5">
            <a href={EMAIL_HREF} className="text-[13.5px] text-[rgba(255,255,255,0.82)] hover:text-white transition-colors duration-300 py-1 inline-block">
              {EMAIL}
            </a>
            <div className="text-[13.5px] text-[rgba(255,255,255,0.82)]">{LOCATION} — Remote</div>
            <div className="flex gap-3 mt-1.5">
              {socialLinks.map((s) => (
                <IconButton key={s.label} as="a" href={s.href} aria-label={s.label} size={34}>
                  <s.icon size={14} />
                </IconButton>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3.5">
          <motion.a
            href={EMAIL_HREF}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springPress}
            className="animate-gradient flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-br from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA] text-white text-sm font-semibold"
          >
            <FaEnvelope /> Send an email
          </motion.a>
          <motion.a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.98 }}
            transition={springPress}
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl border border-[rgba(255,255,255,0.16)] text-[#FAFAFA] text-sm font-semibold"
          >
            <FaWhatsapp /> WhatsApp me
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default HomeContact
