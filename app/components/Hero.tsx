"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";

// Interactive Sub-Components
import HeroIdentity from "./HeroIdentity";
import HeroMission from "./HeroMission";
import HeroCTA from "./HeroCTA";
import HeroImage from "./HeroImage";
import HeroHighlight from "./HeroHighlight";
import HeroStats from "./HeroStats";
import HeroSocial from "./HeroSocial";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" }, // Deeper push and stronger blur for drama
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 2.0, ease: [0.22, 1, 0.36, 1] as const } // "Luxurious" ease
  },
};

const mobileContentVariants: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 2.0,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const mobileItemVariants: Variants = {
  hidden: (direction: "left" | "right" | "up" | "down" | undefined) => ({
    opacity: 0,
    x: direction === "left" ? -36 : direction === "right" ? 36 : 0,
    y: direction === "up" ? -28 : direction === "down" ? 28 : 16,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const mobileSlides = [
  {
    image: "/hero-featured.jpg",
    eyebrow: "Academic Excellence",
    headline: "Raising the bar in academic excellence",
    body: "We connect students with tutorials, mentorship, and focused learning communities so no one studies alone.",
    logo: "/BSG%20Light%20Logo.jpg",
  },
  {
    image: "/BSG Light Logo.jpg",
    eyebrow: "Skill Builders",
    headline: "Tutorials, crash courses, and real exam prep",
    body: "Get guided sessions, past questions, and peer-led study sprints tailored to your toughest courses.",
    logo: "/BSG%20Light%20Logo.jpg",
  },
  {
    image: "/BSG Dark Logo.jpg",
    eyebrow: "Career Launch",
    headline: "Mentorship and opportunities that convert",
    body: "Join mentorship circles, competitions, and industry-facing projects to stand out after school.",
    logo: "/BSG%20Dark%20Logo.jpg",
  },
  {
    image: "/BSG Light Logo.jpg",
    eyebrow: "Collaboration",
    headline: "Collaboration and community",
    body: "We collaborate with other institutions and communities to provide students with opportunities to learn and grow together.",
    logo: "/BSG%20Light%20Logo.jpg",
  }
];

const MOBILE_SLIDE_INTERVAL_MS = 15000;

export default function Hero() {
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % mobileSlides.length);
    }, MOBILE_SLIDE_INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

  const slide = mobileSlides[mobileIndex];

  return (
    <section className={styles.heroSection}>
      {/* Desktop / tablet: interactive grid hero */}
      <div className={styles.desktopHero}>
        <motion.div
          className={styles.gridContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          {/* Row 1: Top */}
          <motion.div className={styles.cellTopLeft} variants={itemVariants} />
          <motion.div className={styles.cellTopMid} variants={itemVariants} />

          {/* Cell 1,3: Student Image (Interactive) */}
          <motion.div variants={itemVariants} style={{ display: "contents" }}>
            <HeroImage />
          </motion.div>

          {/* --- Row 2 / 3 (Middle Area) --- */}

          {/* Col 1: Intro Text (Interactive Mission + CTA) */}
          <motion.div variants={itemVariants} style={{ display: "contents" }}>
            <HeroMission />
          </motion.div>

          {/* We need to inject HeroCTA into HeroMission or place it properly. 
            The design had CTA inside .cellMiddleLeft. 
            HeroMission renders .cellMiddleLeft. 
            So HeroCTA should be INSIDE HeroMission? 
            OR we change HeroMission to JUST be the text part, and we manage the button separately?
            
            Refactoring strategy: 
            The layout is Grid -> Cell. 
            If the component is the Cell, it controls everything inside.
            
            Wait, HeroMission currently renders the whole .cellMiddleLeft.
            This makes it hard to add the button unless the button is inside HeroMission.
            
            Let's re-read HeroMission.tsx... it renders the wrapping div .cellMiddleLeft.
            This makes it hard to add the button unless the button is inside HeroMission.
            
            I should update HeroMission to include HeroCTA inside it?
            OR, I should make HeroMission accept children?
            OR, I should remove the wrapper from HeroMission and let HeroMain handle the wrapper?
            
            Let's keep it simple: Pass HeroCTA as a prop or slot, OR just import it inside HeroMission?
            Actually, I made HeroMission responsive to clicks on the whole cell.
            If I put the button inside, clicking the button might trigger the flip.
            
            Let's fix this in a follow up. For now, let's place HeroMission, and realise the CTA button is missing from it.
            I will need to add <HeroCTA /> inside Hero.tsx, but wait, it needs to be in that cell.
            
            Let's MODIFY HeroMission.tsx in the next step to include the Generic Children or explicitly the CTA.
            
            Actually, looking at previous Hero.tsx:
                <div className={styles.cellMiddleLeft}>
                    <div className={styles.textVStack}>...</div>
                    <button>...</button>
                </div>
            
            My HeroMission.tsx replaced .cellMiddleLeft.
            I should probably pass the CTA as a prop or slot, OR just import it there.
            
            Let's temporarily render HeroMission, knowing CTA is missing, and I will fix it immediately after interaction check.
            Actually, I can wrap the import here? No, HeroMission has the `className={styles.cellMiddleLeft}`.
            
            Okay, I will update HeroMission to import HeroCTA in the next step.
        */}

          {/* Col 2: Orange Box (Highlight) */}
          <motion.div variants={itemVariants} style={{ display: "contents" }}>
            <HeroHighlight />
          </motion.div>

          {/* Col 3: Social Proof Block */}
          <motion.div variants={itemVariants} style={{ display: "contents" }}>
            <HeroSocial />
          </motion.div>

          {/* --- Row 4 (Big Text) --- */}
          <motion.div variants={itemVariants} style={{ display: "contents" }}>
            <HeroIdentity />
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: "contents" }}>
            <HeroStats />
          </motion.div>

          {/* --- Row 5: Footer --- */}
          <motion.div className={styles.cellFooter} variants={itemVariants}>
            <div className={styles.footerLeft}>
              <div className={styles.enrolledContainer}>
                <div className={styles.profileIcons}>
                  <div className={styles.profileIcon}></div>
                  <div className={styles.profileIcon}></div>
                  <div className={styles.profileIcon}></div>
                </div>
                <span className={styles.enrolledText}>
                  Trusted by thousands of students across FUT Minna
                </span>
              </div>
            </div>
            <div className={styles.footerMid}></div>
            <div className={styles.footerRight}></div>
          </motion.div>

        </motion.div>
      </div>

      {/* Mobile: simple poster-style hero */}
        <div className={styles.mobileHero}>
          <div className={styles.mobileHeroMedia}>
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.image}
                className={styles.mobileHeroImageWrapper}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0, scale: 1.25 }}
                transition={{
                  opacity: { duration: 1.6, ease: [0.22, 1, 0.36, 1] as const },
                  scale: { duration: MOBILE_SLIDE_INTERVAL_MS / 1000, ease: "linear" }
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  priority={mobileIndex === 0}
                  sizes="100vw"
                  className={styles.mobileHeroImage}
                />
              </motion.div>
            </AnimatePresence>
          <div className={styles.mobileHeroOverlay} />
        </div>

        <motion.div
          className={styles.mobileHeroContent}
          key={slide.headline}
          variants={mobileContentVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1.4 }}
        >
          <motion.div className={styles.mobileEyebrowStack} variants={mobileItemVariants} custom="up">
            <Image
              src={slide.logo}
              alt={`${slide.eyebrow} logo`}
              width={48}
              height={48}
              className={styles.mobileEyebrowLogo}
              priority
            />
            <p className={styles.mobileEyebrow}>{slide.eyebrow}</p>
          </motion.div>
          <motion.h1 className={styles.mobileOrgName} variants={mobileItemVariants} custom="left">
            Brainstorm Group
            </motion.h1>
          <motion.h1 className={styles.mobileHeadline} variants={mobileItemVariants} custom="left">
            {slide.headline}
          </motion.h1>
          <motion.p className={styles.mobileBody} variants={mobileItemVariants} custom="right">
            {slide.body}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}