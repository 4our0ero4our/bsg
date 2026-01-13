"use client";

import { Play } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.gridContainer}>

        {/* Row 1: Top (Navbar area occupied by fixed nav, but we need the image here) */}
        {/* Cell 1,1: Nav Links (Visual placeholder if needed, or empty) */}
        <div className={styles.cellTopLeft}></div>

        {/* Cell 1,2: Empty Black */}
        <div className={styles.cellTopMid}></div>

        {/* Cell 1,3: Student Image */}
        <div className={styles.cellTopRight}>
          <div className={styles.studentImageContainer}>
            <img src="/hero-featured.jpg" alt="Student" />
            {/* Note: 'Let's Talk' is in Navbar, but visual placement matches this corner */}
          </div>
        </div>

        {/* --- Row 2 / 3 (Middle Area) --- */}

        {/* Col 1: Intro Text */}
        <div className={styles.cellMiddleLeft}>
          <div className={styles.textVStack}>
            <div className={styles.headlineSmall}>Who We Are</div>
            <div className={styles.textBlockMain}>
              At Brainstorm Group (BSG), we are a student-led academic and mentorship organization committed to improving learning outcomes, building confidence, and empowering students to thrive in university and beyond.
            </div>
            <div className={styles.textBlockSub}>
              Through peer-driven tutorials, mentorship, competitions, and community outreach, we turn learning into impact.
            </div>
          </div>
          <button className={styles.startButton}>
            Explore Our Programs
          </button>
        </div>

        {/* Col 2: Orange Box */}
        <div className={styles.cellMiddleMid}>
          <div className={styles.orangeBox}>
            <div className={styles.logoContainer}>
              <div className={styles.playIcon}>
                <Play size={20} fill="white" color="white" />
              </div>
              <span className={styles.logoText}>BSG</span>
            </div>
            <div className={styles.orangeTextContent}>
              <div className={styles.orangeHelpers}>
                Building Academic<br />Excellence at Scale
              </div>
              <div className={styles.orangeSubtext}>
                Peer-driven. Impact-focused. Student-led.
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: Social Proof Block */}
        <div className={styles.cellMiddleRight}>
          <div className={styles.socialProofText}>
            Appointed Special Adviser on Education, Skills & Career Development<br />
            <span className={styles.highlightText}>Student Union Government, FUT Minna</span>
          </div>
        </div>

        {/* --- Row 4 (Big Text) --- */}
        <div className={styles.cellBottomBigText}>
          <div className={styles.brandContainer}>
            <div className={styles.largeLogo}>Brainstorm Group</div>
            <div className={styles.brandSubline}>Raising the bar in academic excellence</div>
          </div>
        </div>

        <div className={styles.cellBottomRight}>
          <div className={styles.statsContainer}>
            <div className={styles.statsText}>
              <div className={styles.statNumber}>20,000+</div>
              <div className={styles.statLabel}>
                Students Impacted<br />
                Across Tutorials, Mentorship & Competitions
              </div>
            </div>
            <div className={styles.graduatesImage}>
              <img src="/hero-featured.jpg" alt="Graduates" />
            </div>
          </div>
        </div>

        {/* --- Row 5: Footer --- */}
        <div className={styles.cellFooter}>
          <div className={styles.footerLeft}>
            <span className={styles.enrolledText}>Trusted by thousands of students across FUT Minna</span>
          </div>

          <div className={styles.footerMid}>
            <div className={styles.enrolledContainer}>
              <div className={styles.profileIcons}>
                <div className={styles.profileIcon}></div>
                <div className={styles.profileIcon}></div>
                <div className={styles.profileIcon}></div>
              </div>
            </div>
          </div>

          <div className={styles.footerRight}>
            {/* Empty or additional content */}
          </div>
        </div>

      </div>
    </section>
  );
}