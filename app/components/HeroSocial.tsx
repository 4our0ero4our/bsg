"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";

const partners = [
    { name: "FUT Minna", src: "/Federal University of Techonogy Minna Logo.jpg" },
    { name: "SDSN Youth", src: "/MISSTYB's Foundation Logo.png" },
    { name: "Oyins Foundation", src: "/Oyins Educational Foundation Logo.jpg" },
    { name: "SPE", src: "/SPE International FUTMInna branch Logo.jpg" },
    { name: "TedX", src: "/TedX Futminna logo.jpg" },
];

export default function HeroSocial() {
    // Duplicate logos to create a full grid effect (approx 12-16 items)
    const filledPartners = [...partners, ...partners, ...partners].slice(0, 12);

    return (
        <div className={styles.cellMiddleRight}>
            <div className={styles.socialFlipContainer}>
                <div className={styles.socialFlipInner}>
                    {/* Front Face */}
                    <div className={styles.socialFlipFront}>
                        <div className={styles.partnerGrid}>
                            {filledPartners.map((partner, index) => (
                                <motion.div
                                    key={`front-${partner.name}-${index}`}
                                    className={styles.partnerCard}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <Image
                                        src={partner.src}
                                        alt={partner.name}
                                        width={64}
                                        height={64}
                                        className={styles.partnerLogo}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Back Face */}
                    <div className={styles.socialFlipBack}>
                        <div className={styles.partnerGrid}>
                            {filledPartners.map((partner, index) => (
                                <div
                                    key={`back-${partner.name}-${index}`}
                                    className={styles.partnerCard}
                                    style={{ backgroundColor: "#f8f8f8" }} // Slight tint for back
                                >
                                    <Image
                                        src={partner.src}
                                        alt={partner.name}
                                        width={64}
                                        height={64}
                                        className={styles.partnerLogo}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
