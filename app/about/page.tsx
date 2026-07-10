"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Eye, Award, Heart } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";

const teamMembers = [
  { name: "Alex Rivera", role: "Co-Founder & CEO", image: "https://m.media-amazon.com/images/M/MV5BMTkzNzc4Njg0NF5BMl5BanBnXkFtZTcwNjc4ODgwMg@@._V1_.jpg" },
  { name: "Priya Nair", role: "Head of Product", image: "https://m.media-amazon.com/images/M/MV5BMTkzNzc4Njg0NF5BMl5BanBnXkFtZTcwNjc4ODgwMg@@._V1_.jpg" },
  { name: "Jordan Kim", role: "Lead Engineer", image: "https://m.media-amazon.com/images/M/MV5BMTkzNzc4Njg0NF5BMl5BanBnXkFtZTcwNjc4ODgwMg@@._V1_.jpg" },
  { name: "Sofia Chen", role: "Head of Design", image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-1309092,resizemode-75,msid-122368466/industry/cons-products/fmcg/priya-nairs-playbook-how-hindustan-unilevers-new-ceo-built-global-brands-with-indian-roots.jpg" },
];

const values = [
  { icon: Eye, titleKey: "about.value1Title", descKey: "about.value1Desc", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { icon: Award, titleKey: "about.value2Title", descKey: "about.value2Desc", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
  { icon: Heart, titleKey: "about.value3Title", descKey: "about.value3Desc", color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
];

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p variants={fadeInUp} className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              {t("about.eyebrow")}
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold tracking-tight text-balance leading-tight mb-6">
              {t("about.title")}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-slate-400 text-xl leading-relaxed text-pretty">
              {t("about.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: t("about.stat1Value"), label: t("about.stat1Label") },
              { value: t("about.stat2Value"), label: t("about.stat2Label") },
              { value: t("about.stat3Value"), label: t("about.stat3Label") },
              { value: t("about.stat4Value"), label: t("about.stat4Label") },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission + image split */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">{t("about.missionTitle")}</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">{t("about.missionDesc")}</p>
              <h3 className="text-2xl font-bold mb-6">{t("about.valuesTitle")}</h3>
              <div className="flex flex-col gap-4">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.titleKey} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                      <div className={"w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0 " + v.bg}>
                        <Icon className={"w-5 h-5 " + v.color} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{t(v.titleKey)}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{t(v.descKey)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/15 to-violet-500/10 blur-2xl scale-90" />
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] shadow-[0_8px_48px_rgba(0,0,0,0.5)] aspect-[4/3]">
                <img
                  src="https://www.daticsinc.com/website/img/why-choose-us/why-us.png"
                  alt={t("about.title")}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white/[0.02] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {t("about.teamTitle")}
            </motion.h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/25 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/[0.1]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-white text-sm">{member.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
