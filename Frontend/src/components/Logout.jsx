import React from 'react';
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

export default function Logout() {
  const [authUser, setAuthUser] = useAuth()
  const handleLogout = () => {
    if (confirm("SURE WANNA LOGOUT !!") == true) {
      try {
        setAuthUser({
          ...authUser,
          user: null,
        })
        localStorage.removeItem("Users");
        toast.success("Logout successful");
        setTimeout(() => {
          window.location.reload();
        }, 4001)
      } catch (error) {
        toast.error("Error: ", error.message);
        setTimeout(() => { }, 2000);
      }
    }
    else { }
  }
  return (
    <div>
      <button className="px-3 py-2 bg-red-500 hover:bg-sky-600 text-white rounded-md cursor-pointer" onClick={handleLogout}>Logout</button>
    </div>
  )
}
