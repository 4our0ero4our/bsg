"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Users, Trophy } from "lucide-react";
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
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {/* Front */}
                <div style={{ backfaceVisibility: "hidden", position: "absolute", inset: 0, display: 'flex', flexDirection: 'column', padding: 'inherit', justifyContent: 'space-between' }}>
                    <div className={styles.textVStack}>
                        <div className={styles.headlineSmall}>Who We Are</div>
                        <div className={styles.textBlockMain}>
                            We empower students through structured tutorials, mentorship, and academic programs.
                        </div>
                    </div>
                    <HeroCTA />
                </div>

                {/* Back (Refined) */}
                <div className={styles.backMission}>
                    <ul className={styles.missionList}>
                        <motion.li
                            className={styles.missionItem}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -20 }}
                            transition={{ delay: 0.1 }}
                        >
                            <BookOpen size={20} color="#ff5722" strokeWidth={1.5} />
                            Peer-led tutorials
                        </motion.li>
                        <motion.li
                            className={styles.missionItem}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -20 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Users size={20} color="#ff5722" strokeWidth={1.5} />
                            Faculty-backed structure
                        </motion.li>
                        <motion.li
                            className={styles.missionItem}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -20 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Trophy size={20} color="#ff5722" strokeWidth={1.5} />
                            Campus-based programs
                        </motion.li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}
