import {
  amber,
  desert,
  floral,
  heroImg,
  heroImg1,
  heroImg2,
  heroImg3,
  instagram,
  tiktok,
  twitter,
  velvet,
  website,
  youtube,
} from "./Images";

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
  "	A luxury perfume house inspired by the  spirit of ancient and modern Egypt",
  "GET 10% OFF YOUR FIRST ORDER",
  "Where Egypt’s soul lingers in scent"
];

export const navLinks = [
  { label: "New Arrivals", to: "/new-arrivals" },
  { label: "Perfumes", to: "/perfumes" },
  { label: "Collections", to: "/collections" },
  { label: "Bestsellers", to: "/bestsellers" },
  { label: "Gifts", to: "/gifts" },
  {
    label: "Journal",
    to: "/Layali_Musk",
    // For blog posts, emotional storytelling, or customer stories
  },
];

export const collections = [
  {
    name: "Desert Oud",
    slug: "desert-oud",
    image: desert,
    season: "Summer",
    emoji: "🌤️",
    description:
      "Warm, spicy oud perfumes inspired by the mystique of the desert.",
  },
  {
    name: "Velvet Musk",
    slug: "velvet-musk",
    image: velvet,
    season: "Winter",
    emoji: "❄️",
    description: "Soft, powdery musk fragrances for cozy winter days.",
  },
  {
    name: "Amber Essence",
    slug: "amber-essence",
    image: amber,
    season: "Autumn",
    emoji: "🍂",
    description: "Rich amber-based perfumes perfect for autumn evenings.",
  },
  {
    name: "Floral Grace",
    slug: "floral-grace",
    image: floral,
    season: "Spring",
    emoji: "🌸",
    description: "Fresh, floral scents inspired by blooming spring gardens.",
  },
  {
    name: "Modern Muse",
    slug: "modern-muse",
    image: "/images/collections/modern-muse.jpg",
    description: "Contemporary blends for the modern perfume lover.",
  },
  {
    name: "Rare Elixirs",
    slug: "rare-elixirs",
    image: "/images/collections/rare-collectibles.jpg",
    description: "Exclusive, limited-edition perfumes with unique ingredients.",
  },
  {
    name: "Seasonal Specials",
    slug: "seasonal-specials",
    image: "/images/collections/flash-sales.jpg",
    description: "Limited-time offers on select perfume collections.",
  },
  {
    name: "Bestsellers",
    slug: "bestsellers",
    image: "/images/collections/favorites.jpg",
    description: "Our most popular and loved perfumes.",
  },
];
export const featuredCollections = [
  {
    name: "Sands of Oud",
    description:
      "Experience the mystique of the desert with warm oud, amber, and sandalwood notes. Sands of Oud is a luxurious blend for those who love deep, long-lasting scents.",
    image: heroImg, // update path as needed
    season: "summer",
    featured: true,
  },
  {
    name: "Noor Blossom",
    description:
      "A fresh, floral fragrance inspired by springtime gardens. Noor Blossom combines jasmine, rose, and a hint of citrus for a light, uplifting scent.",
    image: heroImg1,
    season: "spring",
    featured: false,
  },
  {
    name: "Amber Nights",
    description:
      "Rich amber and spicy vanilla come together in this captivating autumn fragrance. Amber Nights is perfect for cozy evenings and special occasions.",
    image: heroImg2,
    season: "autumn",
    featured: false,
  },
  {
    name: "Velvet Musk",
    description:
      "Soft, powdery musk with subtle hints of iris and white woods. Velvet Musk is an elegant winter scent, both comforting and sophisticated.",
    image: heroImg3,
    season: "winter",
    featured: false,
  },
  {
    name: "Infinity Signature",
    description:
      "Our timeless signature perfume—versatile, refined, and suitable for every season. A balanced blend of floral, woody, and musky notes.",
    image: heroImg1,
    season: "all",
    featured: false,
  },
  {
    name: "Eid Elixir",
    description:
      "Celebrate with a festive blend of saffron, rose, and oud. Eid Elixir is crafted for special moments and joyful gatherings.",
    image: heroImg,
    season: "all",
    featured: false,
  },
  {
    name: "Bridal Essence",
    description:
      "A luxurious fragrance for weddings and celebrations, featuring white florals, creamy sandalwood, and a touch of vanilla.",
    image: heroImg3,
    season: "all",
    featured: false,
  },
];

