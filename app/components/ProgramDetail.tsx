"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Monitor, Users2, BookOpen, Target, TrendingUp, Quote } from "lucide-react";
import { Program } from "./ProgramsGrid";
import styles from "./ProgramDetail.module.css";
import Image from "next/image";

interface ProgramDetailProps {
  program: Program;
  onClose: () => void;
}

export default function ProgramDetail({ program, onClose }: ProgramDetailProps) {
  const ModeIcon = program.mode === "Physical" ? MapPin : program.mode === "Virtual" ? Monitor : MapPin;
  const IconComponent = program.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.overlay}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>

          <div className={styles.content}>
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerTop}>
                <div className={styles.iconWrapper}>
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <div className={styles.modeBadge}>
                  <ModeIcon size={14} />
                  <span>{program.mode}</span>
                </div>
              </div>
              <h2 className={styles.title}>{program.title}</h2>
            </div>

            {/* Description */}
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Description</h3>
              <p className={styles.sectionContent}>{program.description}</p>
            </section>

            {/* Who It's For */}
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Users2 size={20} />
                Who It's For
              </h3>
              <p className={styles.sectionContent}>{program.whoItsFor}</p>
            </section>

            {/* Courses Covered */}
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <BookOpen size={20} />
                Courses Covered
              </h3>
              <div className={styles.coursesGrid}>
                {program.coursesCovered.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={styles.courseTag}
                  >
                    {course}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Impact Numbers */}
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <TrendingUp size={20} />
                Impact Numbers
              </h3>
              <div className={styles.impactGrid}>
                {program.impactNumbers.map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={styles.impactCard}
                  >
                    <div className={styles.impactValue}>{impact.value}</div>
                    <div className={styles.impactLabel}>{impact.label}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Photos */}
            {program.photos && program.photos.length > 0 && (
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Photos</h3>
                <div className={styles.photosGrid}>
                  {program.photos.map((photo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={styles.photoWrapper}
                    >
                      <Image
                        src={photo}
                        alt={`${program.title} - Photo ${index + 1}`}
                        width={400}
                        height={300}
                        className={styles.photo}
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Testimonials */}
            {program.testimonials && program.testimonials.length > 0 && (
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Testimonials</h3>
                <div className={styles.testimonialsGrid}>
                  {program.testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={styles.testimonialCard}
                    >
                      <Quote size={24} className={styles.quoteIcon} />
                      <p className={styles.testimonialText}>"{testimonial.text}"</p>
                      <div className={styles.testimonialAuthor}>
                        <div className={styles.authorInfo}>
                          <div className={styles.authorName}>{testimonial.name}</div>
                          <div className={styles.authorRole}>{testimonial.role}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
