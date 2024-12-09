"use server";
import React from "react";
import axios from "axios";
import Link from "next/link";

const FetchProducts = async () => {
  try {
    const res = await axios.get(`${process.env.STARPI_BASE_URL}/api/products`);
    console.log("data", res.data);
    return res.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export default async function Products() {
  const getProduct = await FetchProducts();
  return (
    <div>
      {getProduct?.map((product, index) => (
        <div key={index}>
          <div>ID:{product.id}</div>
          <div>{product.title}</div>
          <div>{product.description}</div>
          <Link href={`product/${product.documentId}`}>See more</Link>
        </div>
      ))}
    </div>
  );
}
