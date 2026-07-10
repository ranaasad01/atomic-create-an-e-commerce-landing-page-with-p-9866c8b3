"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Truck, RotateCcw, Shield, Headphones } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const trustItems = [
  { icon: Truck, titleKey: "trust.freeShippingTitle", descKey: "trust.freeShippingDesc", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { icon: RotateCcw, titleKey: "trust.returnsTitle", descKey: "trust.returnsDesc", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { icon: Shield, titleKey: "trust.warrantyTitle", descKey: "trust.warrantyDesc", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
  { icon: Headphones, titleKey: "trust.supportTitle", descKey: "trust.supportDesc", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
];

export default function TrustSection() {
  const t = useTranslations();

  return (
    <section className="py-20 md:py-28 bg-white/[0.02] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
            {t("trust.eyebrow")}
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
            {t("trust.title")}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.titleKey}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.14] transition-all duration-300 shadow-[0_1px_4px_rgba(0,0,0,0.15),0_8px_24px_-8px_rgba(0,0,0,0.25)]"
              >
                <div className={"w-11 h-11 rounded-xl flex items-center justify-center border " + item.bg}>
                  <Icon className={"w-5 h-5 " + item.color} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">{t(item.titleKey)}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t(item.descKey)}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
