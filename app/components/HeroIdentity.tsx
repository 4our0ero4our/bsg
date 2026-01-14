"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Hero.module.css";

export default function HeroIdentity() {
    const [isActive, setIsActive] = useState(false);

    // Mobile Tap Logic: 1st tap reveals, 2nd tap interacts (if needed, otherwise just toggle)
    const handleInteraction = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={styles.cellBottomBigText}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            onClick={handleInteraction}
            style={{ cursor: "pointer", position: "relative", overflow: "hidden" }}
        >
            <motion.div
                className={styles.brandContainer}
                animate={{
                    rotateX: isActive ? 15 : 0, // Subtle 3D Tilt instead of Flip
                    rotateY: isActive ? 5 : 0,  // Subtle 3D Tilt
                    scale: isActive ? 0.98 : 1
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                }}
            >
                {/* Front Content (Standard) */}
                <motion.div
                    animate={{ opacity: isActive ? 0 : 1, y: isActive ? -20 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <div className={styles.largeLogo}>Brainstorm Group</div>
                    <div className={styles.brandSubline}>Raising the bar in academic excellence</div>
                </motion.div>

                {/* Back Content (Refined Charcoal Card) */}
                <motion.div
                    className={styles.backIdentity}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className={styles.backIdentityDivider}></div>
                    <motion.div
                        className={styles.backIdentityText}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                        transition={{ delay: 0.2 }}
                    >
                        Founded by students.<br />
                        Built for impact.<br />
                        Driven by excellence.
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
