import { useState } from "react";
import { registerUser } from "../services/authService";


export default function Register({ setAuthState }: { setAuthState: (state: "login" | "register" | "home") => void }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await registerUser(form.name, form.email, form.password);
      alert("Registered successfully! Please log in.");
      setAuthState("login");
    } catch (err) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <>
      <div className="register-div max-h-screen sm:px-6 ">
      
        <h1 className="text-2xl font-extrabold my-8">Register</h1>

        <form onSubmit={handleSubmit}>
        
          <div className="flex flex-col my-12 mx-7 rounded-sm space-y-5 text-black">
            <input
              className="p-2 rounded-sm"
              type="text"
              placeholder="Name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              className="p-2 rounded-sm"
              type="email"
              placeholder="Email Id"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <div className="relative">
              <input
                className="p-2 rounded-sm w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-black-700 font-semibold"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button
              className="bg-blue-700 px-2 py-2 text-white rounded-md p-1 font-semibold btn-register transition-transform duration-500 hover:scale-110"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>
          Already have an account? <button className="text-blue-800 hover:underline" onClick={() => setAuthState("login")}>Login</button>
        </p>
        
        
      </div>
    </>
  );
}  