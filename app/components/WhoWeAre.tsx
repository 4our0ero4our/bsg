"use client";

import { motion } from "framer-motion";
import styles from "./WhoWeAre.module.css";

interface WhoWeAreProps {
  title?: string;
  content?: string;
}

export default function WhoWeAre({ 
  title = "Who We Are",
  content = "Brainstorm Group (BSG) is a student-led academic and mentorship organization founded to bridge the gap between classroom learning and academic excellence. Through innovative programs, dedicated mentorship, and a commitment to student success, we empower learners to reach their full potential and make meaningful contributions to their communities."
}: WhoWeAreProps) {
  return (
    <section className={styles.whoWeAreSection}>
      <div className={styles.container}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.content}
        >
          {content}
        </motion.p>
      </div>
    </section>
  );
}
