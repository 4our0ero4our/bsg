"use client";

import { motion } from "framer-motion";
import { Users, Heart, Target } from "lucide-react";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
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
            <Users size={16} />
            <span>About Us</span>
          </motion.div>
          
          <h1 className={styles.title}>
            <span className={styles.titleLine1}>WHO WE</span>
            <span className={styles.titleLine2}>ARE</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.descriptionWrapper}
          >
            <p className={styles.description}>
              Brainstorm Group (BSG) is a student-led academic and mentorship organization 
              founded to bridge the gap between classroom learning and academic excellence. 
              Through innovative programs, dedicated mentorship, and a commitment to student 
              success, we empower learners to reach their full potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={styles.stats}
          >
            <div className={styles.statItem}>
              <Users size={20} className={styles.statIcon} />
              <div className={styles.statContent}>
                <div className={styles.statValue}>2018</div>
                <div className={styles.statLabel}>Founded</div>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <Heart size={20} className={styles.statIcon} />
              <div className={styles.statContent}>
                <div className={styles.statValue}>500+</div>
                <div className={styles.statLabel}>Students Impacted</div>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <Target size={20} className={styles.statIcon} />
              <div className={styles.statContent}>
                <div className={styles.statValue}>5</div>
                <div className={styles.statLabel}>Core Programs</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
