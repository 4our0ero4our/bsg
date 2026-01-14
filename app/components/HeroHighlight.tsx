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
                animate={{ rotateY: isHovered ? 10 : 0, scale: isHovered ? 0.98 : 1 }}
                style={{ transformStyle: "preserve-3d", transition: "all 0.5s ease" }}
            >
                {!isHovered ? (
                    // Front
                    <>
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
                    </>
                ) : (
                    // Back (Reveal)
                    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div className={styles.orangeHelpers} style={{ fontSize: "1.5rem" }}>
                            From Classrooms. <br />
                            To Competitions. <br />
                            To Real-world solutions.
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
