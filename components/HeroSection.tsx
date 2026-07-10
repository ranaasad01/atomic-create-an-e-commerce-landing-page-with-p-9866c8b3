"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, slideInRight } from "@/lib/motion";

const statVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: 0.6 + i * 0.1 },
  }),
};

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-20">
      {/* Background mesh glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                {t("hero.eyebrow")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance leading-[1.05]"
            >
              {t("hero.title")}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {t("hero.titleAccent")}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-400 leading-relaxed max-w-lg text-pretty"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Shipping badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_32px_rgba(59,130,246,0.55)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {t("hero.cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#deals"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </motion.div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-white/8">
              {[
                { value: t("hero.stat1Value"), label: t("hero.stat1Label") },
                { value: t("hero.stat2Value"), label: t("hero.stat2Label") },
                { value: t("hero.stat3Value"), label: t("hero.stat3Label") },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={statVariant}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col"
                >
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-slate-500 mt-0.5">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — hero image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-violet-500/10 blur-2xl scale-90" />

            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_8px_48px_rgba(0,0,0,0.5)] w-full max-w-lg aspect-[4/3]">
              <img
                src="https://elements-resized.envatousercontent.com/elements-cover-images/c5e95cf6-0455-4fb1-8508-3a329f589514?w=1200&h=630&cf_fit=crop&q=85&format=jpeg&s=d0df571c5b0cee4412ef0e6fe9d18c014e5d38fad2fddda03134339431ae58d5"
                alt={t("hero.cta")}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />

              {/* Floating rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
                className="absolute bottom-5 left-5 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg"
              >
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-white font-semibold text-sm">{t("hero.stat3Value")}</span>
                <span className="text-slate-400 text-xs">{t("hero.stat1Value")} {t("hero.stat1Label")}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
