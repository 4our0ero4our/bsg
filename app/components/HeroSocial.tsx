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
            onClick={() => setIsHovered(!isHovered)}
            style={{ cursor: "pointer" }}
        >
            <div className={styles.socialProofText}>
                {!isHovered ? (
                    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <li>
                            Appointed Special Adviser on Education<br />
                            <span className={styles.highlightText}>Student Union Government</span>
                        </li>
                    </motion.ul>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ fontStyle: "italic", fontSize: "1.1rem" }}
                    >
                        "BSG helped me finally understand circuit analysis."
                        <br />
                        <span style={{ fontSize: "0.8rem", color: "#666", fontStyle: "normal" }}>- 300L Student</span>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
