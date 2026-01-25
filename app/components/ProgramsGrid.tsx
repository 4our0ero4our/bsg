"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Users,
  UserPlus,
  HeartHandshake,
  X,
  MapPin,
  Monitor,
  Users2,
  BookOpen,
  Target,
  TrendingUp,
} from "lucide-react";
import styles from "./ProgramsGrid.module.css";
import ProgramDetail from "./ProgramDetail";

export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  icon: typeof GraduationCap;
  mode: "Physical" | "Virtual" | "Hybrid";
  description: string;
  whoItsFor: string;
  coursesCovered: string[];
  impactNumbers: {
    label: string;
    value: string;
  }[];
  photos: string[];
  testimonials: {
    name: string;
    role: string;
    text: string;
    image?: string;
  }[];
}

const programs: Program[] = [
  {
    id: "tutorials",
    title: "Tutorials & Crash Courses",
    shortDescription: "Peer-led intensive sessions designed to help students excel in challenging courses with structured programs covering core subjects.",
    icon: GraduationCap,
    mode: "Hybrid",
    description: "Our Tutorials & Crash Courses program provides comprehensive, peer-led learning experiences designed to help students master challenging subjects. Through structured sessions, interactive workshops, and focused study groups, we create an environment where students can excel academically while building confidence and study skills.",
    whoItsFor: "Students across all levels who want to strengthen their understanding of core engineering and science subjects, improve their grades, and prepare for examinations. Particularly beneficial for students struggling with specific courses or those aiming for academic excellence.",
    coursesCovered: [
      "Engineering Mathematics",
      "Thermodynamics",
      "Fluid Mechanics",
      "Structural Analysis",
      "Circuit Analysis",
      "Programming Fundamentals",
      "Engineering Drawing",
      "Material Science",
    ],
    impactNumbers: [
      { label: "Students Reached", value: "500+" },
      { label: "Courses Covered", value: "15+" },
      { label: "Success Rate", value: "85%" },
    ],
    photos: ["/hero-featured.jpg", "/top-hero-featured.jpg"],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "3rd Year Engineering Student",
        text: "The crash courses helped me understand thermodynamics in a way my regular classes never did. The peer-led approach made complex concepts accessible.",
      },
      {
        name: "Michael Chen",
        role: "2nd Year Student",
        text: "I went from failing to excelling in Engineering Mathematics. The structured sessions and supportive environment made all the difference.",
      },
    ],
  },
  {
    id: "mentorship",
    title: "Mentorship (Scholar's Voice)",
    shortDescription: "One-on-one guidance from experienced students and alumni mentors, providing personalized support for academic and career decisions.",
    icon: Users,
    mode: "Hybrid",
    description: "Scholar's Voice is our comprehensive mentorship program that pairs students with experienced mentors—both current students and alumni—who provide personalized guidance, academic support, and career advice. This program creates meaningful connections that extend beyond academics, fostering personal growth and professional development.",
    whoItsFor: "All students seeking guidance, support, and mentorship. Particularly valuable for first-year students navigating university life, students facing academic challenges, those exploring career paths, and anyone looking for personalized advice and support.",
    coursesCovered: [
      "Academic Planning",
      "Career Guidance",
      "Study Strategies",
      "Time Management",
      "Research Opportunities",
      "Professional Development",
    ],
    impactNumbers: [
      { label: "Mentor-Mentee Pairs", value: "200+" },
      { label: "Alumni Mentors", value: "50+" },
      { label: "Satisfaction Rate", value: "92%" },
    ],
    photos: ["/hero-featured.jpg", "/top-hero-featured.jpg"],
    testimonials: [
      {
        name: "David Okafor",
        role: "4th Year Student",
        text: "My mentor helped me navigate the most challenging years of my degree. The guidance I received was invaluable, both academically and personally.",
      },
      {
        name: "Amina Hassan",
        role: "1st Year Student",
        text: "As a fresher, having a mentor made the transition to university so much smoother. I always had someone to turn to for advice.",
      },
    ],
  },
  {
    id: "competitions",
    title: "Quizzes & Competitions",
    shortDescription: "Engineering Quiz Competition and other academic challenges that test knowledge and foster healthy competition across departments.",
    icon: Trophy,
    mode: "Physical",
    description: "Our Quizzes & Competitions program, including the prestigious Engineering Quiz Competition (EQC), creates opportunities for students to showcase their knowledge, compete with peers, and celebrate academic excellence. These events foster healthy competition, encourage deeper learning, and build a sense of community across different departments.",
    whoItsFor: "Students who enjoy academic challenges, want to test their knowledge, compete with peers, and represent their departments. Open to all students regardless of year level, from those looking to challenge themselves to teams representing their departments.",
    coursesCovered: [
      "Engineering Fundamentals",
      "Mathematics & Physics",
      "Technical Problem Solving",
      "Team Collaboration",
      "Quick Thinking & Analysis",
    ],
    impactNumbers: [
      { label: "Participants", value: "300+" },
      { label: "Competitions Held", value: "12+" },
      { label: "Departments Involved", value: "8" },
    ],
    photos: ["/hero-featured.jpg", "/top-hero-featured.jpg"],
    testimonials: [
      {
        name: "Team Alpha",
        role: "EQC Winners 2023",
        text: "The competition pushed us to study harder and work together as a team. It was one of the most rewarding experiences of our university journey.",
      },
      {
        name: "James Okonkwo",
        role: "Competition Participant",
        text: "Even though we didn't win, the preparation process taught us so much. The competitive environment was motivating and fun.",
      },
    ],
  },
  {
    id: "orientation",
    title: "Freshers Orientation",
    shortDescription: "Welcoming new students with comprehensive orientation programs and resources to help them integrate smoothly into university life.",
    icon: UserPlus,
    mode: "Physical",
    description: "Our Freshers Orientation program is designed to welcome new students and help them transition smoothly into university life. Through comprehensive sessions, campus tours, resource sharing, and community building activities, we ensure that every new student feels supported, informed, and ready to succeed.",
    whoItsFor: "All incoming first-year students (freshers) who are new to the university and need guidance on navigating campus life, academic expectations, available resources, and building connections within the student community.",
    coursesCovered: [
      "Campus Navigation",
      "Academic Resources",
      "Student Services",
      "Study Skills",
      "Time Management",
      "Community Building",
    ],
    impactNumbers: [
      { label: "Freshers Welcomed", value: "400+" },
      { label: "Orientation Sessions", value: "10+" },
      { label: "Retention Rate", value: "88%" },
    ],
    photos: ["/hero-featured.jpg", "/top-hero-featured.jpg"],
    testimonials: [
      {
        name: "Fatima Ibrahim",
        role: "1st Year Student",
        text: "The orientation program made me feel so much more confident about starting university. I knew where everything was and who to ask for help.",
      },
      {
        name: "Chukwu Emeka",
        role: "1st Year Student",
        text: "I made friends during orientation that I still hang out with today. It really helped me feel like I belonged here.",
      },
    ],
  },
  {
    id: "outreach",
    title: "Community Outreach",
    shortDescription: "Extending our impact beyond campus through educational initiatives and partnerships with local communities.",
    icon: HeartHandshake,
    mode: "Physical",
    description: "Our Community Outreach program extends BSG's impact beyond the university campus, partnering with local communities, schools, and organizations to promote education, youth development, and learning opportunities. Through workshops, tutoring programs, and collaborative initiatives, we contribute to broader educational goals and community empowerment.",
    whoItsFor: "Students who want to give back to their communities, gain teaching experience, and make a positive impact beyond campus. Also serves local schools, community organizations, and youth groups seeking educational support and resources.",
    coursesCovered: [
      "STEM Education",
      "Basic Mathematics",
      "Science Workshops",
      "Career Awareness",
      "Study Skills",
      "Mentorship for Youth",
    ],
    impactNumbers: [
      { label: "Communities Served", value: "15+" },
      { label: "Youth Reached", value: "1000+" },
      { label: "Volunteer Hours", value: "2000+" },
    ],
    photos: ["/hero-featured.jpg", "/top-hero-featured.jpg"],
    testimonials: [
      {
        name: "Community School Principal",
        role: "Local School",
        text: "BSG's outreach program has transformed our students' interest in STEM subjects. The volunteers are passionate and the impact is visible.",
      },
      {
        name: "Maria Adeyemi",
        role: "BSG Volunteer",
        text: "Teaching in the community has been one of the most rewarding experiences. Seeing the students' excitement for learning is incredible.",
      },
    ],
  },
];

export default function ProgramsGrid() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const handleProgramClick = (programId: string) => {
    setSelectedProgram(programId);
  };

  const handleCloseDetail = () => {
    setSelectedProgram(null);
  };

  const selectedProgramData = programs.find((p) => p.id === selectedProgram);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.header}
          >
            <h2 className={styles.title}>BSG PROGRAMS</h2>
            <p className={styles.subtitle}>
              Each program is designed as a comprehensive solution to support student success 
              and academic excellence through structured learning, mentorship, and community engagement.
            </p>
          </motion.div>

          <div className={styles.grid}>
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              const modeIcon = program.mode === "Physical" ? MapPin : program.mode === "Virtual" ? Monitor : MapPin;

              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={styles.card}
                  onClick={() => handleProgramClick(program.id)}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <div className={styles.modeBadge}>
                      <modeIcon size={12} />
                      <span>{program.mode}</span>
                    </div>
                  </div>
                  <h3 className={styles.cardTitle}>{program.title}</h3>
                  <p className={styles.cardDescription}>{program.shortDescription}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.viewMore}>View Details →</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProgramData && (
          <ProgramDetail
            program={selectedProgramData}
            onClose={handleCloseDetail}
          />
        )}
      </AnimatePresence>
    </>
  );
}
