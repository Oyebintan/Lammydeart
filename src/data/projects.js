// Every project's image lives at images/projects/<slug>/preview.jpg — to swap one
// out, drop a replacement `preview.jpg` into that folder and nothing else needs
// to change. See src/assets/images/README.md.
import campusElection from "../assets/images/projects/campus-election-campaign/preview.jpg"
import eventPromotion from "../assets/images/projects/event-promotion/preview.jpg"
import rexonaGiveaway from "../assets/images/projects/rexona-giveaway-campaign/preview.jpg"
import culturalFestival from "../assets/images/projects/cultural-festival-poster/preview.jpg"
import laundryService from "../assets/images/projects/laundry-service-flyer/preview.jpg"
import eidMubarak from "../assets/images/projects/eid-mubarak-greeting/preview.jpg"
import gadgetStore from "../assets/images/projects/gadget-store-promo/preview.jpg"
import perfumeSkincare from "../assets/images/projects/perfume-skincare-flyer/preview.jpg"
import happyNewMonth from "../assets/images/projects/happy-new-month-poster/preview.jpg"

export const projects = [
  { id: 1, slug: "campus-election-campaign", title: "Campus Election Campaign", category: "Poster Design", img: campusElection, description: "Campaign poster for a student union candidate, built around a bold portrait and clear ballot messaging." },
  { id: 2, slug: "event-promotion", title: "Event Promotion", category: "Flyer Design", img: eventPromotion, description: "Eye-catching promotional flyer with bold colors and a dynamic layout." },
  { id: 3, slug: "rexona-giveaway-campaign", title: "Rexona Giveaway Campaign", category: "Flyer Design", img: rexonaGiveaway, description: "Promotional flyer for a campus product giveaway, designed to grab attention and drive turnout." },
  { id: 4, slug: "cultural-festival-poster", title: "Cultural Festival Poster", category: "Poster Design", img: culturalFestival, description: "Vibrant festival poster blending traditional imagery with bold modern typography." },
  { id: 5, slug: "laundry-service-flyer", title: "Laundry Service Flyer", category: "Flyer Design", img: laundryService, description: "Clean service flyer for a laundry and dry-cleaning business, built for quick scanning and easy contact." },
  { id: 6, slug: "eid-mubarak-greeting", title: "Eid Mubarak Greeting", category: "Poster Design", img: eidMubarak, description: "Festive seasonal greeting poster combining warm imagery with elegant typography." },
  { id: 7, slug: "gadget-store-promo", title: "Gadget Store Promo", category: "Flyer Design", img: gadgetStore, description: "Product-forward promotional flyer for an electronics and gadgets store." },
  { id: 8, slug: "perfume-skincare-flyer", title: "Perfume & Skincare Flyer", category: "Flyer Design", img: perfumeSkincare, description: "Brand flyer for a beauty vendor, pairing product photography with a clean, feminine layout." },
  { id: 9, slug: "happy-new-month-poster", title: "Happy New Month Poster", category: "Poster Design", img: happyNewMonth, description: "Uplifting monthly greeting poster designed for social media sharing." },
]

export const projectCategories = ["All", "Flyer Design", "Poster Design"]
