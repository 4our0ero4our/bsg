"use client";

import { motion } from "framer-motion";
import styles from "./LeadershipGovernance.module.css";

interface GovernanceItem {
  title: string;
  content: string;
  number: string;
}

const governanceItems: GovernanceItem[] = [
  {
    title: "Advisory roles",
    content: "Our advisory board consists of experienced educators, industry professionals, and alumni who provide strategic guidance and mentorship. They help shape our programs, ensure quality standards, and connect us with valuable resources and opportunities that enhance our impact on student success.",
    number: "01",
  },
  {
    title: "Student-led structure",
    content: "At the heart of BSG is our student-led governance model. Current students hold leadership positions, make key decisions, and drive our initiatives forward. This structure empowers students to take ownership, develop leadership skills, and create programs that truly resonate with their peers' needs and aspirations.",
    number: "02",
  },
  {
    title: "Continuity beyond founders",
    content: "We've built a sustainable framework that ensures BSG's mission continues long after founding members graduate. Through structured leadership transitions, comprehensive documentation, and mentorship programs, new generations of students seamlessly take the helm, preserving our values and expanding our impact.",
    number: "03",
  },
];

export default function LeadershipGovernance() {
  return (
    <section className={styles.section} id="leadership">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Leadership & Governance</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>

        <div className={styles.itemsContainer}>
          {governanceItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={styles.item}
            >
              <div className={styles.itemHeader}>
                <span className={styles.itemNumber}>{item.number}</span>
                <div className={styles.itemLine}></div>
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemContent}>{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
