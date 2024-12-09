"use server";
import React from "react";
import axios from "axios";
// import Link from "next/link";
import { cookies } from "next/headers";

const FetchSpecialProduct = async () => {
  const token = (await cookies()).get("token");
  console.log("token", token);
  try {
    const res = await axios.get(
      `${process.env.STARPI_BASE_URL}/api/special-supplements`,
      {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );
    console.log("data", res.data);
    return res.data.data;
  } catch (error) {
    console.log("error", error);
  }
};
export default async function Page() {
  const products = await FetchSpecialProduct();
  return (
    <div>
      {products?.map((product, index) => (
        <div key={index}>
          <div>ID:{product.id}</div>
          <div>{product.title}</div>
          <div>{product.description}</div>
        </div>
      ))}
    </div>
  );
}
