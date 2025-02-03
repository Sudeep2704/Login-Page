"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Login from "../app/pages/login";
import Register from "../app/pages/register";
import Home from "../app/pages/home";

export default function Page() {
  const [authState, setAuthState] = useState<"login" | "register" | "home">("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuthenticated(true);
      setAuthState("home");
    }
  }, []);

  return (
    <div>
      <nav className="flex justify-center items-center my-5 px-4 sm:px-6 lg:px-8 font-bold text-lg sm:text-xl text-center">
  <h1>Sign-up / Login Page</h1>
</nav>


      <div>
        {authState === "login" && <Login setAuthState={setAuthState} />}
        {authState === "register" && <Register setAuthState={setAuthState} />}
        {authState === "home" && <Home setAuthState={setAuthState} />}
      </div>
    </div>
  );
}
