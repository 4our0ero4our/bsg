"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about#story" },
      { name: "Mission & Vision", href: "/about#mission" },
      { name: "Leadership & Governance", href: "/about#leadership" },
    ],
  },
  {
    name: "Programs",
    href: "/programs",
    dropdown: [
      { name: "Tutorials & Crash Courses", href: "/programs#bsgprograms" },
      { name: "Academic Competitions", href: "/programs#bsgprograms" },
      { name: "Mentorship (Scholar's Voice)", href: "/programs#bsgprograms" },
      { name: "Freshers Orientation", href: "/programs#bsgprograms" },
      { name: "Community Outreach", href: "/programs#bsgprograms" },
    ],
  },
  {
    name: "Impact",
    href: "/impact",
    dropdown: [
      { name: "Achievements & Awards", href: "/impact#recognitions" },
      { name: "Impact Numbers", href: "/impact#reports" },
      { name: "Recognition & Appointments", href: "/impact#recognitions" },
      { name: "Reports & Highlights", href: "/impact#media" },
    ],
  },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  {
    name: "Media",
    href: "/media",
    dropdown: [
      { name: "Gallery", href: "/media/gallery" },
      { name: "Blog / Updates", href: "/media/blog" },
      { name: "Testimonials", href: "/media/testimonials" },
      { name: "Press & Mentions", href: "/media/press" },
    ],
  },
  {
    name: "Get Involved",
    href: "/get-involved",
    dropdown: [
      { name: "Volunteer", href: "/get-involved/volunteer" },
      { name: "Partner", href: "/get-involved/partner" },
      { name: "Sponsor", href: "/get-involved/sponsor" },
    ],
  },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`${styles.navbar} ${hidden ? styles.hidden : ""}`}
      >
        <div className={styles.container}>
          {/* Desktop Nav - Left side */}
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <div
                key={item.name}
                className={styles.navItem}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className={styles.navLink}
                  aria-haspopup={item.dropdown ? "menu" : undefined}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      style={{
                        display: "inline-block",
                        marginLeft: "6px",
                        marginBottom: "-1px",
                        transform: hoveredItem === item.name ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        opacity: 0.8
                      }}
                    />
                  )}
                </Link>
                <AnimatePresence>
                  {item.dropdown && hoveredItem === item.name && (
                    <motion.div
                      className={styles.megaMenu}
                      initial={{ opacity: 0, y: 15, scale: 0.95, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                      exit={{ opacity: 0, y: 8, scale: 0.98, x: "-50%" }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div className={styles.megaMenuTitle}>{item.name}</div>
                      <div className={styles.megaMenuList}>
                        {item.dropdown.map((child, i) => (
                          <motion.div
                            key={child.name}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.03 + 0.05 }}
                          >
                            <Link
                              href={child.href}
                              className={styles.megaMenuLink}
                            >
                              {child.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Right side */}
          <div className={styles.ctaBtnContainer}>
            <Link href="/programs" className={styles.ctaBtn}>
              Explore Our Programs
            </Link>
            <Link href="/contact" className={styles.ctaBtn}>
              Partner With Us
            </Link>
          </div>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.mobileOverlay}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 }
                },
                exit: { opacity: 0 }
              }}
              className={styles.mobileDrawer}
            >
              <div className={styles.mobileContent}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                    }}
                    style={{ width: "100%" }}
                  >
                    <div className={styles.mobileSection}>
                      {item.dropdown ? (
                        <>
                          <div
                            className={styles.mobileItemHeader}
                            onClick={() => setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name)}
                            style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              size={20}
                              style={{
                                transform: expandedMobileItem === item.name ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.3s ease"
                              }}
                            />
                          </div>
                          <AnimatePresence>
                            {expandedMobileItem === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{ overflow: "hidden" }}
                              >
                                <div className={styles.mobileSubmenu}>
                                  {item.dropdown.map((child) => (
                                    <Link
                                      key={child.name}
                                      href={child.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className={styles.mobileSubmenuLink}
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={styles.mobileItemHeader}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
                <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <Link href="/programs" className={styles.mobileCtaBtn} onClick={() => setMobileMenuOpen(false)}>
                    Explore Our Programs
                  </Link>
                  <Link href="/contact" className={styles.mobileCtaBtn} onClick={() => setMobileMenuOpen(false)}>
                    Partner With Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}