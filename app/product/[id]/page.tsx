
import React from "react";
import axios from "axios";

const FetchProduct = async (documentId) => {
  try {
    const res = await axios.get(
      `${process.env.STARPI_BASE_URL}/api/products/${documentId}?populate=*`
    );
    console.log("data", res.data.data);
    return res.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export default async function Page({ params }) {
  const productId = params.id;
  const product = await FetchProduct(productId);
  return (
    <div>
      {product.id}
      {/* <Image width={100} height={100} src={`/${process.env.STARPI_BASE_URL}${product.image.formats.thumbnail.url}`} alt="whey"/> */}
      <img
        src={`${process.env.STARPI_BASE_URL}${product.image.formats.thumbnail.url}`}
      ></img>
      <div>{product.title}</div>
      <div>{product.author.name}</div>
    </div>
  );
}
