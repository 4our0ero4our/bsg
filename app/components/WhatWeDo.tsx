"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Trophy, Users, UserPlus, HeartHandshake, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./WhatWeDo.module.css";

const services = [
  {
    icon: GraduationCap,
    title: "Tutorials & Crash Courses",
    description: [
      "Peer-led intensive sessions designed to help students excel in challenging courses.",
      "Structured programs covering core subjects with interactive learning experiences.",
    ],
  },
  {
    icon: Trophy,
    title: "Academic Competitions (EQC)",
    description: [
      "Engineering Quiz Competition and other academic challenges that test knowledge.",
      "Fostering healthy competition and celebrating academic excellence across departments.",
    ],
  },
  {
    icon: Users,
    title: "Mentorship (Scholar's Voice)",
    description: [
      "One-on-one guidance from experienced students and alumni mentors.",
      "Personalized support to navigate academic challenges and career decisions.",
    ],
  },
  {
    icon: UserPlus,
    title: "Freshers Orientation",
    description: [
      "Welcoming new students with comprehensive orientation programs and resources.",
      "Helping freshers integrate smoothly into university life and academic culture.",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Community Outreach",
    description: [
      "Extending our impact beyond campus through educational initiatives and partnerships.",
      "Collaborating with local communities to promote learning and youth development.",
    ],
  },
];

export default function WhatWeDo() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate visible indices (center card + one on each side)
  const getVisibleIndices = () => {
    const indices: number[] = [];
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      if (index < 0) index = services.length + index;
      if (index >= services.length) index = index - services.length;
      indices.push(index);
    }
    return indices;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>What We Do</h2>
          <p className={styles.subheading}>
            Empowering students through structured programs and community-driven initiatives
          </p>
        </motion.div>

        <div className={styles.carouselWrapper}>
          <button
            className={styles.navButton}
            onClick={goToPrevious}
            aria-label="Previous card"
          >
            <ChevronLeft size={20} />
          </button>

          <div className={styles.carousel}>
            <AnimatePresence mode="wait">
              {getVisibleIndices().map((index, position) => {
                const service = services[index];
                const IconComponent = service.icon;
                const isCenter = position === 1;

                return (
                  <motion.div
                    key={`${service.title}-${currentIndex}-${position}`}
                    className={`${styles.card} ${isCenter ? styles.cardCenter : styles.cardSide}`}
                    initial={{ opacity: 0, scale: 0.8, x: position === 0 ? -100 : position === 2 ? 100 : 0 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.6,
                      scale: isCenter ? 1 : 0.85,
                      x: (position - 1) * 380,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={styles.iconWrapper}>
                      <IconComponent size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDescription}>
                      {service.description[0]}
                      <br />
                      {service.description[1]}
                    </p>
                    <Link href="/programs" className={styles.learnMore}>
                      Learn more
                      <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <button
            className={styles.navButton}
            onClick={goToNext}
            aria-label="Next card"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className={styles.pagination}>
          {services.map((_, index) => (
            <button
              key={index}
              className={`${styles.paginationDot} ${index === currentIndex ? styles.paginationDotActive : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.counter}>
          {String(currentIndex + 1).padStart(2, "0")}/{String(services.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}
