"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./FeaturedStories.module.css";

const stories = [
  {
    id: 1,
    title: "Physics 102 Tutorial",
    image: "/hero-featured.jpg",
    story: "Comprehensive tutorial sessions helping students master complex physics concepts through interactive learning.",
    year: "2024",
  },
  {
    id: 2,
    title: "Engineering Quiz Competition",
    image: "/hero-featured.jpg",
    story: "Annual competition bringing together students from multiple departments to showcase their engineering knowledge.",
    year: "2024",
  },
  {
    id: 3,
    title: "Orphanage Visit",
    image: "/hero-featured.jpg",
    story: "Community outreach initiative where BSG members spent time with children, sharing knowledge and joy.",
    year: "2023",
  },
  {
    id: 4,
    title: "Special Adviser Appointment",
    image: "/hero-featured.jpg",
    story: "BSG leadership appointed as Special Adviser on Education by the Student Union Government, recognizing our impact.",
    year: "2023",
  },
];

export default function FeaturedStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Reset index if it becomes out of bounds when switching views
      const cardsPerView = mobile ? 1 : 3;
      const maxIndex = stories.length - cardsPerView;
      if (currentIndex > maxIndex) {
        setCurrentIndex(Math.max(0, maxIndex));
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [currentIndex]);

  const cardsPerView = isMobile ? 1 : 3;
  const visibleStories = stories.slice(currentIndex, currentIndex + cardsPerView);
  const maxIndex = stories.length - cardsPerView;

  const goToPrevious = () => {
    setDirection(-1);
    const step = isMobile ? 1 : 3;
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : Math.max(0, prev - step)));
  };

  const goToNext = () => {
    setDirection(1);
    const step = isMobile ? 1 : 3;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : Math.min(maxIndex, prev + step)));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div
            className={styles.headerContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.subtitle}>Featured Stories</p>
            <h2 className={styles.heading}>Driving Excellence Through Impact</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/stories" className={styles.viewAllButton}>
              View All Stories
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className={styles.carouselWrapper}>
          <button
            className={styles.navButton}
            onClick={goToPrevious}
            aria-label="Previous stories"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.carousel}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                className={styles.storiesGrid}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                {visibleStories.map((story) => (
                  <motion.div
                    key={story.id}
                    className={styles.storyCard}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={styles.storyImage}
                        priority={story.id === stories[0].id}
                      />
                      <div className={styles.imageOverlay} />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.storyMeta}>
                        <span className={styles.storyYear}>{story.year}</span>
                      </div>
                      <h3 className={styles.storyTitle}>{story.title}</h3>
                      <p className={styles.storyText}>{story.story}</p>
                      <Link href={`/stories/${story.id}`} className={styles.readMore}>
                        Read full story
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className={styles.navButton}
            onClick={goToNext}
            aria-label="Next stories"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
