"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const } // "Luxurious" ease
  },
};

const mobileImages = [
  "/hero-featured.jpg",
  "/hero-mobile-2.jpg",
  "/hero-mobile-3.jpg",
  "/hero-mobile-4.jpg",
  "/hero-mobile-5.jpg",
];

const MOBILE_SLIDE_INTERVAL_MS = 8000;

export default function Hero() {
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % mobileImages.length);
    }, MOBILE_SLIDE_INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

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
            
            Let's re-read HeroMission.tsx... it renders the wrapping div .cellMiddleLeft.
            This makes it hard to add the button unless the button is inside HeroMission.
            
            Refactoring strategy: 
            The layout is Grid -> Cell. 
            If the component is the Cell, it controls everything inside.
            
            Wait, HeroMission currently renders the whole .cellMiddleLeft.
            And HeroCTA renders .startButton.
            
            I should update HeroMission to include HeroCTA inside it?
            OR, I should make HeroMission accept children?
            OR, I should remove the wrapper from HeroMission and let HeroMain handle the wrapper?
            
            Let's keep it simple: Pass HeroCTA as a child or import it inside HeroMission?
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
              key={mobileImages[mobileIndex]}
              className={styles.mobileHeroImageWrapper}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <Image
                src={mobileImages[mobileIndex]}
                alt="Students learning in a lecture hall"
                fill
                priority={mobileIndex === 0}
                sizes="100vw"
                className={styles.mobileHeroImage}
              />
            </motion.div>
          </AnimatePresence>
          <div className={styles.mobileHeroOverlay} />
        </div>

        <div className={styles.mobileHeroContent}>
          <p className={styles.mobileEyebrow}>Brainstorm Group</p>
          <h1 className={styles.mobileHeadline}>
            Raising the bar in academic excellence
          </h1>
          <p className={styles.mobileBody}>
            We connect FUT Minna students with tutorials, mentorship, and
            focused learning communities so no one studies alone.
          </p>
        </div>
      </div>
    </section>
  );
}