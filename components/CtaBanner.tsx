"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function CtaBanner() {
  const t = useTranslations();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/15 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center gap-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance leading-tight"
          >
            {t("cta.title")}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 text-lg leading-relaxed max-w-2xl text-pretty">
            {t("cta.subtitle")}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-base transition-all duration-300 shadow-[0_0_32px_rgba(59,130,246,0.4)] hover:shadow-[0_0_48px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {t("cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 font-bold text-base transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              {t("cta.buttonSecondary")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
