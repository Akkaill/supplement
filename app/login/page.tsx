"use client";

import { useActionState } from "react";
import { login } from "./action";

export default function Page() {
  const initState = {
    message: null,
  };
  const [state, formAction] = useActionState(login, initState);
  return (
    <div>
      <form action={formAction}>
        <p>
          Email
          <input name='email' />
        </p>
        <p>
          Password
          <input type='password' name='password' />
        </p>
        Message:{state?.mesasage}
        <button>Login</button>
      </form>
    </div>
  );
}