export const rarePerfumes = [
  {
    name: "Sands of Sheba",
    theme: "Arabian luxury / desert royalty",
    perfumeNotes: ["Oud", "Saffron", "Rose"],
    bottle: "Pearl-accented glass with golden filigree",
    packaging: "Sand-dune textured box with velvet lining",
    comboName: "Golden Royalty Scent",
    price: 280,
    currency: "USD",
    image: amber, // update path as needed
    limitedEdition: true,
    yearlyDrop: true,
    maxStock: 50,
    description:
      "A rare oud-based elixir with hints of saffron and rose, inspired by Arabian luxury and desert royalty.",
    tips: [
      "Only 30–50 bottles/year.",
      "Countdown timer before launch on Instagram.",
      "Personalized cards or calligraphy tags inside.",
      "Never restocked once sold out.",
    ],
  },
  {
    name: "Midnight Ayah",
    theme: "Mystical & Modern / Spiritual luxury",
    perfumeNotes: ["Night jasmine", "Vanilla", "Musk"],
    bottle: "Onyx-black glass with silver Arabic calligraphy",
    packaging: "Matte black box with silver foil verses from Surah Al-Fajr",
    comboName: "Noor in the Dark Scent",
    price: 310,
    currency: "USD",
    image: velvet,
    limitedEdition: true,
    yearlyDrop: true,
    maxStock: 50,
    description:
      "A mystical blend of night jasmine, vanilla, and musk in an onyx-black bottle with spiritual calligraphy.",
    tips: [
      "Only 30–50 bottles/year.",
      "Countdown timer before launch on Instagram.",
      "Personalized cards or calligraphy tags inside.",
      "Never restocked once sold out.",
    ],
  },
  {
    name: "Zahra Legacy",
    theme: "Feminine heritage / timeless floral",
    perfumeNotes: ["Rose absolute", "Lily", "Patchouli"],
    bottle: "Blush pink glass with gold-plated stopper",
    packaging: "Embossed floral-engraved magnetic box",
    comboName: "Legacy of Zahra Scent",
    price: 265,
    currency: "USD",
    image: desert,
    limitedEdition: true,
    yearlyDrop: true,
    maxStock: 50,
    description:
      "A timeless floral perfume with rose absolute, lily, and patchouli, celebrating feminine heritage.",
    tips: [
      "Only 30–50 bottles/year.",
      "Countdown timer before launch on Instagram.",
      "Personalized cards or calligraphy tags inside.",
      "Never restocked once sold out.",
    ],
  },
];

export const perfumes = [
  {
    id: 1,
    name: "Noor Al-Sabah",
    description:
      "A luminous blend of citrus, vanilla, and light oud for summer days.",
    price: 120,
    arrivalDate: "2025-06-01",
    collection: "Summer Collection",
    fragranceFamily: "Citrus",
    ingredients: ["Citrus", "Vanilla", "Oud"],
    gender: "Women",
    image: "./Images/noorAlSabah.jpg",
    bestseller: true,
    newArrival: true,
    limitedEdition: false,
    featured: false,
    inStock: true,
    discounted: false,
    giftable: true,
  },
  {
    id: 2,
    name: "Ruqayyah",
    description:
      "Warm oud and musk with hints of incense for cozy winter nights.",
    price: 135,
    arrivalDate: "2025-01-15",
    collection: "Winter Collection",
    fragranceFamily: "Oriental",
    ingredients: ["Oud", "Musk", "Incense"],
    gender: "Women",
    image: "./Images/ruqayyah.jpg",
    bestseller: false,
    newArrival: false,
    limitedEdition: false,
    featured: false,
    inStock: true,
    discounted: true,
    giftable: true,
  },
  {
    id: 3,
    name: "Layali",
    description: "A floral and fresh spring scent with rose and white musk.",
    price: 110,
    arrivalDate: "2025-03-10",
    collection: "Spring Collection",
    fragranceFamily: "Floral",
    ingredients: ["Rose", "White Musk"],
    gender: "Shared",
    image: "./Images/layali.jpg",
    bestseller: false,
    newArrival: false,
    limitedEdition: false,
    featured: true,
    inStock: true,
    discounted: false,
    giftable: true,
  },
  {
    id: 4,
    name: "Amber Soul",
    description: "Rich amber and spicy cardamom for autumn warmth.",
    price: 140,
    arrivalDate: "2024-09-20",
    collection: "Autumn Collection",
    fragranceFamily: "Amber",
    ingredients: ["Amber", "Cardamom"],
    gender: "Men",
    image: "./Images/amberSoul.jpg",
    bestseller: false,
    newArrival: false,
    limitedEdition: true,
    featured: false,
    inStock: false,
    discounted: false,
    giftable: false,
  },
  {
    id: 5,
    name: "Sands of Sheba",
    description:
      "Oud-based with hints of saffron and rose, inspired by Arabian luxury.",
    price: 280,
    arrivalDate: "2025-05-01",
    collection: "Rare Perfumes",
    fragranceFamily: "Oud",
    ingredients: ["Oud", "Saffron", "Rose"],
    gender: "Shared",
    image: "./Images/sandsOfSheba.jpg",
    bestseller: true,
    newArrival: false,
    limitedEdition: true,
    featured: true,
    inStock: true,
    discounted: false,
    giftable: true,
  },
  // ...add more perfumes as needed
];
