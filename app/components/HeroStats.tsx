"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

function Counter({ from, to }: { from: number; to: number }) {
    const count = useSpring(from, { stiffness: 50, damping: 20 });

    useEffect(() => {
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
            style={{ cursor: "pointer", position: 'relative', overflow: 'hidden' }}
        >
            <motion.div
                style={{ width: "100%", height: "100%", position: "relative" }}
                animate={{ opacity: 1 }}
            >
                {!isHovered ? (
                    // Front Content
                    <div className={styles.statsContainer}>
                        <div className={styles.statsText}>
                            <div className={styles.statNumber}>20,000+</div>
                            <div className={styles.statLabel}>
                                Students Impacted<br />
                                Across Tutorials, Mentorship & Competitions
                            </div>
                        </div>
                        {/* Image handled by CSS/Layout */}
                        <div className={styles.graduatesImage}>
                            <img src="/hero-featured.jpg" alt="Graduates" />
                        </div>
                    </div>
                ) : (
                    // Back Content (2x2 Grid)
                    <div className={styles.backStats}>
                        <div className={styles.statGridItem}>
                            <div className={styles.statGridNumber}><Counter from={0} to={12} />+</div>
                            <div className={styles.statGridLabel}>Tutorials</div>
                        </div>
                        <div className={styles.statGridItem}>
                            <div className={styles.statGridNumber}><Counter from={0} to={6} />+</div>
                            <div className={styles.statGridLabel}>Departments</div>
                        </div>
                        <div className={styles.statGridItem}>
                            <div className={styles.statGridNumber}><Counter from={100} to={500} /></div>
                            <div className={styles.statGridLabel}>Level</div>
                        </div>
                        <div className={styles.statGridItem}>
                            <div className={styles.statGridNumber}><Counter from={0} to={15} />+</div>
                            <div className={styles.statGridLabel}>Awards</div>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
