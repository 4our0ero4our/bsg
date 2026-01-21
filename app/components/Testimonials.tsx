"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import styles from "./Testimonials.module.css";

// Dummy Data for an NGO context
const testimonials = [
  {
    id: 1,
    orgName: "Campus Impact",
    title: "Exceeded All Expectations!",
    quote: "From start to finish, the student volunteers delivered exceptional support. The peer-tutoring initiative brought our grades up and created a community we never imagined possible.",
    author: "Vidhran K.",
    role: "Student President, Year 4",
    image: "/hero-featured.jpg",
  },
  {
    id: 2,
    orgName: "Green Earth Society",
    title: "A Reliable Partner",
    quote: "They understood our needs perfectly. The campus recycling drive was executed seamlessly. We couldn't be happier with the student engagement and the results.",
    author: "Sarah J.",
    role: "Outreach Coordinator",
    image: "/hero-featured.jpg",
  },
  {
    id: 3,
    orgName: "Future Leaders",
    title: "Innovative Solutions",
    quote: "The hackathon organized by this team changed my career path. The level of professionalism and the impact on the local community was truly inspiring.",
    author: "Tim S.",
    role: "Alumni Mentor",
    image: "/hero-featured.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Helper to determine the visual position of a card relative to the active one
  const getCardStyle = (index: number) => {
    const total = testimonials.length;
    
    // Calculate distance accounting for wrap-around
    let distance = (index - activeIndex + total) % total;
    if (distance > total / 2) distance -= total;

    if (distance === 0) return "center";
    if (distance === -1 || (activeIndex === 0 && index === total - 1)) return "left";
    if (distance === 1 || (activeIndex === total - 1 && index === 0)) return "right";
    return "hidden";
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Hear from Our <br /> <span className={styles.highlight}>Community</span>
          </h2>
          <p className={styles.subtitle}>
            Real stories from students, faculty, and partners about the 
            impact we are making together on campus.
          </p>
        </div>

        {/* Carousel Section */}
        <div className={styles.carouselContainer}>
          <div className={styles.cardsWrapper}>
            {testimonials.map((item, index) => {
              const position = getCardStyle(index);
              
              // We only render cards that are center, immediate left, or immediate right
              if (position === "hidden") return null;

              return (
                <motion.div
                  key={item.id}
                  className={styles.card}
                  initial={false}
                  animate={{
                    // Define animation states based on position
                    x: position === "center" ? "0%" : position === "left" ? "-110%" : "110%",
                    scale: position === "center" ? 1 : 0.85,
                    opacity: position === "center" ? 1 : 0.3,
                    zIndex: position === "center" ? 10 : 1,
                    filter: position === "center" ? "blur(0px)" : "blur(2px)",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className={styles.cardContent}>
                    {/* Left Side: Text */}
                    <div className={styles.textContent}>
                      <div className={styles.orgHeader}>
                         {/* Using an icon as a logo placeholder */}
                        <div className={styles.logoPlaceholder}><Quote size={16}/></div>
                        <span className={styles.orgName}>{item.orgName}</span>
                      </div>
                      
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardQuote}>"{item.quote}"</p>
                      
                      <div className={styles.authorInfo}>
                        <p className={styles.authorName}>{item.author}</p>
                        <p className={styles.authorRole}>{item.role}</p>
                      </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className={styles.imageWrapper}>
                      <Image
                        src={item.image}
                        alt={item.author}
                        fill
                        className={styles.profileImage}
                        style={{ objectFit: "cover" }} 
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className={styles.navigation}>
          <button onClick={handlePrev} className={styles.navBtn} aria-label="Previous testimonial">
            <ChevronLeft size={24} />
          </button>
          <button onClick={handleNext} className={styles.navBtn} aria-label="Next testimonial">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;