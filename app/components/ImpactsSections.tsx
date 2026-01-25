"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, FileText, Share2, ChevronDown } from "lucide-react";
import styles from "./ImpactsSections.module.css";
import RecognitionsAwards from "./RecognitionsAwards";
import ImpactReports from "./ImpactReports";
import MediaMentions from "./MediaMentions";

interface Section {
  id: string;
  title: string;
  icon: typeof Award;
  description: string;
}

const sections: Section[] = [
  {
    id: "recognitions",
    title: "Recognitions & Awards",
    icon: Award,
    description: "Official appointments, recognitions, and prestigious awards received by BSG",
  },
  {
    id: "reports",
    title: "Impact Reports",
    icon: FileText,
    description: "Comprehensive reports showcasing our impact through numbers, stories, and achievements",
  },
  {
    id: "media",
    title: "Media Mentions",
    icon: Share2,
    description: "Our presence across social media, press coverage, and public recognition",
  },
];

export default function ImpactsSections() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleSectionClick = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container} id="impactsections">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          const isExpanded = expandedSection === section.id;

          return (
            <div key={section.id} className={styles.sectionWrapper} id={section.id}>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${styles.sectionHeader} ${isExpanded ? styles.expanded : ""}`}
                onClick={() => handleSectionClick(section.id)}
              >
                <div className={styles.headerLeft}>
                  <div className={styles.iconWrapper}>
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>
                  <div className={styles.headerText}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                    <p className={styles.sectionDescription}>{section.description}</p>
                  </div>
                </div>
                <ChevronDown
                  size={24}
                  className={`${styles.chevron} ${isExpanded ? styles.rotated : ""}`}
                />
              </motion.button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className={styles.expandedContent}
                  >
                    {section.id === "recognitions" && <RecognitionsAwards />}
                    {section.id === "reports" && <ImpactReports />}
                    {section.id === "media" && <MediaMentions />}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
