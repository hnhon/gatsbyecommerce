import React from "react";
import { Link } from "gatsby";
import { FaFacebookF,FaInstagram,FaLinkedin } from "react-icons/fa";
import * as styles from "../style/footerStyles.module.css";

const Footer = () => {
  return (
    <div className={`${styles.footerContainer} footer`}>
      <div className={styles.row}>
        <div className={styles.column}>
          <h4>Company</h4>
          <ul>
            <Link className={styles.links} to="/">about us</Link>
            <Link className={styles.links} to="/">our service</Link>
            <Link className={styles.links} to="/">privacy service</Link>
            <Link className={styles.links} to="/">affiliate program</Link>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Help</h4>
          <ul>
            <Link className={styles.links} to="/">FAQ</Link>
            <Link className={styles.links} to="/">shipping</Link>
            <Link className={styles.links} to="/">returns</Link>
            <Link className={styles.links} to="/">payment options</Link>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Follow us</h4>
          <ul className={styles.sociallinks}>
            <Link className={styles.links} to="/"><FaFacebookF/> </Link>
            <Link className={styles.links} to="/"><FaInstagram/></Link>
            <Link className={styles.links} to="/"><FaLinkedin/></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
