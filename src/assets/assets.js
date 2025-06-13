import { amber, desert, floral, heroImg, heroImg1, heroImg2, heroImg3, instagram, tiktok, twitter, velvet, website, youtube } from "./Images";

export const socialMedia = [
  {
    img: website,
    link: "www.infinityabaya.ke.com",
  },
  {
    img: youtube,
    link: "infinity_LuxuryAbaya",
  },
  {
    img: instagram,
    link: "@infinity_ke",
  },
  {
    img: tiktok,
    link: "@infinity_Abaya",
  },
  {
    img: twitter,
    link: "@Infinity_Ke",
  },
];

export const adMessages = [
  "Infinity - Where Luxury meets Modesty",
  "GET 15% OFF YOUR FIRST ORDER",
  "Inspired by traditional and elegant Islamic way of dressing.",
];

export const navLinks = [
  { label: "New Arrivals", to: "/new-arrivals" },
  { label: "Collections", to: "/collections" },
  { label: "Bestsellers", to: "/bestsellers" },
  { label: "Abayas", to: "/abayas" },
  { label: "Perfumes", to: "/perfumes" },
  { label: "Handbags", to: "/handbags" },
  { label: "Bracelets", to: "/bracelets" },
  { label: "Assesories", to: "/assesories" },
  { label: "Gifts", to: "/gifts" },
];

export const collections = [
  {
    name: "Desert Bloom",
    slug: "desert-bloom",
    image: desert,
    season: "Summer",
    emoji: "🌤️",
  },
  {
    name: "Velvet Moon",
    slug: "velvet-moon",
    image: velvet,
    season: "Winter",
    emoji: "❄️",
  },
  {
    name: "Amber Luxe",
    slug: "amber-luxe",
    image: amber,
    season: "Autumn",
    emoji: "🌿",
  },
  {
    name: "Floral Grace",
    slug: "floral-grace",
    image: floral,
    season: "Spring",
    emoji: "🍁",
  },
  {
    name: "Rare Collectibles",
    slug: "rare-collectibles",
    image: "/images/collections/rare-collectibles.jpg",
  },
  {
    name: "Flash Sales for All Collections",
    slug: "flash-sales",
    image: "/images/collections/flash-sales.jpg",
  },
  {
    name: "Infinity Bride",
    slug: "infinity-bride",
    image: "/images/collections/infinity-bride.jpg",
  },
  {
    name: "Modern Muse",
    slug: "modern-muse",
    image: "/images/collections/modern-muse.jpg",
  },
  {
    name: "Favorites (Bestsellers)",
    slug: "favorites",
    image: "/images/collections/favorites.jpg",
  },
  {
    name: "Lux Infinity",
    slug: "lux-infinity",
    image: "/images/collections/lux-infinity.jpg",
  },
  {
    name: "Traditions Reimagined",
    slug: "traditions-reimagined",
    image: "/images/collections/traditions-reimagined.jpg",
  },
  {
    name: "Simplicity Speaks",
    slug: "simplicity-speaks",
    image: "/images/collections/simplicity-speaks.jpg",
  },
];

export const featuredCollections = [
  {
    name: "Sahra Summer",
    description:
      "Light, breathable, and elegant. The Sahra Summer collection features earthy tones and off-whites in airy linen blends, paired with straw bags and dainty sun-inspired jewelry.",
    image: heroImg, // update path as needed
    season: "summer",
    featured: true,
  },
  {
    name: "Noor in the Cold",
    description:
      "Cozy up in deep elegance. Noor in the Cold offers velvet and wool abayas in midnight blue and emerald, with faux leather bags and onyx-inspired bracelets.",
    image: heroImg1,
    season: "winter",
    featured: false,
  },
  {
    name: "Amber Soul Autumn",
    description:
      "Warm, rich, and golden. Amber Soul Autumn brings deep olive, amber, and emerald abayas with gold details, structured camel bags, and bronze cuffs.",
    image: heroImg2,
    season: "autumn",
    featured: false,
  },
  {
    name: "Bloom Spring",
    description:
      "Soft, floral, and feminine. Bloom Spring features pastel abayas in mint and blush, floral perfumes, and delicate gold bangles for a fresh start.",
    image: heroImg3,
    season: "spring",
    featured: false,
  },
  {
    name: "Infinity Essentials",
    description:
      "Timeless black abayas available year-round. Elegant, versatile, and always in style—your wardrobe staple for every season.",
    image: heroImg1,
    season: "all",
    featured: false,
  },
  {
    name: "Eid Capsule",
    description:
      "Celebrate in style with our Mini Eid Capsule: metallics, silk, and festive details for Ramadan and Eid.",
    image: heroImg,
    season: "all",
    featured: false, // Set this to true when you want to feature it
  },
  {
    name: "Wedding Edit",
    description:
      "Special occasion abayas with luxurious fabrics and metallic accents—perfect for weddings and celebrations.",
    image: heroImg3,
    season: "all",
    featured: false,
  },
];
