"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Zap, MessageCircle as Twitter, Code2 as Github, Briefcase as Linkedin, Globe as Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { navLinks, brand } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useTranslations } from "next-intl";

const footerSections = [
  {
    titleKey: "footer.shop",
    links: [
      { labelKey: "footer.allProducts", href: "#products" },
      { labelKey: "footer.phones", href: "#categories" },
      { labelKey: "footer.laptops", href: "#categories" },
      { labelKey: "footer.wearables", href: "#categories" },
      { labelKey: "footer.accessories", href: "#categories" },
    ],
  },
  {
    titleKey: "footer.support",
    links: [
      { labelKey: "footer.faq", href: "#contact" },
      { labelKey: "footer.shipping", href: "#contact" },
      { labelKey: "footer.returns", href: "#contact" },
      { labelKey: "footer.warranty", href: "#contact" },
      { labelKey: "footer.trackOrder", href: "#contact" },
    ],
  },
  {
    titleKey: "footer.company",
    links: [
      { labelKey: "footer.about", href: "#about" },
      { labelKey: "footer.careers", href: "#about" },
      { labelKey: "footer.press", href: "#about" },
      { labelKey: "footer.privacy", href: "#about" },
      { labelKey: "footer.terms", href: "#about" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", labelKey: "footer.twitter" },
  { icon: Github, href: "#", labelKey: "footer.github" },
  { icon: Linkedin, href: "#", labelKey: "footer.linkedin" },
  { icon: Facebook, href: "#", labelKey: "footer.facebook" },
];

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  function getLinkHref(href: string): string {
    if (href.startsWith("#") && pathname !== "/") {
      return "/" + href;
    }
    return href;
  }

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <footer className="relative bg-[#080E1A] border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-48 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12"
        >
          {/* Brand column */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {t("nav.brand")}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              {t("footer.tagline")}
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t("footer.address")}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t("footer.email")}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t("footer.phone")}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, labelKey }) => (
                <a
                  key={labelKey}
                  href={href}
                  aria-label={t(labelKey)}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <motion.div key={section.titleKey} variants={fadeInUp}>
              <h3 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
                {t(section.titleKey)}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.labelKey}>
                    <Link
                      href={getLinkHref(link.href)}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-500 text-sm">
            {t("footer.copyright", { year: 2025, brand: brand.name })}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-600 text-xs">{t("footer.madeWith")}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}