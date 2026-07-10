"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { products } from "@/lib/products";

const featured = products.filter((p) => p.featured);

export default function FeaturedProducts() {
  const t = useTranslations();

  return (
    <section id="products" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <motion.p variants={fadeInUp} className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
              {t("featured.eyebrow")}
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              {t("featured.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 mt-3 max-w-xl leading-relaxed">
              {t("featured.subtitle")}
            </motion.p>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors whitespace-nowrap"
            >
              {t("products.title")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Bento-style product grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {featured.map((product, idx) => {
            const isLarge = idx === 0;
            const badgeClass =
              product.badge === "new"
                ? "bg-blue-500/90 text-white"
                : product.badge === "sale"
                ? "bg-rose-500/90 text-white"
                : "bg-amber-500/90 text-slate-900";

            return (
              <motion.div
                key={product.id}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={[
                  "group relative flex flex-col rounded-2xl bg-white/[0.04] border border-white/[0.08] overflow-hidden",
                  "shadow-[0_2px_8px_rgba(0,0,0,0.2),0_16px_40px_-12px_rgba(0,0,0,0.35)]",
                  "hover:border-blue-500/30 hover:shadow-[0_4px_24px_rgba(59,130,246,0.12)] transition-all duration-300",
                  isLarge ? "sm:col-span-2" : "",
                ].join(" ")}
              >
                {product.badge && (
                  <span className={"absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide " + badgeClass}>
                    {t("featured.badge." + product.badge)}
                  </span>
                )}

                <div className={["relative overflow-hidden bg-slate-800/50", isLarge ? "aspect-video" : "aspect-square"].join(" ")}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col gap-2 p-4 flex-1">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{product.category}</p>
                  <h3 className="font-bold text-slate-100 text-base leading-snug group-hover:text-white transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={["w-3 h-3", i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-slate-600"].join(" ")}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">({product.reviews.toLocaleString("en-US")})</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-extrabold text-white">${product.price.toLocaleString("en-US")}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-slate-500 line-through">
                          ${product.originalPrice.toLocaleString("en-US")}
                        </span>
                      )}
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-500/15 hover:bg-blue-500 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white text-xs font-semibold transition-all duration-200"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      {t("featured.addToCart")}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
