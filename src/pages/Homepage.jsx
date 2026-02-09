import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
            SecureAuth 
          </h1>
          <p className="text-zinc-400 text-lg mb-6">
            A practice project built to learn authentication using React + Supabase,
  protected routes, and a modern dark UI.
        
          </p>

          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden md:flex justify-center">
  {/* Glow behind image */}
  <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>

  {/* Image */}
  <img
    src={"/logo.png"}
    alt="Authentication illustration"
    className="relative max-w-md w-full 
               rounded-xl 
               opacity-90
               mix-blend-lighten"
  />
</div>


      </div>
    </div>
  );
};

export default Homepage;
