import { useEffect, useState } from "react";
import axios from "../utils/api";
import Cookies from "js-cookie";

export default function Home({ setAuthState }: { setAuthState: (state: "login" | "register" | "home") => void }) {
  const [user, setUser] = useState<{ id: string; name: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/auth/profile");
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    Cookies.remove("token"); 
    setUser(null);
    setAuthState("login");
  };

  return (
    <div>
      <h1 className="text-center font-bold text-lg text-green-900">Welcome{user ? `, ${user.name}!` : "! User"}</h1>
      {user ? (
        <div>
          <p className="text-center my-5">User ID: {user.id}</p>
          <div className="flex justify-center my-5">
          <button 
  onClick={handleLogout} 
  className="text-white text-sm bg-red-800 p-2 rounded-md transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50"
>
  Logout
</button>
          </div>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
}  