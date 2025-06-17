import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { MessageSquare, User, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern.jsx";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg text-gray-800">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="size-14 rounded-full bg-indigo-100 flex items-center justify-center shadow-lg">
                <MessageSquare className="size-6 text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold mt-2 text-indigo-700">Sign Up</h1>
              <p className="text-gray-500">Join and connect with your friends</p>
            </div>
          </div>
          
          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: "Full Name", type: "text", icon: <User />, stateKey: "fullName", placeholder: "Akib Mallik" },
              { label: "Email", type: "text", icon: <Mail />, stateKey: "email", placeholder: "example@mail.com" },
              { label: "Password", type: showPassword ? "text" : "password", icon: <Lock />, stateKey: "password", placeholder: "••••••••" },
            ].map(({ label, type, icon, stateKey, placeholder }, idx) => (
              <div key={idx} className="relative">
                <label className="block text-gray-700 font-medium">{label}</label>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">{icon}</span>
                  <input
                    type={type}
                    className="w-full px-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 transition-shadow"
                    placeholder={placeholder}
                    value={formData[stateKey]}
                    onChange={(e) => setFormData({ ...formData, [stateKey]: e.target.value })}
                  />
                  {stateKey === "password" && (
                    <button type="button" className="absolute inset-y-0 right-3 flex items-center text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            <button type="submit" className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition">
              {isSigningUp ? <Loader2 className="animate-spin mx-auto" /> : "Create Account"}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-600 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      {/* <AuthImagePattern title="Join our chat community" subtitle="Stay connected with your loved ones and make new friends." /> */}
    </div>
  );
};

export default SignUpPage;
