"use client";

import { motion, useSpring, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

function Counter({ from, to }: { from: number; to: number }) {
    const count = useSpring(from, { stiffness: 50, damping: 20 });

    useEffect(() => {
        // Only animate when visible/hovered logic is handled above, but here we just reset? 
        // Actually easier to just trigger it on mount of this sub-view.
        count.set(to);
    }, [count, to]);

    const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

    return <motion.span>{rounded}</motion.span>;
}

export default function HeroStats() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.cellBottomRight}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
            style={{ cursor: "pointer", position: 'relative', overflow: 'hidden' }}
        >
            {/* Background Grid Reveal */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                        zIndex: 0
                    }}
                />
            )}

            <div className={styles.statsContainer} style={{ position: "relative", zIndex: 1 }}>
                <div className={styles.statsText}>
                    <div className={styles.statNumber}>
                        {isHovered ? <Counter from={0} to={20000} /> : "20,000"}+
                    </div>
                    <div className={styles.statLabel}>
                        {isHovered ? (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                Across Tutorials<br />Departments & Levels
                            </motion.div>
                        ) : (
                            <>Students Impacted<br />Across Tutorials, Mentorship & Competitions</>
                        )}
                    </div>
                </div>
                <div className={styles.graduatesImage}>
                    <img src="/hero-featured.jpg" alt="Graduates" />
                </div>
            </div>
        </div>
    );
}
