"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Facebook, Twitter, Youtube, Mail } from "lucide-react";
import Image from "next/image";
import styles from "./Footer.module.css";

const footerSections = [
  {
    title: "Programs",
    links: [
      { name: "Tutorials & Crash Courses", href: "/programs/tutorials" },
      { name: "Academic Competitions", href: "/programs/competitions" },
      { name: "Mentorship (Scholar's Voice)", href: "/programs/mentorship" },
      { name: "Freshers Orientation", href: "/programs/orientation" },
      { name: "Community Outreach", href: "/programs/community-outreach" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about#story" },
      { name: "Mission & Vision", href: "/about#mission" },
      { name: "Leadership & Governance", href: "/about#leadership" },
    ],
  },
  {
    title: "Impact",
    links: [
      { name: "Achievements & Awards", href: "/impact/achievements" },
      { name: "Impact Numbers", href: "/impact/numbers" },
      { name: "Recognition & Appointments", href: "/impact/recognition" },
      { name: "Reports & Highlights", href: "/impact/reports" },
    ],
  },
  {
    title: "Media",
    links: [
      { name: "Gallery", href: "/media/gallery" },
      { name: "Blog / Updates", href: "/media/blog" },
      { name: "Testimonials", href: "/media/testimonials" },
      { name: "Press & Mentions", href: "/media/press" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Volunteer", href: "/get-involved/volunteer" },
      { name: "Partner", href: "/get-involved/partner" },
      { name: "Sponsor", href: "/get-involved/sponsor" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Events", href: "/events" },
      { name: "Team", href: "/team" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <Image
          src="/BSG Dark Logo.jpg"
          alt="Brainstorm Group Background"
          fill
          className={styles.bgImage}
          priority
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        {/* Newsletter Section */}
        <motion.div
          className={styles.newsletterSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterHeading}>
              Keep up to date with <span className={styles.brandName}>Brainstorm Group</span> news
            </h2>
            <form className={styles.newsletterForm}>
              <div className={styles.formFields}>
                <input
                  type="text"
                  placeholder="First name"
                  className={styles.formInput}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className={styles.formInput}
                />
                <input
                  type="email"
                  placeholder="Email address *"
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formFooter}>
                <p className={styles.disclaimer}>
                  Subscribe me to the Brainstorm Group newsletter for articles, events, and offers. I can unsubscribe at any time.
                </p>
                <button type="submit" className={styles.signUpButton}>
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Content Blocks */}
        <div className={styles.contentBlocks}>
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className={styles.contentBlock}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.blockTitle}>{section.title}</h3>
              <ul className={styles.blockLinks}>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={styles.blockLink}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer */}
        <motion.div
          className={styles.bottomFooter}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.bottomContent}>
            <div className={styles.brandName}>
              <Link href="/" className={styles.brandLink}>
                Brainstorm Group
              </Link>
            </div>
            <p className={styles.copyright}>
              ©{new Date().getFullYear()} Brainstorm Group. All rights reserved.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
