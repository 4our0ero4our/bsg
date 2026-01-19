"use client";

import { motion, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./ImpactNumbers.module.css";

function AnimatedCounter({ from, to, suffix = "" }: { from: number; to: number; suffix?: string }) {
  const count = useSpring(from, { stiffness: 50, damping: 20 });
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  const [displayValue, setDisplayValue] = useState(from.toLocaleString());

  useEffect(() => {
    count.set(to);
  }, [count, to]);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

  return (
    <motion.span>
      {displayValue}
      {suffix && <span className={styles.suffix}>{suffix}</span>}
    </motion.span>
  );
}

const stats = [
  {
    value: 20000,
    suffix: "+",
    label: "Students Impacted",
  },
  {
    value: 250,
    suffix: "+",
    label: "Students Per Session",
  },
  {
    value: 100,
    suffix: "+",
    label: "Past Questions Solved Per Class",
  },
  {
    value: 6,
    label: "Faculties Reached",
  },
  {
    value: 6,
    suffix: "+",
    label: "Years of Impact",
  },
];

export default function ImpactNumbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>Impact Numbers</h2>
        </motion.div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.statNumber}>
                {isInView ? (
                  <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix && <span className={styles.suffix}>{stat.suffix}</span>}</span>
                )}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
