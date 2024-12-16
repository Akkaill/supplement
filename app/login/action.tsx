"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState, formData) {
  try {
    const email = formData.get('email');
    const password = formData.get('password');
    const response = await axios.post(
      `${process.env.STARPI_BASE_URL}/api/auth/local`,
      { identifier: email, password }
    );
   (await cookies()).set('token',response.data.jwt)
    // return { mesasage: 'Login ok' };
    
  } catch (error) {
    console.log("error", error.response);
    let errorMessage = ''
    if (error.message && error.response.data.error.message) {
      errorMessage=error.response.data.error.message
    }
    return { message: errorMessage|| "Login fail" };
  }
  redirect('/special-products')
}
