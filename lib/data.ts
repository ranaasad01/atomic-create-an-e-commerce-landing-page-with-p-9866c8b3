export interface NavLink {
  label: string;
  href: string;
}

export interface Brand {
  name: string;
  tagline: string;
  accentColor: string;
}

export const brand: Brand = {
  name: "Datics",
  tagline: "Next-Gen Electronics & Gadgets",
  accentColor: "#3B82F6",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "Categories", href: "#categories" },
  { label: "Deals", href: "#deals" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const navCTA = {
  label: "Shop Now",
  href: "#products",
};