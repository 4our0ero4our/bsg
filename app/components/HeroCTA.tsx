"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Hero.module.css";

export default function HeroCTA() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className={`${styles.startButton} ${styles.mobileHiddenCTA}`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            animate={{
                width: isExpanded ? "100%" : "fit-content",
                backgroundColor: isExpanded ? "var(--color-accent)" : "#ffffff",
                color: isExpanded ? "#ffffff" : "#000000",
                borderRadius: isExpanded ? "8px" : "2px" // Slight radius on expand
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden", position: "relative", zIndex: 20 }}
        >
            <motion.div animate={{ opacity: isExpanded ? 0 : 1 }} style={{ position: isExpanded ? "absolute" : "relative", whiteSpace: "nowrap" }}>
                Explore Our Programs &rarr;
            </motion.div>

            {isExpanded && (
                <motion.div
                    className={styles.backCTAContainer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div style={{ fontWeight: "700", marginBottom: "0.25rem", fontSize: "0.95rem" }}>What you can explore</div>
                    <div className={styles.backCTAPill}>Academic Tutorials</div>
                    <div className={styles.backCTAPill}>Competitions</div>
                    <div className={styles.backCTAPill}>Mentorship</div>
                </motion.div>
            )}
        </motion.div>
    );
}
