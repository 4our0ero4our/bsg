"use client";

import Image from "next/image";
import styles from "./MobilePartners.module.css";

const partners = [
  { name: "FUT Minna", src: "/Federal University of Techonogy Minna Logo.jpg" },
  { name: "SDSN Youth", src: "/MISSTYB's Foundation Logo.png" },
  { name: "Oyins Foundation", src: "/Oyins Educational Foundation Logo.jpg" },
  { name: "SPE", src: "/SPE International FUTMInna branch Logo.jpg" },
  { name: "TedX", src: "/TedX Futminna logo.jpg" },
  { name: "BSG", src: "/BSG Light Logo.jpg" },
];

const track = [...partners, ...partners];

export default function MobilePartners() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Our Partners</h2>
      <p className={styles.subhead}>
        Recognized by institutions and organizations committed to academic excellence and youth development.
      </p>
      <div className={styles.marquee}>
        <div className={styles.row}>
          <div className={styles.track}>
            {track.map((partner, idx) => (
              <div className={styles.logoCard} key={`top-${partner.name}-${idx}`}>
                <Image src={partner.src} alt={partner.name} fill sizes="90px" className={styles.logoImg} />
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.track}>
            {track.map((partner, idx) => (
              <div className={styles.logoCard} key={`bottom-${partner.name}-${idx}`}>
                <Image src={partner.src} alt={partner.name} fill sizes="90px" className={styles.logoImg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
