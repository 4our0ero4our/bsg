"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Hero.module.css";
import HeroCTA from "./HeroCTA";

export default function HeroMission() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={styles.cellMiddleLeft}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: "1000px", cursor: "pointer", height: "100%" }}
        >
            <motion.div
                style={{ transformStyle: "preserve-3d", width: "100%", height: "100%", position: "relative" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Front */}
                <div style={{ backfaceVisibility: "hidden", position: "absolute", inset: 0, display: 'flex', flexDirection: 'column', padding: 'inherit', justifyContent: 'space-between' }}>
                    <div className={styles.textVStack}>
                        <div className={styles.headlineSmall}>Who We Are</div>
                        <div className={styles.textBlockMain}>
                            We empower students through structured tutorials, mentorship, and academic programs.
                        </div>
                        <div className={styles.textBlockSub}>
                            Turning learning into impact since 2018.
                        </div>
                    </div>
                    <HeroCTA />
                </div>

                {/* Back */}
                <div
                    style={{
                        backfaceVisibility: "hidden",
                        position: "absolute",
                        inset: 0,
                        transform: "rotateY(180deg)",
                        backgroundColor: "#000",
                        padding: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        border: "1px solid #333"
                    }}
                >
                    <ul style={{ listStyle: "none", color: "white", display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span style={{ color: "#ff5722" }}>•</span> Peer-led tutorials
                        </li>
                        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span style={{ color: "#ff5722" }}>•</span> Faculty-backed structure
                        </li>
                        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <span style={{ color: "#ff5722" }}>•</span> Campus-based programs
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}
