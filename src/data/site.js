import { FaXTwitter, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6"

// Every contact detail on the site, in one place.
//
// These strings used to be inline in five components: Hero, Navbar, Footer,
// HomeContact and ContactPage each declared their own socialLinks array, in
// four different orders, and Footer called the field `url` where the rest said
// `href`. The email and WhatsApp strings appeared 23 times across src/.
//
// It had already gone wrong. Footer's Instagram link carried
// `?igsh=…&utm_source=qr` — the share-sheet tracking params from a phone —
// which none of the other four had. Changing a phone number meant finding four
// files and not missing one.
//
// Two values were normalised while consolidating:
//   - WhatsApp was `http://Wa.me/…`. Plain http on a link that opens a chat is
//     a needless redirect; wa.me serves https.
//   - Instagram drops the tracking params. They identified the share session,
//     not the profile, and the bare URL resolves identically.

export const EMAIL = "lammydeart@gmail.com"
export const PHONE = "+234 701 584 8547"
export const PHONE_E164 = "2347015848547"
export const LOCATION = "Lagos, Nigeria"

export const EMAIL_HREF = `mailto:${EMAIL}`
export const PHONE_HREF = `tel:+${PHONE_E164}`
export const WHATSAPP_HREF = `https://wa.me/${PHONE_E164}`
export const INSTAGRAM_HREF = "https://www.instagram.com/lammyde.art"
export const TWITTER_HREF = "https://x.com/oyebintan?s=21"

// Instagram first — it is the portfolio's main channel. Footer additionally
// shows email, so it appends `emailLink` rather than keeping its own array.
export const socialLinks = [
  { icon: FaInstagram, href: INSTAGRAM_HREF, label: "Instagram" },
  { icon: FaXTwitter, href: TWITTER_HREF, label: "Twitter" },
  { icon: FaWhatsapp, href: WHATSAPP_HREF, label: "WhatsApp" },
]

export const emailLink = { icon: FaEnvelope, href: EMAIL_HREF, label: "Email" }
