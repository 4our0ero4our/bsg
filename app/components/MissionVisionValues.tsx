"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Target, Users } from "lucide-react";
import styles from "./MissionVisionValues.module.css";

const slides = [
    {
        id: "vision",
        title: "Our Vision",
        text: "Our vision is to become a top design agency, empowering brands across all industries by crafting unique, impactful visuals that build lasting identities and drive success, no matter their field.",
        icon: Lightbulb,
        gradientClass: styles.gradientVision,
    },
    {
        id: "mission",
        title: "Our Mission",
        text: "We empower students through structured tutorials, mentorship, and academic programs. Turning learning into impact since 2018.",
        icon: Target,
        gradientClass: styles.gradientMission,
    },
    {
        id: "values",
        title: "Core Values",
        text: "Excellence, Mentorship, Community, Innovation. We believe in fostering a supportive environment where everyone can thrive.",
        icon: Users,
        gradientClass: styles.gradientValues,
    },
];

export default function MissionVisionValues() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const currentSlide = slides[currentIndex];

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Left Side: Content */}
                <div className={styles.contentSide}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Selection Box Header */}
                            <div className={styles.selectionBox}>
                                {/* Handles */}
                                <div className={`${styles.handle} ${styles.tl}`}></div>
                                <div className={`${styles.handle} ${styles.tr}`}></div>
                                <div className={`${styles.handle} ${styles.bl}`}></div>
                                <div className={`${styles.handle} ${styles.br}`}></div>

                                {/* Middle Handles */}
                                <div className={`${styles.handle} ${styles.tm}`}></div>
                                <div className={`${styles.handle} ${styles.bm}`}></div>
                                <div className={`${styles.handle} ${styles.ml}`}></div>
                                <div className={`${styles.handle} ${styles.mr}`}></div>

                                {/* Main Text / Border */}
                                <h2 className={styles.header}>
                                    {currentSlide.title}
                                </h2>

                                {/* Yellow Stroke/Underline decoration for Vision */}
                                {currentSlide.id === 'vision' && (
                                    <div className={styles.underlineDecoration}></div>
                                )}
                            </div>

                            <p className={styles.bodyText}>
                                {currentSlide.text}
                            </p>

                            {/* Bottom Info */}
                            <div className={styles.bottomRow}>
                                <div className={styles.metaInfo}>
                                    <div>VIRGO STUDIOS</div>
                                    <div>2024</div>
                                </div>

                                <button
                                    onClick={nextSlide}
                                    className={styles.swipeButton}
                                >
                                    SWIPE <span className={styles.arrowText}>{'>>>'}</span>
                                </button>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Side: Visual/Icon */}
                <div className={styles.visualSide}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide.id + "-icon"}
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={styles.iconWrapper}
                        >
                            {/* Gradient Glow */}
                            <div className={`${styles.glow} ${currentSlide.gradientClass}`}></div>

                            {/* ICon */}
                            <currentSlide.icon size={300} strokeWidth={0.5} className={styles.icon} />

                            {/* Floating elements for decor */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className={styles.sparkle}
                            >
                                <span>✨</span>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
