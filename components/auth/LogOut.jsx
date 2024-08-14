"use client";
import { signOut } from "next-auth/react";
const Logout = () => {
  return (
    <button className="login"
      onClick={() => {
        signOut({ callbackUrl: "http://localhost:3000/login" });     //where to go after signout    
      }}
    >
      Sign Out
    </button>
  );
};

export default Logout;
