"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./StorySection.module.css";

interface StoryImage {
  src: string;
  width: number;
  height: number;
  rotation: number;
  x: number;
  y: number;
}

interface Story {
  id: string;
  title: string;
  content: string;
  images: StoryImage[];
  labels: string[];
  thumbnailImage: string;
}

// BSG Timeline Stories
const stories: Story[] = [
  {
    id: "beginnings",
    title: "Started as free tutorials.",
    content: "It all began with a simple idea: to bridge the gap between classroom learning and academic excellence. We started offering free tutorials, sharing knowledge freely, and creating a space where students could learn without barriers.",
    images: [
      {
        src: "/hero-featured.jpg",
        width: 420,
        height: 280,
        rotation: -5,
        x: 0,
        y: 0,
      },
      {
        src: "/top-hero-featured.jpg",
        width: 320,
        height: 480,
        rotation: 3,
        x: 80,
        y: 40,
      },
      {
        src: "/hero-featured.jpg",
        width: 400,
        height: 260,
        rotation: -3,
        x: 160,
        y: 80,
      },
    ],
    labels: ["Foundation", "Tutorials"],
    thumbnailImage: "/hero-featured.jpg",
  },
  {
    id: "growth",
    title: "Growth.",
    content: "What started small began to flourish. More students joined, more programs emerged, and our community expanded. We evolved from simple tutorials to comprehensive mentorship, competitions, and community outreach initiatives.",
    images: [
      {
        src: "/top-hero-featured.jpg",
        width: 450,
        height: 320,
        rotation: 4,
        x: 0,
        y: 0,
      },
      {
        src: "/hero-featured.jpg",
        width: 380,
        height: 500,
        rotation: -4,
        x: 60,
        y: 40,
      },
    ],
    labels: ["Expansion", "Programs"],
    thumbnailImage: "/top-hero-featured.jpg",
  },
  {
    id: "recognition",
    title: "Recognition.",
    content: "Our impact did not go unnoticed. Awards, appointments, and acknowledgments from institutions and communities validated our mission. We became recognized as a force for positive change in academic excellence.",
    images: [
      {
        src: "/hero-featured.jpg",
        width: 420,
        height: 300,
        rotation: -6,
        x: 0,
        y: 0,
      },
      {
        src: "/top-hero-featured.jpg",
        width: 360,
        height: 450,
        rotation: 5,
        x: 70,
        y: 30,
      },
      {
        src: "/hero-featured.jpg",
        width: 380,
        height: 280,
        rotation: -2,
        x: 140,
        y: 60,
      },
    ],
    labels: ["Achievements", "Awards"],
    thumbnailImage: "/hero-featured.jpg",
  },
  {
    id: "graduation",
    title: "Pioneer graduation.",
    content: "A milestone that marked both an ending and a beginning. Our founding members graduated, passing the torch to new leaders. This transition proved our sustainability and the strength of the community we built.",
    images: [
      {
        src: "/top-hero-featured.jpg",
        width: 400,
        height: 320,
        rotation: -4,
        x: 0,
        y: 0,
      },
      {
        src: "/hero-featured.jpg",
        width: 350,
        height: 480,
        rotation: 3,
        x: 60,
        y: 40,
      },
    ],
    labels: ["Milestone", "Transition"],
    thumbnailImage: "/top-hero-featured.jpg",
  },
  {
    id: "continuity",
    title: "Continuity & sustainability.",
    content: "Today, we continue to thrive, adapt, and grow. New generations of students carry forward our mission, ensuring that the impact we make endures. Our commitment to academic excellence and student empowerment remains unwavering.",
    images: [
      {
        src: "/hero-featured.jpg",
        width: 320,
        height: 400,
        rotation: -6,
        x: 0,
        y: 0,
      },
      {
        src: "/top-hero-featured.jpg",
        width: 400,
        height: 300,
        rotation: 5,
        x: 50,
        y: 20,
      },
      {
        src: "/hero-featured.jpg",
        width: 360,
        height: 450,
        rotation: -2,
        x: 100,
        y: 50,
      },
      {
        src: "/top-hero-featured.jpg",
        width: 340,
        height: 280,
        rotation: 3,
        x: 150,
        y: 80,
      },
    ],
    labels: ["Future", "Legacy"],
    thumbnailImage: "/hero-featured.jpg",
  },
];

