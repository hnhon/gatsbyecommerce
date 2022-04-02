import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import React from "react";
import * as styles from "../style/productCard.module.css";

export default function ProductCard() {
  const query = useStaticQuery(
    graphql`
      query {
        allContentfulProduct {
          edges {
            node {
              productName {
                productName
              }
              image {
                gatsbyImageData(layout: CONSTRAINED aspectRatio: 1)
              }
              price
              id
              slug
            }
          }
        }
      }
    `
  );
  const datas = query.allContentfulProduct.edges;
  return (
    <div className={styles.productContainer}>
      {datas.map((data) => {
        return (
          <article className={styles.product} key={data.node.id}>
            <Link to={`/products/${data.node.slug}`} className={`${styles.productimg} links`}>
              <GatsbyImage
                image={data.node.image[0].gatsbyImageData}
                alt={data.node.productName.productName}
                imgStyle={{ objectFit: 'fill', marginLeft: '0' }}
              />
            </Link>

            <div className={`${styles.productinfo}`}>
              <Link to={`/products/${data.node.slug}`}>
                <p className={styles.productName}>
                  {data.node.productName.productName}
                </p>
              </Link>

              <p>${data.node.price}</p>
              <button
                className="snipcart-add-item"
                data-item-id={data.node.id}
                data-item-price={data.node.price}
                data-item-url={"/"}
                data-item-name={data.node.productName.productName}
              >
                Add to cart
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
