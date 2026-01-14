"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";
import styles from "./Hero.module.css";

export default function HeroHighlight() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.cellMiddleMid}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
            style={{ cursor: "pointer", perspective: "1000px" }}
        >
            <motion.div
                className={styles.orangeBox}
                animate={{
                    rotateY: isHovered ? 180 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d", width: "100%", height: "100%", position: "relative" }}
            >
                {/* Front */}
                <div style={{ backfaceVisibility: "hidden", position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "inherit" }}>
                    <div className={styles.logoContainer}>
                        <div className={styles.playIcon}>
                            <Play size={20} fill="white" color="white" />
                        </div>
                        <span className={styles.logoText}>BSG</span>
                    </div>
                    <div className={styles.orangeTextContent}>
                        <div className={styles.orangeHelpers}>
                            Building Academic<br />Excellence at Scale
                        </div>
                        <div className={styles.orangeSubtext}>
                            Peer-driven. Impact-focused. Student-led.
                        </div>
                    </div>
                </div>

                {/* Back (Steps) */}
                <div className={styles.backHighlight} style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
                    <motion.div
                        className={styles.highlightStep}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
                        transition={{ delay: 0.2 }}
                    >
                        From classrooms
                    </motion.div>
                    <motion.div
                        className={styles.highlightArrow}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        &darr;
                    </motion.div>
                    <motion.div
                        className={styles.highlightStep}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
                        transition={{ delay: 0.4 }}
                    >
                        To competitions
                    </motion.div>
                    <motion.div
                        className={styles.highlightArrow}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        &darr;
                    </motion.div>
                    <motion.div
                        className={styles.highlightStep}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
                        transition={{ delay: 0.6 }}
                    >
                        To real-world solutions
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
