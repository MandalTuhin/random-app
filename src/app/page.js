"use client";
import Image from "next/image";
import { Lock, Unlock, Cuboid } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";

function ProfileIcon() {
  return (
    <div className="w-20 h-20 rounded-full shadow-xl bg-white dark:bg-gray-700 flex items-center justify-center">
      <Cuboid className="w-10 h-10 text-purple-600 dark:text-purple-300" />
    </div>
  );
}

function Heading() {
  return (
    <h1 className="mt-5 mb-4 text-4xl font-bold text-white dark:text-gray-100">
      Log in to My-Site
    </h1>
  );
}

function ContinueWith({ name }) {
  const icons = {
    Github: <FaGithub className="w-5 h-5 text-black dark:text-white" />,
    Apple: <FaApple className="w-5 h-5 text-black dark:text-white" />,
    Meta: <FaFacebook className="w-5 h-5 text-blue-600 dark:text-white" />,
  };
  return (
    <button
      type="button"
      className="flex items-center justify-center h-12 gap-2 cursor-pointer text-black transition bg-white dark:bg-gray-600 dark:text-white border dark:border-gray-700 rounded-full shadow w-80 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {icons[name]}
      <span className="opacity-85">Login with {name}</span>
    </button>
  );
}

function Inputs() {
  const [showPassword, setShowPassword] = useState(false);
  const inputClass =
    "rounded-full w-80 h-12 p-4 text-lg bg-white dark:bg-gray-700 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400";

  return (
    <form className="flex flex-col w-full max-w-sm gap-6">
      <input
        type="email"
        className={inputClass}
        placeholder="Enter your email"
        required
      />
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={inputClass + " pr-12"}
          placeholder="Enter your password"
          required
        />
        <div
          className="absolute cursor-pointer top-1/2 right-4 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Unlock /> : <Lock />}
        </div>
      </div>
      <button
        type="submit"
        className="self-center w-32 h-12 text-white bg-red-400 rounded-full shadow-xl cursor-pointer transition hover:bg-red-500 dark:bg-red-600 dark:hover:bg-red-700"
      >
        Log In
      </button>
      <div className="flex items-center w-full max-w-sm gap-4 mt-4 mb-2 text-gray-200 dark:text-gray-400">
        <hr className="flex-grow border-t border-gray-200 dark:border-gray-600" />
        <span className="text-sm">Continue with</span>
        <hr className="flex-grow border-t border-gray-200 dark:border-gray-600" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <ContinueWith name="Github" />
        <ContinueWith name="Apple" />
        <ContinueWith name="Meta" />
      </div>
    </form>
  );
}

function LogInCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-10 rounded-none lg:rounded-3xl shadow-xl bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-900 dark:to-gray-800">
      <ProfileIcon />
      <Heading />
      <Inputs />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen min-w-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Toggle button positioned top-right */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <LogInCard />
    </div>
  );
}
