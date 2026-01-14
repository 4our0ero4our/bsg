"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Hero.module.css";

export default function HeroSocial() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.cellMiddleRight}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: "pointer", position: "relative", overflow: "hidden" }}
        >
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
                {/* Front */}
                <motion.div
                    animate={{ x: isHovered ? "-100%" : "0%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`${styles.socialProofText} ${styles.cardFaceFront}`}
                    style={{ display: "flex", alignItems: "center", padding: "2rem" }}
                >
                    <div>
                        Appointed Special Adviser on Education<br />
                        <span className={styles.highlightText}>Student Union Government</span>
                    </div>
                </motion.div>

                {/* Back (Vignette Quote) */}
                <motion.div
                    className={styles.backSocial}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ transform: "rotateY(0deg)" }} // Force face-forward for Fade effect
                >
                    <div className={styles.socialQuote}>
                        "BSG helped me finally understand circuit analysis."
                    </div>
                    <div className={styles.socialAuthor}>
                        &mdash; 300L Electrical Engineering Student
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
