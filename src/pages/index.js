import * as React from "react";
import { Link } from "gatsby";
import ProductCard from "../components/productCard";
import Layout from "../components/layout";
import Mailinglist from "../components/mailinglist";
import * as styles from "../style/home.module.css";
import SubscriptionForm from '../components/sub-form'

const IndexPage = () => {
  return (
    <Layout>
      <Mailinglist />
      <SubscriptionForm/>
      <p className={styles.banner}>Picks of the season!</p>
      <ProductCard />
    </Layout>
  );
};

export default IndexPage;
