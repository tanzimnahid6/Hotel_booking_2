"use client";

import { login } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [err, setError] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const res = await login(formData);
      if (!!res.error) {
        setError(res.error.message);
      } else {
        router.push("/bookings"); 
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {err && <div className="text-xl text-red-500 text-center">{err}</div>}

      <form className="login-form" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
