export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: "new" | "sale" | "hot";
  description: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  descKey: string;
  image: string;
  count: number;
  href: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "iPhone 16 Pro Max",
    category: "phones",
    price: 1199,
    rating: 4.9,
    reviews: 2341,
    image: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
    badge: "new",
    description: "Apple's most powerful iPhone yet with A18 Pro chip, 48MP camera system, and titanium design.",
    featured: true,
  },
  {
    id: "p2",
    name: "Samsung Galaxy S25 Ultra",
    category: "phones",
    price: 1299,
    originalPrice: 1399,
    rating: 4.8,
    reviews: 1876,
    image: "https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-s25-ultra-titanium-silver-blue?wid=400&hei=400&fmt=webp-alpha",
    badge: "sale",
    description: "200MP camera, built-in S Pen, and Snapdragon 8 Elite for the ultimate Android experience.",
    featured: true,
  },
  {
    id: "p3",
    name: "MacBook Pro 14\" M4",
    category: "laptops",
    price: 1999,
    rating: 4.9,
    reviews: 987,
    image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111902_mbp14-silver2.png",
    badge: "new",
    description: "M4 chip delivers unprecedented performance for developers, creators, and power users.",
    featured: true,
  },
  {
    id: "p4",
    name: "Sony WH-1000XM6",
    category: "audio",
    price: 349,
    originalPrice: 399,
    rating: 4.8,
    reviews: 3210,
    image: "https://www.worldwidestereo.com/cdn/shop/files/b2_fb1dd415-473b-488d-896a-bea19796b0f1_1946x.jpg?v=1749051284",
    badge: "hot",
    description: "Industry-leading noise cancellation with 40-hour battery and crystal-clear call quality.",
    featured: true,
  },
  {
    id: "p5",
    name: "Apple Watch Ultra 2",
    category: "wearables",
    price: 799,
    rating: 4.7,
    reviews: 654,
    image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/111832-watch-ultra-2.png",
    badge: "new",
    description: "Built for extreme adventures with dual-frequency GPS, 60-hour battery, and sapphire crystal.",
    featured: false,
  },
  {
    id: "p6",
    name: "Dell XPS 15 OLED",
    category: "laptops",
    price: 1749,
    originalPrice: 1999,
    rating: 4.7,
    reviews: 432,
    image: "https://media.wired.com/photos/6169f03b58660fcbc5f4ec3b/master/w_1600%2Cc_limit/Gear-Dell-XPS-15-OLED-1.jpg",
    badge: "sale",
    description: "Stunning 3.5K OLED display, Intel Core Ultra 9, and RTX 4070 in a slim chassis.",
    featured: false,
  },
  {
    id: "p7",
    name: "Google Pixel 9 Pro",
    category: "phones",
    price: 999,
    rating: 4.7,
    reviews: 1123,
    image: "https://hips.hearstapps.com/hmg-prod/images/google-pixel-9-pro-66d5e04002b15.jpg?crop=0.669xw:1.00xh;0.203xw,0&resize=640:*",
    badge: "new",
    description: "Google's smartest phone with Gemini AI, 50MP triple camera, and 7 years of updates.",
    featured: false,
  },
  {
    id: "p8",
    name: "PlayStation 5 Pro",
    category: "gaming",
    price: 699,
    rating: 4.9,
    reviews: 5432,
    image: "https://media.direct.playstation.com/is/image/sierialto/ps5-pro-Hero-1-angled",
    badge: "hot",
    description: "8K gaming, ray tracing, and PlayStation Spectral Super Resolution for the ultimate console experience.",
    featured: false,
  },
];

export const categories: Category[] = [
  {
    id: "phones",
    name: "Phones",
    descKey: "phonesDesc",
    image: "https://www.cnet.com/a/img/resize/af3da7b36160ef92a4542f9b8b760e2b30c1c023/2014/05/07/e5c8b0aa-6af5-4e8c-a1a9-d6c6233b3c09/pile-of-phones-may-2014-6040-005.jpg?auto=webp",
    count: 124,
    href: "/products?category=phones",
  },
  {
    id: "laptops",
    name: "Laptops",
    descKey: "laptopsDesc",
    image: "https://www.cnet.com/a/img/resize/af3da7b36160ef92a4542f9b8b760e2b30c1c023/2014/05/07/e5c8b0aa-6af5-4e8c-a1a9-d6c6233b3c09/pile-of-phones-may-2014-6040-005.jpg?auto=webp",
    count: 87,
    href: "/products?category=laptops",
  },
  {
    id: "wearables",
    name: "Wearables",
    descKey: "wearablesDesc",
    image: "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-3x2-1.jpg?auto=webp&quality=75&crop=16:9,smart&width=1024",
    count: 63,
    href: "/products?category=wearables",
  },
  {
    id: "audio",
    name: "Audio",
    descKey: "audioDesc",
    image: "https://careevolution.com/wp-content/uploads/2025/04/Wearables-WP-hero3.jpg",
    count: 95,
    href: "/products?category=audio",
  },
  {
    id: "gaming",
    name: "Gaming",
    descKey: "gamingDesc",
    image: "https://media.wired.com/photos/65e8385a7e55097b1dfa6ac1/master/w_1600%2Cc_limit/iStock-500703366.jpg",
    count: 112,
    href: "/products?category=gaming",
  },
  {
    id: "accessories",
    name: "Accessories",
    descKey: "accessoriesDesc",
    image: "https://nielseniq.com/wp-content/uploads/sites/4/2022/11/gaming-keyboard-mouse-controller-headphones.jpg?w=1024",
    count: 340,
    href: "/products?category=accessories",
  },
];

export const deals = [
  {
    id: "d1",
    product: products[1],
    pct: 20,
    endsHours: 11,
    endsMin: 47,
    endsSec: 22,
  },
  {
    id: "d2",
    product: products[3],
    pct: 15,
    endsHours: 23,
    endsMin: 12,
    endsSec: 55,
  },
  {
    id: "d3",
    product: products[5],
    pct: 25,
    endsHours: 6,
    endsMin: 30,
    endsSec: 10,
  },
];
