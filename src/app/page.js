"use client";
import Image from "next/image";
import { Lock, Unlock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import DarkModeToggle from "./components/DarkModeToggle";

function ProfileIcon() {
  return <FcGoogle className="h-20 w-20 rounded-full bg-white shadow-xl" />;
}

function Heading() {
  return (
    <h1 className="font-bold text-4xl text-white mb-4 mt-5">
      Log in to Vercel
    </h1>
  );
}

function ContinueWith({ name }) {
  const icons = {
    Google: <FcGoogle className="w-5 h-5" />,
    Apple: <FaApple className="w-5 h-5 text-black" />,
    Meta: <FaFacebook className="w-5 h-5 text-blue-600" />,
  };
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 rounded-full bg-white text-black border w-80 h-12 shadow hover:bg-gray-100 transition"
    >
      {icons[name]}
      <span className="opacity-85">Login with {name}</span>
    </button>
  );
}

function Inputs() {
  const [showPassword, setShowPassword] = useState(false);
  const inputClass =
    "rounded-full bg-white w-80 h-12 text-lg p-4 focus:outline-none focus:ring-2 focus:ring-red-400";

  return (
    <form className="flex flex-col gap-6 w-full max-w-sm">
      <input
        type="email"
        className={inputClass}
        placeholder="Enter your email"
        required
      />
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={inputClass}
          placeholder="Enter your password"
          required
        />
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Unlock /> : <Lock />}
        </div>
      </div>
      <button
        type="submit"
        className="rounded-full bg-red-400 text-white w-32 h-12 self-center shadow-xl cursor-pointer hover:bg-red-500 transition"
      >
        Log In
      </button>
      <div className="flex items-center w-full max-w-sm gap-4 text-white mt-4 mb-2">
        <hr className="flex-grow border-t border-white/40" />
        <span className="text-sm">Continue with</span>
        <hr className="flex-grow border-t border-white/40" />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <ContinueWith name="Google" />
        <ContinueWith name="Apple" />
        <ContinueWith name="Meta" />
      </div>
    </form>
  );
}

function LogInCard() {
  return (
    <div
      className="
        bg-gradient-to-r from-blue-500 to-purple-600
        dark:from-gray-800 dark:to-gray-900
        lg:rounded-3xl rounded-none
        flex flex-col justify-center items-center
        p-10 gap-6 shadow-xl
      "
    >
      <ProfileIcon />
      <Heading />
      <Inputs />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex justify-center items-center">
      <DarkModeToggle />
      <LogInCard />
    </div>
  );
}
