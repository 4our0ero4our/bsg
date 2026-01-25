"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Quote, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import styles from "./MediaMentions.module.css";

interface MediaItem {
  id: string;
  type: "linkedin" | "screenshot" | "quote";
  title: string;
  content: string;
  author?: string;
  platform?: string;
  image?: string;
  date?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: "linkedin-1",
    type: "linkedin",
    title: "BSG's Impact on Student Success",
    content: "Celebrating another successful semester! BSG has reached over 850 students this semester through our comprehensive programs. Grateful for the amazing team and the incredible impact we're making together. #StudentSuccess #Education #BSG",
    author: "BSG Official",
    platform: "LinkedIn",
    date: "May 2024",
  },
  {
    id: "screenshot-1",
    type: "screenshot",
    title: "Press Coverage - University Newsletter",
    content: "Featured in the university's official newsletter highlighting BSG's innovative approach to peer mentorship and academic support.",
    image: "/hero-featured.jpg",
    date: "April 2024",
  },
  {
    id: "quote-1",
    type: "quote",
    title: "Recognition from University Leadership",
    content: "BSG has demonstrated exceptional commitment to student development. Their programs have significantly improved academic performance and student engagement across multiple departments.",
    author: "Dr. John Smith, Dean of Engineering",
    date: "March 2024",
  },
  {
    id: "linkedin-2",
    type: "linkedin",
    title: "Engineering Quiz Competition 2024",
    content: "What an incredible competition! 320+ participants from 8 departments came together to celebrate academic excellence. Congratulations to all participants and winners! 🏆 #EQC2024 #AcademicExcellence",
    author: "BSG Official",
    platform: "LinkedIn",
    date: "March 2024",
  },
  {
    id: "screenshot-2",
    type: "screenshot",
    title: "Social Media Recognition",
    content: "Our community outreach program featured on social media, showcasing the positive impact on local youth education.",
    image: "/top-hero-featured.jpg",
    date: "February 2024",
  },
  {
    id: "quote-2",
    type: "quote",
    title: "Student Testimonial",
    content: "BSG's mentorship program changed my academic journey. The guidance and support I received helped me excel in my studies and build confidence. Forever grateful!",
    author: "Sarah Johnson, 3rd Year Student",
    date: "January 2024",
  },
];

export default function MediaMentions() {
  const [selectedType, setSelectedType] = useState<"all" | "linkedin" | "screenshot" | "quote">("all");

  const filteredItems =
    selectedType === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.type === selectedType);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <button
          className={`${styles.filterButton} ${selectedType === "all" ? styles.active : ""}`}
          onClick={() => setSelectedType("all")}
        >
          All
        </button>
        <button
          className={`${styles.filterButton} ${selectedType === "linkedin" ? styles.active : ""}`}
          onClick={() => setSelectedType("linkedin")}
        >
          <Linkedin size={16} />
          LinkedIn Posts
        </button>
        <button
          className={`${styles.filterButton} ${selectedType === "screenshot" ? styles.active : ""}`}
          onClick={() => setSelectedType("screenshot")}
        >
          <ImageIcon size={16} />
          Screenshots
        </button>
        <button
          className={`${styles.filterButton} ${selectedType === "quote" ? styles.active : ""}`}
          onClick={() => setSelectedType("quote")}
        >
          <Quote size={16} />
          Quotes
        </button>
      </div>

      <div className={styles.grid}>
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`${styles.card} ${styles[item.type]}`}
            >
              {item.type === "linkedin" && (
                <>
                  <div className={styles.cardHeader}>
                    <div className={styles.linkedinIcon}>
                      <Linkedin size={24} />
                    </div>
                    <div className={styles.headerInfo}>
                      <div className={styles.author}>{item.author}</div>
                      <div className={styles.platform}>{item.platform}</div>
                    </div>
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardContent}>{item.content}</p>
                  {item.date && <div className={styles.date}>{item.date}</div>}
                </>
              )}

              {item.type === "screenshot" && (
                <>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.image || "/hero-featured.jpg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardContent}>{item.content}</p>
                    {item.date && <div className={styles.date}>{item.date}</div>}
                  </div>
                </>
              )}

              {item.type === "quote" && (
                <>
                  <div className={styles.quoteIcon}>
                    <Quote size={32} />
                  </div>
                  <p className={styles.quoteText}>"{item.content}"</p>
                  <div className={styles.quoteAuthor}>
                    <div className={styles.authorName}>— {item.author}</div>
                    {item.date && <div className={styles.date}>{item.date}</div>}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
