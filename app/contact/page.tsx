"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

export default function ContactPage() {
  const t = useTranslations();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1200);
  };

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all";

  const infoItems = [
    { icon: MapPin, label: t("contact.addressLabel"), value: t("footer.address"), color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
    { icon: Mail, label: t("contact.emailInfoLabel"), value: t("footer.email"), color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
    { icon: Phone, label: t("contact.phoneLabel"), value: t("footer.phone"), color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
    { icon: Clock, label: t("contact.hoursLabel"), value: t("contact.hoursValue"), color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p variants={fadeInUp} className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              {t("contact.eyebrow")}
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold tracking-tight text-balance leading-tight mb-4">
              {t("contact.title")}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-slate-400 text-lg leading-relaxed text-pretty">
              {t("contact.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          {/* Form */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle className="w-14 h-14 text-emerald-400" />
                <h2 className="text-2xl font-extrabold text-white">{t("contact.successTitle")}</h2>
                <p className="text-slate-400 max-w-sm">{t("contact.successDesc")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-300">{t("contact.nameLabel")}</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder={t("contact.namePlaceholder")}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-300">{t("contact.emailLabel")}</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder={t("contact.emailPlaceholder")}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-300">{t("contact.subjectLabel")}</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder={t("contact.subjectPlaceholder")}
                    required
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-300">{t("contact.messageLabel")}</label>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    placeholder={t("contact.messagePlaceholder")}
                    required
                    rows={6}
                    className={inputClass + " resize-none"}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 px-8 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 disabled:opacity-60 text-white font-bold text-sm transition-all duration-200 shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_32px_rgba(59,130,246,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  {sending ? t("contact.sending") : t("contact.submit")}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-xl font-bold text-white mb-2">{t("contact.infoTitle")}</h2>
            {infoItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
                >
                  <div className={"w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0 " + item.bg}>
                    <Icon className={"w-5 h-5 " + item.color} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-slate-200 text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
