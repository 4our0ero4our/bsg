"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Hero.module.css";

export default function HeroImage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.cellTopRight}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
            style={{ cursor: "pointer", overflow: "hidden", position: "relative" }}
        >
            <div className={styles.studentImageContainer} style={{ height: "100%", width: "100%", position: "relative" }}>
                <motion.img
                    src="/hero-featured.jpg"
                    alt="Student"
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {/* Dark Overlay Reveal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.6)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        padding: "2rem",
                        textAlign: "center"
                    }}
                >
                    <motion.div animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }} transition={{ delay: 0.1 }}>
                        <h3 style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>Learning happens best when students teach students.</h3>
                        <div style={{ marginTop: "1rem", color: "#ff5722", fontWeight: 600 }}>See how we run sessions &rarr;</div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