export default function StorySection() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [imageCycleIndex, setImageCycleIndex] = useState(0);
  const activeStory = stories[activeStoryIndex];

  // Continuous image cycling animation - bottom image moves up
  useEffect(() => {
    if (activeStory.images.length <= 1) return;

    const interval = setInterval(() => {
      setImageCycleIndex((prev) => (prev + 1) % activeStory.images.length);
    }, 4000); // Cycle every 4 seconds

    return () => clearInterval(interval);
  }, [activeStory.images.length, activeStoryIndex]);

  // Reset cycle index when story changes
  useEffect(() => {
    setImageCycleIndex(0);
  }, [activeStoryIndex]);

  const handleThumbnailClick = (index: number) => {
    setActiveStoryIndex(index);
  };

  return (
    <section className={styles.storySection}>
      <div className={styles.contentWrapper}>
        {/* Left side - Image Collage */}
        <div className={styles.imageContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.imageCollage}
            >
              {activeStory.images.map((image, originalIndex) => {
                // Calculate which position this image should be in the cycle
                // Cycle rotates: bottom image moves to top
                const cyclePosition = (originalIndex - imageCycleIndex + activeStory.images.length) % activeStory.images.length;
                
                // Get the target image's position (the image that should be at this cycle position)
                const targetImageIndex = (cyclePosition + imageCycleIndex) % activeStory.images.length;
                const targetImage = activeStory.images[targetImageIndex];
                
                // Use target image's position, but keep original rotation for visual variety
                const targetX = targetImage.x;
                const targetY = targetImage.y;
                
                // Z-index: image at position 0 (top) has highest z-index
                const zIndex = activeStory.images.length - cyclePosition;

                return (
                  <motion.div
                    key={`${activeStory.id}-${originalIndex}-${imageCycleIndex}`}
                    initial={originalIndex === 0 ? { 
                      opacity: 0, 
                      scale: 0.8, 
                      rotate: image.rotation * 2,
                    } : false}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotate: image.rotation,
                      x: image.x,
                      y: targetY,
                    }}
                    transition={{ 
                      duration: 1.2,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className={styles.imageWrapper}
                    style={{
                      width: `${image.width}px`,
                      height: `${image.height}px`,
                      zIndex: zIndex,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={`${activeStory.title} - Image ${originalIndex + 1}`}
                      className={styles.storyImage}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side - Text Content */}
        <div className={styles.textContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={styles.storyTitle}>{activeStory.title}</h2>
              <p className={styles.storyContent}>{activeStory.content}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom - Image Carousel with Labels */}
      <div className={styles.carouselContainer}>
        {/* Dynamic Labels */}
        <div className={styles.labelsContainer}>
          {activeStory.labels.map((label, index) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={index === 0 ? styles.labelPrimary : styles.labelSecondary}
            >
              {label}
            </motion.span>
          ))}
        </div>

        {/* Thumbnail Carousel */}
        <div className={styles.thumbnailCarousel}>
          {stories.map((story, index) => {
            const distance = Math.abs(index - activeStoryIndex);
            const isActive = index === activeStoryIndex;
            // More aggressive fade and scale for better visual effect
            const scale = isActive ? 1 : Math.max(0.3, 1 - distance * 0.25);
            const opacity = isActive ? 1 : Math.max(0.15, 1 - distance * 0.35);
            // Slight blur for non-active items
            const blur = isActive ? 0 : distance * 2;

            return (
              <motion.button
                key={story.id}
                onClick={() => handleThumbnailClick(index)}
                className={styles.thumbnailButton}
                animate={{
                  scale,
                  opacity,
                  filter: `blur(${blur}px)`,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  zIndex: stories.length - distance,
                }}
                whileHover={{
                  scale: isActive ? 1 : scale * 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src={story.thumbnailImage}
                  alt={story.title}
                  className={styles.thumbnailImage}
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
