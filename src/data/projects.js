// Every project's image lives at images/projects/<slug>/preview.jpg — to swap one
// out, drop a replacement `preview.jpg` into that folder and nothing else needs
// to change. See src/assets/images/README.md.
import zookNewMonth from "../assets/images/projects/zook-fabrics-new-month/preview.jpg"
import relishLocals from "../assets/images/projects/relish-locals-opening/preview.jpg"
import honeyPot from "../assets/images/projects/honey-pot-back-to-school/preview.jpg"
import afterItHangout from "../assets/images/projects/after-it-hangout/preview.jpg"
import assonWeek from "../assets/images/projects/asson-week-novelty-cup/preview.jpg"
import campusMirrorEaster from "../assets/images/projects/campus-mirror-easter/preview.jpg"
import ooutechGoodEnergy from "../assets/images/projects/ooutech-good-energy/preview.jpg"
import ojudeNimelssa from "../assets/images/projects/ojude-nimelssa-banner/preview.jpg"
import eastSideVendor from "../assets/images/projects/east-side-vendor/preview.jpg"
import eatWithAde from "../assets/images/projects/eat-with-ade-valentine/preview.jpg"
import reginaBirthday from "../assets/images/projects/regina-birthday-bash/preview.jpg"
import ambassadorEriIfe from "../assets/images/projects/ambassador-eri-ife-rate-card/preview.jpg"
import idpay from "../assets/images/projects/idpay-airdrop-tip/preview.jpg"
import transactxNewYear from "../assets/images/projects/transactx-new-year/preview.jpg"
import transactxEid from "../assets/images/projects/transactx-eid-mubarak/preview.jpg"
import transactxSubAccounts from "../assets/images/projects/transactx-sub-accounts/preview.jpg"

export const projects = [
  { id: 1, slug: "zook-fabrics-new-month", title: "ZOOK Fabrics — New Month", category: "Poster Design", img: zookNewMonth, description: "Monthly brand greeting for ZOOK Fabrics, built around a bold spotlight portrait to keep the identity recognizable outside the core branding board." },
  { id: 2, slug: "relish-locals-opening", title: "Relish Locals — 2K Spot Opening", category: "Flyer Design", img: relishLocals, description: "Launch flyer for a street-food stall's new 2k-naira menu, pairing real product photography with a bold price-first layout." },
  { id: 3, slug: "honey-pot-back-to-school", title: "Honey Pot — Back to School", category: "Flyer Design", img: honeyPot, description: "Back-to-school promo flyer for a campus food vendor, led by close-up food photography and a clear ordering call to action." },
  { id: 4, slug: "after-it-hangout", title: "After IT Hangout", category: "Flyer Design", img: afterItHangout, description: "Event flyer for a graduating class hangout, combining a candid group photo with all the logistics a guest needs at a glance." },
  { id: 5, slug: "asson-week-novelty-cup", title: "ASSON Week — Novelty Cup Final", category: "Flyer Design", img: assonWeek, description: "Departmental sports-week flyer announcing a novelty cup final, built for quick reading of the date, venue and fixtures." },
  { id: 6, slug: "campus-mirror-easter", title: "Campus Mirror — Easter Sunday", category: "Poster Design", img: campusMirrorEaster, description: "Seasonal greeting poster for a campus media brand, pairing a cinematic composite with a scripture reference for the occasion." },
  { id: 7, slug: "ooutech-good-energy", title: "OOU Tech Community — Good Energy", category: "Social Ads", img: ooutechGoodEnergy, description: "Monthly community post for a campus tech community, built around bold flat illustration and a consistent brand system." },
  { id: 8, slug: "ojude-nimelssa-banner", title: "Ojude Nimelssa — Festival Banner", category: "Social Ads", img: ojudeNimelssa, description: "Wide-format invitation banner for a cultural festival, built around a group portrait in full traditional dress." },
  { id: 9, slug: "east-side-vendor", title: "East Side Vendor", category: "Flyer Design", img: eastSideVendor, description: "Product flyer for a perfume and skincare vendor, arranging real product shots into one clean, scannable storefront." },
  { id: 10, slug: "eat-with-ade-valentine", title: "Eat With Ade — Valentine Package", category: "Flyer Design", img: eatWithAde, description: "Seasonal pricing flyer laying out five Valentine gift packages for a food vendor, built for fast side-by-side comparison." },
  { id: 11, slug: "regina-birthday-bash", title: "Party with Regina — Birthday Bash", category: "Flyer Design", img: reginaBirthday, description: "Event flyer for a birthday party, styled after a vintage newsprint clipping to stand apart from typical nightlife flyers." },
  { id: 12, slug: "ambassador-eri-ife-rate-card", title: "Ambassador Eri Ife — Rate Card", category: "Social Ads", img: ambassadorEriIfe, description: "Ads rate card for a social media ambassador, laying out TikTok and WhatsApp promotion pricing in one clear reference sheet." },
  { id: 13, slug: "idpay-airdrop-tip", title: "iD Pay — Airdrop Tip", category: "Social Ads", img: idpay, description: "Educational social post for a crypto platform, built as a quick tip card to prompt engagement rather than a hard sell." },
  { id: 14, slug: "transactx-new-year", title: "TransactX — Happy New Year", category: "Poster Design", img: transactxNewYear, description: "New Year greeting poster for a fintech brand, keeping the brand's own colour and mark front and centre." },
  { id: 15, slug: "transactx-eid-mubarak", title: "TransactX — Eid al-Adha Mubarak", category: "Poster Design", img: transactxEid, description: "Seasonal greeting poster for a fintech brand, pairing a warm illustrated scene with the festive skyline of the occasion." },
  { id: 16, slug: "transactx-sub-accounts", title: "TransactX — Sub Accounts Feature", category: "Social Ads", img: transactxSubAccounts, description: "Product feature ad for a fintech app, using a lit-window scene to frame the phone screen it's actually selling." },
]

export const projectCategories = ["All", "Flyer Design", "Poster Design", "Social Ads"]
