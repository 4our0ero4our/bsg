"use client";

import { motion } from "framer-motion";
import styles from "./ProgramsHero.module.css";

export default function ProgramsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.content}
        >
          <h1 className={styles.title}>WHAT WE DO</h1>
          <p className={styles.description}>
            Empowering students through innovative programs designed to bridge the gap between 
            classroom learning and academic excellence. Each program is crafted to provide 
            comprehensive support, mentorship, and opportunities for growth.
          </p>
          <div className={styles.ctaButtons}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.primaryButton}
            >
              EXPLORE PROGRAMS
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.secondaryButton}
            >
              VIEW MORE
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
