"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Search, ShoppingCart, Star, SlidersHorizontal } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { products, categories } from "@/lib/products";

const ALL = "all";

export default function ProductsPage() {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [sortKey, setSortKey] = useState("newest");
  const [query, setQuery] = useState("");

  const filtered = products
    .filter((p) => {
      const matchCat = activeCategory === ALL || p.category === activeCategory;
      const matchQ = query === "" || p.name.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    })
    .sort((a, b) => {
      if (sortKey === "priceLow") return a.price - b.price;
      if (sortKey === "priceHigh") return b.price - a.price;
      if (sortKey === "rating") return b.rating - a.rating;
      return 0;
    });

  const badgeClass = (badge: string | undefined) => {
    if (badge === "new") return "bg-blue-500/90 text-white";
    if (badge === "sale") return "bg-rose-500/90 text-white";
    if (badge === "hot") return "bg-amber-500/90 text-slate-900";
    return "";
  };

  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            {t("products.title")}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-slate-400 text-lg leading-relaxed max-w-xl">
            {t("products.subtitle")}
          </motion.p>
        </motion.div>

        {/* Filters bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("nav.search")}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(ALL)}
              className={["px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200", activeCategory === ALL ? "bg-blue-500 text-white shadow-[0_0_16px_rgba(59,130,246,0.35)]" : "bg-white/[0.05] border border-white/[0.1] text-slate-400 hover:text-white hover:bg-white/[0.08]"].join(" ")}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={["px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200", activeCategory === cat.id ? "bg-blue-500 text-white shadow-[0_0_16px_rgba(59,130,246,0.35)]" : "bg-white/[0.05] border border-white/[0.1] text-slate-400 hover:text-white hover:bg-white/[0.08]"].join(" ")}
              >
                {t("categories." + cat.id)}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <SlidersHorizontal className="w-4 h-4 text-slate-500" />
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
              className="bg-white/[0.05] border border-white/[0.1] text-slate-300 text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-blue-500/50 transition-all"
            >
              <option value="newest">{t("products.sortNewest")}</option>
              <option value="priceLow">{t("products.sortPriceLow")}</option>
              <option value="priceHigh">{t("products.sortPriceHigh")}</option>
              <option value="rating">{t("products.sortRating")}</option>
            </select>
          </div>
        </motion.div>

        {/* Count */}
        <p className="text-slate-500 text-sm mb-6">{t("products.showing", { count: filtered.length })}</p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-slate-500 text-center py-20">{t("products.noResults")}</p>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="group flex flex-col rounded-2xl bg-white/[0.04] border border-white/[0.08] overflow-hidden hover:border-blue-500/30 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
              >
                <div className="relative overflow-hidden bg-slate-800/50 aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className={"absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide " + badgeClass(product.badge)}>
                      {t("featured.badge." + product.badge)}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2 p-4 flex-1">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{product.category}</p>
                  <h3 className="font-bold text-slate-100 text-sm leading-snug">{product.name}</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={["w-3 h-3", i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-slate-600"].join(" ")} />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">({product.reviews.toLocaleString("en-US")})</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-extrabold text-white">${product.price.toLocaleString("en-US")}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-slate-500 line-through">${product.originalPrice.toLocaleString("en-US")}</span>
                      )}
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1 px-3 py-2 rounded-xl bg-blue-500/15 hover:bg-blue-500 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white text-xs font-semibold transition-all duration-200"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      {t("featured.addToCart")}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
