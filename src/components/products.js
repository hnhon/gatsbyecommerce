import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

export default function Products() {
  const query = useStaticQuery(
    graphql`
      query {
        allContentfulProduct {
          edges {
            node {
              productName {
                productName
              }
              slug
              productDescription {
                productDescription
              }
              sizetypecolor
              image {
                gatsbyImageData(layout: CONSTRAINED)
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
      }
    `
  );
  const datas = query.allContentfulProduct.edges;
  return (
    <>
      {datas.map((data) => {
        return (
          <article key={data.node.id}>
            <h1>Product Name</h1>
            <p>{data.node.productName.productName}</p>

            <GatsbyImage
              image={data.node.image[0].gatsbyImageData}
              alt={data.node.productName.productName}
            />

          

            <h1>Product.Description</h1>
            <p>{data.node.productDescription.productDescription}</p>
            <h1>Size, Type and Color</h1>
            <p>{data.node.sizetypecolor}</p>
            <h1>Tag</h1>
            <p>{data.node.tags}</p>
            <h1>Categories</h1>
            <p>{data.node.categories[0].title.title}</p>
            <h1>Price</h1>
            <p>{data.node.price}</p>
            <h1>Brand</h1>
            <p>{data.node.brand.companyName.companyName}</p>
            <h1>Quantity</h1>
            <p>{data.node.quantity}</p>
            <h1>SKU</h1>
            <p>{data.node.sku}</p>
            <button
              className="snipcart-add-item"
              data-item-id={data.node.id}
              data-item-price={data.node.price}
              data-item-url={"/"}
              data-item-description={
                data.node.productDescription.productDescription
              }
              data-item-name={data.node.productName.productName}
            >
              Add to cart
            </button>
          </article>
        );
      })}
    </>
  );
}
