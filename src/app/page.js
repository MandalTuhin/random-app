import Image from "next/image";

function ProfileIcon() {
  return (
    <img
      src="/vercel.svg"
      className="h-20 w-20 border-2 border-amber-600 border border-dashed rounded-full"
    />
  );
}

function Heading() {
  return (
    <h1 className="font-bold text-4xl text-white mb-10">Login into Vercel</h1>
  );
}

function Inputs() {
  const inputClass =
    "rounded-full bg-white w-80 h-12 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500";
  return (
    <form className="flex flex-col gap-6 w-full max-w-sm">
      <input
        type="email"
        className={inputClass}
        placeholder="Enter your email"
      />
      <input
        type="password"
        className={inputClass}
        placeholder="Enter your password"
      />
      <input
        type="submit"
        value="Log In"
        className="outline-indigo-500 rounded-4xl bg-red-400 text-white w-30 h-12 self-center shadow-xl cursor-pointer"
      />
    </form>
  );
}

function LogInCard() {
  return (
    <div className="bg-green-300 rounded-3xl flex flex-col justify-center items-center box-content p-10 gap-6 shadow-xl bg-gradient-to-r from-blue-500 to-purple-600">
      <ProfileIcon />
      <Heading />
      <Inputs />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black min-w-screen flex justify-center items-center">
      <LogInCard />
    </div>
  );
}
