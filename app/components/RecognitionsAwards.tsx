"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./RecognitionsAwards.module.css";

interface RecognitionItem {
  id: string;
  title: string;
  type: "appointment" | "recognition" | "award";
  image: string;
  description: string;
  date?: string;
}

const recognitions: RecognitionItem[] = [
  {
    id: "appointment-1",
    title: "Official Appointment Letter",
    type: "appointment",
    image: "/hero-featured.jpg",
    description: "Official appointment letter recognizing BSG's leadership role in student academic development and mentorship programs.",
    date: "2024",
  },
  {
    id: "sdsn-youth",
    title: "SDSN Youth Recognition",
    type: "recognition",
    image: "/top-hero-featured.jpg",
    description: "Recognition from SDSN Youth for outstanding contribution to sustainable development goals through educational initiatives and community engagement.",
    date: "2023",
  },
  {
    id: "academia-year",
    title: "Academia of the Year Award",
    type: "award",
    image: "/hero-featured.jpg",
    description: "Prestigious award recognizing BSG as the leading academic organization of the year for innovative programs and exceptional student impact.",
    date: "2023",
  },
  {
    id: "appointment-2",
    title: "Department Recognition",
    type: "appointment",
    image: "/top-hero-featured.jpg",
    description: "Official recognition from the Engineering Department for excellence in peer mentorship and academic support programs.",
    date: "2024",
  },
];

export default function RecognitionsAwards() {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.grid}
      >
        {recognitions.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <div className={styles.typeBadge}>
                  {item.type === "appointment" && "Appointment"}
                  {item.type === "recognition" && "Recognition"}
                  {item.type === "award" && "Award"}
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
              {item.date && <p className={styles.date}>{item.date}</p>}
              <p className={styles.description}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
