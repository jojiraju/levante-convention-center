import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <div className={styles.brandColumn}>
            <h1 className={styles.logo}>LEVANTE</h1>
            <p className={styles.description}>
              Redefining the standard for luxury events. Every detail, every moment, crafted to perfection.
            </p>
            <div className={styles.socials}>
              <FaInstagram className={styles.socialIcon} />
              <FaFacebookF className={styles.socialIcon} />
              <FaTwitter className={styles.socialIcon} />
            </div>
          </div>

          <div className={styles.linkGridMobile}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnHeader}>Quick Links</h4>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}><Link href="/#about" className={styles.link}>About Us</Link></li>
                <li className={styles.linkItem}><Link href="/#venues" className={styles.link}>Venues</Link></li>
                <li className={styles.linkItem}><Link href="/#services" className={styles.link}>Services</Link></li>
                <li className={styles.linkItem}><Link href="/#catalog" className={styles.link}>Pricing</Link></li>
                <li className={styles.linkItem}><Link href="/#gallery" className={styles.link}>Gallery</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnHeader}>Contact Info</h4>
              <ul className={styles.linkList}>
                <li className={styles.contactItem}>
                  <MdLocationOn size={18} className={styles.contactIcon} />
                  <span>Moothedam, Kuttikkad, <br /> Kerala 679331</span>
                </li>
                <li className={styles.contactItem}>
                  <FaPhoneAlt size={16} className={styles.contactIcon} />
                  <span>+91 79070 18558</span>
                </li>
                <li className={styles.contactItem}>
                  <FaRegEnvelope size={16} className={styles.contactIcon} />
                  <span>hello@levante.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2026 Levante Convention Center. All Rights Reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="#" className={styles.link}>Cookies</Link>
            <Link href="#" className={styles.link}>Terms</Link>
            <Link href="#" className={styles.link}>Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
