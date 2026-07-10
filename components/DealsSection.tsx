"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Star } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";
import { deals } from "@/lib/products";

export default function DealsSection() {
  const t = useTranslations();

  return (
    <section id="deals" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

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
            <motion.p variants={fadeInUp} className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-2">
              {t("deals.eyebrow")}
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              {t("deals.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 mt-3 max-w-xl leading-relaxed">
              {t("deals.subtitle")}
            </motion.p>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 font-medium text-sm transition-colors whitespace-nowrap"
            >
              {t("deals.viewAll")} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Deals — split layout alternating sides */}
        <div className="flex flex-col gap-6">
          {deals.map((deal, idx) => {
            const isEven = idx % 2 === 0;
            const product = deal.product;
            const savings = product.originalPrice
              ? product.originalPrice - product.price
              : Math.round(product.price * (deal.pct / 100));

            return (
              <motion.div
                key={deal.id}
                variants={isEven ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ scale: 1.005, transition: { duration: 0.2 } }}
                className="group grid md:grid-cols-[280px_1fr] gap-0 rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] hover:border-violet-500/25 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-slate-800/50 aspect-video md:aspect-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F172A]/40 hidden md:block" />
                  {/* Discount badge */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-rose-500 text-white text-sm font-extrabold shadow-lg">
                    {t("deals.off", { pct: deal.pct })}
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">{product.category}</p>
                    <h3 className="text-2xl font-extrabold text-white mb-2">{product.name}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{product.description}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={["w-3.5 h-3.5", i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-slate-600"].join(" ")}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-slate-500">({product.reviews.toLocaleString("en-US")})</span>
                    </div>

                    {/* Countdown */}
                    <div className="flex items-center gap-2 mb-5">
                      <span className="text-xs text-slate-500 font-medium">{t("deals.endsIn")}:</span>
                      <div className="flex items-center gap-1.5">
                        {[
                          { val: deal.endsHours, unit: t("deals.hours") },
                          { val: deal.endsMin, unit: t("deals.minutes") },
                          { val: deal.endsSec, unit: t("deals.seconds") },
                        ].map((seg, i) => (
                          <span key={i} className="flex items-center gap-1">
                            <span className="px-2 py-1 rounded-lg bg-white/8 border border-white/10 text-white text-sm font-bold tabular-nums">
                              {String(seg.val).padStart(2, "0")}
                            </span>
                            <span className="text-xs text-slate-500">{seg.unit}</span>
                            {i < 2 && <span className="text-slate-600 font-bold">:</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-extrabold text-white">${product.price.toLocaleString("en-US")}</span>
                      <span className="text-slate-500 line-through text-base">
                        ${(product.price + savings).toLocaleString("en-US")}
                      </span>
                      <span className="text-emerald-400 text-sm font-semibold">Save ${savings.toLocaleString("en-US")}</span>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      className="px-6 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-400 text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_28px_rgba(139,92,246,0.5)]"
                    >
                      {t("deals.shopDeal")}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
