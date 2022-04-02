import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import * as styles from "../../style/productdetails.module.css";

const ProductPage = ({ data }) => {
  const product = data.allContentfulProduct.nodes;

  return (
    <Layout>
      <div className={styles.container}>
        {product.map((product) => {
          return (
            <article key={product.id} className={styles.details}>
              <div className={styles.img}>
              <GatsbyImage
                image={product.image[0].gatsbyImageData}
                alt={product.productName.productName}
                className={styles.gatsbyimg}
                
              />
              </div>
              <div className={styles.box}>
              <p className={styles.productName}>{product.productName.productName}</p>
              <p className={styles.price}>${product.price}</p>
              <p className={styles.description}>{product.productDescription.productDescription}</p>
              
              <button
                className="snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-url={"/"}
                data-item-description={
                  product.productDescription.productDescription
                }
                data-item-name={product.productName.productName}
              >
                Add to cart
              </button>
              </div>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default ProductPage;

export const query = graphql`
  query ($id: String) {
    allContentfulProduct(filter: { id: { eq: $id } }) {
      nodes {
        productName {
          productName
        }
        slug
        productDescription {
          productDescription
        }
        sizetypecolor
        image {
          gatsbyImageData (layout: CONSTRAINED height: 500)
        }
        tags
        categories {
          title {
            title
          }
        }
        price
        brand {
          companyName {
            companyName
          }
        }
        quantity
        sku
        website
        id
      }
    }
  }
`;
