import { useState } from "react";
import { loginUser } from "../services/authService";
import Cookies from "js-cookie";

export default function Login({ setAuthState }: { setAuthState: (state: "login" | "register" | "home") => void }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await loginUser(form.email, form.password);
      Cookies.set("token", response.data.token, { expires: 1 }); // Save JWT in cookies for 1 day
      setAuthState("home");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-div">
      <h1 className="text-2xl font-extrabold my-8">Login</h1>
      
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-12 mx-7 rounded-sm space-y-5 text-black">
        <input className="p-2 rounded-sm" type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input className="p-2 rounded-sm" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button className="bg-blue-700 px-2 py-2 text-white rounded-md p-1 font-semibold btn-register transition-transform duration-500 hover:scale-110" type="submit">Login</button>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Don't have an account? <button className="text-blue-800 hover:underline" onClick={() => setAuthState("register")}>Register</button></p>
      </div>
  );
} 