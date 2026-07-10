"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { categories } from "@/lib/products";

export default function CategoriesSection() {
  const t = useTranslations();

  return (
    <section id="categories" className="py-24 md:py-32 bg-white/[0.02] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
            {t("categories.eyebrow")}
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
            {t("categories.title")}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            {t("categories.subtitle")}
          </motion.p>
        </motion.div>

        {/* Asymmetric grid: 2 large + 4 small */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {categories.map((cat, idx) => {
            const isLarge = idx < 2;
            return (
              <motion.div
                key={cat.id}
                variants={scaleIn}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                className={["group relative rounded-2xl overflow-hidden border border-white/[0.08] cursor-pointer", isLarge ? "col-span-2 md:col-span-1 lg:col-span-2" : "col-span-1 lg:col-span-2"].join(" ")}
              >
                <Link href={cat.href} className="block">
                  <div className={["relative overflow-hidden bg-slate-800/60", isLarge ? "aspect-[4/3]" : "aspect-square"].join(" ")}>
                    <img
                      src={cat.image}
                      alt={t("categories." + cat.id)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/30 to-transparent" />
                    {/* Hover accent overlay */}
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-bold text-white text-lg leading-tight">{t("categories." + cat.id)}</h3>
                      <p className="text-slate-400 text-xs mt-0.5 leading-snug line-clamp-2">
                        {t("categories." + cat.descKey)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-slate-500">{cat.count} products</span>
                        <span className="flex items-center gap-1 text-blue-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {t("categories.explore", { name: "" })} <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
