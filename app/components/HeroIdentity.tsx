"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Hero.module.css";

export default function HeroIdentity() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleInteraction = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={styles.cellBottomBigText}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={handleInteraction}
            style={{ perspective: "1000px", cursor: "pointer" }}
        >
            <motion.div
                className={styles.brandContainer}
                initial={false}
                animate={{ rotateX: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d", position: "relative", width: "100%", height: "100%" }}
            >
                {/* Front */}
                <div style={{ backfaceVisibility: "hidden", position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div className={styles.largeLogo}>Brainstorm Group</div>
                    <div className={styles.brandSubline}>Raising the bar in academic excellence</div>
                </div>

                {/* Back */}
                <div
                    style={{
                        backfaceVisibility: "hidden",
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "#111",
                        transform: "rotateX(180deg)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2rem"
                    }}
                >
                    <h3 style={{ color: "white", fontSize: "1.5rem", marginBottom: "0.5rem" }}>Founded by Students.</h3>
                    <p style={{ color: "#888", textAlign: "center" }}>Built for impact. Driven by excellence.</p>
                </div>
            </motion.div>
        </div>
    );
}
