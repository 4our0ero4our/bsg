"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, TrendingUp, Users, BookOpen } from "lucide-react";
import Image from "next/image";
import styles from "./ImpactReports.module.css";

interface ImpactReport {
  id: string;
  title: string;
  type: "semester" | "event";
  date: string;
  numbers: {
    label: string;
    value: string;
    icon: typeof Users;
  }[];
  writeup: string;
  photos: string[];
}

const reports: ImpactReport[] = [
  {
    id: "semester-2024-1",
    title: "First Semester 2024 Impact Report",
    type: "semester",
    date: "January - May 2024",
    numbers: [
      { label: "Students Reached", value: "850+", icon: Users },
      { label: "Programs Conducted", value: "12", icon: BookOpen },
      { label: "Success Rate", value: "88%", icon: TrendingUp },
    ],
    writeup: "The first semester of 2024 marked a significant milestone for BSG, with expanded programs reaching over 850 students across various departments. Our tutorial sessions saw unprecedented participation, and the mentorship program successfully paired 200+ students with experienced mentors. The semester concluded with our annual Engineering Quiz Competition, which saw participation from 8 departments.",
    photos: ["/hero-featured.jpg", "/top-hero-featured.jpg", "/hero-featured.jpg"],
  },
  {
    id: "event-eqc-2024",
    title: "Engineering Quiz Competition 2024",
    type: "event",
    date: "March 2024",
    numbers: [
      { label: "Participants", value: "320+", icon: Users },
      { label: "Departments", value: "8", icon: BookOpen },
      { label: "Winners", value: "3 Teams", icon: TrendingUp },
    ],
    writeup: "The 2024 Engineering Quiz Competition was our largest yet, bringing together 320+ participants from 8 different engineering departments. The event featured intense competition, collaborative problem-solving, and celebrated academic excellence. The competition not only tested knowledge but also fostered inter-departmental collaboration and camaraderie.",
    photos: ["/top-hero-featured.jpg", "/hero-featured.jpg"],
  },
  {
    id: "semester-2023-2",
    title: "Second Semester 2023 Impact Report",
    type: "semester",
    date: "September - December 2023",
    numbers: [
      { label: "Students Reached", value: "720+", icon: Users },
      { label: "Community Events", value: "6", icon: BookOpen },
      { label: "Volunteer Hours", value: "1500+", icon: TrendingUp },
    ],
    writeup: "The second semester of 2023 focused heavily on community outreach and expansion of our mentorship programs. We successfully conducted 6 major community events, reaching over 1000 youth in local communities. Our volunteers contributed over 1500 hours of service, demonstrating our commitment to extending impact beyond the campus.",
    photos: ["/hero-featured.jpg", "/top-hero-featured.jpg", "/hero-featured.jpg"],
  },
];

export default function ImpactReports() {
  const [selectedReport, setSelectedReport] = useState<string | null>(reports[0].id);

  const selectedReportData = reports.find((r) => r.id === selectedReport);

  return (
    <div className={styles.container}>
      <div className={styles.reportsList}>
        {reports.map((report, index) => (
          <motion.button
            key={report.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`${styles.reportItem} ${selectedReport === report.id ? styles.active : ""}`}
            onClick={() => setSelectedReport(report.id)}
          >
            <div className={styles.reportHeader}>
              <Calendar size={18} className={styles.calendarIcon} />
              <div className={styles.reportInfo}>
                <h3 className={styles.reportTitle}>{report.title}</h3>
                <p className={styles.reportDate}>{report.date}</p>
              </div>
            </div>
            <div className={styles.reportType}>
              {report.type === "semester" ? "Semester Impact" : "Event Summary"}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedReportData && (
          <motion.div
            key={selectedReportData.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className={styles.reportContent}
          >
            <div className={styles.contentImage}>
              <Image
                src={selectedReportData.photos[0]}
                alt={selectedReportData.title}
                width={600}
                height={400}
                className={styles.mainImage}
              />
            </div>

            <div className={styles.contentDetails}>
              <h2 className={styles.contentTitle}>{selectedReportData.title}</h2>
              <p className={styles.contentDate}>{selectedReportData.date}</p>

              <div className={styles.numbersGrid}>
                {selectedReportData.numbers.map((number, idx) => {
                  const IconComponent = number.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={styles.numberCard}
                    >
                      <IconComponent size={24} className={styles.numberIcon} />
                      <div className={styles.numberValue}>{number.value}</div>
                      <div className={styles.numberLabel}>{number.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              <div className={styles.writeup}>
                <p>{selectedReportData.writeup}</p>
              </div>

              {selectedReportData.photos.length > 1 && (
                <div className={styles.photosGrid}>
                  {selectedReportData.photos.slice(1).map((photo, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className={styles.photoWrapper}
                    >
                      <Image
                        src={photo}
                        alt={`${selectedReportData.title} - Photo ${idx + 2}`}
                        width={300}
                        height={200}
                        className={styles.photo}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
