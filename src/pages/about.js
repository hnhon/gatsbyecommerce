import * as React from "react";
import Layout from "../components/layout";
import * as styles from "../style/about.module.css";

const AboutPage = () => {
  return (
    <Layout>
      <div className={styles.main}>
        This website is built with Gatsby
      </div>
    </Layout>
    
    );
};

export default AboutPage;
