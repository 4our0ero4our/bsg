"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Star } from "lucide-react";
import styles from "./ImpactsHero.module.css";

export default function ImpactsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundEffects}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
        <div className={styles.glow3}></div>
      </div>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={styles.content}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.badge}
          >
            <Award size={16} />
            <span>Our Journey</span>
          </motion.div>
          
          <h1 className={styles.title}>
            <span className={styles.titleLine1}>IMPACTS &</span>
            <span className={styles.titleLine2}>ACHIEVEMENTS</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.descriptionWrapper}
          >
            <p className={styles.description}>
              Celebrating our journey of excellence, recognition, and meaningful impact 
              in student development and academic advancement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={styles.stats}
          >
            <div className={styles.statItem}>
              <TrendingUp size={20} className={styles.statIcon} />
              <div className={styles.statContent}>
                <div className={styles.statValue}>500+</div>
                <div className={styles.statLabel}>Students Impacted</div>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <Star size={20} className={styles.statIcon} />
              <div className={styles.statContent}>
                <div className={styles.statValue}>15+</div>
                <div className={styles.statLabel}>Awards & Recognition</div>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <Award size={20} className={styles.statIcon} />
              <div className={styles.statContent}>
                <div className={styles.statValue}>88%</div>
                <div className={styles.statLabel}>Success Rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
