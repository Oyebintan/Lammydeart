import React from "react"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Becky B.",
    initials: "BB",
    role: "Beauty brand Founder",
    rating: 4.5,
    message:
      "Choosing Olamide for my flyer project was a game-changer. He captured the message perfectly and delivered a bold, eye-catching design that brought the vision to life.",
  },
  {
    id: 2,
    name: "Funbi O.",
    initials: "FO",
    role: "E-commerce Merchant",
    rating: 4.5,
    message:
      "Olamide transformed my product with thoughtful, intuitive UI/UX design. He grasped my goals quickly and crafted an experience that feels effortless and on-brand.",
  },
  {
    id: 3,
    name: "Bola A.",
    initials: "BA",
    role: "Real Estate Founder",
    rating: 5,
    message:
      "Working with Olamide on my logo was the best decision I made for my brand. He immediately understood my vision and created a mark that truly represents my identity.",
  },
]

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5 text-[#60A5FA] mb-3">
    {[1, 2, 3, 4, 5].map((n) => (
      <Star key={n} size={14} fill={n <= rating ? "currentColor" : "none"} strokeWidth={1.5} />
    ))}
  </div>
)

const Testimonial = () => {
  return (
    <section className="px-6 lg:px-14 py-12 bg-gradient-to-b from-[#05080f] to-[#0a1120]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="text-[11.5px] font-bold tracking-[0.16em] text-[#60A5FA] uppercase mb-2">
            Testimonials
          </div>
          <h2 className="font-display font-bold text-[28px] text-[#F3F6FB]">Kind words from clients</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {reviews.map((t) => (
            <div
              key={t.id}
              className="rounded-[20px] border border-[rgba(147,197,253,0.14)] bg-[rgba(147,197,253,0.03)] p-6"
            >
              <StarRating rating={t.rating} />
              <p className="text-sm leading-relaxed text-[rgba(219,234,254,0.75)] mb-4">&ldquo;{t.message}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] flex items-center justify-center text-[12.5px] font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#F3F6FB]">{t.name}</div>
                  <div className="text-[11.5px] text-[rgba(219,234,254,0.45)]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
