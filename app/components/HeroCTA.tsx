"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Hero.module.css";

export default function HeroCTA() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className={styles.startButton}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
            animate={{
                width: isExpanded ? "100%" : "fit-content",
                backgroundColor: isExpanded ? "#ff5722" : "#ffffff",
                color: isExpanded ? "#ffffff" : "#000000"
            }}
            style={{ overflow: "hidden", position: "relative", zIndex: 20 }}
        >
            <motion.div animate={{ opacity: isExpanded ? 0 : 1 }} style={{ position: isExpanded ? "absolute" : "relative" }}>
                Explore Our Programs
            </motion.div>

            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start", width: "100%" }}
                >
                    <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Explore:</div>
                    <div className="hover:underline cursor-pointer">Academic Tutorials &rarr;</div>
                    <div className="hover:underline cursor-pointer">Competitions &rarr;</div>
                    <div className="hover:underline cursor-pointer">Mentorship &rarr;</div>
                </motion.div>
            )}
        </motion.div>
    );
}
