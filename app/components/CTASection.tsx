"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Handshake, Heart, Zap, ArrowRight } from "lucide-react";
import styles from "./CTASection.module.css";

const CTASection = () => {
  return (
    <section className={styles.section}>
      {/* Background Glow Effect */}
      <div className={styles.glowBackground} />

      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.heading}>
          Imagine the impact if this passion is <br />
          matched with <span className={styles.highlight}>better resources.</span>
        </h2>

        <div className={styles.actionsGrid}>
          {/* Button 1: Partner */}
          <Link href="/partner" className={styles.actionCard}>
            <div className={styles.iconWrapper}>
              <Handshake size={32} />
            </div>
            <div className={styles.cardContent}>
              <h3>Become a Partner</h3>
              <span className={styles.arrowIcon}><ArrowRight size={20}/></span>
            </div>
          </Link>

          {/* Button 2: Volunteer */}
          <Link href="/volunteer" className={`${styles.actionCard} ${styles.cardVolunteer}`}>
            <div className={styles.iconWrapper}>
              <Heart size={32} />
            </div>
            <div className={styles.cardContent}>
              <h3>Volunteer With Us</h3>
              <span className={styles.arrowIcon}><ArrowRight size={20}/></span>
            </div>
          </Link>

          {/* Button 3: Sponsor */}
          <Link href="/donate" className={`${styles.actionCard} ${styles.cardSponsor}`}>
            <div className={styles.iconWrapper}>
              <Zap size={32} />
            </div>
            <div className={styles.cardContent}>
              <h3>Sponsor a Program</h3>
              <span className={styles.arrowIcon}><ArrowRight size={20}/></span>
            </div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import styles from "./CTASection.module.css";

// const ctaButtons = [
//   {
//     id: 1,
//     label: "Become a Partner",
//     href: "/partner",
//     variant: "primary" as const,
//   },
//   {
//     id: 2,
//     label: "Volunteer With Us",
//     href: "/volunteer",
//     variant: "secondary" as const,
//   },
//   {
//     id: 3,
//     label: "Sponsor a Program",
//     href: "/sponsor",
//     variant: "secondary" as const,
//   },
// ];

// export default function CTASection() {
//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <motion.div
//           className={styles.content}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className={styles.heading}>
//             Imagine the impact if this passion is matched with better resources.
//           </h2>

//           <div className={styles.buttonsWrapper}>
//             {ctaButtons.map((button, index) => (
//               <motion.div
//                 key={button.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Link
//                   href={button.href}
//                   className={`${styles.ctaButton} ${
//                     button.variant === "primary" ? styles.primary : styles.secondary
//                   }`}
//                 >
//                   {button.label}
//                   <ArrowRight size={18} />
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
