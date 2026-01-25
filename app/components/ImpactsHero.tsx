"use client";

import { motion } from "framer-motion";
import styles from "./ImpactsHero.module.css";

export default function ImpactsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.content}
        >
          <h1 className={styles.title}>IMPACTS & ACHIEVEMENTS</h1>
          <p className={styles.description}>
            Celebrating our journey of excellence, recognition, and meaningful impact 
            in student development and academic advancement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
